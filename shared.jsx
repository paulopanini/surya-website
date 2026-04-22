// Shared data & small utilities used by both design directions.
// Exports everything to window so Babel-transpiled sibling files can import.

// ─── Social & contact ───────────────────────────────────────────────
const SOCIALS = {
  instagram: 'https://www.instagram.com/suryaamitrano/',
  youtube: 'https://www.youtube.com/channel/UCuH_gwJvOxJxaocYTnQE8qg',
  spotify: 'https://open.spotify.com/intl-pt/artist/2RvtyUzIEop2LcdPELFTym',
  tiktok: 'https://www.tiktok.com/@suryaamitrano',
  email: 'hello@suryaamitrano.com',
  press: 'press@suryaamitrano.com',
};

// ─── Portfolio categories & works ───────────────────────────────────
const PORTFOLIO_CATS = [
  { id: 'all', label: 'all work' },
  { id: 'books', label: 'books' },
  { id: 'brand', label: 'brand identity' },
  { id: 'illustration', label: 'illustration' },
  { id: 'music', label: 'music art' },
];

// Portfolio works.
// TO ADD REAL ARTWORK: save each file into  images/portfolio/<filename>
// and set `image: 'images/portfolio/<filename>'` on the matching entry.
// If `image` is omitted, a warm palette placeholder is shown instead.
const PORTFOLIO = [
  { id: 'p1', title: 'Curly girl · portrait', cat: 'illustration', palette: ['#6a8fa3', '#d9a36b', '#e9c4a0'], year: 2024, client: 'Personal', image: 'images/portfolio/meiz.jpg' },
  { id: 'p2', title: 'Os 3 Desejos de Meiz', cat: 'books', palette: ['#3c4b5e', '#e9b347', '#d67b5a'], year: 2023, client: 'Independent', image: 'images/portfolio/meiz.jpg' },
  { id: 'p3', title: 'Girl with glasses', cat: 'illustration', palette: ['#5d4d7a', '#c77970', '#f0d4b8'], year: 2024, client: 'Personal', image: null },
  { id: 'p4', title: 'Dreaming something new', cat: 'illustration', palette: ['#f4f1ea', '#8a7e6a', '#c8a878'], year: 2023, client: 'Comic', image: null },
  { id: 'p5', title: 'Bla Bla Bla', cat: 'books', palette: ['#8c2e20', '#e9c84a', '#e8d8bc'], year: 2022, client: 'Illustrated story', image: null },
  { id: 'p6', title: 'Rain & ducklings', cat: 'illustration', palette: ['#5a6670', '#d9b067', '#3d4a54'], year: 2024, client: 'Personal', image: null },
  { id: 'p7', title: 'Felice — cover art', cat: 'music', palette: ['#c85a9c', '#f2a050', '#7d5ce0'], year: 2026, client: 'Album · Felice', image: null },
  { id: 'p8', title: 'Moletom — cover', cat: 'music', palette: ['#e85d75', '#9b7dd4', '#62b8d9'], year: 2018, client: 'Album · Moletom', image: null },
  { id: 'p9', title: 'Amor I — cover', cat: 'music', palette: ['#b08dd9', '#e9c4a0', '#7da0c4'], year: 2020, client: 'Album · Amor I', image: null },
  { id: 'p10', title: 'Brand — Little Forest', cat: 'brand', palette: ['#4a6b45', '#e8d4a8', '#c2826a'], year: 2023, client: 'Children\u2019s café', image: null },
  { id: 'p11', title: 'Brand — Casa Bonita', cat: 'brand', palette: ['#c24e4e', '#f0c26c', '#8b5a3c'], year: 2024, client: 'Family restaurant', image: null },
  { id: 'p12', title: 'Editorial spread', cat: 'illustration', palette: ['#2d4f4a', '#e8b574', '#c77055'], year: 2024, client: 'Magazine', image: null },
];

// ─── Albums ─────────────────────────────────────────────────────────
const UPCOMING_ALBUM = {
  title: 'FELICE',
  tag: 'EP · 4 TRACKS · ENGLISH & PORTUGUESE · RECORDED IN ROME',
  release: 'SEP 19, 2026',
  blurb: 'Recorded in Rome after winning a Band & Breakfast open call from 3,000+ applicants. Featuring Eva (Sweden), Heron (Brazil), Lucas (France), Arthur (Brazil), Christian (Italy), and Valerio (Italy).',
  // Spotify embed — artist page until release. Swap for album URL once live:
  //   https://open.spotify.com/embed/album/<ALBUM_ID>?utm_source=generator
  spotifyEmbed: 'https://open.spotify.com/embed/artist/2RvtyUzIEop2LcdPELFTym?utm_source=generator',
  tracks: [
    { n: '01', title: 'TRACK 01', lang: 'EN', dur: '0:00' },
    { n: '02', title: 'TRACK 02', lang: 'EN', dur: '0:00' },
    { n: '03', title: 'TRACK 03', lang: 'PT', dur: '0:00' },
    { n: '04', title: 'TRACK 04', lang: 'PT', dur: '0:00' },
  ],
  palette: ['#c85a9c', '#f2a050', '#7d5ce0'],
};

// Discography — add `spotifyId` (the ID after /album/ in a Spotify URL)
// to enable the embed player for that album. Without it we just show art.
const DISCOGRAPHY = [
  { n: 1, title: 'MOLETOM', year: 2018, palette: ['#e85d75', '#9b7dd4'], spotifyId: '1R6kzch2CdWsbXNQH4R2qB', image: 'images/moletom.jpg' },
  { n: 2, title: 'AMOR, L\'AMOUR, LOVE I', year: 2020, palette: ['#b08dd9', '#62b8d9'], spotifyId: '5ATbaF5xYSLJcruW2zd2m1', image: 'images/amor-lamour-love-1.jpg' },
  { n: 3, title: 'AMOR, L\'AMOUR, LOVE II', year: 2020, palette: ['#9b7dd4', '#d4a5e8'], spotifyId: '3LI9EHLeHeAb5cPRUWdgyQ', image: 'images/amor-lamour-love-2.jpg' },
  { n: 4, title: 'ASAS', year: 2022, palette: ['#62b8d9', '#b08dd9'], spotifyId: '3Vhgxp96wDtVY5WCWVkl1L', image: 'images/asas.jpg' },
    { n: 5, title: 'TO BE FOUND', year: 2024, palette: ['#7d5ce0', '#e85d75'], spotifyId: '0F55MmVaH3gIUg8PxpdB11', image: 'images/to-be-found.jpg' },
  ];

// Spotify artist-page embed for the fallback player.
const SPOTIFY_ARTIST_EMBED = 'https://open.spotify.com/embed/artist/2RvtyUzIEop2LcdPELFTym?utm_source=generator';

// ─── Press & media ──────────────────────────────────────────────────
const PRESS_ITEMS = [
  { outlet: 'Dagens Nyheter', date: 'Mar 2026', title: 'Three languages, one voice: Surya Amitrano bridges worlds' },
  { outlet: 'Folha de S.Paulo', date: 'Feb 2026', title: 'Da ilustração ao microfone: o caminho de Surya Amitrano' },
  { outlet: 'Band & Breakfast', date: 'Nov 2025', title: 'Open call winner records debut EP in Rome' },
  { outlet: 'GP Göteborg', date: 'Oct 2025', title: 'Gothenburg-based illustrator on storytelling across mediums' },
];

// ─── Shop (placeholder) ─────────────────────────────────────────────
const SHOP_ITEMS = [
  { id: 's1', title: 'Os 3 Desejos de Melz', kind: 'Signed hardcover', price: 24, currency: '€', stock: 'in stock', palette: ['#3c4b5e', '#e9b347'] },
  { id: 's2', title: 'Curly girl — A3 print', kind: 'Giclée print · limited', price: 32, currency: '€', stock: 'edition of 50', palette: ['#6a8fa3', '#d9a36b'] },
  { id: 's3', title: 'Girl with glasses — A4', kind: 'Giclée print', price: 22, currency: '€', stock: 'in stock', palette: ['#5d4d7a', '#c77970'] },
  { id: 's4', title: 'Felice — CD + zine', kind: 'CD & 16-page zine', price: 18, currency: '€', stock: 'pre-order', palette: ['#c85a9c', '#f2a050'] },
  { id: 's5', title: 'Rain & ducklings — A4', kind: 'Giclée print', price: 22, currency: '€', stock: 'in stock', palette: ['#5a6670', '#d9b067'] },
  { id: 's6', title: 'Sketch­book — Vol. 1', kind: '96-page zine', price: 14, currency: '€', stock: 'low stock', palette: ['#8c2e20', '#e9c84a'] },
  { id: 's7', title: 'Moletom — vinyl', kind: 'Limited 180g vinyl', price: 28, currency: '€', stock: 'sold out', palette: ['#e85d75', '#9b7dd4'] },
  { id: 's8', title: 'Asas — A3 print', kind: 'Giclée print', price: 32, currency: '€', stock: 'in stock', palette: ['#62b8d9', '#b08dd9'] },
];

// ─── Navigation ─────────────────────────────────────────────────────
const NAV_ITEMS = [
  { id: 'home', label: 'home' },
  { id: 'portfolio', label: 'portfolio' },
  { id: 'music', label: 'music' },
  { id: 'press', label: 'press' },
  { id: 'about', label: 'about' },
  { id: 'shop', label: 'shop' },
];

// ─── Iconography (inline SVG, tiny, warm) ───────────────────────────
const Icon = ({ name, size = 20, stroke = 1.6 }) => {
  const s = { width: size, height: size, strokeWidth: stroke, stroke: 'currentColor', fill: 'none', strokeLinecap: 'round', strokeLinejoin: 'round' };
  switch (name) {
    case 'instagram': return (
      <svg viewBox="0 0 24 24" style={s}><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.5" cy="6.5" r=".8" fill="currentColor" stroke="none" /></svg>
    );
    case 'youtube': return (
      <svg viewBox="0 0 24 24" style={s}><rect x="2.5" y="5.5" width="19" height="13" rx="3.5" /><path d="M10.5 9.5v5l4.5-2.5z" fill="currentColor" stroke="none" /></svg>
    );
    case 'spotify': return (
      <svg viewBox="0 0 24 24" style={s}><circle cx="12" cy="12" r="9.2" /><path d="M7 10c3.2-.9 7.4-.6 10.2 1" /><path d="M8 13c2.6-.6 5.8-.3 8 .9" /><path d="M9 16c2-.4 4.3-.2 5.8.6" /></svg>
    );
    case 'tiktok': return (
      <svg viewBox="0 0 24 24" style={s}><path d="M14 4v10.2a3.3 3.3 0 1 1-3.3-3.3" /><path d="M14 4c.5 2 2.2 3.3 4.3 3.3" /></svg>
    );
    case 'linkedin': return (
      <svg viewBox="0 0 24 24" style={s}><rect x="3" y="3" width="18" height="18" rx="3" /><path d="M7.5 10.5v6M7.5 8v.01M11 16.5v-6M11 12.5a2 2 0 0 1 4 0v4" /></svg>
    );
    case 'mail': return (
      <svg viewBox="0 0 24 24" style={s}><rect x="3" y="5" width="18" height="14" rx="2" /><path d="M3 7l9 7 9-7" /></svg>
    );
    case 'play': return (
      <svg viewBox="0 0 24 24" style={{ ...s, fill: 'currentColor', stroke: 'none' }}><path d="M7 5l12 7-12 7z" /></svg>
    );
    case 'pause': return (
      <svg viewBox="0 0 24 24" style={{ ...s, fill: 'currentColor', stroke: 'none' }}><rect x="6" y="5" width="4" height="14" rx="1" /><rect x="14" y="5" width="4" height="14" rx="1" /></svg>
    );
    case 'menu': return (
      <svg viewBox="0 0 24 24" style={s}><path d="M4 7h16M4 12h16M4 17h16" /></svg>
    );
    case 'close': return (
      <svg viewBox="0 0 24 24" style={s}><path d="M6 6l12 12M18 6L6 18" /></svg>
    );
    case 'arrow-right': return (
      <svg viewBox="0 0 24 24" style={s}><path d="M5 12h14M13 6l6 6-6 6" /></svg>
    );
    case 'arrow-left': return (
      <svg viewBox="0 0 24 24" style={s}><path d="M19 12H5M11 6l-6 6 6 6" /></svg>
    );
    case 'arrow-up': return (
      <svg viewBox="0 0 24 24" style={s}><path d="M12 19V5M6 11l6-6 6 6" /></svg>
    );
    case 'cart': return (
      <svg viewBox="0 0 24 24" style={s}><path d="M4 5h2l2.5 11h11L22 8H7" /><circle cx="9" cy="20" r="1.4" /><circle cx="19" cy="20" r="1.4" /></svg>
    );
    case 'check': return (
      <svg viewBox="0 0 24 24" style={s}><path d="M5 12.5l4.5 4.5L19 7" /></svg>
    );
    case 'sparkle': return (
      <svg viewBox="0 0 24 24" style={{ ...s, fill: 'currentColor', stroke: 'none' }}><path d="M12 3l1.6 6.4L20 11l-6.4 1.6L12 19l-1.6-6.4L4 11l6.4-1.6z" /></svg>
    );
    default: return null;
  }
};

// ─── Translations (EN / PT / SV) ────────────────────────────────────
// Edit strings here. Add a new locale block + code in the lang switcher
// in refined.jsx to support an additional language.
const T = {
  en: {
    tagline: 'Brazilian-born, Gothenburg-based.',
    heroRole: 'Author, illustrator, and singer-songwriter',
    heroClose: 'crafting worlds between words, colour, and sound.',
    exploreWork: 'explore work',
    listenNow: 'listen now',
    threeWorldsKicker: 'three worlds',
    threeWorldsTitle: 'one',
    threeWorldsTitleItalic: 'voice',
    threeWorldsSubtitle: 'Picture books, illustration work, and songs \u2014 different shapes for the same impulse.',
    pillars1Title: 'Words',
    pillars1Copy: 'Children\u2019s books, spanning Portuguese, English, and Swedish.',
    pillars2Title: 'Colour',
    pillars2Copy: 'Illustration, book design, brand identity, commissioned art.',
    pillars3Title: 'Sound',
    pillars3Copy: 'Five albums and a sixth EP, recorded in Rome. Out September.',
    recentKicker: 'recent',
    recentTitle: 'selected',
    recentTitleItalic: 'works',
    viewAllPortfolio: 'view all portfolio \u2192',
    upcomingLabel: 'new \u00b7 sep 2026',
    upcomingSubtext: ' \u2014 an EP recorded in Rome.',
    presave: 'pre-save',
    navHome: 'home',
    navPortfolio: 'portfolio',
    navMusic: 'music',
    navPress: 'press',
    navAbout: 'about',
    navShop: 'shop',
    navContact: 'contact',
    footerExplore: 'explore',
    footerConnect: 'connect',
    footerElsewhere: 'elsewhere',
    portfolioKicker: 'selected works \u00b7 2018\u20132026',
    portfolioTitle: 'portfolio',
    portfolioTitleItalic: '& illustration',
    portfolioSubtitle: 'Digital illustration, book design, brand identity, and commissioned art \u2014 created in Procreate and Adobe Creative Cloud.',
    catAll: 'all work',
    catBooks: 'books',
    catBrand: 'brand identity',
    catIllustration: 'illustration',
    catMusic: 'music art',
    viewItem: 'view \u2192',
    musicKicker: 'discography \u00b7 2018\u20132026',
    musicTitle: 'original',
    musicTitleItalic: 'music',
    musicSubtitle: 'Five albums on streaming platforms in Portuguese and English. Rooted in Brazil, growing in Scandinavia.',
    tracklist: 'Tracklist preview',
    listenCatalogue: '\u2190 listen to the full catalogue on spotify',
    discKicker: 'full discography',
    discTitle: 'five',
    discTitleItalic: 'albums',
    listenBtn: 'listen',
    closeBtn: 'close',
    pressInquiries: 'press inquiries',
    requestMediaKit: 'Request media kit',
    aboutKicker: 'about',
    aboutIntro: 'I make picture books, brand identities, and songs. The through-line is story \u2014 character, rhythm, the quiet between lines.',
    aboutBody1: 'Born in Brazil, I moved to Sweden in 2019 and have been based in Gothenburg since. My first book was published in Portuguese in 2021; since then I\u2019ve written and illustrated four more, and been commissioned for brand identity and editorial work for clients across Europe and South America.',
    aboutBody2: 'In parallel I\u2019ve released five albums as a singer-songwriter in Portuguese and English. A sixth EP, Felice, was recorded in Rome after I was selected from 3,000+ applicants to the Band & Breakfast open call.',
    statAlbumsNum: 'Five',
    statAlbumsLabel: 'albums released \u00b7 2018\u20132024',
    statBooksNum: 'Four',
    statBooksLabel: 'books authored & illustrated',
    statLangNum: 'Three',
    statLangLabel: 'languages \u00b7 EN / PT / SV',
    studioCaption: 'Surya in her studio \u00b7 Gothenburg, 2026',
    contact: 'contact',
    contactUs: 'contact',
    email: 'email',
    connect: 'connect',
    nameLabel: 'your name',
    emailLabel: 'email',
    topicLabel: 'this is about',
    messageLabel: 'your message',
    sendMessage: 'send message',
    topicGeneral: 'a general hello',
    topicCommission: 'commission / illustration work',
    topicPress: 'press inquiry',
    topicSpeaking: 'speaking / school visit',
    topicMusic: 'music collaboration',
    errName: 'please add your name',
    errEmail: 'that email looks off',
    errMessage: 'a few more words, please',
    thankYouPrefix: 'thank you, ',
    thankYouFallback: 'friend',
    thankYouMsg: 'your message is on its way. I\u2019ll reply within a few days.',
    subscribe: 'subscribe',
    newsletterBlurb: 'New work, upcoming shows, and the occasional stray thought \u2014 about once a month.',
    shopSoon: 'the shop is opening soon',
    shopBlurb: 'Signed books, prints, zines, and limited releases \u2014 delivered worldwide.',
    notify: 'notify me when it opens',
    cartLabel: 'cart',
    addToCart: 'add to cart \u2192',
    soldOut: 'sold out',
    notifyMe: 'notify me',
    cartEmpty: 'your cart is empty',
    checkout: 'checkout',
    keepBrowsing: '\u2190 keep browsing',
    fullName: 'full name',
    shippingAddress: 'shipping address',
    country: 'country',
    subtotal: 'subtotal',
    shipping: 'shipping',
    total: 'total',
    placeOrder: 'place order',
    previewNotice: 'preview \u00b7 payment not live yet',
    orderPlaced: 'order',
    orderPlacedItalic: 'placed',
    orderDoneMsg: 'this is a placeholder \u2014 the shop opens soon. thank you for previewing it!',
    backToShop: 'back to shop',
  },
  pt: {
    tagline: 'Brasileira, baseada em Gotemburgo.',
    heroRole: 'Autora, ilustradora e cantautora',
    heroClose: 'criando mundos entre palavras, cores e sons.',
    exploreWork: 'ver trabalhos',
    listenNow: 'ouvir agora',
    threeWorldsKicker: 'tr\u00eas mundos',
    threeWorldsTitle: 'uma',
    threeWorldsTitleItalic: 'voz',
    threeWorldsSubtitle: 'Livros ilustrados, ilustra\u00e7\u00f5es e m\u00fasicas \u2014 formas diferentes para o mesmo impulso.',
    pillars1Title: 'Palavras',
    pillars1Copy: 'Livros infantis em portugu\u00eas, ingl\u00eas e sueco.',
    pillars2Title: 'Cor',
    pillars2Copy: 'Ilustra\u00e7\u00e3o, design de livros, identidade de marca, arte comissionada.',
    pillars3Title: 'Som',
    pillars3Copy: 'Cinco \u00e1lbuns e um EP gravado em Roma. Lan\u00e7amento em setembro.',
    recentKicker: 'recente',
    recentTitle: 'trabalhos',
    recentTitleItalic: 'selecionados',
    viewAllPortfolio: 'ver portf\u00f3lio completo \u2192',
    upcomingLabel: 'novo \u00b7 set 2026',
    upcomingSubtext: ' \u2014 um EP gravado em Roma.',
    presave: 'pr\u00e9-salvar',
    navHome: 'in\u00edcio',
    navPortfolio: 'portf\u00f3lio',
    navMusic: 'm\u00fasica',
    navPress: 'imprensa',
    navAbout: 'sobre',
    navShop: 'loja',
    navContact: 'contato',
    footerExplore: 'explorar',
    footerConnect: 'conectar',
    footerElsewhere: 'redes sociais',
    portfolioKicker: 'trabalhos selecionados \u00b7 2018\u20132026',
    portfolioTitle: 'portf\u00f3lio',
    portfolioTitleItalic: '& ilustra\u00e7\u00e3o',
    portfolioSubtitle: 'Ilustra\u00e7\u00e3o digital, design de livros, identidade de marca e arte comissionada \u2014 criados no Procreate e Adobe Creative Cloud.',
    catAll: 'todos',
    catBooks: 'livros',
    catBrand: 'identidade de marca',
    catIllustration: 'ilustra\u00e7\u00e3o',
    catMusic: 'arte musical',
    viewItem: 'ver \u2192',
    musicKicker: 'discografia \u00b7 2018\u20132026',
    musicTitle: 'm\u00fasica',
    musicTitleItalic: 'original',
    musicSubtitle: 'Cinco \u00e1lbuns nas plataformas de streaming em portugu\u00eas e ingl\u00eas. Ra\u00edzes no Brasil, crescendo na Escandin\u00e1via.',
    tracklist: 'Lista de faixas',
    listenCatalogue: '\u2190 ou\u00e7a o cat\u00e1logo completo no spotify',
    discKicker: 'discografia completa',
    discTitle: 'cinco',
    discTitleItalic: '\u00e1lbuns',
    listenBtn: 'ouvir',
    closeBtn: 'fechar',
    pressInquiries: 'imprensa',
    requestMediaKit: 'Pedir kit de imprensa',
    aboutKicker: 'sobre',
    aboutIntro: 'Fa\u00e7o livros ilustrados, identidades de marca e m\u00fasicas. O fio condutor \u00e9 a hist\u00f3ria \u2014 personagem, ritmo, o sil\u00eancio entre as linhas.',
    aboutBody1: 'Nascida no Brasil, mudei-me para a Su\u00e9cia em 2019 e estou baseada em Gotemburgo desde ent\u00e3o. Meu primeiro livro foi publicado em portugu\u00eas em 2021; desde ent\u00e3o escrevi e ilustrei mais quatro, e fui contratada para identidade de marca e projetos editoriais para clientes na Europa e na Am\u00e9rica do Sul.',
    aboutBody2: 'Paralelamente, lancei cinco \u00e1lbuns como cantautora em portugu\u00eas e ingl\u00eas. Um sexto EP, Felice, foi gravado em Roma depois de ser selecionada entre mais de 3.000 candidatos para o Band & Breakfast.',
    statAlbumsNum: 'Cinco',
    statAlbumsLabel: '\u00e1lbuns lan\u00e7ados \u00b7 2018\u20132024',
    statBooksNum: 'Quatro',
    statBooksLabel: 'livros escritos e ilustrados',
    statLangNum: 'Tr\u00eas',
    statLangLabel: 'idiomas \u00b7 EN / PT / SV',
    studioCaption: 'Surya no seu est\u00fadio \u00b7 Gotemburgo, 2026',
    contact: 'contato',
    contactUs: 'contato',
    email: 'e-mail',
    connect: 'conecte-se',
    nameLabel: 'seu nome',
    emailLabel: 'e-mail',
    topicLabel: 'isso \u00e9 sobre',
    messageLabel: 'sua mensagem',
    sendMessage: 'enviar mensagem',
    topicGeneral: 'um simples ol\u00e1',
    topicCommission: 'comiss\u00e3o / ilustra\u00e7\u00e3o',
    topicPress: 'consulta de imprensa',
    topicSpeaking: 'palestra / visita escolar',
    topicMusic: 'colabora\u00e7\u00e3o musical',
    errName: 'por favor adicione seu nome',
    errEmail: 'esse e-mail parece incorreto',
    errMessage: 'mais algumas palavras, por favor',
    thankYouPrefix: 'obrigada, ',
    thankYouFallback: 'amigo',
    thankYouMsg: 'sua mensagem est\u00e1 a caminho. Responderei em alguns dias.',
    subscribe: 'assinar',
    newsletterBlurb: 'Novidades e reflex\u00f5es ocasionais \u2014 cerca de uma vez por m\u00eas.',
    shopSoon: 'a loja abre em breve',
    shopBlurb: 'Livros autografados, gravuras, zines e lan\u00e7amentos limitados \u2014 enviados para todo o mundo.',
    notify: 'avise-me quando abrir',
    cartLabel: 'carrinho',
    addToCart: 'adicionar ao carrinho \u2192',
    soldOut: 'esgotado',
    notifyMe: 'avisar-me',
    cartEmpty: 'seu carrinho est\u00e1 vazio',
    checkout: 'finalizar compra',
    keepBrowsing: '\u2190 continuar comprando',
    fullName: 'nome completo',
    shippingAddress: 'endere\u00e7o de entrega',
    country: 'pa\u00eds',
    subtotal: 'subtotal',
    shipping: 'envio',
    total: 'total',
    placeOrder: 'fazer pedido',
    previewNotice: 'pr\u00e9-visualiza\u00e7\u00e3o \u00b7 pagamento n\u00e3o ativo',
    orderPlaced: 'pedido',
    orderPlacedItalic: 'realizado',
    orderDoneMsg: 'isso \u00e9 um prot\u00f3tipo \u2014 a loja abre em breve. obrigado por explorar!',
    backToShop: 'voltar \u00e0 loja',
  },
  sv: {
    tagline: 'Brasilianskf\u00f6dd, baserad i G\u00f6teborg.',
    heroRole: 'F\u00f6rfattare, illustrat\u00f6r och singer-songwriter',
    heroClose: 'som skapar v\u00e4rldar mellan ord, f\u00e4rg och ljud.',
    exploreWork: 'se arbeten',
    listenNow: 'lyssna nu',
    threeWorldsKicker: 'tre v\u00e4rldar',
    threeWorldsTitle: 'en',
    threeWorldsTitleItalic: 'r\u00f6st',
    threeWorldsSubtitle: 'Bilderb\u00f6cker, illustrationer och s\u00e5nger \u2014 olika former f\u00f6r samma impuls.',
    pillars1Title: 'Ord',
    pillars1Copy: 'Bilderb\u00f6cker p\u00e5 portugisiska, engelska och svenska.',
    pillars2Title: 'F\u00e4rg',
    pillars2Copy: 'Illustration, bokdesign, varum\u00e4rkesidentitet, best\u00e4lld konst.',
    pillars3Title: 'Ljud',
    pillars3Copy: 'Fem album och en EP inspelad i Rom. Ut i september.',
    recentKicker: 'senaste',
    recentTitle: 'utvalda',
    recentTitleItalic: 'verk',
    viewAllPortfolio: 'se hela portfolion \u2192',
    upcomingLabel: 'ny \u00b7 sep 2026',
    upcomingSubtext: ' \u2014 en EP inspelad i Rom.',
    presave: 'f\u00f6rhandsspara',
    navHome: 'hem',
    navPortfolio: 'portfolio',
    navMusic: 'musik',
    navPress: 'press',
    navAbout: 'om',
    navShop: 'butik',
    navContact: 'kontakt',
    footerExplore: 'utforska',
    footerConnect: 'kontakta',
    footerElsewhere: 'p\u00e5 n\u00e4tet',
    portfolioKicker: 'utvalda verk \u00b7 2018\u20132026',
    portfolioTitle: 'portfolio',
    portfolioTitleItalic: '& illustration',
    portfolioSubtitle: 'Digital illustration, bokdesign, varum\u00e4rkesidentitet och best\u00e4lld konst \u2014 skapad i Procreate och Adobe Creative Cloud.',
    catAll: 'alla verk',
    catBooks: 'b\u00f6cker',
    catBrand: 'varum\u00e4rkesidentitet',
    catIllustration: 'illustration',
    catMusic: 'musikkonst',
    viewItem: 'visa \u2192',
    musicKicker: 'diskografi \u00b7 2018\u20132026',
    musicTitle: 'original',
    musicTitleItalic: 'musik',
    musicSubtitle: 'Fem album p\u00e5 streamingtj\u00e4nster p\u00e5 portugisiska och engelska. Rotad i Brasilien, v\u00e4xer i Skandinavien.',
    tracklist: 'Sp\u00e5rlista',
    listenCatalogue: '\u2190 lyssna p\u00e5 hela katalogen p\u00e5 spotify',
    discKicker: 'fullst\u00e4ndig diskografi',
    discTitle: 'fem',
    discTitleItalic: 'album',
    listenBtn: 'lyssna',
    closeBtn: 'st\u00e4ng',
    pressInquiries: 'press',
    requestMediaKit: 'Best\u00e4ll presskit',
    aboutKicker: 'om',
    aboutIntro: 'Jag skapar bilderb\u00f6cker, varum\u00e4rkesidentiteter och s\u00e5nger. Den r\u00f6da tr\u00e5den \u00e4r ber\u00e4ttelse \u2014 karakt\u00e4r, rytm, tystnaden mellan raderna.',
    aboutBody1: 'F\u00f6dd i Brasilien, flyttade jag till Sverige 2019 och har varit baserad i G\u00f6teborg sedan dess. Min f\u00f6rsta bok publicerades p\u00e5 portugisiska 2021; sedan dess har jag skrivit och illustrerat fyra till, och f\u00e5tt uppdrag f\u00f6r varum\u00e4rkesidentitet och redaktionellt arbete f\u00f6r kunder i Europa och Sydamerika.',
    aboutBody2: 'Parallellt har jag sl\u00e4ppt fem album som singer-songwriter p\u00e5 portugisiska och engelska. En sj\u00e4tte EP, Felice, spelades in i Rom efter att jag valdes ut bland fler \u00e4n 3\u2009000 s\u00f6kande till Band & Breakfast.',
    statAlbumsNum: 'Fem',
    statAlbumsLabel: 'album utgivna \u00b7 2018\u20132024',
    statBooksNum: 'Fyra',
    statBooksLabel: 'b\u00f6cker skrivna och illustrerade',
    statLangNum: 'Tre',
    statLangLabel: 'spr\u00e5k \u00b7 EN / PT / SV',
    studioCaption: 'Surya i sitt studio \u00b7 G\u00f6teborg, 2026',
    contact: 'kontakt',
    contactUs: 'kontakt',
    email: 'e-post',
    connect: 'kontakt',
    nameLabel: 'ditt namn',
    emailLabel: 'e-post',
    topicLabel: 'det g\u00e4ller',
    messageLabel: 'ditt meddelande',
    sendMessage: 'skicka meddelande',
    topicGeneral: 'ett allm\u00e4nt hej',
    topicCommission: 'uppdrag / illustration',
    topicPress: 'pressf\u00f6rfr\u00e5gan',
    topicSpeaking: 'f\u00f6rel\u00e4sning / skolbes\u00f6k',
    topicMusic: 'musiksamarbete',
    errName: 'ange ditt namn',
    errEmail: 'e-postadressen verkar fel',
    errMessage: 'lite fler ord, tack',
    thankYouPrefix: 'tack, ',
    thankYouFallback: 'v\u00e4n',
    thankYouMsg: 'ditt meddelande \u00e4r p\u00e5 v\u00e4g. Jag svarar inom n\u00e5gra dagar.',
    subscribe: 'prenumerera',
    newsletterBlurb: 'Nya arbeten och tankar \u2014 ungef\u00e4r en g\u00e5ng i m\u00e5naden.',
    shopSoon: 'butiken \u00f6ppnar snart',
    shopBlurb: 'Signerade b\u00f6cker, tryck, zines och begr\u00e4nsade utg\u00e5vor \u2014 levereras \u00f6ver hela v\u00e4rlden.',
    notify: 'meddela mig n\u00e4r den \u00f6ppnar',
    cartLabel: 'kundvagn',
    addToCart: 'l\u00e4gg i kundvagn \u2192',
    soldOut: 'sluts\u00e5ld',
    notifyMe: 'meddela mig',
    cartEmpty: 'din kundvagn \u00e4r tom',
    checkout: 'till kassan',
    keepBrowsing: '\u2190 forts\u00e4tt handla',
    fullName: 'fullst\u00e4ndigt namn',
    shippingAddress: 'leveransadress',
    country: 'land',
    subtotal: 'delsumma',
    shipping: 'frakt',
    total: 'totalt',
    placeOrder: 'best\u00e4ll',
    previewNotice: 'f\u00f6rhandsvisning \u00b7 betalning inte aktiv',
    orderPlaced: 'best\u00e4llning',
    orderPlacedItalic: 'lagd',
    orderDoneMsg: 'detta \u00e4r en f\u00f6rhandsvisning \u2014 butiken \u00f6ppnar snart. tack f\u00f6r att du testar!',
    backToShop: 'tillbaka till butiken',
  },
};

// ─── Small utilities ────────────────────────────────────────────────
function useI18n() {
  const [lang, setLang] = React.useState('en');
  return { lang, setLang, t: T[lang] };
}

// Warm-toned tile — shows a real image if provided, falls back to a
// gradient palette built from the item's color story. `image` can be
// any img src (uploads/…, images/…, http[s]://…).
function PaletteTile({ palette, label, sub, image, alt, style, radius = 14, compact }) {
  const [a, b, c] = palette || ['#8b7a6a', '#c2a483', '#e3cba8'];
  return (
    <div style={{
      position: 'relative',
      background: image ? '#2a251f' : `linear-gradient(135deg, ${a} 0%, ${b} 60%, ${c || b} 100%)`,
      borderRadius: radius,
      overflow: 'hidden',
      color: '#fff',
      ...style,
    }}>
      {image && (
        <img src={image} alt={alt || label || ''} loading="lazy"
          style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }} />
      )}
      {/* subtle noise overlay for a painted feel */}
      <div style={{
        position: 'absolute', inset: 0,
        background: 'radial-gradient(circle at 30% 20%, rgba(255,255,255,.18), transparent 55%), radial-gradient(circle at 80% 80%, rgba(0,0,0,.18), transparent 55%)',
        mixBlendMode: 'soft-light',
        pointerEvents: 'none',
      }} />
      {label && (
        <div style={{
          position: 'absolute', left: compact ? 10 : 14, bottom: compact ? 10 : 14, right: compact ? 10 : 14,
          fontFamily: '"DM Serif Display", Georgia, serif',
          fontSize: compact ? 13 : 16,
          lineHeight: 1.15,
          textShadow: '0 1px 2px rgba(0,0,0,.25)',
        }}>
          {label}
          {sub && <div style={{ fontFamily: 'ui-monospace, monospace', fontSize: 9, letterSpacing: '.08em', opacity: .9, marginTop: 3, textTransform: 'uppercase' }}>{sub}</div>}
        </div>
      )}
    </div>
  );
}

// Placeholder portrait block — striped, warm, with a monospace hint.
function PortraitPlaceholder({ caption = 'portrait photo', tone = '#7d8a6f', style }) {
  return (
    <div style={{
      position: 'relative',
      background: tone,
      backgroundImage: 'repeating-linear-gradient(135deg, rgba(255,255,255,.06) 0 2px, transparent 2px 14px)',
      borderRadius: 14,
      overflow: 'hidden',
      ...style,
    }}>
      <div style={{
        position: 'absolute', inset: 16, border: '1px dashed rgba(255,255,255,.35)', borderRadius: 10,
        display: 'flex', alignItems: 'flex-end', padding: 14,
        fontFamily: 'ui-monospace, "SF Mono", monospace', fontSize: 10, letterSpacing: '.1em', textTransform: 'uppercase', color: 'rgba(255,255,255,.75)',
      }}>{caption}</div>
    </div>
  );
}

// Scroll-in reveal. Uses IntersectionObserver. Subtle, charming.
function Reveal({ children, delay = 0, y = 16, style }) {
  const ref = React.useRef(null);
  const [seen, setSeen] = React.useState(false);
  React.useEffect(() => {
    const el = ref.current; if (!el) return;
    const io = new IntersectionObserver((entries) => {
      entries.forEach(e => { if (e.isIntersecting) { setSeen(true); io.disconnect(); } });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return (
    <div ref={ref} style={{
      transform: seen ? 'none' : `translateY(${y}px)`,
      opacity: seen ? 1 : 0,
      transition: `transform .7s cubic-bezier(.2,.7,.2,1) ${delay}ms, opacity .7s ease ${delay}ms`,
      ...style,
    }}>{children}</div>
  );
}

// Export to window so sibling Babel scripts can pick these up.
Object.assign(window, {
  SOCIALS, PORTFOLIO_CATS, PORTFOLIO, UPCOMING_ALBUM, DISCOGRAPHY, SPOTIFY_ARTIST_EMBED,
  PRESS_ITEMS, SHOP_ITEMS, NAV_ITEMS,
  Icon, useI18n, PaletteTile, PortraitPlaceholder, Reveal,
});
