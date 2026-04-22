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
  { id: 'p1', title: 'Curly girl · portrait', cat: 'illustration', palette: ['#6a8fa3', '#d9a36b', '#e9c4a0'], year: 2024, client: 'Personal', image: null },
  { id: 'p2', title: 'Os 3 Desejos de Melz', cat: 'books', palette: ['#3c4b5e', '#e9b347', '#d67b5a'], year: 2023, client: 'Independent', image: null },
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
  tag: 'EP · 6 TRACKS · ENGLISH & PORTUGUESE · RECORDED IN ROME',
  release: 'SEP 19, 2026',
  blurb: 'Recorded in Rome after winning a Band & Breakfast open call from 3,000+ applicants. Featuring Eva (Sweden), Heron (Brazil), Lucas (France), Arthur (Brazil), Christian (Italy), and Valerio (Italy).',
  // Spotify embed — artist page until release. Swap for album URL once live:
  //   https://open.spotify.com/embed/album/<ALBUM_ID>?utm_source=generator
  spotifyEmbed: 'https://open.spotify.com/embed/artist/2RvtyUzIEop2LcdPELFTym?utm_source=generator',
  tracks: [
    { n: '01', title: 'Primavera', lang: 'EN', dur: '3:12' },
    { n: '02', title: 'Small hours', lang: 'EN', dur: '2:58' },
    { n: '03', title: 'Casa', lang: 'PT', dur: '3:41' },
    { n: '04', title: 'Meu amor antigo', lang: 'PT', dur: '4:03' },
    { n: '05', title: 'River song', lang: 'EN', dur: '2:45' },
    { n: '06', title: 'Felice', lang: 'EN/PT', dur: '3:29' },
  ],
  palette: ['#c85a9c', '#f2a050', '#7d5ce0'],
};

// Discography — add `spotifyId` (the ID after /album/ in a Spotify URL)
// to enable the embed player for that album. Without it we just show art.
const DISCOGRAPHY = [
  { n: 1, title: 'MOLETOM', year: 2018, palette: ['#e85d75', '#9b7dd4'], spotifyId: null },
  { n: 2, title: 'AMOR I', year: 2020, palette: ['#b08dd9', '#62b8d9'], spotifyId: null },
  { n: 3, title: 'AMOR II', year: 2020, palette: ['#9b7dd4', '#d4a5e8'], spotifyId: null },
  { n: 4, title: 'ASAS', year: 2022, palette: ['#62b8d9', '#b08dd9'], spotifyId: null },
  { n: 5, title: 'TO BE FOUND', year: 2024, palette: ['#7d5ce0', '#e85d75'], spotifyId: null },
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
