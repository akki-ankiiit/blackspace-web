/* global React */
// HOME page — sticker pop, refined with handmade stickers, fun statuses, Acid TM
// Uses window.SP_THEMES, SP_TYPE, SPNav, SPSticker, SPStatusSticker, SPStar, SPMarquee, SPSectionHead, SPFooter

function SPHome({ themeKey = 'classic', typeKey = 'acidGaraHelv' }) {
  const T = window.SP_THEMES[themeKey];
  const F = window.SP_TYPE[typeKey];
  const { SPNav, SPSticker, SPStatusSticker, SPStar, SPMarquee, SPSectionHead, SPFooter } = window;
  const [mint, lilac, sky, butter, peach] = T.pastels;

  const root = { width: '100%', minHeight: 2400, background: T.paper, color: T.ink, fontFamily: F.body, position: 'relative', overflow: 'hidden' };

  const hero = { padding: '60px 40px 80px', position: 'relative' };
  const heroMeta = { display: 'flex', justifyContent: 'space-between', fontSize: 11, letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: 40, fontFamily: F.body };
  const wordmark = { fontFamily: F.display, fontSize: 'clamp(180px, 24vw, 360px)', lineHeight: 0.82, fontWeight: 700, letterSpacing: '-0.06em', margin: 0, textAlign: 'center', position: 'relative', color: T.ink };
  const wordmarkItal = { fontFamily: F.italic, fontStyle: 'italic', fontWeight: 400, color: T.ink, letterSpacing: '-0.03em' };
  const heroBottom = { display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 20, marginTop: 80, alignItems: 'start' };
  const heroBlock = { fontSize: 14, lineHeight: 1.5, maxWidth: 320, fontFamily: F.body };
  const heroBlockHead = { fontSize: 11, letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: 12, opacity: 0.6 };
  const heroDek = { fontFamily: F.italic, fontStyle: 'italic', fontSize: 28, lineHeight: 1.25, textAlign: 'center', color: T.ink };

  // Floating status stickers — varied rotation, tape, torn edges
  const statusStickers = [
  { top: 10, left: 80, rotate: -8, variant: 'tape', tape: T.popA, bg: mint, icon: '◉', label: 'Right now', name: 'On Set', iconBg: T.ink, size: 'md' },
  { top: 60, right: 160, rotate: 9, variant: 'torn', bg: lilac, icon: '✂', label: 'Currently', name: 'Editing', iconBg: T.popB, size: 'md' },
  { top: 240, left: -10, rotate: -5, variant: 'tape', tape: '#b0b0b0', bg: butter, icon: '☕', label: 'Team status', name: 'Brewing Coffee', iconBg: T.popA, size: 'md' },
  { top: 320, right: 60, rotate: 7, variant: 'square', bg: peach, icon: 'AI', label: 'In the oven', name: 'Draft Engine', iconBg: T.ink, size: 'md' },
  { top: 440, left: 420, rotate: -4, variant: 'torn', bg: sky, icon: '✎', label: 'Fresh', name: 'Script Pass 3', iconBg: T.popB, size: 'md' },
  { top: 510, right: 330, rotate: 11, variant: 'tape', tape: T.popC, bg: mint, icon: '▶', label: 'Playback', name: 'Reel Cut', iconBg: T.popA, size: 'md' }];


  const services = [
  { col: 6, row: 2, bg: T.paper, n: '01 / Flagship', name: 'Content Campaigns', body: 'End-to-end. Concept, script, shoot, cut, post. One team, no handoffs, no blame.', big: true, border: true },
  { col: 3, row: 2, bg: lilac, n: '02', name: 'Scripts', body: 'Reels, ads, explainers. Words that sound like someone said them.' },
  { col: 3, row: 2, bg: sky, n: '03', name: 'Video Edits', body: 'Tight cuts, honest grades, music that earns its place.' },
  { col: 4, row: 1, bg: T.ink, dark: true, n: '04', name: 'AI Workflows', body: 'Drafts, variants, dubs, b-roll — on tap.', badge: 'NEW' },
  { col: 4, row: 1, bg: mint, n: '05', name: 'Brand Identity', body: 'Marks, type, guidelines.' },
  { col: 4, row: 1, bg: peach, n: '06', name: 'Websites & Social', body: 'Framer, reels, management.' }];


  const work = [
  { col: 7, row: 3, bg: `radial-gradient(ellipse at 30% 40%, #8a4820 0%, #1a0e08 80%)`, chip: 'CAMPAIGN · FILM', title: 'Okinawa — The 5AM Film', meta: 'Fitness · 02:14', dark: true },
  { col: 5, row: 2, bg: butter, chip: 'IDENTITY', title: 'Monarc — mark & system', meta: 'Brand · 2025' },
  { col: 5, row: 1, bg: lilac, chip: 'AI + EDIT', title: '42 reels from 1 shoot day', meta: 'Experiment' },
  { col: 4, row: 2, bg: sky, chip: 'SCRIPT', title: 'Cut skincare spec', meta: 'Campaign' },
  { col: 4, row: 2, bg: peach, chip: 'CONTENT', title: 'Office Hours series', meta: '12 eps' },
  { col: 4, row: 2, bg: mint, chip: 'WEB', title: 'Heirloom — lookbook', meta: 'Site · 2025' }];


  const why = [
  { n: '01', h: 'Writers who shoot.', b: 'Editors who pitch. Directors who care about commas. Roles blur. Work sharpens.' },
  { n: '02', h: 'Strategy before swatches.', b: 'We ask the boring questions first. Audience, channel, budget. Then the fun ones.' },
  { n: '03', h: 'Taste is the brief.', b: 'You are paying for judgment. We are the filter between fine and sharp.' },
  { n: '04', h: 'AI, as a mixer.', b: 'It speeds up the boring part so the chef can cook. The author stays human.' },
  { n: '05', h: 'One phone number.', b: 'No account layer. You talk to the people making the thing.' },
  { n: '06', h: 'We ship, then tune.', b: 'First cut is not the last cut. We measure, tweak, ship again.' }];


  return (
    <div style={root}>
      <SPNav T={T} F={F} active="" />

      <section style={hero}>
        <div style={heroMeta}>
          <span>✳ Blackspace® — A content studio</span>
          <span>Bengaluru · IN · Est. 2023</span>
        </div>

        <div style={{ position: 'relative', minHeight: 600 }}>
          {statusStickers.map((st, i) =>
          <SPStatusSticker key={i} T={T} F={F} {...st} />
          )}
          <SPStar size={80} color={T.popA} rotate={20} top={-10} right={400} />
          <SPStar size={56} color={T.popB} rotate={-10} top={420} left={220} />
          <SPStar size={44} color={T.popC} rotate={15} top={180} right={60} />

          <h1 style={{ ...wordmark, fontSize: "200px" }}>
            blackspace<span style={wordmarkItal}>.</span>
          </h1>
        </div>

        <div style={heroBottom}>
          <div style={heroBlock}>
            <div style={heroBlockHead}>↳ What we are</div>
            <p style={{ margin: 0 }}>A creative studio making content campaigns, scripts, edits, and brand work — with AI quietly doing the laundry in the back.</p>
          </div>
          <div style={heroDek}>
            <em>We write, shoot, cut & <span style={{ color: T.popA }}>occasionally go viral.</span></em>
          </div>
          <div style={{ ...heroBlock, textAlign: 'right', marginLeft: 'auto' }}>
            <div style={heroBlockHead}>(2) Discover ↓</div>
            <p style={{ margin: 0 }}>Scripts → Shoots → Edits → AI → Posts → Repeat. Seven days a week, minus the occasional Sunday.</p>
          </div>
        </div>
      </section>

      <SPMarquee T={T} F={F} words={['Scripts', 'Campaigns', 'Edits', 'AI Workflows', 'Brand', 'Websites', 'Social']} />

      {/* Services */}
      <section style={{ padding: '100px 40px' }}>
        <SPSectionHead T={T} F={F} num="§ 01 / Services" title="The menu," titleIt="in pastel." dek="Six things. Done fully, not partially." />
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(12,1fr)', gridAutoRows: 220, gap: 16 }}>
          {services.map((svc, i) =>
          <div key={i} style={{
            gridColumn: `span ${svc.col}`, gridRow: `span ${svc.row}`,
            background: svc.bg, border: `1px solid ${T.ink}`, borderRadius: 20,
            padding: 28, display: 'flex', flexDirection: 'column', justifyContent: 'space-between',
            position: 'relative', overflow: 'hidden', color: svc.dark ? T.paper : T.ink, fontFamily: F.body
          }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start' }}>
                <span style={{ fontSize: 11, letterSpacing: '0.15em', textTransform: 'uppercase' }}>{svc.n}</span>
                {svc.badge && <span style={{ background: T.popB, color: T.paper, padding: '4px 10px', borderRadius: 999, fontSize: 10, letterSpacing: '0.15em', textTransform: 'uppercase', fontWeight: 600, border: `1px solid ${T.ink}`, transform: 'rotate(6deg)' }}>✦ {svc.badge}</span>}
              </div>
              <div>
                <h3 style={{ fontFamily: F.display, fontWeight: 700, letterSpacing: '-0.03em', lineHeight: 0.95, margin: 0, fontSize: svc.big ? 72 : 36 }}>{svc.name}</h3>
                <p style={{ fontSize: 14, lineHeight: 1.55, marginTop: 12, maxWidth: 320, opacity: 0.85 }}>{svc.body}</p>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Work */}
      <section style={{ padding: '100px 40px', background: T.ink, color: T.paper }}>
        <SPSectionHead T={T} F={{ ...F }} num="§ 02 / Selected Work" title="Receipts," titleIt="attached." dek="Six shown. Forty-six under NDA." />
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(12,1fr)', gridAutoRows: 180, gap: 12 }}>
          {work.map((w, i) =>
          <div key={i} style={{
            gridColumn: `span ${w.col}`, gridRow: `span ${w.row}`, background: w.bg,
            borderRadius: 16, position: 'relative', overflow: 'hidden', padding: 20,
            display: 'flex', flexDirection: 'column', justifyContent: 'space-between',
            color: w.dark ? T.paper : T.ink, border: `1px solid ${w.dark ? T.paper : T.ink}33`, fontFamily: F.body
          }}>
              <div style={{
              display: 'inline-flex', alignItems: 'center', gap: 6,
              background: w.dark ? 'transparent' : T.paper, color: w.dark ? T.paper : T.ink,
              padding: '4px 10px', borderRadius: 999,
              fontSize: 10, letterSpacing: '0.1em', textTransform: 'uppercase',
              width: 'fit-content', border: `1px solid ${w.dark ? T.paper : T.ink}33`
            }}>{w.chip}</div>
              <div>
                <div style={{ fontFamily: F.display, fontWeight: 700, letterSpacing: '-0.025em', lineHeight: 1.05, fontSize: w.col >= 7 ? 52 : 26 }}>{w.title}</div>
                <div style={{ fontSize: 11, letterSpacing: '0.1em', textTransform: 'uppercase', marginTop: 4, opacity: 0.7 }}>{w.meta}</div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Color theme — colorful section between dark work + light why */}
      <section style={{ background: T.popA, color: T.paper, padding: '60px 40px', borderTop: `1px solid ${T.ink}`, borderBottom: `1px solid ${T.ink}`, position: 'relative', overflow: 'hidden' }}>
        <SPStar size={140} color={T.popB} rotate={20} top={-30} right={120} />
        <SPStar size={90} color={butter} rotate={-15} bottom={-20} left={60} />
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 60, alignItems: 'center' }}>
          <div style={{ fontFamily: F.display, fontSize: 120, fontWeight: 700, lineHeight: 0.9, letterSpacing: '-0.05em' }}>
            AI, but <span style={{ fontFamily: F.italic, fontStyle: 'italic', fontWeight: 400 }}>like,</span><br />tastefully.
          </div>
          <div style={{ fontSize: 18, lineHeight: 1.55, fontFamily: F.body, maxWidth: 520 }}>
            <p style={{ margin: 0, marginBottom: 16 }}>We use AI the way a good kitchen uses a sous-chef: for the prep, the reps, the 2am labor. Never the plating.</p>
            <p style={{ margin: 0, opacity: 0.85 }}>Drafts, variants, dubs, b-roll, research — automated. Taste, story, tone, the gut of it — human.</p>
          </div>
        </div>
      </section>

      {/* Why us */}
      <section style={{ padding: '100px 40px' }}>
        <SPSectionHead T={T} F={F} num="§ 03 / Why us" title="Six arguments," titleIt="if you need them." dek="Take what helps." />
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20 }}>
          {[why.slice(0, 3), why.slice(3)].map((col, ci) =>
          <div key={ci}>
              {col.map((w, i) =>
            <div key={i} style={{ display: 'grid', gridTemplateColumns: '60px 1fr', gap: 24, padding: '28px 0', borderTop: `1px solid ${T.ink}`, fontFamily: F.body }}>
                  <span style={{ fontFamily: F.italic, fontStyle: 'italic', fontSize: 36, color: T.popA }}>{w.n}.</span>
                  <div>
                    <h3 style={{ fontFamily: F.display, fontSize: 28, fontWeight: 600, letterSpacing: '-0.02em', lineHeight: 1.1, margin: 0 }}>{w.h}</h3>
                    <p style={{ fontSize: 14, lineHeight: 1.55, marginTop: 10, opacity: 0.75 }}>{w.b}</p>
                  </div>
                </div>
            )}
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: '140px 40px', background: butter, borderTop: `1px solid ${T.ink}`, borderBottom: `1px solid ${T.ink}`, textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
        <SPStar size={120} color={T.popB} rotate={15} top={40} right={60} />
        <SPStar size={90} color={T.popA} rotate={-20} bottom={120} left={60} />
        <div style={{ fontSize: 11, letterSpacing: '0.2em', textTransform: 'uppercase', opacity: 0.6, fontFamily: F.body, marginBottom: 24 }}>§ 04 / Let's talk</div>
        <h2 style={{ fontFamily: F.display, fontSize: 'clamp(120px, 16vw, 240px)', lineHeight: 0.85, fontWeight: 700, letterSpacing: '-0.06em', margin: 0, color: T.ink }}>
          Let's <span style={{ fontFamily: F.italic, fontStyle: 'italic', fontWeight: 400 }}>make</span><br />something.
        </h2>
        <a href="contact.html" style={{ display: 'inline-flex', gap: 12, marginTop: 40, padding: '22px 34px', background: T.ink, color: T.paper, borderRadius: 999, fontSize: 15, fontWeight: 500, fontFamily: F.body, textDecoration: 'none', border: `1px solid ${T.ink}` }}>hello@blackspace.media →</a>
      </section>

      <SPFooter T={T} F={F} />
    </div>);

}

window.SPHome = SPHome;