// Mayhome website Worker.
// Serves the static site, swaps the room prices saved in the Office (/office) into the homepage,
// and gives the Office a small API to read and save those prices.

const PRICES_KEY = "prices";

// Same order as the room cards in index.html. The defaults are the prices written in index.html.
const ROOMS = [
  { name: "Room 101", usd: 325, vnd: 8000000 },
  { name: "Room 201", usd: 245, vnd: 6000000 },
  { name: "Room 202", usd: 204, vnd: 5000000 },
  { name: "Room 203", usd: 204, vnd: 5000000 },
  { name: "Room 301", usd: 450, vnd: 11000000 },
];

const json = (data, status = 200) =>
  new Response(JSON.stringify(data), { status, headers: { "Content-Type": "application/json", "Cache-Control": "no-store" } });

async function readPrices(env) {
  const stored = await env.PRICES.get(PRICES_KEY, "json");
  return ROOMS.map((r, i) => ({
    name: r.name,
    usd: stored?.[i]?.usd ?? r.usd,
    vnd: stored?.[i]?.vnd ?? r.vnd,
  }));
}

function validPrices(body) {
  if (!Array.isArray(body) || body.length !== ROOMS.length) return null;
  const out = [];
  for (const p of body) {
    const usd = Number(p?.usd), vnd = Number(p?.vnd);
    if (!Number.isInteger(usd) || usd < 1 || usd > 100000) return null;
    if (!Number.isInteger(vnd) || vnd < 1000 || vnd > 10000000000) return null;
    out.push({ usd, vnd });
  }
  return out;
}

// Cloudflare Access puts a signed login token on every request that passed its login.
// Re-check it here so the Office API stays safe even if the Access rule is ever changed.
let accessKeys = null;
async function isAdmin(request, env) {
  // Local `wrangler dev` only: .dev.vars (never deployed, gitignored) sets DEV_SKIP_ACCESS=true
  if (env.DEV_SKIP_ACCESS === "true") return true;
  const token = request.headers.get("Cf-Access-Jwt-Assertion");
  if (!token || !env.ACCESS_AUD) return false;
  try {
    const [h, p, sig] = token.split(".");
    const dec = (s) => Uint8Array.from(atob(s.replace(/-/g, "+").replace(/_/g, "/")), (c) => c.charCodeAt(0));
    const header = JSON.parse(new TextDecoder().decode(dec(h)));
    const payload = JSON.parse(new TextDecoder().decode(dec(p)));
    if (!accessKeys) accessKeys = (await (await fetch(`${env.ACCESS_TEAM_DOMAIN}/cdn-cgi/access/certs`)).json()).keys;
    let jwk = accessKeys.find((k) => k.kid === header.kid);
    if (!jwk) { // keys rotate: refresh once
      accessKeys = (await (await fetch(`${env.ACCESS_TEAM_DOMAIN}/cdn-cgi/access/certs`)).json()).keys;
      jwk = accessKeys.find((k) => k.kid === header.kid);
    }
    if (!jwk) return false;
    const key = await crypto.subtle.importKey("jwk", jwk, { name: "RSASSA-PKCS1-v1_5", hash: "SHA-256" }, false, ["verify"]);
    const ok = await crypto.subtle.verify("RSASSA-PKCS1-v1_5", key, dec(sig), new TextEncoder().encode(`${h}.${p}`));
    const aud = Array.isArray(payload.aud) ? payload.aud : [payload.aud];
    return ok && aud.includes(env.ACCESS_AUD) && payload.iss === env.ACCESS_TEAM_DOMAIN && payload.exp * 1000 > Date.now();
  } catch (err) {
    console.error("Access token check failed:", err);
    return false;
  }
}

async function handleOfficeApi(request, env, path) {
  if (!(await isAdmin(request, env))) return json({ ok: false, error: "Not signed in" }, 401);
  if (path !== "/office/api/prices") return json({ ok: false, error: "Not found" }, 404);
  if (request.method === "GET") return json({ ok: true, rooms: await readPrices(env) });
  if (request.method === "PUT") {
    const prices = validPrices(await request.json().catch(() => null));
    if (!prices) return json({ ok: false, error: "Please enter whole numbers for every price." }, 400);
    await env.PRICES.put(PRICES_KEY, JSON.stringify(prices));
    return json({ ok: true, rooms: await readPrices(env) });
  }
  return json({ ok: false, error: "Method not allowed" }, 405);
}

// The homepage ships with the default prices; the saved ones are swapped in on the way out,
// so visitors and search engines never see an old price.
async function withPrices(response, env) {
  if (!response.ok) return response;
  const rooms = await readPrices(env);
  let card = 0, label = 0;
  const usds = rooms.map((r) => r.usd);
  const html = (await response.text())
    .replace(/data-price-usd="\d+" data-price-vnd="\d+"/g, (m) => {
      const r = rooms[card++];
      return r ? `data-price-usd="${r.usd}" data-price-vnd="${r.vnd}"` : m;
    })
    .replace(/<div class="room-price-big">\$\d+ <em>/g, (m) => {
      const r = rooms[label++];
      return r ? `<div class="room-price-big">$${r.usd} <em>` : m;
    })
    .replace(/Monthly stays from \$\d+/, `Monthly stays from $${Math.min(...usds)}`)
    .replace(/"priceRange": "\$\d+-\$\d+"/, `"priceRange": "$${Math.min(...usds)}-$${Math.max(...usds)}"`);
  const headers = new Headers(response.headers);
  headers.delete("ETag");
  headers.delete("Content-Length");
  headers.set("Cache-Control", "no-cache");
  return new Response(html, { status: response.status, headers });
}

export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    const path = url.pathname;
    // www.may-home.vn is the canonical address (canonical link, sitemap)
    if (url.hostname === "may-home.vn") {
      url.hostname = "www.may-home.vn";
      return Response.redirect(url.toString(), 301);
    }
    // Google Search Console checks this exact URL; the static file handler would redirect it to drop ".html"
    if (path === "/google706281c70aaee8e2.html") {
      return new Response("google-site-verification: google706281c70aaee8e2.html", { headers: { "Content-Type": "text/html; charset=utf-8" } });
    }
    if (path.startsWith("/office/api/")) return handleOfficeApi(request, env, path);
    if (request.method === "GET" && (path === "/" || path === "/index.html")) return withPrices(await env.ASSETS.fetch(request), env);
    return env.ASSETS.fetch(request);
  },
};
