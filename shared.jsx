// Shared data & small utilities used by both design directions.
// Exports everything to window so Babel-transpiled sibling files can import.

// ─── Mailchimp newsletter ──────────────────────────────────────────
// 1. Log in to Mailchimp → Audience → Signup forms → Embedded forms
// 2. Copy the form action URL and paste it below.
const MAILCHIMP_ACTION_URL = 'https://suryaamitrano.us13.list-manage.com/subscribe/post?u=cbd2959746d059c9470382bd9&amp;id=6641dba5a6&amp;f_id=008c04e4f0';

// ─── Social & contact ───────────────────────────────────────────────
const SOCIALS = {
  instagram: 'https://www.instagram.com/suryaamitrano/',
  youtube: 'https://www.youtube.com/channel/UCuH_gwJvOxJxaocYTnQE8qg',
  spotify: 'https://open.spotify.com/intl-pt/artist/2RvtyUzIEop2LcdPELFTym',
  tiktok: 'https://www.tiktok.com/@suryaamitrano',
  email: 'hello@suryaamitrano.com',
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
  { id: 'p1', title: 'Os 3 Desejos de Meiz', cat: 'books', palette: ['#6a8fa3', '#d9a36b', '#e9c4a0'], year: 2024, client: 'Independent', image: 'images/portfolio/meiz.jpg' },
  { id: 'p2', title: 'Será que ele vem?', cat: 'books', palette: ['#3c4b5e', '#e9b347', '#d67b5a'], year: 2023, client: 'Independent', image: 'images/portfolio/sera-que-ele-vem.png' },
  { id: 'p3', title: 'Meu Amigo Óculos', cat: 'books', palette: ['#5d4d7a', '#c77970', '#f0d4b8'], year: 2024, client: 'Independent', image: 'images/portfolio/meu-amigo-oculos.png' },
  { id: 'p4', title: 'Dive back In', cat: 'illustration', palette: ['#f4f1ea', '#8a7e6a', '#c8a878'], year: 2023, client: 'B2B Coffee industry', image: 'images/portfolio/dive-back-in.png' },
  { id: 'p5', title: 'IWC Gothenburg logo', cat: 'brand', palette: ['#8c2e20', '#e9c84a', '#e8d8bc'], year: 2022, client: 'IWC Gothenburg', image: 'images/portfolio/choir-logo.png' },
  { id: 'p6', title: 'Ursa', cat: 'brand', palette: ['#5a6670', '#d9b067', '#3d4a54'], year: 2024, client: 'Personal', image: 'images/portfolio/ursa-logo.png' },
  { id: 'p7', title: 'Quatro verões', cat: 'music', palette: ['#c85a9c', '#f2a050', '#7d5ce0'], year: 2026, client: 'TBD', image: 'images/portfolio/quatro-veroes-capa-disco.png' },
  { id: 'p8', title: 'Pes TBD', cat: 'music', palette: ['#e85d75', '#9b7dd4', '#62b8d9'], year: 2018, client: 'TBD', image: 'images/portfolio/pes-capa-disco.png' },
  { id: 'p9', title: 'Será que ele vem - Double spread', cat: 'illustration', palette: ['#b08dd9', '#e9c4a0', '#7da0c4'], year: 2020, client: 'Independent', image: 'images/portfolio/sera-que-ele-vem-double-spread.png' },
  { id: 'p10', title: 'Gabi contra o mundo', cat: 'books', palette: ['#4a6b45', '#e8d4a8', '#c2826a'], year: 2023, client: 'Gabi Mateos', image: 'images/portfolio/gabi-contra-o-mundo-capa.png' },
  { id: 'p11', title: 'Se deixar eu viro poesia', cat: 'books', palette: ['#c24e4e', '#f0c26c', '#8b5a3c'], year: 2024, client: 'Independent', image: 'images/portfolio/se-deixar-eu-viro-poesia-livro.jpg' },
  { id: 'p12', title: 'Gueisha', cat: 'illustration', palette: ['#2d4f4a', '#e8b574', '#c77055'], year: 2024, client: 'Personal', image: 'images/portfolio/gueisha-wall-art.png' },
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
  { outlet: 'Portal Banda B', date: 'Lucas Cabaña', title: 'One of the most versatile singers of the current generation of Brazilian music, Surya explores new horizons in her work.' },
  { outlet: 'Cult Magazine', date: '', title: 'Surya enters this decade as one of the main new artistic references in the country [Brazil]!' },
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
    upcomingBlurb: 'Recorded in Rome after winning a Band \u0026 Breakfast open call from 3,000+ applicants. Featuring Eva (Sweden), Heron (Brazil), Lucas (France), Arthur (Brazil), Christian (Italy), and Valerio (Italy).',
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
    requestMediaKit: 'Download media kit',
    aboutKicker: 'about',
    aboutHiIm: 'Hi there! My name is',
    aboutIntro: 'I make picture books, illustrations, brand identities and songs. I\'m genuinely passionate about the process of creation \u2014 in my opinion, one of the greatest gifts we\'ve been given in this life.',
    aboutBody1: 'I was born in Brazil and, in 2023, I moved to Gothenburg, Sweden, together with my husband. We\'ve been living in this cozy, rainy town ever since.',
    aboutBody2: 'I\'ve been writing and drawing since I was a kid, and I never really stopped. My very first story was published when I was 16, after winning a writing contest in my hometown, Curitiba \u2014 in the south of Brazil. Then, through my poems, I started making music. And then more drawings, and more creations.',
    aboutBody3: 'I wrote and illustrated my first children\'s book in 2025. Since then I\'ve written and illustrated four more, and been commissioned for brand identity and editorial work for clients across Europe and South America.',
    aboutBody4: 'In parallel, I\'ve released five albums as a singer-songwriter in Portuguese and English. A sixth EP, Felice, was recorded in Rome after I was selected from 3,000+ applicants to the Band \u0026 Breakfast open call \u2014 an album I can\'t wait to share with the world.',
    aboutBody5: 'Moving countries made me realise that art is indeed a universal language through which we can all be connected. Stories, colours, shapes and sounds keep moving us and making us believe in \u2014 and therefore create \u2014 a better world.',
    aboutClosing: 'I\'m glad you\'re here.\nThank you,\nSurya.',
    statAlbumsNum: 'Five',
    statAlbumsLabel: 'albums released \u00b7 2018\u20132024',
    statBooksNum: 'Four',
    statBooksLabel: 'books authored & illustrated',
    statLangNum: 'Three',
    statLangLabel: 'languages \u00b7 EN / PT / SV',
    studioCaption: 'Surya photographed by Laura Aurizi in Italy, 2025',
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
    heroBadgeGeo: 'brazil \u2192 sweden \u00b7 2026',
    heroBadgeEst: 'est. 2018 \u00b7 gbg',
    heroH1Line1: 'worlds',
    heroH1Line2: 'between',
    heroH1Line3: 'words, colour,',
    heroH1Line4: '\u0026 sound.',
    exploreArrow: 'explore \u2192',
    upcomingPrefix: 'UPCOMING \u00b7 ',
    fullAlbumDrops: 'full album drops ',
    pressKicker: 'media & coverage',
    pressTitle: 'press',
    pressTitleItalic: '& media',
    pressSubtitle: 'Coverage, interviews, and mentions. Download the media kit below, or reach out for press inquiries.',
    pressResourcesLabel: 'press resources',
    pressDownloadLabel: 'download the',
    pressMediaKitItalic: 'media kit',
    pressMediaKitDesc: 'Find more about live settings, prices and upcoming projects.',
    contactKicker: 'get in touch',
    contactTitle: 'let\u2019s',
    contactTitleItalic: 'talk',
    contactSubtitle: 'For commissions, press inquiries, speaking engagements, or just to say hi.',
    contactReachOut: 'reach out',
    contactLabelGeneral: 'general',
    contactLabelPress: 'press',
    contactLabelElsewhere: 'elsewhere',
    submitError: 'Something went wrong. Please try again or email directly.',
    submitNetworkError: 'Could not send. Please check your connection and try again.',
    subscribe: 'subscribe',
    newsletterKicker: 'stay in the loop',
    newsletterTitle: 'the',
    newsletterTitleItalic: 'newsletter',
    newsletterPlaceholder: 'your email',
    newsletterSuccess: 'you\'re in',
    newsletterSuccessMsg: 'see you in your inbox — about once a month',
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
    upcomingBlurb: 'Gravado em Roma ap\u00f3s vencer uma chamada aberta do Band \u0026 Breakfast entre mais de 3.000 candidatos. Com Eva (Su\u00e9cia), Heron (Brasil), Lucas (Fran\u00e7a), Arthur (Brasil), Christian (It\u00e1lia) e Valerio (It\u00e1lia).',
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
    requestMediaKit: 'Baixar kit de imprensa',
    aboutKicker: 'sobre',
    aboutHiIm: 'Oi! Meu nome \u00e9',
    aboutIntro: 'Fa\u00e7o livros ilustrados, ilustra\u00e7\u00f5es, identidades de marca e m\u00fasicas. Sou genuinamente apaixonada pelo processo de cria\u00e7\u00e3o \u2014 na minha opini\u00e3o, um dos maiores presentes que recebemos nessa vida.',
    aboutBody1: 'Nasci no Brasil e, em 2023, me mudei para Gotemburgo, Su\u00e9cia, junto com meu marido. Vivemos nessa cidade aconchegante e chuvosa desde ent\u00e3o.',
    aboutBody2: 'Escrevo e desenho desde pequena, e nunca realmente parei. Minha primeira hist\u00f3ria foi publicada quando eu tinha 16 anos, depois de vencer um concurso de escrita na minha cidade natal, Curitiba \u2014 no sul do Brasil. Ent\u00e3o, atrav\u00e9s dos meus poemas, comecei a fazer m\u00fasica. E ent\u00e3o mais desenhos, e mais cria\u00e7\u00f5es.',
    aboutBody3: 'Escrevi e ilustrei meu primeiro livro infantil em 2025. Desde ent\u00e3o escrevi e ilustrei mais quatro, e fui contratada para trabalhos de identidade de marca e editorial para clientes na Europa e na Am\u00e9rica do Sul.',
    aboutBody4: 'Paralelamente, lancei cinco \u00e1lbuns como cantautora em portugu\u00eas e ingl\u00eas. Um sexto EP, Felice, foi gravado em Roma depois de ser selecionada entre mais de 3.000 candidatos para o Band \u0026 Breakfast \u2014 um \u00e1lbum que mal posso esperar para compartilhar com o mundo.',
    aboutBody5: 'Mudar de pa\u00eds me fez perceber que a arte \u00e9, de fato, uma linguagem universal atrav\u00e9s da qual todos podemos nos conectar. Hist\u00f3rias, cores, formas e sons continuam nos movendo e nos fazendo acreditar em \u2014 e, portanto, criar \u2014 um mundo melhor.',
    aboutClosing: 'Fico feliz que voc\u00ea esteja aqui.\nObrigada,\nSurya.',
    statAlbumsNum: 'Cinco',
    statAlbumsLabel: '\u00e1lbuns lan\u00e7ados \u00b7 2018\u20132024',
    statBooksNum: 'Quatro',
    statBooksLabel: 'livros escritos e ilustrados',
    statLangNum: 'Tr\u00eas',
    statLangLabel: 'idiomas \u00b7 EN / PT / SV',
    studioCaption: 'Surya fotografada por Laura Aurizi na Italia, 2025',
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
    heroBadgeGeo: 'brasil \u2192 su\u00e9cia \u00b7 2026',
    heroBadgeEst: 'est. 2018 \u00b7 gbg',
    heroH1Line1: 'mundos',
    heroH1Line2: 'entre',
    heroH1Line3: 'palavras, cor,',
    heroH1Line4: '\u0026 som.',
    exploreArrow: 'explorar \u2192',
    upcomingPrefix: 'EM BREVE \u00b7 ',
    fullAlbumDrops: '\u00e1lbum completo em ',
    pressKicker: 'm\u00eddia & cobertura',
    pressTitle: 'imprensa',
    pressTitleItalic: '& m\u00eddia',
    pressSubtitle: 'Cobertura, entrevistas e men\u00e7\u00f5es. Baixe o kit de imprensa abaixo ou entre em contato para consultas de imprensa.',
    pressResourcesLabel: 'recursos de imprensa',
    pressDownloadLabel: 'baixar o',
    pressMediaKitItalic: 'kit de imprensa',
    pressMediaKitDesc: 'Saiba mais sobre apresentações ao vivo, cachês e próximos projetos.',
    contactKicker: 'fale comigo',
    contactTitle: 'vamos',
    contactTitleItalic: 'conversar',
    contactSubtitle: 'Para comiss\u00f5es, consultas de imprensa, palestras ou s\u00f3 para dizer ol\u00e1.',
    contactReachOut: 'entre em contato',
    contactLabelGeneral: 'geral',
    contactLabelPress: 'imprensa',
    contactLabelElsewhere: 'redes sociais',
    submitError: 'Algo deu errado. Por favor, tente novamente ou envie um e-mail diretamente.',
    submitNetworkError: 'N\u00e3o foi poss\u00edvel enviar. Por favor, verifique sua conex\u00e3o e tente novamente.',
    subscribe: 'assinar',
    newsletterKicker: 'fique por dentro',
    newsletterTitle: 'a',
    newsletterTitleItalic: 'newsletter',
    newsletterPlaceholder: 'seu e-mail',
    newsletterSuccess: 'pronto',
    newsletterSuccessMsg: 'te vejo na sua caixa de entrada \u2014 cerca de uma vez por m\u00eas',
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
    upcomingBlurb: 'Inspelad i Rom efter att ha vunnit ett Band \u0026 Breakfast-utlysning bland fler \u00e4n 3\u2009000 s\u00f6kande. Med Eva (Sverige), Heron (Brasilien), Lucas (Frankrike), Arthur (Brasilien), Christian (Italien) och Valerio (Italien).',
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
    requestMediaKit: 'Ladda ner presskit',
    aboutKicker: 'om',
    aboutHiIm: 'Hej! Mitt namn \u00e4r',
    aboutIntro: 'Jag skapar bilderb\u00f6cker, illustrationer, varum\u00e4rkesidentiteter och s\u00e5nger. Jag brinner genuint f\u00f6r skapandeprocessen \u2014 enligt mig ett av de st\u00f6rsta g\u00e5vorna vi f\u00e5tt i det h\u00e4r livet.',
    aboutBody1: 'Jag f\u00f6ddes i Brasilien och 2023 flyttade jag till G\u00f6teborg, Sverige, tillsammans med min man. Vi har bott i den h\u00e4r mysiga, regniga staden sedan dess.',
    aboutBody2: 'Jag har skrivit och ritat sedan jag var liten, och jag slutade aldrig riktigt. Min allra f\u00f6rsta ber\u00e4ttelse publicerades n\u00e4r jag var 16 \u00e5r, efter att ha vunnit en skrivt\u00e4vling i min hemstad Curitiba \u2014 i s\u00f6dra Brasilien. Sedan, genom mina dikter, b\u00f6rjade jag g\u00f6ra musik. Och sedan fler teckningar och fler skapelser.',
    aboutBody3: 'Jag skrev och illustrerade min f\u00f6rsta barnbok 2025. Sedan dess har jag skrivit och illustrerat fyra till, och f\u00e5tt uppdrag f\u00f6r varum\u00e4rkesidentitet och redaktionellt arbete f\u00f6r kunder i Europa och Sydamerika.',
    aboutBody4: 'Parallellt har jag sl\u00e4ppt fem album som singer-songwriter p\u00e5 portugisiska och engelska. En sj\u00e4tte EP, Felice, spelades in i Rom efter att jag valdes ut bland fler \u00e4n 3\u2009000 s\u00f6kande till Band \u0026 Breakfast \u2014 ett album jag l\u00e4ngtar efter att dela med v\u00e4rlden.',
    aboutBody5: 'Att flytta l\u00e4nder fick mig att inse att konst verkligen \u00e4r ett universellt spr\u00e5k genom vilket vi alla kan kopplas samman. Ber\u00e4ttelser, f\u00e4rger, former och ljud forts\u00e4tter att r\u00f6ra oss och f\u00e5 oss att tro p\u00e5 \u2014 och d\u00e4rmed skapa \u2014 en b\u00e4ttre v\u00e4rld.',
    aboutClosing: 'Jag \u00e4r glad att du \u00e4r h\u00e4r.\nTack,\nSurya.',
    statAlbumsNum: 'Fem',
    statAlbumsLabel: 'album utgivna \u00b7 2018\u20132024',
    statBooksNum: 'Fyra',
    statBooksLabel: 'b\u00f6cker skrivna och illustrerade',
    statLangNum: 'Tre',
    statLangLabel: 'spr\u00e5k \u00b7 EN / PT / SV',
    studioCaption: 'Surya fotograferad av Laura Aurizi i Italien, 2025',
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
    heroBadgeGeo: 'brasilien \u2192 sverige \u00b7 2026',
    heroBadgeEst: 'est. 2018 \u00b7 gbg',
    heroH1Line1: 'v\u00e4rldar',
    heroH1Line2: 'mellan',
    heroH1Line3: 'ord, f\u00e4rg,',
    heroH1Line4: '\u0026 ljud.',
    exploreArrow: 'utforska \u2192',
    upcomingPrefix: 'KOMMANDE \u00b7 ',
    fullAlbumDrops: 'fullst\u00e4ndigt album sl\u00e4pps ',
    pressKicker: 'media & t\u00e4ckning',
    pressTitle: 'press',
    pressTitleItalic: '& media',
    pressSubtitle: 'T\u00e4ckning, intervjuer och omn\u00e4mnanden. Ladda ner presspaketet nedan, eller kontakta oss f\u00f6r pressf\u00f6rfr\u00e5gningar.',
    pressResourcesLabel: 'pressresurser',
    pressDownloadLabel: 'ladda ner',
    pressMediaKitItalic: 'presspaketet',
    pressMediaKitDesc: 'L\u00e4s mer om livespelningar, priser och kommande projekt.',
    contactKicker: 'h\u00f6r av dig',
    contactTitle: 'l\u00e5t oss',
    contactTitleItalic: 'prata',
    contactSubtitle: 'F\u00f6r uppdrag, pressf\u00f6rfr\u00e5gningar, f\u00f6rel\u00e4sningar eller bara f\u00f6r att s\u00e4ga hej.',
    contactReachOut: 'kontakta',
    contactLabelGeneral: 'allm\u00e4nt',
    contactLabelPress: 'press',
    contactLabelElsewhere: 'sociala medier',
    submitError: 'N\u00e5got gick fel. F\u00f6rs\u00f6k igen eller skicka e-post direkt.',
    submitNetworkError: 'Kunde inte skicka. Kontrollera din anslutning och f\u00f6rs\u00f6k igen.',
    subscribe: 'prenumerera',
    newsletterKicker: 'h\u00e5ll dig uppdaterad',
    newsletterTitle: 'mitt',
    newsletterTitleItalic: 'nyhetsbrev',
    newsletterPlaceholder: 'din e-post',
    newsletterSuccess: 'du \u00e4r med',
    newsletterSuccessMsg: 'vi ses i din inkorg \u2014 ungef\u00e4r en g\u00e5ng i m\u00e5naden',
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
        <>
        {/* gradient scrim so label is readable over any image colour */}
        <div style={{
          position: 'absolute', bottom: 0, left: 0, right: 0,
          height: compact ? 64 : 80,
          background: 'linear-gradient(to top, rgba(20,16,10,.72) 0%, transparent 100%)',
          pointerEvents: 'none',
        }} />
        <div style={{
          position: 'absolute', left: compact ? 10 : 14, bottom: compact ? 10 : 14, right: compact ? 10 : 14,
          fontFamily: '"DM Serif Display", Georgia, serif',
          fontSize: compact ? 13 : 16,
          lineHeight: 1.15,
          textShadow: '0 1px 3px rgba(0,0,0,.4)',
        }}>
          {label}
          {sub && <div style={{ fontFamily: 'ui-monospace, monospace', fontSize: 9, letterSpacing: '.08em', opacity: .9, marginTop: 3, textTransform: 'uppercase' }}>{sub}</div>}
        </div>
        </>
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
  MAILCHIMP_ACTION_URL,
  SOCIALS, PORTFOLIO_CATS, PORTFOLIO, UPCOMING_ALBUM, DISCOGRAPHY, SPOTIFY_ARTIST_EMBED,
  PRESS_ITEMS, SHOP_ITEMS, NAV_ITEMS,
  Icon, useI18n, PaletteTile, PortraitPlaceholder, Reveal,
});
