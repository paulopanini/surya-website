// Refined direction — more editorial, modern, with charming micro-motion.
// Same structure and content, lifted typography + more whitespace + subtler color.
// Loads AFTER shared.jsx.

// Refined palette — warmed up with Faithful's color mix from Canva.
const RP = {
  paper: '#f9e6c6',         // cream (from Canva)
  paperDeep: '#f1d9b0',
  paperSoft: '#fbecd0',
  ink: '#2f2a22',
  inkSoft: '#564d3f',
  inkSofter: '#8a7d6a',
  sage: '#6b735d',          // Canva hero green
  terracotta: '#e78960',    // Canva coral
  terracottaDeep: '#c86b4a',
  ochre: '#e89f3a',         // Canva marigold
  marigold: '#f2b95c',
  brown: '#6d4c3a',         // Canva portfolio hero
  blue: '#6899a7',          // Canva music hero
  plum: '#6a3e4f',
  mist: '#a9b8b0',
  line: 'rgba(47,42,34,.14)',
};

// ─── Marquee (charming rolling tagline) ─────────────────────────────
function Marquee({ items, speed = 40 }) {
  return (
    <div style={{
      display: 'flex', overflow: 'hidden', width: '100%',
      maskImage: 'linear-gradient(to right, transparent, #000 8%, #000 92%, transparent)',
      WebkitMaskImage: 'linear-gradient(to right, transparent, #000 8%, #000 92%, transparent)',
    }}>
      <div style={{ display: 'flex', animation: `r-marq ${speed}s linear infinite`, gap: 48, paddingRight: 48 }}>
        {[...items, ...items, ...items].map((it, i) => (
          <span key={i} style={{
            fontFamily: '"DM Serif Display", Georgia, serif', fontSize: 42, color: RP.ink, fontStyle: 'italic', display: 'flex', alignItems: 'center', gap: 48, whiteSpace: 'nowrap',
          }}>
            {it}
            <span style={{ color: RP.terracotta, fontStyle: 'normal' }}>✸</span>
          </span>
        ))}
      </div>
      <style>{`@keyframes r-marq { from { transform: translateX(0) } to { transform: translateX(-33.333%) } }`}</style>
    </div>
  );
}

// ─── Button ─────────────────────────────────────────────────────────
function RButton({ children, variant = 'solid', onClick, href, download, tone = RP.ink, small, style }) {
  const base = {
    display: 'inline-flex', alignItems: 'center', gap: 10,
    padding: small ? '10px 18px' : '14px 26px',
    fontFamily: '"DM Serif Display", Georgia, serif', fontSize: small ? 14 : 16,
    borderRadius: 999, cursor: 'pointer', textDecoration: 'none',
    transition: 'all .25s cubic-bezier(.2,.7,.2,1)',
    whiteSpace: 'nowrap',
  };
  const solid = { ...base, background: tone, color: RP.paper, border: `1.5px solid ${tone}`, ...style };
  const outline = { ...base, background: 'transparent', color: tone, border: `1.5px solid ${tone}`, ...style };
  const Tag = href ? 'a' : 'button';
  const props = href ? { href, ...(download !== undefined && { download }) } : { onClick, type: 'button' };
  return (
    <Tag {...props} style={variant === 'solid' ? solid : outline}
      onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-2px)'; }}
      onMouseLeave={(e) => { e.currentTarget.style.transform = ''; }}>
      {children} <span style={{ display: 'inline-block', transition: 'transform .2s' }}><Icon name="arrow-right" size={14} /></span>
    </Tag>
  );
}

// ─── Header ─────────────────────────────────────────────────────────
function RefinedHeader({ page, onNav, lang, setLang, t }) {
  const [open, setOpen] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(false);
  React.useEffect(() => {
    const h = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', h); return () => window.removeEventListener('scroll', h);
  }, []);
  const navLabel = { home: t.navHome, portfolio: t.navPortfolio, music: t.navMusic, press: t.navPress, about: t.navAbout, shop: t.navShop };
  return (
    <header style={{
      position: 'sticky', top: 0, zIndex: 20,
      background: scrolled ? 'rgba(245, 237, 224, 0.88)' : 'transparent',
      backdropFilter: scrolled ? 'blur(10px)' : 'none',
      WebkitBackdropFilter: scrolled ? 'blur(10px)' : 'none',
      borderBottom: scrolled ? `1px solid ${RP.line}` : '1px solid transparent',
      transition: 'all .3s',
    }}>
      <div style={{
        padding: '20px 48px',
        display: 'grid', gridTemplateColumns: '1fr auto 1fr', alignItems: 'center', gap: 24,
      }}>
        <nav className="r-nav" style={{ display: 'flex', gap: 24, alignItems: 'center' }}>
          <button className="r-burger" onClick={() => setOpen(!open)} style={{
            display: 'none', background: 'none', border: 'none', cursor: 'pointer', color: RP.ink, padding: 4,
          }}><Icon name="menu" size={24} /></button>
          <div className="r-nav-inner" style={{ display: 'flex', gap: 24 }}>
            {NAV_ITEMS.map(n => (
              <a key={n.id} onClick={(e) => { e.preventDefault(); onNav(n.id); }} href={`#${n.id}`} style={{
                fontSize: 14, letterSpacing: '.02em',
                color: page === n.id ? RP.terracotta : RP.ink,
                textDecoration: 'none', position: 'relative', cursor: 'pointer', fontFamily: 'Fraunces, Georgia, serif',
                fontStyle: page === n.id ? 'italic' : 'normal',
              }}>
                {navLabel[n.id]}
                {page === n.id && <span style={{ position: 'absolute', left: 0, right: 0, bottom: -4, height: 1, background: RP.terracotta }} />}
              </a>
            ))}
          </div>
        </nav>
        <a onClick={(e) => { e.preventDefault(); onNav('home'); }} href="#home" style={{
          fontFamily: '"DM Serif Display", Georgia, serif', fontSize: 22, color: RP.ink, textDecoration: 'none', letterSpacing: '-.01em',
        }}>surya <span style={{ fontStyle: 'italic', color: RP.terracotta }}>amitrano</span></a>
        <div style={{ display: 'flex', justifyContent: 'flex-end', gap: 16, alignItems: 'center' }}>
          <div style={{ display: 'flex', gap: 2, fontFamily: 'ui-monospace, monospace', fontSize: 10, letterSpacing: '.1em', textTransform: 'uppercase' }}>
            {['en', 'pt', 'sv'].map((l, i) => (
              <React.Fragment key={l}>
                {i > 0 && <span style={{ color: RP.inkSofter }}>·</span>}
                <button onClick={() => setLang(l)} style={{
                  background: 'none', border: 'none', color: lang === l ? RP.terracotta : RP.inkSoft,
                  fontWeight: lang === l ? 700 : 400, padding: '0 4px', cursor: 'pointer',
                  fontSize: 10, fontFamily: 'inherit', letterSpacing: 'inherit',
                }}>{l}</button>
              </React.Fragment>
            ))}
          </div>
          <div className="r-socials" style={{ display: 'flex', gap: 12, color: RP.ink }}>
            <a href={SOCIALS.instagram} target="_blank" rel="noreferrer" style={{ color: 'inherit' }}><Icon name="instagram" size={18} /></a>
            <a href={SOCIALS.spotify} target="_blank" rel="noreferrer" style={{ color: 'inherit' }}><Icon name="spotify" size={18} /></a>
          </div>
          <a onClick={(e) => { e.preventDefault(); onNav('contact'); }} href="#contact" style={{
            padding: '8px 18px', borderRadius: 999, border: `1px solid ${RP.ink}`, color: RP.ink, textDecoration: 'none', fontSize: 13, fontFamily: 'Fraunces, Georgia, serif', fontStyle: 'italic',
          }}>{t.navContact}</a>
        </div>
      </div>
      {open && (
        <div style={{ padding: '10px 48px 24px', display: 'flex', flexDirection: 'column', gap: 12, background: RP.paper }}>
          {NAV_ITEMS.map(n => (
            <a key={n.id} onClick={(e) => { e.preventDefault(); onNav(n.id); setOpen(false); }} href={`#${n.id}`} style={{
              fontFamily: '"DM Serif Display", Georgia, serif', fontSize: 22, color: RP.ink, textDecoration: 'none',
            }}>{navLabel[n.id]}</a>
          ))}
        </div>
      )}
      <style>{`
        @media (max-width: 820px){
          .r-nav-inner{display:none !important}
          .r-socials{display:none !important}
          .r-burger{display:flex !important}
        }
      `}</style>
    </header>
  );
}

// ─── Section band — tinted paper strip behind a header ─────────────
// Usage: <RSectionBand tone={RP.sage} padding="60px 48px 40px"><RSectionHeader ... /></RSectionBand>
// Tone is mixed at ~14% over the paper color so it feels like stained paper,
// not a saturated block — each section gets its own identity without clashing.
function RSectionBand({ tone = RP.sage, padding = '60px 48px 40px', children, style }) {
  // Color-mix gives us a warm tint that sits naturally over the cream paper.
  const tint = `color-mix(in oklch, ${tone} 16%, ${RP.paper})`;
  const edge = `color-mix(in oklch, ${tone} 34%, ${RP.paper})`;
  return (
    <div style={{
      background: tint,
      borderTop: `1px solid ${edge}`,
      borderBottom: `1px solid ${edge}`,
      padding,
      position: 'relative',
      ...style,
    }}>
      {/* Corner kicker marker — tiny printerly detail */}
      <span aria-hidden style={{
        position: 'absolute', top: 10, left: 10, width: 6, height: 6, borderRadius: 1,
        background: tone, opacity: .55,
      }} />
      <span aria-hidden style={{
        position: 'absolute', top: 10, right: 10, width: 6, height: 6, borderRadius: 1,
        background: tone, opacity: .55,
      }} />
      {children}
    </div>
  );
}

// ─── Section header (used across pages) ─────────────────────────────
function RSectionHeader({ kicker, title, titleItalic, subtitle, align = 'left', accent }) {
  const ac = accent || RP.terracotta;
  return (
    <div style={{ textAlign: align, maxWidth: 720, margin: align === 'center' ? '0 auto' : 0 }}>
      <div style={{ fontFamily: 'ui-monospace, monospace', fontSize: 11, letterSpacing: '.22em', color: ac, textTransform: 'uppercase', marginBottom: 16, display: 'flex', alignItems: 'center', gap: 10, justifyContent: align === 'center' ? 'center' : 'flex-start' }}>
        <span style={{ width: 28, height: 1, background: ac, display: 'inline-block' }} />
        {kicker}
      </div>
      <h2 style={{
        fontFamily: '"DM Serif Display", Georgia, serif',
        fontSize: 'clamp(40px, 5vw, 72px)', lineHeight: 1.02, margin: 0, fontWeight: 400, color: RP.ink, letterSpacing: '-.015em',
      }}>{title}{titleItalic && <> <span style={{ fontFamily: 'Fraunces, Georgia, serif', fontStyle: 'italic', color: ac }}>{titleItalic}</span></>}</h2>
      {subtitle && <p style={{ fontSize: 18, lineHeight: 1.6, color: RP.inkSoft, marginTop: 18, maxWidth: 560 }}>{subtitle}</p>}
    </div>
  );
}

// ─── Footer ─────────────────────────────────────────────────────────
function RefinedFooter({ onNav, t }) {
  const [nlEmail, setNlEmail] = React.useState('');
  const [nlStatus, setNlStatus] = React.useState('idle'); // idle | loading | success | error
  const [nlErr, setNlErr] = React.useState('');

  const submitNewsletter = async (e) => {
    e.preventDefault();
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(nlEmail)) {
      setNlStatus('error');
      setNlErr(t.errEmail);
      return;
    }
    if (!MAILERLITE_URL || MAILERLITE_URL === 'PASTE_YOUR_MAILERLITE_SUBSCRIBE_URL_HERE') {
      setNlStatus('error');
      setNlErr('MailerLite not configured yet.');
      return;
    }
    setNlStatus('loading');
    try {
      const body = new URLSearchParams({ 'fields[email]': nlEmail, ml_submit: '1' });
      const res = await fetch(MAILERLITE_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: body.toString(),
      });
      const data = await res.json();
      if (data.success) {
        setNlStatus('success');
      } else {
        const msg = data.errors && data.errors.email ? data.errors.email[0] : t.submitNetworkError;
        setNlStatus('error');
        setNlErr(msg);
      }
    } catch (_) {
      setNlStatus('error');
      setNlErr(t.submitNetworkError);
    }
  };

  return (
    <footer style={{ background: RP.ink, color: RP.paper, padding: '80px 48px 40px' }}>
      <div style={{ marginBottom: 60 }}>
        <Marquee items={['Author', 'Illustrator', 'Singer-songwriter', 'Brazil · Sweden', 'Felice · 2026']} speed={60} />
      </div>

      {/* ── Main two-column body ── */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 1, marginBottom: 60, background: 'rgba(245,237,224,.08)' }} className="r-footer-body">

        {/* Left — nav info */}
        <div style={{ padding: '60px 48px 60px 0', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', gap: 48, background: RP.ink }}>
          <div>
            <div style={{ fontFamily: '"DM Serif Display", Georgia, serif', fontSize: 36, lineHeight: 1, marginBottom: 12 }}>surya <span style={{ fontStyle: 'italic', color: RP.ochre }}>amitrano</span></div>
            <div style={{ fontFamily: 'ui-monospace, monospace', fontSize: 10, letterSpacing: '.2em', textTransform: 'uppercase', opacity: .7 }}>Gothenburg · Sverige</div>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, auto)', gap: 32, justifyContent: 'start' }}>
            <FooterCol title={t.footerExplore} items={[{ l: t.navPortfolio, k: 'portfolio' }, { l: t.navMusic, k: 'music' }, { l: t.navAbout, k: 'about' }]} onNav={onNav} />
            <FooterCol title={t.footerConnect} items={[{ l: t.navPress, k: 'press' }, { l: t.navContact, k: 'contact' }]} onNav={onNav} />
            <div>
              <div style={{ fontFamily: 'ui-monospace, monospace', fontSize: 10, letterSpacing: '.22em', textTransform: 'uppercase', opacity: .7, marginBottom: 14 }}>{t.footerElsewhere}</div>
              <div style={{ display: 'flex', gap: 14 }}>
                <a href={SOCIALS.instagram} target="_blank" rel="noreferrer" style={{ color: 'inherit' }}><Icon name="instagram" size={20} /></a>
                <a href={SOCIALS.youtube} target="_blank" rel="noreferrer" style={{ color: 'inherit' }}><Icon name="youtube" size={20} /></a>
                <a href={SOCIALS.spotify} target="_blank" rel="noreferrer" style={{ color: 'inherit' }}><Icon name="spotify" size={20} /></a>
                <a href={SOCIALS.tiktok} target="_blank" rel="noreferrer" style={{ color: 'inherit' }}><Icon name="tiktok" size={20} /></a>
              </div>
            </div>
          </div>
        </div>

        {/* Right — newsletter (same centred design as homepage, adapted for dark bg) */}
        <div style={{
          padding: '60px 0 60px 48px', display: 'flex', alignItems: 'center', justifyContent: 'center',
          background: RP.ink,
        }}>
          <div style={{ width: '100%', maxWidth: 400, textAlign: 'center' }}>
            <div style={{
              fontFamily: 'ui-monospace, monospace', fontSize: 11, letterSpacing: '.22em',
              color: RP.ochre, textTransform: 'uppercase', marginBottom: 18,
              display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 12,
            }}>
              <span style={{ width: 28, height: 1, background: RP.ochre, display: 'inline-block' }} />
              {t.newsletterKicker}
              <span style={{ width: 28, height: 1, background: RP.ochre, display: 'inline-block' }} />
            </div>
            <div style={{
              fontFamily: '"DM Serif Display", Georgia, serif',
              fontSize: 'clamp(36px, 4vw, 56px)', lineHeight: 1.02,
              color: RP.paper, letterSpacing: '-.015em', marginBottom: 14,
            }}>
              {t.newsletterTitle}{' '}
              <span style={{ fontFamily: 'Fraunces, Georgia, serif', fontStyle: 'italic', color: RP.ochre }}>{t.newsletterTitleItalic}</span>
            </div>
            <p style={{ fontSize: 15, lineHeight: 1.6, color: 'rgba(245,237,224,.55)', margin: '0 0 32px' }}>{t.newsletterBlurb}</p>
            {nlStatus === 'success' ? (
              <div style={{ padding: '24px 32px', border: `1.5px solid ${RP.ochre}`, borderRadius: 4, display: 'inline-block' }}>
                <div style={{ fontFamily: '"DM Serif Display", Georgia, serif', fontSize: 32, color: RP.paper, marginBottom: 6 }}>
                  {t.newsletterSuccess} <span style={{ fontFamily: 'Fraunces', fontStyle: 'italic', color: RP.ochre }}>✓</span>
                </div>
                <div style={{ fontFamily: 'ui-monospace, monospace', fontSize: 10, letterSpacing: '.18em', textTransform: 'uppercase', color: 'rgba(245,237,224,.45)' }}>{t.newsletterSuccessMsg}</div>
              </div>
            ) : (
              <>
                <form onSubmit={submitNewsletter} noValidate style={{
                  display: 'flex', border: '1.5px solid rgba(245,237,224,.35)', borderRadius: 999, overflow: 'hidden',
                  transition: 'border-color .2s',
                }}
                  onFocus={(e) => e.currentTarget.style.borderColor = 'rgba(245,237,224,.75)'}
                  onBlur={(e) => e.currentTarget.style.borderColor = 'rgba(245,237,224,.35)'}
                >
                  <input
                    type="email"
                    value={nlEmail}
                    onChange={(e) => { setNlEmail(e.target.value); if (nlStatus === 'error') setNlStatus('idle'); }}
                    placeholder={t.newsletterPlaceholder}
                    style={{
                      flex: 1, padding: '13px 20px', border: 'none', background: 'transparent',
                      fontFamily: 'Fraunces, Georgia, serif', fontSize: 15, color: RP.paper, outline: 'none',
                    }}
                  />
                  <button
                    type="submit"
                    disabled={nlStatus === 'loading'}
                    style={{
                      padding: '12px 22px', background: RP.ochre, color: RP.ink,
                      border: 'none', fontFamily: '"DM Serif Display", Georgia, serif', fontSize: 15,
                      cursor: nlStatus === 'loading' ? 'wait' : 'pointer',
                      whiteSpace: 'nowrap', transition: 'background .2s', flexShrink: 0,
                    }}
                    onMouseEnter={(e) => { if (nlStatus !== 'loading') e.currentTarget.style.background = RP.marigold; }}
                    onMouseLeave={(e) => { e.currentTarget.style.background = RP.ochre; }}
                  >
                    {nlStatus === 'loading' ? '...' : t.subscribe}
                  </button>
                </form>
                {nlStatus === 'error' && (
                  <div style={{ marginTop: 8, color: RP.marigold, fontFamily: 'Fraunces, Georgia, serif', fontStyle: 'italic', fontSize: 13 }}>{nlErr}</div>
                )}
              </>
            )}
          </div>
        </div>
      </div>

      <div style={{ paddingTop: 24, borderTop: '1px solid rgba(245,237,224,.15)', display: 'flex', justifyContent: 'space-between', fontFamily: 'ui-monospace, monospace', fontSize: 10, letterSpacing: '.15em', textTransform: 'uppercase', opacity: .6 }}>
        <span>© 2026 surya amitrano</span>
        <span>suryaamitrano.com</span>
      </div>
      <style>{`
        @media (max-width: 820px){.r-footer-body{grid-template-columns: 1fr !important}}
        @media (max-width: 820px){.r-footer-body > div{padding-left: 0 !important; padding-right: 0 !important}}
      `}</style>
    </footer>
  );
}
function FooterCol({ title, items, onNav }) {
  return (
    <div>
      <div style={{ fontFamily: 'ui-monospace, monospace', fontSize: 10, letterSpacing: '.22em', textTransform: 'uppercase', opacity: .7, marginBottom: 14 }}>{title}</div>
      {items.map(it => (
        <a key={it.k} onClick={(e) => { e.preventDefault(); onNav(it.k); }} href={`#${it.k}`} style={{ display: 'block', color: 'inherit', textDecoration: 'none', fontFamily: '"DM Serif Display", Georgia, serif', fontSize: 18, marginBottom: 8, transition: 'color .15s' }}
          onMouseEnter={(e) => e.currentTarget.style.color = RP.ochre}
          onMouseLeave={(e) => e.currentTarget.style.color = 'inherit'}>{it.l}</a>
      ))}
    </div>
  );
}

Object.assign(window, { RP, Marquee, RButton, RefinedHeader, RSectionHeader, RSectionBand, RefinedFooter });
