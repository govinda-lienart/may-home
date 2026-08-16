/* ── TRANSLATIONS ───────────────────────────────── */
const translations = {
  en: {
    'nav.rooms': 'Rooms', 'nav.location': 'Location', 'nav.explore': 'Explore', 'nav.book': 'Book a Stay',
    'hero.eyebrow': 'Ha My · Between Da Nang &amp; Hoi An',
    'hero.desc': 'A cozy home between old Hội An and vibrant Đà Nẵng, beside the sea.',
    'hero.cta1': 'Discover Rooms', 'hero.cta2': 'Get in Touch',
    'about.label': 'Welcome to MayHome.',
    'about.title': 'Not a hotel.<br><em>A home.</em>',
    'about.p1': 'Poised between the buzz of Da Nang and the timeless charm of Hoi An. Two cities, two rhythms, one address, with the beach just minutes away.',
    'about.p2': 'Five rooms, five distinct characters, each thoughtfully shaped to hold onto Hoi An\'s soul while moving at the pace of modern life.',
    'about.p3': 'Stay a few nights, or stay awhile. Short or long-term, from one month.',
    'about.tagline': 'For those who want to live in a place, not just visit it.',
    'stay.text': '<strong>We love every kind of stay.</strong> Mayhome is available for short visits and monthly rentals, whether you\'re passing through or settling in. <em>Contact us and let\'s make it happen.</em>',
    'stay.btn': 'Enquire Now',
    'rooms.label': 'Accommodation', 'rooms.title': '5 Rooms · 5 Feelings',
    'rooms.lead': 'Each room has its own character. All are private, all are loved.<br class="br-desktop">Click any room to see the gallery.',
    'room.gallery': 'View gallery ↗', 'room.book': 'Enquire / Book →',
    'room1.eyebrow': 'Ground floor — 01', 'room1.desc': 'Terracotta tile, exposed brick, warm wood tones. A garden doorway to wake up to, and a desk for the days you stay in.',
    'room1.pricenote': 'Electricity, water &amp; internet included &middot; cleaning every 2 weeks.',
    'room2.eyebrow': '1st floor — 02', 'room2.desc': 'Floor-to-ceiling windows over the main road, greenery view. A mustard wall, a wooden desk, a quiet corner to work or simply watch the street below.',
    'room2.pricenote': 'Electricity, water &amp; internet included &middot; cleaning every 2 weeks.',
    'room3.eyebrow': '1st floor — 03', 'room3.desc': 'Big windows framing coconut trees, a mustard wall and wooden desk for the days you work from your room. Shares a bathroom with the room next door.',
    'room3.pricenote': 'Electricity, water &amp; internet included &middot; cleaning every 2 weeks.',
    'room4.eyebrow': '2nd floor — 04', 'room4.desc': 'A mustard wall warms the light from the window, a wooden desk waits in the corner. The shared bathroom brings its own quiet luxury - a deep soaking tub and greenery just outside the door.',
    'room4.pricenote': 'Electricity, water &amp; internet included &middot; cleaning every 2 weeks.',
    'room5.eyebrow': '2nd floor — 05', 'room5.desc': 'A mustard-walled bedroom with a wide window onto swaying palms, connected to your own study-and-yoga room - where a second window opens to the sea, glinting far past the rooftops. Private bathroom included.',
    'room5.pricenote': 'Electricity, water &amp; internet included &middot; cleaning every 2 weeks.',
    'tag.brick': 'Exposed Brick', 'tag.wood': 'Vintage Wood', 'tag.privatebath': 'Private Bathroom',
    'tag.garden': 'Garden View', 'tag.wifi': 'Free Wi-Fi', 'tag.ac': 'Air Conditioning',
    'tag.sharedbath': 'Shared Bathroom',
    'tag.desk': 'Working Desk', 'tag.greenery': 'Greenery', 'tag.gardendoor': 'Garden-Facing Door',
    'tag.greeneryview': 'Greenery View', 'tag.ensuite': 'Ensuite Bathroom', 'tag.desksimple': 'Desk',
    'tag.seaview': 'Sea-View Balcony', 'tag.studyyoga': 'Study / Yoga Space',
    'loc.label': 'Where we are', 'loc.title': 'The perfect base camp',
    'loc.lead': 'We sit at a rare intersection — one footstep from the sea, yet close to two major cities. Everything is within reach, but you\'ll always have peace to come back to.',
    'loc.h1': 'Ha My Beach', 'loc.d1': '1 min walk', 'loc.p1': 'Step outside and you\'re already there. A quiet, uncrowded stretch of sand — your private morning beach.',
    'loc.h2': 'An Bang Beach', 'loc.d2': '8 min by motorbike', 'loc.p2': 'One of Vietnam\'s most beloved beaches — beach bars, sunbeds, fresh seafood, and clear water.',
    'loc.h3': 'Hoi An Old Town', 'loc.d3': '10 min by motorbike', 'loc.p3': 'Lanterns, ancient streets, tailor shops, and the best bowl of cao lầu you\'ll ever taste.',
    'loc.h4': 'Da Nang City', 'loc.d4': '10 min by motorbike', 'loc.p4': 'International airport, Dragon Bridge, city restaurants, and everything you might need.',
    'gallery.label': 'The Space', 'gallery.title': 'Life at May Home',
    'exp.label': 'Around us', 'exp.title': 'Things to Explore',
    'exp.lead': 'You\'re in one of Vietnam\'s most breathtaking regions. The Central Coast has ancient history, dramatic mountains, pristine beaches, and world-class food — all within a short ride.',
    'exp.h1': 'The Central Coast', 'exp.p1': 'Marble Mountains, My Son Sanctuary, Hai Van Pass, the Cham Islands — endless adventures from your front door.',
    'exp.i1h': 'Hai Van Pass', 'exp.i1p': 'One of the world\'s great coastal drives. 45 min away.',
    'exp.i2h': 'Cham Islands', 'exp.i2p': 'Snorkelling, diving, and pristine beaches. Day trip by boat.',
    'exp.i3h': 'My Son Sanctuary', 'exp.i3p': 'Ancient Cham temple ruins in a jungle valley. 1hr away.',
    'exp.i4h': 'Hoi An food scene', 'exp.i4p': 'White rose dumplings, banh mi, and cao lầu. 10 min away.',
    'process.label': 'The Process', 'process.title': 'How Booking Works',
    'process.h1': 'Enquire &amp; Get Confirmed', 'process.p1': 'Submit your details and preferred dates. We confirm availability and send your booking confirmation within 24 hours.',
    'process.h2': 'Pay Security Deposit', 'process.p2': 'Pay your refundable security deposit within 72 hours of confirmation to secure your room. Fully returned at checkout.',
    'process.h3': "Pay First Month's Rent", 'process.p3': "Pay your first month's rent before your move-in date. We'll send you the payment link once your deposit is confirmed.",
    'process.h4': 'Move In &amp; Stay', 'process.p4': 'Monthly rent is due one month from your move-in date, recurring on the same date each month. Your security deposit is returned in full at checkout.',
    'faq.label': 'Questions', 'faq.title': 'Everything you <em>need to know</em>',
    'faq.q1': 'Is the WiFi fast enough for remote work?', 'faq.a1': 'Yes — high-speed fibre WiFi is included in the rent and runs throughout the whole home. It has been reliably used for video calls, design work, and large file uploads. You can test it yourself on arrival before committing to your stay.',
    'faq.q2': "What's the minimum stay?", 'faq.a2': "The minimum stay is one month. May Home is designed for people who want to actually settle in — to get to know the neighbourhood, find a favourite café, and feel genuinely at home. Short stays occasionally open up; send an enquiry and ask.",
    'faq.q3': "Can I extend my stay once I'm here?", 'faq.a3': "Absolutely — most guests do. Just let us know at least two weeks before your current agreement ends and we'll confirm availability. Long-term stays (3+ months) are especially welcomed and we're happy to discuss adjusted terms.",
    'faq.q4': "What's included in the monthly rent?", 'faq.a4': 'Your room, hotel-quality linens and towels, high-speed WiFi, water utilities, and access to all shared spaces (living room, kitchen, garden). Electricity is metered separately and billed by usage — you only pay for what you use.',
    'faq.q5': 'Is it quiet enough for focused work?', 'faq.a5': "This is something guests mention most. Ha My moves at a gentle pace — no tourist crowds, no blaring music. The home has a house guideline of no noise after 10pm. It's a genuinely calm place to think and create.",
    'faq.q6': 'How do I secure a room?', 'faq.a6': "Send an enquiry and we'll respond within 24 hours. To secure your room, a refundable security deposit (50% of one month's rent) is due within 72 hours of confirmation. Your first month's rent is then due before move-in. The deposit is fully returned at checkout.",
    'faq.q7': 'What are the local food and transport options?', 'faq.a7': "Ha My has a small morning market and local cafés within a 5-minute walk. A bicycle or motorbike is the best way to get around and can be arranged. Hoi An Old Town, beaches, and Đà Nẵng airport are all easily accessible.",
    'faq.q8': 'Can I receive guests or visitors?', 'faq.a8': 'Yes, with prior notice to the host. Overnight guests should be mentioned in advance out of respect for other residents. Day visitors are generally no issue at all.',
    'faq.q9': 'Do you provide airport pickup?', 'faq.a9': "Yes — we can arrange a pickup from Đà Nẵng International Airport to May Home at an additional cost. Just include your arrival details in your enquiry and we'll sort everything out before you land.",
    'faq.q10': 'Can I use the washing machine?', 'faq.a10': 'Yes, there is a washing machine available for all guests. A small additional fee applies per use to cover water and electricity costs. Your host will share the current rate on arrival — it\'s very fairly priced.',
    'contact.label': 'Book your stay', 'contact.title': 'Ready to make yourself<br>at home?',
    'contact.desc': 'Message us — we usually reply within a few hours. Tell us which room caught your eye, when you\'d like to arrive, and how long you\'re thinking of staying.',
    'contact.loc': '📍 Ha My, Điện Bàn · Quảng Nam, Vietnam<br>Between Da Nang &amp; Hoi An · 1 min from the sea',
    'footer.sub': 'Built with love for slow travellers',
  },
  vi: {
    'nav.rooms': 'Phòng', 'nav.location': 'Vị trí', 'nav.explore': 'Khám phá', 'nav.book': 'Đặt phòng',
    'hero.eyebrow': 'Hà My · Giữa Đà Nẵng &amp; Hội An',
    'hero.desc': 'Một tổ ấm nhỏ xinh giữa phố cổ Hội An và Đà Nẵng sôi động, ngay cạnh biển.',
    'hero.cta1': 'Khám phá phòng', 'hero.cta2': 'Liên hệ',
    'about.label': 'Chào mừng đến MayHome.',
    'about.title': 'Không phải khách sạn.<br><em>Là ngôi nhà.</em>',
    'about.p1': 'Nằm giữa nhịp sống sôi động của Đà Nẵng và nét quyến rũ vượt thời gian của Hội An. Hai thành phố, hai nhịp sống, một địa chỉ, với bãi biển chỉ cách vài phút.',
    'about.p2': 'Năm phòng, năm cá tính riêng biệt, mỗi phòng được chăm chút để giữ trọn hồn Hội An trong nhịp sống hiện đại.',
    'about.p3': 'Ở vài đêm, hay ở một thời gian dài. Ngắn hạn hay dài hạn, từ một tháng trở lên.',
    'about.tagline': 'Dành cho những ai muốn sống trong một nơi, không chỉ ghé qua.',
    'stay.text': '<strong>Chúng tôi yêu mọi kiểu lưu trú.</strong> Mayhome nhận khách ở ngắn ngày lẫn thuê theo tháng, dù bạn chỉ ghé qua hay muốn ở lại lâu hơn. <em>Liên hệ với chúng tôi và hãy cùng thực hiện điều đó.</em>',
    'stay.btn': 'Hỏi ngay',
    'rooms.label': 'Chỗ ở', 'rooms.title': '5 Phòng · 5 Cảm xúc',
    'rooms.lead': 'Mỗi phòng mang một cá tính riêng. Tất cả đều riêng tư và được yêu thương.<br class="br-desktop">Nhấp vào bất kỳ phòng nào để xem thư viện ảnh.',
    'room.gallery': 'Xem ảnh ↗', 'room.book': 'Hỏi / Đặt phòng →',
    'room1.eyebrow': 'Tầng trệt — 01', 'room1.desc': 'Gạch terracotta, gạch lộ thiên, tông gỗ ấm áp. Một cửa hướng vườn để thức dậy mỗi ngày, và một bàn làm việc cho những ngày bạn ở nhà.',
    'room1.pricenote': 'Đã bao gồm điện, nước &amp; internet &middot; dọn phòng mỗi 2 tuần.',
    'room2.eyebrow': 'Tầng 1 — 02', 'room2.desc': 'Cửa sổ kính từ sàn đến trần nhìn ra đường lớn, tầm nhìn cây xanh. Bức tường vàng mù tạt, bàn gỗ làm việc, một góc yên tĩnh để làm việc hoặc đơn giản là ngắm phố bên dưới.',
    'room2.pricenote': 'Đã bao gồm điện, nước &amp; internet &middot; dọn phòng mỗi 2 tuần.',
    'room3.eyebrow': 'Tầng 1 — 03', 'room3.desc': 'Bao quanh bởi màu xanh nhiệt đới, ánh sáng dịu nhẹ. Xanh mướt, ấm cúng và luôn mát mẻ.',
    'room4.eyebrow': 'Tầng 2 — 04', 'room4.desc': 'Lá dừa khung mỗi ô cửa sổ. Thoáng đãng, tràn ngập ánh sáng, với làn gió nhẹ.',
    'room5.eyebrow': 'Tầng 2 — 05', 'room5.desc': 'Yên tĩnh, nhỏ gọn, đầy quyến rũ. Nơi ẩn náu hoàn hảo cho khách du lịch một mình hoặc các cặp đôi.',
    'tag.brick': 'Gạch Lộ Thiên', 'tag.wood': 'Gỗ Cổ Điển', 'tag.privatebath': 'Phòng Tắm Riêng',
    'tag.garden': 'View Vườn', 'tag.wifi': 'Wi-Fi Miễn Phí', 'tag.ac': 'Điều Hòa',
    'tag.sharedbath': 'Phòng Tắm Chung',
    'tag.desk': 'Bàn Làm Việc', 'tag.greenery': 'Cây Xanh', 'tag.gardendoor': 'Cửa Hướng Vườn',
    'tag.greeneryview': 'Tầm Nhìn Cây Xanh', 'tag.ensuite': 'Phòng Tắm Khép Kín', 'tag.desksimple': 'Bàn',
    'loc.label': 'Chúng tôi ở đâu', 'loc.title': 'Điểm xuất phát hoàn hảo',
    'loc.lead': 'Chúng tôi nằm tại một vị trí hiếm có — chỉ một bước chân từ biển, nhưng gần hai thành phố lớn. Mọi thứ đều trong tầm tay, nhưng bạn luôn có bình yên để trở về.',
    'loc.h1': 'Bãi biển Hà My', 'loc.d1': '1 phút đi bộ', 'loc.p1': 'Bước ra ngoài là bạn đã đến nơi. Một bãi cát yên tĩnh, không đông đúc — bãi biển buổi sáng riêng của bạn.',
    'loc.h2': 'Bãi biển An Bàng', 'loc.d2': '8 phút xe máy', 'loc.p2': 'Một trong những bãi biển được yêu thích nhất Việt Nam — quán bar bãi biển, ghế tắm nắng, hải sản tươi và nước trong xanh.',
    'loc.h3': 'Phố cổ Hội An', 'loc.d3': '10 phút xe máy', 'loc.p3': 'Đèn lồng, phố cổ, tiệm may và tô cao lầu ngon nhất bạn từng thưởng thức.',
    'loc.h4': 'Thành phố Đà Nẵng', 'loc.d4': '10 phút xe máy', 'loc.p4': 'Sân bay quốc tế, Cầu Rồng, nhà hàng thành phố và mọi thứ bạn cần.',
    'gallery.label': 'Không Gian', 'gallery.title': 'Cuộc Sống tại May Home',
    'exp.label': 'Xung quanh', 'exp.title': 'Điều cần Khám phá',
    'exp.lead': 'Bạn đang ở một trong những vùng đẹp nhất Việt Nam. Miền Trung có lịch sử cổ đại, núi non hùng vĩ, bãi biển hoang sơ và ẩm thực đẳng cấp thế giới — tất cả chỉ trong một chuyến đi ngắn.',
    'exp.h1': 'Miền Trung Việt Nam', 'exp.p1': 'Ngũ Hành Sơn, Thánh địa Mỹ Sơn, Đèo Hải Vân, Cù Lao Chàm — vô số cuộc phiêu lưu từ cửa nhà bạn.',
    'exp.i1h': 'Đèo Hải Vân', 'exp.i1p': 'Một trong những cung đường ven biển vĩ đại nhất thế giới. Cách 45 phút.',
    'exp.i2h': 'Cù Lao Chàm', 'exp.i2p': 'Lặn ngắm san hô, lặn biển và bãi biển hoang sơ. Đi về trong ngày bằng thuyền.',
    'exp.i3h': 'Thánh địa Mỹ Sơn', 'exp.i3p': 'Đền tháp Chăm cổ đại giữa thung lũng rừng rậm. Cách 1 tiếng.',
    'exp.i4h': 'Ẩm thực Hội An', 'exp.i4p': 'Bánh bao vạc, bánh mì và cao lầu. Cách 10 phút.',
    'process.label': 'Quy Trình', 'process.title': 'Cách Đặt Phòng',
    'process.h1': 'Liên hệ &amp; Xác nhận', 'process.p1': 'Gửi thông tin và ngày mong muốn. Chúng tôi xác nhận phòng trống và gửi xác nhận đặt phòng trong vòng 24 giờ.',
    'process.h2': 'Thanh toán tiền đặt cọc', 'process.p2': 'Thanh toán tiền đặt cọc hoàn lại trong vòng 72 giờ sau xác nhận để giữ phòng. Hoàn trả đầy đủ khi trả phòng.',
    'process.h3': 'Thanh toán tiền thuê tháng đầu', 'process.p3': 'Thanh toán tiền thuê tháng đầu trước ngày nhận phòng. Chúng tôi sẽ gửi link thanh toán sau khi xác nhận tiền cọc.',
    'process.h4': 'Dọn vào &amp; Tận hưởng', 'process.p4': 'Tiền thuê hàng tháng đến hạn một tháng sau ngày nhận phòng, lặp lại vào cùng ngày mỗi tháng. Tiền đặt cọc được hoàn trả đầy đủ khi trả phòng.',
    'faq.label': 'Câu hỏi', 'faq.title': 'Tất cả những gì bạn <em>cần biết</em>',
    'faq.q1': 'WiFi có đủ nhanh để làm việc từ xa không?', 'faq.a1': 'Có — WiFi cáp quang tốc độ cao được bao gồm trong tiền thuê và hoạt động khắp ngôi nhà. Đã được dùng ổn định cho các cuộc gọi video, thiết kế và tải file lớn. Bạn có thể tự kiểm tra khi đến trước khi cam kết lưu trú.',
    'faq.q2': 'Thời gian lưu trú tối thiểu là bao lâu?', 'faq.a2': 'Tối thiểu một tháng. May Home được thiết kế cho những người muốn thực sự ổn định — để làm quen với khu phố, tìm quán cà phê yêu thích, và cảm thấy như ở nhà. Đôi khi có chỗ cho kỳ nghỉ ngắn hơn; hãy gửi yêu cầu và hỏi.',
    'faq.q3': 'Tôi có thể gia hạn khi đang ở không?', 'faq.a3': 'Hoàn toàn được — hầu hết khách đều làm vậy. Chỉ cần báo trước ít nhất hai tuần trước khi hết hạn hợp đồng và chúng tôi sẽ xác nhận phòng trống. Kỳ lưu trú dài (3+ tháng) đặc biệt được chào đón.',
    'faq.q4': 'Tiền thuê hàng tháng bao gồm những gì?', 'faq.a4': 'Phòng của bạn, khăn trải giường và khăn tắm chất lượng khách sạn, WiFi tốc độ cao, tiền nước, và quyền sử dụng tất cả không gian chung (phòng khách, bếp, vườn). Điện được tính riêng theo mức sử dụng.',
    'faq.q5': 'Có đủ yên tĩnh để làm việc tập trung không?', 'faq.a5': 'Đây là điều khách nhắc đến nhiều nhất. Hà My có nhịp sống nhẹ nhàng — không đám đông du lịch, không âm nhạc ồn ào. Nhà có quy định không gây ồn sau 10 giờ tối. Đây là nơi thực sự yên tĩnh để suy nghĩ và sáng tạo.',
    'faq.q6': 'Làm thế nào để đặt phòng?', 'faq.a6': 'Gửi yêu cầu và chúng tôi sẽ phản hồi trong 24 giờ. Để giữ phòng, cần đặt cọc hoàn lại (50% tiền thuê một tháng) trong vòng 72 giờ sau khi xác nhận. Tiền thuê tháng đầu tiên đến hạn trước khi nhận phòng. Tiền đặt cọc được hoàn trả đầy đủ khi trả phòng.',
    'faq.q7': 'Các lựa chọn ăn uống và di chuyển địa phương như thế nào?', 'faq.a7': 'Hà My có chợ sáng nhỏ và các quán cà phê địa phương trong vòng 5 phút đi bộ. Xe đạp hoặc xe máy là cách di chuyển tốt nhất và có thể được sắp xếp. Phố cổ Hội An, bãi biển và sân bay Đà Nẵng đều dễ dàng tiếp cận.',
    'faq.q8': 'Tôi có thể tiếp khách không?', 'faq.a8': 'Có, nhưng cần báo trước cho chủ nhà. Khách ngủ qua đêm cần được đề cập trước để tôn trọng cư dân khác. Khách thăm ban ngày thường không có vấn đề gì.',
    'faq.q9': 'Có dịch vụ đón sân bay không?', 'faq.a9': 'Có — chúng tôi có thể sắp xếp đón từ Sân bay Quốc tế Đà Nẵng về May Home với chi phí thêm. Chỉ cần ghi thông tin đến trong yêu cầu của bạn và chúng tôi sẽ sắp xếp tất cả trước khi bạn đến.',
    'faq.q10': 'Tôi có thể dùng máy giặt không?', 'faq.a10': 'Có, có máy giặt dành cho tất cả khách. Một khoản phí nhỏ được áp dụng cho mỗi lần sử dụng để trang trải chi phí nước và điện. Chủ nhà sẽ thông báo mức giá hiện tại khi bạn đến — rất hợp lý.',
    'contact.label': 'Đặt phòng', 'contact.title': 'Sẵn sàng cảm thấy<br>như ở nhà chưa?',
    'contact.desc': 'Nhắn tin cho chúng tôi — chúng tôi thường trả lời trong vài giờ. Cho chúng tôi biết phòng nào thu hút bạn, khi nào bạn muốn đến và bạn dự định ở bao lâu.',
    'contact.loc': '📍 Hà My, Điện Bàn · Quảng Nam, Việt Nam<br>Giữa Đà Nẵng &amp; Hội An · 1 phút từ biển',
    'footer.sub': 'Được tạo ra với tình yêu dành cho những người lữ hành chậm rãi',
  }
};

let currentLang = 'en';

function setLang(lang) {
  currentLang = lang;
  const t = translations[lang];

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    if (t[key] !== undefined) el.innerHTML = t[key];
  });

  document.querySelectorAll('[data-price-usd]').forEach(block => {
    const priceEl = block.querySelector('.room-price-big');
    if (!priceEl) return;
    if (lang === 'vi') {
      const vnd = parseInt(block.dataset.priceVnd).toLocaleString('vi-VN');
      priceEl.innerHTML = vnd + ' <em>₫ / tháng</em>';
    } else {
      priceEl.innerHTML = '$' + block.dataset.priceUsd + ' <em>/ month</em>';
    }
  });

  document.documentElement.lang = lang;

  document.querySelectorAll('.lang-btn').forEach(btn => btn.classList.remove('active'));
  document.querySelectorAll(`#btn-${lang}, #btn-${lang}-m`).forEach(btn => btn.classList.add('active'));
}

/* ── FAQ TOGGLE ─────────────────────────────────── */
function toggleFaq(btn) {
  const item = btn.closest('.faq-item');
  item.classList.toggle('open');
}

/* ── GALLERIES ──────────────────────────────────── */
const galleries = [
  { name: 'Room 101',      imgs: ['media/pictures_space/room_101/IMG_2872.jpg','media/pictures_space/room_101/IMG_2870.jpg','media/pictures_space/room_101/IMG_2775.JPG','media/pictures_space/room_101/IMG_2770.JPG','media/pictures_space/room_101/IMG_2790.JPG','media/pictures_space/room_101/IMG_2791.JPG','media/pictures_space/room_101/IMG_2776.JPG'] },
  { name: 'Room 201',      imgs: ['media/pictures_space/room_201/IMG_3260.jpg','media/pictures_space/room_201/IMG_2792.JPG','media/pictures_space/room_201/IMG_2789.JPG','media/pictures_space/room_201/IMG_3243.jpg'] },
  { name: 'Room 202',      imgs: ['media/pictures_space/room_202/IMG_2881.jpg','media/pictures_space/room_202/Room_202_desk.jpg','media/pictures_space/room_202/IMG_desk_rain.jpg','media/pictures_space/room_202/IMG_2794.JPG','media/pictures_space/room_202/IMG_2782.JPG'] },
  { name: 'Room 203',      imgs: ['media/pictures_space/room_5/IMG_5395.jpg','media/pictures_space/room_4/IMG_5196.jpg','media/pictures_space/room_5/IMG_5330.jpg','media/pictures_space/common_space/IMG_5120.jpg'] },
  { name: 'Room 301',      imgs: ['media/pictures_space/room_4/IMG_5196.jpg','media/pictures_space/room_5/IMG_5322.jpg','media/pictures_space/room_5/IMG_5452.jpg','media/pictures_space/room_5/IMG_5383.jpg'] },
];
let curGallery = 0, curIdx = 0;

function openGallery(roomIdx) {
  curGallery = roomIdx; curIdx = 0;
  showLbImg();
  document.getElementById('lightbox').classList.add('active');
  document.body.style.overflow = 'hidden';
}
function showLbImg() {
  const g = galleries[curGallery];
  const img = document.getElementById('lb-img');
  img.style.opacity = 0;
  img.src = g.imgs[curIdx];
  img.onload = () => { img.style.opacity = 1; };
  document.getElementById('lb-caption').textContent = g.name + '  ·  ' + (curIdx+1) + ' / ' + g.imgs.length;
}
function lbPrev() {
  const g = galleries[curGallery];
  curIdx = (curIdx - 1 + g.imgs.length) % g.imgs.length;
  showLbImg();
}
function lbNext() {
  const g = galleries[curGallery];
  curIdx = (curIdx + 1) % g.imgs.length;
  showLbImg();
}
function closeLightbox() {
  document.getElementById('lightbox').classList.remove('active');
  document.body.style.overflow = '';
}
document.addEventListener('keydown', e => {
  if (!document.getElementById('lightbox').classList.contains('active')) return;
  if (e.key === 'ArrowLeft')  lbPrev();
  if (e.key === 'ArrowRight') lbNext();
  if (e.key === 'Escape')     closeLightbox();
});

document.querySelectorAll('.room-block').forEach((card, i) => {
  card.addEventListener('keydown', e => { if (e.key === 'Enter') openGallery(i); });
});

/* ── UI ─────────────────────────────────────────── */
const scrollTopBtn = document.getElementById('scrollTop');
window.addEventListener('scroll', () => {
  scrollTopBtn.classList.toggle('visible', window.scrollY > 400);
}, { passive: true });
scrollTopBtn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

const nav = document.getElementById('nav');
window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 80);
}, { passive: true });

const hamburger = document.getElementById('hamburger');
const mobileNav = document.getElementById('nav-mobile');
hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('open');
  mobileNav.classList.toggle('open');
});
function closeMenu() {
  hamburger.classList.remove('open');
  mobileNav.classList.remove('open');
}
