// Refined direction — page contents.

// ─── HOME ───────────────────────────────────────────────────────────
function RHome({ onNav, t }) {
  return (
    <>
      {/* Hero — editorial, asymmetric */}
      <section style={{ padding: '60px 48px 40px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1.3fr 1fr', gap: 56, alignItems: 'end', minHeight: 540 }} className="r-hero-grid">
          <div>
            <div style={{ fontFamily: 'ui-monospace, monospace', fontSize: 11, letterSpacing: '.22em', color: RP.terracotta, textTransform: 'uppercase', marginBottom: 28, display: 'flex', alignItems: 'center', gap: 10 }}>
              <span style={{ width: 28, height: 1, background: RP.terracotta, display: 'inline-block' }} />
              brazil → sweden · 2026
            </div>
            <h1 style={{
              fontFamily: '"DM Serif Display", Georgia, serif',
              fontSize: 'clamp(56px, 9vw, 144px)', lineHeight: .92, fontWeight: 400,
              margin: '0 0 30px', color: RP.ink, letterSpacing: '-.025em',
            }}>
              worlds<br />
              <span style={{ fontFamily: 'Fraunces, Georgia, serif', fontStyle: 'italic', color: RP.terracotta }}>between</span><br />
              words, colour,<br />
              &amp; sound.
            </h1>
            <p style={{ fontSize: 19, lineHeight: 1.6, color: RP.inkSoft, maxWidth: 480, marginBottom: 30 }}>
              {t.tagline} <strong style={{ color: RP.ink, fontWeight: 600 }}>{t.heroRole}</strong> {t.heroClose}
            </p>
            <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
              <RButton tone={RP.ink} onClick={() => onNav('portfolio')}>{t.exploreWork}</RButton>
              <RButton tone={RP.ink} variant="outline" onClick={() => onNav('music')}>{t.listenNow}</RButton>
            </div>
          </div>
          <Reveal y={30} delay={200}>
            <div style={{ position: 'relative' }}>
              <PortraitPlaceholder caption="portrait · real photo goes here" tone={RP.sage} style={{ aspectRatio: '4/5', borderRadius: 4 }} />
              <div style={{
                position: 'absolute', bottom: -18, left: -18,
                background: RP.paper, border: `1px solid ${RP.line}`,
                padding: '10px 16px', fontFamily: 'ui-monospace, monospace', fontSize: 10, letterSpacing: '.18em', textTransform: 'uppercase', color: RP.inkSoft,
              }}>est. 2018 · gbg</div>
            </div>
          </Reveal>
        </div>
        <style>{`@media (max-width: 820px){.r-hero-grid{grid-template-columns: 1fr !important}}`}</style>
      </section>

      {/* Marquee */}
      <section style={{ padding: '40px 0', borderTop: `1px solid ${RP.line}`, borderBottom: `1px solid ${RP.line}` }}>
        <Marquee items={['words', 'colour', 'sound', 'brasil', 'sverige', 'felice 2026']} speed={50} />
      </section>

      {/* Three worlds */}
      <section style={{ padding: '100px 48px 60px', background: `color-mix(in oklch, ${RP.sage} 14%, ${RP.paper})`, borderTop: `1px solid color-mix(in oklch, ${RP.sage} 30%, ${RP.paper})`, borderBottom: `1px solid color-mix(in oklch, ${RP.sage} 30%, ${RP.paper})` }}>
        <RSectionHeader kicker={t.threeWorldsKicker} title={t.threeWorldsTitle} titleItalic={t.threeWorldsTitleItalic} accent={RP.sage} subtitle={t.threeWorldsSubtitle} />
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 1, marginTop: 48, background: RP.line }} className="r-pillars">
          {[
            { k: 'words', n: '01', title: t.pillars1Title, copy: t.pillars1Copy, accent: RP.terracotta, go: 'portfolio' },
            { k: 'colour', n: '02', title: t.pillars2Title, copy: t.pillars2Copy, accent: RP.ochre, go: 'portfolio' },
            { k: 'sound', n: '03', title: t.pillars3Title, copy: t.pillars3Copy, accent: RP.sage, go: 'music' },
          ].map(p => (
            <div key={p.k} onClick={() => onNav(p.go)} style={{
              background: RP.paper, padding: '40px 32px 44px', cursor: 'pointer',
              transition: 'background .25s', position: 'relative',
            }}
              onMouseEnter={(e) => e.currentTarget.style.background = RP.paperDeep}
              onMouseLeave={(e) => e.currentTarget.style.background = RP.paper}>
              <div style={{ fontFamily: 'ui-monospace, monospace', fontSize: 10, letterSpacing: '.22em', color: p.accent, textTransform: 'uppercase', marginBottom: 24 }}>{p.n} / 03</div>
              <div style={{ fontFamily: '"DM Serif Display", Georgia, serif', fontSize: 48, color: RP.ink, fontWeight: 400, marginBottom: 12, letterSpacing: '-.01em' }}>{p.title}</div>
              <div style={{ fontSize: 15, lineHeight: 1.55, color: RP.inkSoft, marginBottom: 24 }}>{p.copy}</div>
              <div style={{ fontFamily: 'Fraunces, Georgia, serif', fontSize: 14, fontStyle: 'italic', color: p.accent }}>explore →</div>
            </div>
          ))}
        </div>
        <style>{`@media (max-width: 820px){.r-pillars{grid-template-columns: 1fr !important}}`}</style>
      </section>

      {/* Recent work */}
      <section style={{ padding: '60px 48px', background: `color-mix(in oklch, ${RP.marigold} 16%, ${RP.paper})`, borderBottom: `1px solid color-mix(in oklch, ${RP.marigold} 32%, ${RP.paper})` }}>
        <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', marginBottom: 32, flexWrap: 'wrap', gap: 16 }}>
          <RSectionHeader kicker={t.recentKicker} title={t.recentTitle} titleItalic={t.recentTitleItalic} accent={RP.terracottaDeep} />
          <a onClick={(e) => { e.preventDefault(); onNav('portfolio'); }} href="#portfolio" style={{ fontFamily: 'Fraunces, Georgia, serif', fontStyle: 'italic', fontSize: 16, color: RP.terracottaDeep, textDecoration: 'none' }}>{t.viewAllPortfolio}</a>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr', gridAutoRows: '1fr', gap: 16, aspectRatio: '3/1.6' }} className="r-work-grid">
          <div style={{ gridRow: 'span 2' }}>
            <PaletteTile palette={PORTFOLIO[1].palette} label={PORTFOLIO[1].title} sub={PORTFOLIO[1].client} style={{ height: '100%' }} radius={4} />
          </div>
          {[0, 2, 4, 5].map((i) => (
            <PaletteTile key={PORTFOLIO[i].id} palette={PORTFOLIO[i].palette} label={PORTFOLIO[i].title} sub={PORTFOLIO[i].client} style={{ height: '100%' }} radius={4} compact />
          ))}
        </div>
        <style>{`@media (max-width: 820px){.r-work-grid{grid-template-columns: 1fr 1fr !important; aspect-ratio: auto !important; grid-auto-rows: 200px !important}}`}</style>
      </section>

      {/* Upcoming */}
      <section style={{ padding: '100px 48px' }}>
        <Reveal>
          <div style={{ borderTop: `1px solid ${RP.line}`, borderBottom: `1px solid ${RP.line}`, padding: '48px 0', display: 'grid', gridTemplateColumns: 'auto 1fr auto', gap: 40, alignItems: 'center' }} className="r-upcoming">
            <div style={{ fontFamily: 'ui-monospace, monospace', fontSize: 11, letterSpacing: '.22em', color: RP.terracotta, textTransform: 'uppercase', writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}>{t.upcomingLabel}</div>
            <div>
              <div style={{ fontFamily: '"DM Serif Display", Georgia, serif', fontSize: 64, color: RP.ink, letterSpacing: '-.02em', lineHeight: 1, marginBottom: 12 }}>
                <span style={{ fontFamily: 'Fraunces, Georgia, serif', fontStyle: 'italic' }}>Felice</span>{t.upcomingSubtext}
              </div>
              <p style={{ color: RP.inkSoft, fontSize: 16, lineHeight: 1.6, margin: 0, maxWidth: 640 }}>{UPCOMING_ALBUM.blurb}</p>
            </div>
            <RButton tone={RP.terracotta} onClick={() => onNav('music')}>{t.presave}</RButton>
          </div>
        </Reveal>
        <style>{`@media (max-width: 820px){.r-upcoming{grid-template-columns: 1fr !important}}`}</style>
      </section>
    </>
  );
}

// ─── PORTFOLIO ──────────────────────────────────────────────────────
function RPortfolio({ onOpen, t }) {
  const [cat, setCat] = React.useState('all');
  const catTKey = { all: 'catAll', books: 'catBooks', brand: 'catBrand', illustration: 'catIllustration', music: 'catMusic' };
  const items = cat === 'all' ? PORTFOLIO : PORTFOLIO.filter(p => p.cat === cat);
  return (
    <>
      <section style={{ padding: '60px 48px 40px', background: `color-mix(in oklch, ${RP.terracotta} 14%, ${RP.paper})`, borderBottom: `1px solid color-mix(in oklch, ${RP.terracotta} 30%, ${RP.paper})` }}>
        <RSectionHeader kicker={t.portfolioKicker} title={t.portfolioTitle} titleItalic={t.portfolioTitleItalic} accent={RP.terracottaDeep} subtitle={t.portfolioSubtitle} />
      </section>
      <section style={{ padding: '0 48px 40px' }}>
        <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap', borderBottom: `1px solid ${RP.line}`, paddingBottom: 16 }}>
          {PORTFOLIO_CATS.map(c => (
            <button key={c.id} onClick={() => setCat(c.id)} style={{
              background: cat === c.id ? RP.ink : 'transparent',
              color: cat === c.id ? RP.paper : RP.inkSoft,
              border: `1px solid ${cat === c.id ? RP.ink : RP.line}`, borderRadius: 999,
              padding: '8px 16px', fontFamily: 'Fraunces, Georgia, serif', fontSize: 14, fontStyle: cat === c.id ? 'italic' : 'normal',
              cursor: 'pointer', transition: 'all .15s',
            }}>{t[catTKey[c.id]] || c.label}</button>
          ))}
        </div>
      </section>
      <section style={{ padding: '20px 48px 100px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24 }} className="r-port-grid">
          {items.map((p, i) => (
            <Reveal key={p.id} delay={i * 40}>
              <div onClick={() => onOpen(p)} style={{ cursor: 'pointer' }}
                onMouseEnter={(e) => { const img = e.currentTarget.querySelector('.r-port-img'); if (img) img.style.transform = 'scale(1.03)'; }}
                onMouseLeave={(e) => { const img = e.currentTarget.querySelector('.r-port-img'); if (img) img.style.transform = ''; }}>
                <div style={{ overflow: 'hidden', borderRadius: 4 }}>
                  <div className="r-port-img" style={{ transition: 'transform .5s cubic-bezier(.2,.7,.2,1)' }}>
                    <PaletteTile palette={p.palette} style={{ aspectRatio: '4/5' }} radius={4} />
                  </div>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginTop: 14, gap: 10 }}>
                  <div>
                    <div style={{ fontFamily: '"DM Serif Display", Georgia, serif', fontSize: 19, color: RP.ink, lineHeight: 1.25 }}>{p.title}</div>
                    <div style={{ fontFamily: 'ui-monospace, monospace', fontSize: 10, color: RP.inkSoft, letterSpacing: '.15em', textTransform: 'uppercase', marginTop: 4 }}>{p.client} · {p.year}</div>
                  </div>
                  <span style={{ fontFamily: 'Fraunces, Georgia, serif', fontStyle: 'italic', fontSize: 13, color: RP.terracotta }}>{t.viewItem}</span>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
        <style>{`@media (max-width: 820px){.r-port-grid{grid-template-columns: 1fr 1fr !important}}`}</style>
      </section>
    </>
  );
}

// ─── MUSIC ──────────────────────────────────────────────────────────
function RMusic({ t }) {
  const [expanded, setExpanded] = React.useState(null);
  return (
    <>
      <section style={{ padding: '60px 48px 40px', background: `color-mix(in oklch, ${RP.blue} 16%, ${RP.paper})`, borderBottom: `1px solid color-mix(in oklch, ${RP.blue} 32%, ${RP.paper})` }}>
        <RSectionHeader kicker={t.musicKicker} title={t.musicTitle} titleItalic={t.musicTitleItalic} accent={RP.blue} subtitle={t.musicSubtitle} />
      </section>

      {/* Upcoming EP feature — real Spotify embed */}
      <section style={{ padding: '40px 48px' }}>
        <Reveal>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.2fr', gap: 48, alignItems: 'start', borderTop: `1px solid ${RP.line}`, paddingTop: 40 }} className="r-music-top">
            <div>
              <div style={{ fontFamily: 'ui-monospace, monospace', fontSize: 11, letterSpacing: '.22em', color: RP.terracotta, textTransform: 'uppercase', marginBottom: 14 }}>UPCOMING · {UPCOMING_ALBUM.release}</div>
              <div style={{ fontFamily: '"DM Serif Display", Georgia, serif', fontSize: 72, color: RP.ink, fontWeight: 400, letterSpacing: '-.02em', lineHeight: 1, marginBottom: 14 }}>
                <span style={{ fontFamily: 'Fraunces, Georgia, serif', fontStyle: 'italic' }}>felice</span>
              </div>
              <div style={{ fontFamily: 'ui-monospace, monospace', fontSize: 10, letterSpacing: '.15em', color: RP.inkSoft, marginBottom: 18, textTransform: 'uppercase' }}>{UPCOMING_ALBUM.tag}</div>
              <p style={{ color: RP.inkSoft, lineHeight: 1.65, fontSize: 15, marginBottom: 26 }}>{UPCOMING_ALBUM.blurb}</p>
              <div style={{ border: `1px solid ${RP.line}`, borderRadius: 4, padding: 16, background: RP.paperSoft }}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr auto', gap: 14, alignItems: 'center', marginBottom: 14 }}>
                  <div>
                    <div style={{ fontFamily: '"DM Serif Display", Georgia, serif', fontSize: 18, color: RP.ink, lineHeight: 1.2 }}>{t.tracklist}</div>
                    <div style={{ fontFamily: 'ui-monospace, monospace', fontSize: 9, color: RP.inkSoft, letterSpacing: '.15em', textTransform: 'uppercase', marginTop: 2 }}>full album drops {UPCOMING_ALBUM.release}</div>
                  </div>
                  <RButton tone={RP.terracotta} href={SOCIALS.spotify} small>{t.presave}</RButton>
                </div>
                {UPCOMING_ALBUM.tracks.map((tr, i) => (
                  <div key={i} style={{ display: 'grid', gridTemplateColumns: 'auto 1fr auto auto', gap: 14, alignItems: 'center', padding: '10px 0', borderTop: i === 0 ? 'none' : `1px solid ${RP.line}` }}>
                    <span style={{ fontFamily: 'ui-monospace, monospace', fontSize: 10, color: RP.inkSofter, letterSpacing: '.12em' }}>{tr.n}</span>
                    <span style={{ fontFamily: '"DM Serif Display", Georgia, serif', fontSize: 17, color: RP.ink }}>{tr.title}</span>
                    <span style={{ fontFamily: 'ui-monospace, monospace', fontSize: 9, color: RP.inkSoft, letterSpacing: '.1em', textTransform: 'uppercase', border: `1px solid ${RP.line}`, padding: '2px 6px', borderRadius: 3 }}>{tr.lang}</span>
                    <span style={{ fontFamily: 'ui-monospace, monospace', fontSize: 11, color: RP.inkSoft }}>{tr.dur}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <div style={{
                borderRadius: 12, overflow: 'hidden',
                boxShadow: '0 20px 60px -20px rgba(47,42,34,.25), 0 0 0 1px ' + RP.line,
              }}>
                <iframe
                  src={UPCOMING_ALBUM.spotifyEmbed}
                  width="100%" height="352"
                  frameBorder="0" allowFullScreen
                  allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                  loading="lazy"
                  title="Felice on Spotify"
                  style={{ display: 'block', border: 'none' }}
                />
              </div>
              <div style={{ marginTop: 14, fontFamily: 'ui-monospace, monospace', fontSize: 10, color: RP.inkSofter, letterSpacing: '.18em', textTransform: 'uppercase', textAlign: 'center' }}>
                {t.listenCatalogue}
              </div>
            </div>
          </div>
        </Reveal>
        <style>{`@media (max-width: 820px){.r-music-top{grid-template-columns: 1fr !important}}`}</style>
      </section>

      {/* Discography list — click to expand the Spotify embed */}
      <section style={{ padding: '60px 48px 100px', background: `color-mix(in oklch, ${RP.marigold} 14%, ${RP.paper})`, borderTop: `1px solid color-mix(in oklch, ${RP.marigold} 30%, ${RP.paper})` }}>
        <RSectionHeader kicker={t.discKicker} title={t.discTitle} titleItalic={t.discTitleItalic} accent={RP.ochre} />
        <div style={{ marginTop: 36 }}>
          {DISCOGRAPHY.map((d, i) => {
            const isOpen = expanded === d.n;
            const embedSrc = d.spotifyId
              ? `https://open.spotify.com/embed/album/${d.spotifyId}?utm_source=generator`
              : SPOTIFY_ARTIST_EMBED;
            return (
              <Reveal key={d.n} delay={i * 50}>
                <div style={{ borderBottom: `1px solid ${RP.line}` }}>
                  <div style={{
                    display: 'grid', gridTemplateColumns: '60px 80px 1fr auto auto auto', gap: 24, alignItems: 'center',
                    padding: '22px 0', cursor: 'pointer', transition: 'padding .2s',
                  }}
                    onMouseEnter={(e) => e.currentTarget.style.paddingLeft = '16px'}
                    onMouseLeave={(e) => e.currentTarget.style.paddingLeft = '0'}
                    onClick={() => setExpanded(isOpen ? null : d.n)}>
                    <span style={{ fontFamily: 'ui-monospace, monospace', fontSize: 12, color: RP.inkSofter, letterSpacing: '.15em' }}>0{d.n}</span>
                    <PaletteTile palette={d.palette} style={{ aspectRatio: '1/1', width: 60 }} radius={2} />
                    <span style={{ fontFamily: '"DM Serif Display", Georgia, serif', fontSize: 36, color: RP.ink, letterSpacing: '-.01em' }}>{d.title}</span>
                    <span style={{ fontFamily: 'Fraunces, Georgia, serif', fontStyle: 'italic', fontSize: 14, color: RP.inkSoft }}>{d.year}</span>
                    <span style={{
                      fontFamily: 'ui-monospace, monospace', fontSize: 10, letterSpacing: '.18em', textTransform: 'uppercase',
                      color: isOpen ? RP.terracotta : RP.inkSofter,
                      border: `1px solid ${isOpen ? RP.terracotta : RP.line}`, padding: '6px 10px', borderRadius: 3,
                    }}>{isOpen ? t.closeBtn : t.listenBtn}</span>
                    <span style={{
                      display: 'inline-flex', width: 28, height: 28, alignItems: 'center', justifyContent: 'center',
                      transform: isOpen ? 'rotate(90deg)' : 'rotate(0deg)', transition: 'transform .2s', color: RP.ink,
                    }}><Icon name="arrow-right" size={18} /></span>
                  </div>
                  <div style={{
                    maxHeight: isOpen ? 200 : 0, overflow: 'hidden', transition: 'max-height .35s ease, margin .3s, padding .3s',
                    marginBottom: isOpen ? 24 : 0,
                  }}>
                    {isOpen && (
                      <div style={{ borderRadius: 10, overflow: 'hidden', boxShadow: '0 0 0 1px ' + RP.line }}>
                        <iframe
                          src={embedSrc}
                          width="100%" height="152"
                          frameBorder="0"
                          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                          loading="lazy"
                          title={`${d.title} on Spotify`}
                          style={{ display: 'block', border: 'none' }}
                        />
                      </div>
                    )}
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
        <div style={{ marginTop: 32, fontFamily: 'ui-monospace, monospace', fontSize: 10, color: RP.inkSofter, letterSpacing: '.18em', textTransform: 'uppercase' }}>
          * albums without a direct link open the artist page · add each album's spotifyId in <span style={{ color: RP.terracotta }}>shared.jsx</span> to wire the individual player
        </div>
      </section>
    </>
  );
}

// ─── PRESS ──────────────────────────────────────────────────────────
function RPress({ t }) {
  return (
    <>
      <section style={{ padding: '60px 48px 40px', background: `color-mix(in oklch, ${RP.brown} 13%, ${RP.paper})`, borderBottom: `1px solid color-mix(in oklch, ${RP.brown} 28%, ${RP.paper})` }}>
        <RSectionHeader kicker="media & coverage" title="press" titleItalic="& media" accent={RP.brown} subtitle="Coverage, interviews, and mentions. For press inquiries or to download the media kit, get in touch." />
      </section>
      <section style={{ padding: '20px 48px 40px' }}>
        {PRESS_ITEMS.map((p, i) => (
          <Reveal key={i} delay={i * 50}>
            <div style={{ display: 'grid', gridTemplateColumns: '180px 1fr 120px auto', gap: 28, alignItems: 'center', padding: '28px 0', borderTop: `1px solid ${RP.line}`, cursor: 'pointer', transition: 'all .2s' }}
              onMouseEnter={(e) => e.currentTarget.style.paddingLeft = '16px'}
              onMouseLeave={(e) => e.currentTarget.style.paddingLeft = '0'}>
              <div>
                <div style={{ fontFamily: '"DM Serif Display", Georgia, serif', fontSize: 22, color: RP.terracotta, letterSpacing: '-.01em' }}>{p.outlet}</div>
              </div>
              <div style={{ fontFamily: '"DM Serif Display", Georgia, serif', fontSize: 24, color: RP.ink, lineHeight: 1.3, letterSpacing: '-.01em' }}>"{p.title}"</div>
              <div style={{ fontFamily: 'ui-monospace, monospace', fontSize: 10, color: RP.inkSoft, letterSpacing: '.15em', textTransform: 'uppercase', textAlign: 'right' }}>{p.date}</div>
              <Icon name="arrow-right" size={18} />
            </div>
          </Reveal>
        ))}
      </section>
      <section style={{ padding: '60px 48px 100px' }}>
        <Reveal>
          <div style={{ background: RP.ink, color: RP.paper, borderRadius: 4, padding: '56px 48px', display: 'grid', gridTemplateColumns: '1fr auto', gap: 36, alignItems: 'center' }} className="r-mediakit">
            <div>
              <div style={{ fontFamily: 'ui-monospace, monospace', fontSize: 11, letterSpacing: '.22em', color: RP.ochre, textTransform: 'uppercase', marginBottom: 12 }}>press resources</div>
              <h3 style={{ fontFamily: '"DM Serif Display", Georgia, serif', fontSize: 48, margin: 0, fontWeight: 400, letterSpacing: '-.02em' }}>download the <span style={{ fontFamily: 'Fraunces', fontStyle: 'italic', color: RP.ochre }}>media kit</span></h3>
              <p style={{ marginTop: 14, fontSize: 16, lineHeight: 1.55, opacity: .85, maxWidth: 520 }}>Hi-res photos, biography in EN / PT / SV, press releases, and official logos — all in one place.</p>
            </div>
            <RButton tone={RP.paper} style={{ color: RP.ink, background: RP.paper }} href={`mailto:${SOCIALS.press}?subject=Media kit request`}>{t.requestMediaKit}</RButton>
          </div>
        </Reveal>
        <style>{`@media (max-width: 820px){.r-mediakit{grid-template-columns: 1fr !important}}`}</style>
      </section>
    </>
  );
}

// ─── ABOUT ──────────────────────────────────────────────────────────
function RAbout({ t }) {
  return (
    <>
      <section style={{ padding: '60px 48px 60px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1.1fr 1.5fr', gap: 60, alignItems: 'start' }} className="r-about-grid">
          <Reveal>
            <PortraitPlaceholder caption="portrait · drop real photo" tone={RP.sage} style={{ aspectRatio: '4/5', borderRadius: 4 }} />
            <div style={{ marginTop: 18, fontFamily: 'ui-monospace, monospace', fontSize: 10, color: RP.inkSoft, letterSpacing: '.2em', textTransform: 'uppercase' }}>{t.studioCaption}</div>
          </Reveal>
          <Reveal delay={120}>
            <div style={{ fontFamily: 'ui-monospace, monospace', fontSize: 11, letterSpacing: '.22em', color: RP.terracotta, textTransform: 'uppercase', marginBottom: 20 }}>
              <span style={{ width: 28, height: 1, background: RP.terracotta, display: 'inline-block', marginRight: 10, verticalAlign: 'middle' }} />
              {t.aboutKicker}
            </div>
            <h1 style={{ fontFamily: '"DM Serif Display", Georgia, serif', fontSize: 'clamp(48px, 6vw, 88px)', margin: '0 0 32px', fontWeight: 400, color: RP.ink, letterSpacing: '-.02em', lineHeight: .98 }}>
              hi, i'm <span style={{ fontFamily: 'Fraunces', fontStyle: 'italic', color: RP.terracotta }}>surya</span>.
            </h1>
            <p style={{ fontFamily: '"DM Serif Display", Georgia, serif', fontSize: 24, lineHeight: 1.5, color: RP.ink, marginBottom: 26 }}>
              {t.aboutIntro}
            </p>
            <p style={{ fontSize: 17, lineHeight: 1.75, color: RP.inkSoft, marginBottom: 18 }}>
              {t.aboutBody1}
            </p>
            <p style={{ fontSize: 17, lineHeight: 1.75, color: RP.inkSoft, marginBottom: 32 }}>
              {t.aboutBody2}
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24, borderTop: `1px solid ${RP.line}`, paddingTop: 28 }}>
              {[
                { k: t.statAlbumsNum, v: t.statAlbumsLabel },
                { k: t.statBooksNum, v: t.statBooksLabel },
                { k: t.statLangNum, v: t.statLangLabel },
              ].map(s => (
                <div key={s.k}>
                  <div style={{ fontFamily: '"DM Serif Display", Georgia, serif', fontSize: 38, color: RP.terracotta, fontStyle: 'italic', fontFamily: 'Fraunces', letterSpacing: '-.01em' }}>{s.k}</div>
                  <div style={{ fontFamily: 'ui-monospace, monospace', fontSize: 10, color: RP.inkSoft, letterSpacing: '.15em', textTransform: 'uppercase', marginTop: 4 }}>{s.v}</div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
        <style>{`@media (max-width: 820px){.r-about-grid{grid-template-columns: 1fr !important}}`}</style>
      </section>
    </>
  );
}

// ─── CONTACT ────────────────────────────────────────────────────────
function RContact({ t }) {
  const [form, setForm] = React.useState({ name: '', email: '', topic: 'general', message: '' });
  const [sent, setSent] = React.useState(false);
  const [errors, setErrors] = React.useState({});
  const submit = (e) => {
    e.preventDefault();
    const err = {};
    if (!form.name.trim()) err.name = t.errName;
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) err.email = t.errEmail;
    if (form.message.trim().length < 10) err.message = t.errMessage;
    setErrors(err);
    if (Object.keys(err).length === 0) setSent(true);
  };
  const input = {
    width: '100%', padding: '12px 0', border: 'none', borderBottom: `1px solid ${RP.line}`,
    background: 'transparent', fontFamily: 'inherit', fontSize: 16, color: RP.ink, outline: 'none',
    transition: 'border-color .15s',
  };
  return (
    <>
      <section style={{ padding: '60px 48px 40px', background: `color-mix(in oklch, ${RP.sage} 14%, ${RP.paper})`, borderBottom: `1px solid color-mix(in oklch, ${RP.sage} 30%, ${RP.paper})` }}>
        <RSectionHeader kicker="get in touch" title="let's" titleItalic="talk" accent={RP.sage} subtitle="For commissions, press inquiries, speaking engagements, or just to say hi." />
      </section>
      <section style={{ padding: '20px 48px 100px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.4fr', gap: 80, alignItems: 'start' }} className="r-contact-grid">
          <Reveal>
            <div style={{ fontFamily: 'ui-monospace, monospace', fontSize: 10, letterSpacing: '.22em', color: RP.inkSoft, textTransform: 'uppercase', marginBottom: 28 }}>reach out</div>
            <div style={{ marginBottom: 36 }}>
              <div style={{ fontFamily: 'ui-monospace, monospace', fontSize: 10, letterSpacing: '.18em', color: RP.inkSofter, textTransform: 'uppercase', marginBottom: 6 }}>general</div>
              <a href={`mailto:${SOCIALS.email}`} style={{ fontFamily: '"DM Serif Display", Georgia, serif', fontSize: 28, color: RP.ink, textDecoration: 'none' }}>{SOCIALS.email}</a>
            </div>
            <div style={{ marginBottom: 36 }}>
              <div style={{ fontFamily: 'ui-monospace, monospace', fontSize: 10, letterSpacing: '.18em', color: RP.inkSofter, textTransform: 'uppercase', marginBottom: 6 }}>press</div>
              <a href={`mailto:${SOCIALS.press}`} style={{ fontFamily: '"DM Serif Display", Georgia, serif', fontSize: 28, color: RP.ink, textDecoration: 'none' }}>{SOCIALS.press}</a>
            </div>
            <div>
              <div style={{ fontFamily: 'ui-monospace, monospace', fontSize: 10, letterSpacing: '.18em', color: RP.inkSofter, textTransform: 'uppercase', marginBottom: 12 }}>elsewhere</div>
              <div style={{ display: 'flex', gap: 16 }}>
                <a href={SOCIALS.instagram} target="_blank" rel="noreferrer" style={{ color: RP.ink }}><Icon name="instagram" size={22} /></a>
                <a href={SOCIALS.youtube} target="_blank" rel="noreferrer" style={{ color: RP.ink }}><Icon name="youtube" size={22} /></a>
                <a href={SOCIALS.spotify} target="_blank" rel="noreferrer" style={{ color: RP.ink }}><Icon name="spotify" size={22} /></a>
                <a href={SOCIALS.tiktok} target="_blank" rel="noreferrer" style={{ color: RP.ink }}><Icon name="tiktok" size={22} /></a>
              </div>
            </div>
          </Reveal>
          <Reveal delay={120}>
            {sent ? (
              <div style={{ padding: '60px 40px', textAlign: 'center', borderTop: `2px solid ${RP.terracotta}`, borderBottom: `2px solid ${RP.terracotta}` }}>
                <div style={{ fontFamily: '"DM Serif Display", Georgia, serif', fontSize: 48, color: RP.ink, marginBottom: 12, fontWeight: 400 }}>{t.thankYouPrefix}<span style={{ fontFamily: 'Fraunces', fontStyle: 'italic', color: RP.terracotta }}>{form.name || t.thankYouFallback}</span></div>
                <p style={{ color: RP.inkSoft, lineHeight: 1.6 }}>{t.thankYouMsg}</p>
              </div>
            ) : (
              <form onSubmit={submit} style={{ display: 'flex', flexDirection: 'column', gap: 28 }}>
                <RFieldLine label={t.nameLabel} error={errors.name}>
                  <input value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} style={input} />
                </RFieldLine>
                <RFieldLine label={t.emailLabel} error={errors.email}>
                  <input type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} style={input} />
                </RFieldLine>
                <RFieldLine label={t.topicLabel}>
                  <select value={form.topic} onChange={(e) => setForm({ ...form, topic: e.target.value })} style={input}>
                    <option value="general">{t.topicGeneral}</option>
                    <option value="commission">{t.topicCommission}</option>
                    <option value="press">{t.topicPress}</option>
                    <option value="speaking">{t.topicSpeaking}</option>
                    <option value="music">{t.topicMusic}</option>
                  </select>
                </RFieldLine>
                <RFieldLine label={t.messageLabel} error={errors.message}>
                  <textarea rows={4} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} style={{ ...input, resize: 'vertical' }} />
                </RFieldLine>
                <RButton tone={RP.ink} style={{ alignSelf: 'flex-start', marginTop: 8 }}>{t.sendMessage}</RButton>
              </form>
            )}
          </Reveal>
        </div>
        <style>{`@media (max-width: 820px){.r-contact-grid{grid-template-columns: 1fr !important; gap: 40px !important}}`}</style>
      </section>
    </>
  );
}
function RFieldLine({ label, error, children }) {
  return (
    <label>
      <div style={{ fontFamily: 'ui-monospace, monospace', fontSize: 10, letterSpacing: '.22em', color: RP.inkSoft, textTransform: 'uppercase', marginBottom: 4 }}>{label}</div>
      {children}
      {error && <div style={{ color: RP.terracotta, fontSize: 12, fontStyle: 'italic', marginTop: 4, fontFamily: 'Fraunces, Georgia, serif' }}>{error}</div>}
    </label>
  );
}

// ─── SHOP ───────────────────────────────────────────────────────────
function RShop({ t }) {
  const [cart, setCart] = React.useState([]);
  const [step, setStep] = React.useState('shop');
  const add = (item) => setCart(c => {
    const ex = c.find(x => x.id === item.id);
    if (ex) return c.map(x => x.id === item.id ? { ...x, qty: x.qty + 1 } : x);
    return [...c, { ...item, qty: 1 }];
  });
  const remove = (id) => setCart(c => c.filter(x => x.id !== id));
  const total = cart.reduce((s, x) => s + x.price * x.qty, 0);
  const input = {
    width: '100%', padding: '12px 0', border: 'none', borderBottom: `1px solid ${RP.line}`,
    background: 'transparent', fontFamily: 'inherit', fontSize: 16, color: RP.ink, outline: 'none',
  };

  return (
    <>
      <section style={{ padding: '60px 48px 40px', background: `color-mix(in oklch, ${RP.terracotta} 14%, ${RP.paper})`, borderBottom: `1px solid color-mix(in oklch, ${RP.terracotta} 30%, ${RP.paper})` }}>
        <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', gap: 20, flexWrap: 'wrap' }}>
          <RSectionHeader kicker={t.shopSoon} title="prints, books" titleItalic="& more" accent={RP.terracottaDeep} subtitle={t.shopBlurb} />
          {step === 'shop' && (
            <button onClick={() => setStep('cart')} style={{
              display: 'flex', alignItems: 'center', gap: 8,
              background: 'transparent', color: RP.ink, border: `1px solid ${RP.ink}`, borderRadius: 999,
              padding: '10px 18px', fontFamily: 'Fraunces, Georgia, serif', fontStyle: 'italic', fontSize: 14, cursor: 'pointer',
            }}>
              <Icon name="cart" size={16} /> {t.cartLabel} ({cart.reduce((s, x) => s + x.qty, 0)})
            </button>
          )}
        </div>
      </section>

      {step === 'shop' && (
        <section style={{ padding: '40px 48px 100px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 36 }} className="r-shop-grid">
            {SHOP_ITEMS.map((s, i) => (
              <Reveal key={s.id} delay={i * 40}>
                <div>
                  <div style={{ overflow: 'hidden', borderRadius: 4, position: 'relative' }}>
                    <PaletteTile palette={s.palette} style={{ aspectRatio: '4/5' }} radius={4} />
                    {s.stock === 'sold out' && (
                      <div style={{ position: 'absolute', inset: 0, background: 'rgba(34,32,28,.45)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: RP.paper, fontFamily: 'Fraunces, Georgia, serif', fontStyle: 'italic', fontSize: 28 }}>{t.soldOut}</div>
                    )}
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginTop: 16, gap: 16 }}>
                    <div>
                      <div style={{ fontFamily: '"DM Serif Display", Georgia, serif', fontSize: 20, color: RP.ink, lineHeight: 1.25 }}>{s.title}</div>
                      <div style={{ fontFamily: 'ui-monospace, monospace', fontSize: 10, color: RP.inkSoft, letterSpacing: '.1em', textTransform: 'uppercase', marginTop: 4 }}>{s.kind}</div>
                    </div>
                    <div style={{ fontFamily: 'Fraunces, Georgia, serif', fontStyle: 'italic', fontSize: 20, color: RP.terracotta }}>{s.currency}{s.price}</div>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 12 }}>
                    <span style={{ fontFamily: 'ui-monospace, monospace', fontSize: 10, color: RP.inkSofter, letterSpacing: '.12em', textTransform: 'uppercase' }}>{s.stock}</span>
                    <button disabled={s.stock === 'sold out'} onClick={() => add(s)} style={{
                      background: 'transparent', color: s.stock === 'sold out' ? RP.inkSofter : RP.ink,
                      border: 'none', fontFamily: 'Fraunces, Georgia, serif', fontStyle: 'italic', fontSize: 14,
                      cursor: s.stock === 'sold out' ? 'not-allowed' : 'pointer', padding: 0,
                    }}>{s.stock === 'sold out' ? t.notifyMe : t.addToCart}</button>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
          <style>{`@media (max-width: 820px){.r-shop-grid{grid-template-columns: 1fr 1fr !important}}`}</style>
        </section>
      )}

      {step === 'cart' && (
        <section style={{ padding: '40px 48px 100px', maxWidth: 800, margin: '0 auto' }}>
          {cart.length === 0 ? (
            <div style={{ textAlign: 'center', padding: '80px 0', fontFamily: 'Fraunces, Georgia, serif', fontStyle: 'italic', fontSize: 28, color: RP.inkSofter }}>{t.cartEmpty}</div>
          ) : (
            <>
              {cart.map((c, i) => (
                <div key={c.id} style={{ display: 'grid', gridTemplateColumns: '80px 1fr auto auto', gap: 20, alignItems: 'center', padding: '18px 0', borderTop: `1px solid ${RP.line}`, borderBottom: i === cart.length - 1 ? `1px solid ${RP.line}` : 'none' }}>
                  <PaletteTile palette={c.palette} style={{ aspectRatio: '1/1' }} radius={4} />
                  <div>
                    <div style={{ fontFamily: '"DM Serif Display", Georgia, serif', fontSize: 18, color: RP.ink }}>{c.title}</div>
                    <div style={{ fontFamily: 'ui-monospace, monospace', fontSize: 10, color: RP.inkSoft, letterSpacing: '.12em', textTransform: 'uppercase', marginTop: 2 }}>qty {c.qty} · {c.currency}{c.price}</div>
                  </div>
                  <div style={{ fontFamily: 'Fraunces, Georgia, serif', fontStyle: 'italic', fontSize: 20, color: RP.terracotta }}>{c.currency}{c.price * c.qty}</div>
                  <button onClick={() => remove(c.id)} style={{ background: 'none', border: 'none', color: RP.inkSofter, cursor: 'pointer', fontSize: 12, fontFamily: 'Fraunces, Georgia, serif', fontStyle: 'italic' }}>remove</button>
                </div>
              ))}
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 28 }}>
                <button onClick={() => setStep('shop')} style={{ background: 'none', border: 'none', color: RP.inkSoft, cursor: 'pointer', fontFamily: 'Fraunces, Georgia, serif', fontStyle: 'italic', fontSize: 15 }}>{t.keepBrowsing}</button>
                <div style={{ display: 'flex', alignItems: 'center', gap: 20 }}>
                  <div style={{ fontFamily: '"DM Serif Display", Georgia, serif', fontSize: 28, color: RP.ink }}>{t.total} €{total}</div>
                  <RButton tone={RP.ink} onClick={() => setStep('checkout')}>{t.checkout}</RButton>
                </div>
              </div>
            </>
          )}
        </section>
      )}

      {step === 'checkout' && (
        <section style={{ padding: '40px 48px 100px', maxWidth: 560, margin: '0 auto' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
            <RFieldLine label={t.fullName}><input style={input} /></RFieldLine>
            <RFieldLine label={t.emailLabel}><input type="email" style={input} /></RFieldLine>
            <RFieldLine label={t.shippingAddress}><input style={input} /></RFieldLine>
            <RFieldLine label={t.country}><input style={input} defaultValue="Sweden" /></RFieldLine>
            <div style={{ borderTop: `1px solid ${RP.line}`, paddingTop: 18, marginTop: 14 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 14, color: RP.inkSoft, marginBottom: 6 }}><span>{t.subtotal}</span><span>€{total}</span></div>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 14, color: RP.inkSoft, marginBottom: 6 }}><span>{t.shipping}</span><span>€6</span></div>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontFamily: '"DM Serif Display", Georgia, serif', fontSize: 24, color: RP.ink, marginTop: 10 }}><span>{t.total}</span><span>€{total + 6}</span></div>
            </div>
            <RButton tone={RP.ink} onClick={() => setStep('done')} style={{ justifyContent: 'center' }}>{t.placeOrder}</RButton>
            <div style={{ textAlign: 'center', fontFamily: 'ui-monospace, monospace', fontSize: 10, color: RP.inkSofter, letterSpacing: '.18em', textTransform: 'uppercase' }}>{t.previewNotice}</div>
          </div>
        </section>
      )}

      {step === 'done' && (
        <section style={{ padding: '60px 48px 160px', textAlign: 'center' }}>
          <div style={{ fontFamily: '"DM Serif Display", Georgia, serif', fontSize: 56, color: RP.ink, margin: '0 0 14px', fontWeight: 400 }}>{t.orderPlaced} <span style={{ fontFamily: 'Fraunces', fontStyle: 'italic', color: RP.terracotta }}>{t.orderPlacedItalic}</span></div>
          <p style={{ color: RP.inkSoft, maxWidth: 460, margin: '0 auto 28px', lineHeight: 1.6 }}>{t.orderDoneMsg}</p>
          <RButton tone={RP.ink} onClick={() => { setCart([]); setStep('shop'); }}>{t.backToShop}</RButton>
        </section>
      )}
    </>
  );
}

Object.assign(window, { RHome, RPortfolio, RMusic, RPress, RAbout, RContact, RShop });
