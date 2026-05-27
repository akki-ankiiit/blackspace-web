/**
 * pages/home.jsx
 * SPHome component - Homepage layout
 */

(function () {
  function SPHome() {
    const services = [
      { num: '01', title: 'Campaigns', desc: 'Full-scale advertising campaigns from script to screen.', size: 'span 2 / span 2', bg: 'var(--pop-a)', color: 'var(--paper)' },
      { num: '02', title: 'Films & Video', desc: 'Documentaries, commercials, and branded films.', size: 'span 2 / span 1', bg: 'var(--mint)' },
      { num: '03', title: 'Edits & Post', desc: 'Precision editing, sound design, and color grading.', size: 'span 1 / span 1', bg: 'var(--lilac)' },
      { num: '04', title: 'AI Tastefully', desc: 'Leveraging neural engines to accelerate draft cycles.', size: 'span 1 / span 1', bg: 'var(--butter)' },
      { num: '05', title: 'Brand Identity', desc: 'Crafting the visual and verbal soul of your company.', size: 'span 1 / span 1', bg: 'var(--peach)' },
      { num: '06', title: 'Web Experience', desc: 'Developing bespoke, highly tactile digital interfaces.', size: 'span 2 / span 1', bg: 'var(--sky)' }
    ];

    const projects = [
      { id: 1, title: 'Okinawa Odyssey', client: 'Japan Tourism', desc: 'A cinematic docu-series capturing the forgotten islands.', tags: ['Films', 'Campaign'], span: 'col-span-7 row-span-2', bg: 'var(--peach)', label: 'Award Winner' },
      { id: 2, title: 'MistriBhai Portal', client: 'MistriBhai Inc', desc: 'Modernizing home repair services with a gorgeous web app.', tags: ['Web', 'Design'], span: 'col-span-5', bg: 'var(--mint)' },
      { id: 3, title: 'Generative Dreamscapes', client: 'OpenAI Studio', desc: 'Exploring AI-augmented visual prompts in real-time.', tags: ['AI', 'Video'], span: 'col-span-5', bg: 'var(--lilac)' },
      { id: 4, title: 'Marvel AR Gesture', client: 'Disney India', desc: 'Interactive hand-tracking experience using MediaPipe.', tags: ['AR', 'Design'], span: 'col-span-4', bg: 'var(--sky)' },
      { id: 5, title: 'Iron Man HUD', client: 'Stark Industries', desc: 'Designing high-performance heads-up display prototypes.', tags: ['Design', 'UX'], span: 'col-span-4', bg: 'var(--butter)' },
      { id: 6, title: 'Particle Face App', client: 'Creative Labs', desc: 'Interactive 3D webcam particle mapping.', tags: ['Web', 'AR'], span: 'col-span-4', bg: 'var(--peach)' },
      { id: 7, title: 'The Comma Crusade', client: 'Blackspace Books', desc: 'A typographic celebration of editorial perfection.', tags: ['Print', 'Campaign'], span: 'col-span-12', bg: 'var(--pop-b)', color: 'var(--paper)' }
    ];

    const beliefs = [
      { num: '01', title: 'Perfect Grammar, Bold Vision', desc: 'We believe that great stories require both radical creativity and flawless execution. Commas matter just as much as concept.' },
      { num: '02', title: 'Writers Who Shoot', desc: 'Our directors edit. Our writers shoot. We build lean, multi-disciplinary teams that remove friction between strategy and delivery.' },
      { num: '03', title: 'Sticker Pop Over Boring Grid', desc: 'The web has grown too uniform. We champion personality, tactile textures, rotation, and bold colors over flat digital design.' },
      { num: '04', title: 'AI is a Co-Pilot', desc: 'We do not run from the future. We integrate machine tools to handle draft speed while keeping human perspective on the steering wheel.' },
      { num: '05', title: 'Bespoke over Boilerplate', desc: 'Every brand deserves a customized design system, not a rehashed template. We build interfaces tailored to specific project souls.' },
      { num: '06', title: 'Radical Honesty', desc: 'We pitch direct ideas and write raw copy. No corporate speak, no empty jargon. Just work that hits.' }
    ];

    const cardBaseStyle = {
      border: '2px solid var(--ink)',
      borderRadius: '20px',
      padding: '32px',
      boxShadow: '5px 5px 0 var(--ink)',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      position: 'relative',
      overflow: 'hidden'
    };

    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '120px', paddingBottom: '120px' }}>
        
        {/* HERO SECTION */}
        <section style={{
          padding: '120px 40px 100px 40px',
          position: 'relative',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          gap: '40px',
          overflow: 'hidden'
        }}>
          {/* Decorative Stars */}
          <window.SPStar size={80} color="var(--pop-a)" rotate="15deg" top="40px" right="120px" />
          <window.SPStar size={120} color="var(--pop-b)" rotate="-25deg" bottom="60px" right="300px" />
          <window.SPStar size={50} color="var(--pop-c)" rotate="10deg" top="200px" left="50%" />

          {/* Floating Stickers */}
          <div style={{ position: 'absolute', right: '80px', top: '140px', transform: 'rotate(5deg)' }}>
            <window.SPStatusSticker statusType="onset" />
          </div>
          <div style={{ position: 'absolute', right: '450px', top: '40px', transform: 'rotate(-7deg)' }}>
            <window.SPStatusSticker statusType="coffee" />
          </div>
          <div style={{ position: 'absolute', left: '80px', bottom: '40px', transform: 'rotate(12deg)' }}>
            <window.SPStatusSticker statusType="editing" />
          </div>

          <h1 style={{
            fontSize: '110px',
            lineHeight: '0.92',
            maxWidth: '1200px',
            margin: '0',
            letterSpacing: 'var(--font-display-spacing, -0.04em)',
            fontWeight: 'var(--font-display-weight, 700)',
            fontFamily: 'var(--font-display)',
            zIndex: 2
          }}>
            We make scripts <br />
            that <span className="font-italic" style={{ color: 'var(--pop-a)' }}>shoot</span>, edits that <br />
            <span style={{
              display: 'inline-block',
              background: 'var(--butter)',
              border: '2px solid var(--ink)',
              padding: '0 24px',
              borderRadius: '999px',
              transform: 'rotate(-2deg)',
              boxShadow: '4px 4px 0 var(--ink)',
              fontFamily: 'var(--font-display)',
              fontWeight: 'var(--font-display-weight, 700)',
              letterSpacing: 'var(--font-display-spacing)'
            }}>pitch</span>, & directors <br />
            who care about commas.
          </h1>

          <div style={{
            display: 'flex',
            gap: '16px',
            alignItems: 'center',
            zIndex: 2,
            marginTop: '20px'
          }}>
            <a href="contact.html" style={{
              background: 'var(--ink)',
              color: 'var(--paper)',
              padding: '20px 40px',
              borderRadius: '999px',
              fontSize: '18px',
              fontWeight: 'bold',
              textDecoration: 'none',
              boxShadow: '4px 4px 0 rgba(0,0,0,0.15)',
              border: '2px solid var(--ink)',
              transition: 'all 0.2s ease'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-2px)';
              e.currentTarget.style.boxShadow = '6px 6px 0 rgba(0,0,0,0.25)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '4px 4px 0 rgba(0,0,0,0.15)';
            }}
            >
              Get In Touch 🚀
            </a>
            
            <a href="work.html" style={{
              background: 'var(--paper)',
              color: 'var(--ink)',
              padding: '20px 40px',
              borderRadius: '999px',
              fontSize: '18px',
              fontWeight: 'bold',
              textDecoration: 'none',
              border: '2px solid var(--ink)',
              boxShadow: '4px 4px 0 var(--ink)',
              transition: 'all 0.2s ease'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-2px)';
              e.currentTarget.style.boxShadow = '6px 6px 0 var(--ink)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '4px 4px 0 var(--ink)';
            }}
            >
              View Work
            </a>
          </div>
        </section>

        {/* MARQUEE */}
        <window.SPMarquee words={['Scripts', 'Campaigns', 'Edits', 'AI Engine', 'Brand Strategy', 'Web Experiences', 'Social Content']} />

        {/* SERVICES GRID */}
        <section style={{ padding: '0 40px' }}>
          <window.SPSectionHead 
            num="01" 
            title="Our Services" 
            titleIt="Menu" 
            dek="A tight list of creative capabilities optimized for high-impact content delivery, design execution, and technology development."
          />

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '24px',
            marginTop: '60px'
          }}>
            {services.map((s, idx) => (
              <div 
                key={idx}
                style={{
                  ...cardBaseStyle,
                  background: s.bg,
                  color: s.color || 'var(--ink)',
                  gridArea: s.size
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                  <span style={{ fontSize: '14px', fontWeight: 'bold', opacity: 0.6 }}>{s.num}</span>
                  <span style={{
                    fontSize: '24px',
                    transform: 'rotate(10deg)',
                    display: s.bg === 'var(--pop-a)' ? 'block' : 'none'
                  }}>✳</span>
                </div>
                <div>
                  <h3 style={{
                    fontSize: '44px',
                    margin: '40px 0 12px 0',
                    fontFamily: 'var(--font-display)',
                    fontWeight: 'var(--font-display-weight, 700)'
                  }}>{s.title}</h3>
                  <p style={{
                    fontSize: '16px',
                    lineHeight: '1.5',
                    margin: 0,
                    opacity: 0.8
                  }}>{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* WORK BENTO */}
        <section style={{ padding: '0 40px' }}>
          <window.SPSectionHead 
            num="02" 
            title="Selected" 
            titleIt="Work" 
            dek="Case studies demonstrating how we bridge the gap between creative storytelling and product engineering."
          />

          {/* 12 Column Grid Bento */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(12, 1fr)',
            gap: '24px',
            marginTop: '60px'
          }}>
            {projects.map((p) => {
              const colSpan = p.span.includes('col-span-7') ? 'span 7' : p.span.includes('col-span-5') ? 'span 5' : p.span.includes('col-span-4') ? 'span 4' : 'span 12';
              const rowSpan = p.span.includes('row-span-2') ? 'span 2' : 'span 1';
              
              return (
                <div
                  key={p.id}
                  style={{
                    ...cardBaseStyle,
                    background: p.bg,
                    color: p.color || 'var(--ink)',
                    gridColumn: colSpan,
                    gridRow: rowSpan,
                    minHeight: rowSpan === 'span 2' ? '500px' : '260px'
                  }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                    <div style={{ display: 'flex', gap: '8px' }}>
                      {p.tags.map((t, i) => (
                        <span key={i} style={{
                          fontSize: '11px',
                          textTransform: 'uppercase',
                          letterSpacing: '0.1em',
                          border: '1px solid ' + (p.color || 'var(--ink)'),
                          padding: '4px 10px',
                          borderRadius: '999px',
                          opacity: 0.7
                        }}>{t}</span>
                      ))}
                    </div>
                    {p.label && (
                      <div style={{ transform: 'rotate(8deg) translateY(-10px)' }}>
                        <window.SPSticker variant="square" bg="var(--butter)" rotation="4deg" style={{ padding: '6px 12px' }}>
                          <span style={{ fontSize: '11px', fontWeight: 'bold' }}>{p.label}</span>
                        </window.SPSticker>
                      </div>
                    )}
                  </div>
                  
                  <div style={{ marginTop: '40px' }}>
                    <div style={{ fontSize: '13px', opacity: 0.6, marginBottom: '6px', fontWeight: 'bold' }}>{p.client}</div>
                    <h3 style={{
                      fontSize: '36px',
                      margin: '0 0 10px 0',
                      lineHeight: '1.1',
                      fontFamily: 'var(--font-display)',
                      fontWeight: 'var(--font-display-weight, 700)'
                    }}>{p.title}</h3>
                    <p style={{ fontSize: '15px', opacity: 0.8, margin: 0, maxWidth: '480px' }}>{p.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* AI SECTION */}
        <section style={{ padding: '0 40px' }}>
          <div style={{
            ...cardBaseStyle,
            background: 'var(--pop-a)',
            color: 'var(--paper)',
            padding: '80px',
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '80px',
            alignItems: 'center'
          }}>
            <window.SPStar size={100} color="var(--butter)" rotate="12deg" top="20px" right="40px" />
            <div>
              <div style={{ display: 'inline-block', transform: 'rotate(-5deg)', marginBottom: '32px' }}>
                <window.SPSticker variant="tape" bg="var(--mint)" rotation="-4deg">
                  <span style={{ fontSize: '14px', fontWeight: 'bold', color: 'var(--ink)' }}>Our Thesis</span>
                </window.SPSticker>
              </div>
              <h2 style={{
                fontSize: '72px',
                lineHeight: '1.0',
                margin: '0 0 24px 0',
                fontFamily: 'var(--font-display)',
                fontWeight: 'var(--font-display-weight, 700)',
                letterSpacing: '-0.03em'
              }}>
                AI, <br />
                <span className="font-italic" style={{ color: 'var(--butter)' }}>tastefully</span>.
              </h2>
              <p style={{ fontSize: '20px', lineHeight: '1.6', opacity: 0.9, margin: 0 }}>
                We believe generative AI isn't here to replace storytelling — it is here to catalyze it. We use neural engines to write faster drafts, test code paradigms, and composite visuals. But the heart of the message, the comma placement, and the final edit remains human.
              </p>
            </div>
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '16px'
            }}>
              {[
                'Machine drafting, human fine-tuning',
                'Web prototyping via neural compilers',
                'Automated rendering + bespoke composition',
                'Continuous integration, prompt security'
              ].map((item, idx) => (
                <div key={idx} style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '16px',
                  background: 'rgba(255, 255, 255, 0.1)',
                  padding: '20px 24px',
                  borderRadius: '12px',
                  border: '1px solid rgba(255, 255, 255, 0.2)'
                }}>
                  <span style={{ fontSize: '20px' }}>⚡</span>
                  <span style={{ fontSize: '18px', fontWeight: '600' }}>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* WHY US split section */}
        <section style={{ padding: '0 40px' }}>
          <window.SPSectionHead 
            num="03" 
            title="Our Core" 
            titleIt="Beliefs" 
            dek="The guiding values behind every frame we edit, every layout we construct, and every piece of copy we write."
          />

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gap: '48px 80px',
            marginTop: '80px'
          }}>
            {beliefs.map((b, idx) => (
              <div key={idx} style={{
                display: 'flex',
                gap: '24px',
                alignItems: 'flex-start',
                borderBottom: '1px solid rgba(10, 10, 10, 0.1)',
                paddingBottom: '32px'
              }}>
                <span className="font-italic" style={{
                  fontSize: '44px',
                  fontWeight: 'bold',
                  color: 'var(--pop-a)',
                  lineHeight: '1'
                }}>{b.num}</span>
                <div>
                  <h4 style={{
                    fontSize: '24px',
                    margin: '0 0 12px 0',
                    fontFamily: 'var(--font-display)',
                    fontWeight: 'var(--font-display-weight, 700)'
                  }}>{b.title}</h4>
                  <p style={{
                    fontSize: '16px',
                    lineHeight: '1.5',
                    margin: 0,
                    opacity: 0.75
                  }}>{b.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section style={{ padding: '0 40px' }}>
          <div style={{
            ...cardBaseStyle,
            background: 'var(--mint)',
            color: 'var(--ink)',
            padding: '80px',
            textAlign: 'center',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '32px'
          }}>
            <window.SPStar size={80} color="var(--pop-b)" rotate="-15deg" top="30px" left="60px" />
            <window.SPStar size={70} color="var(--pop-c)" rotate="20deg" bottom="40px" right="80px" />
            
            <h2 style={{
              fontSize: '80px',
              lineHeight: '1.0',
              maxWidth: '800px',
              margin: '0',
              fontFamily: 'var(--font-display)',
              fontWeight: 'var(--font-display-weight, 700)',
              letterSpacing: '-0.04em'
            }}>
              Let’s build something <br />
              <span className="font-italic" style={{ color: 'var(--pop-a)' }}>beautiful</span> together.
            </h2>
            
            <p style={{
              fontSize: '20px',
              maxWidth: '500px',
              lineHeight: '1.5',
              opacity: 0.8,
              margin: '0'
            }}>
              Whether you need full advertising productions, robust brand identities, or high-performance React portals, we are ready.
            </p>

            <a href="contact.html" style={{
              background: 'var(--ink)',
              color: 'var(--paper)',
              padding: '22px 50px',
              borderRadius: '999px',
              fontSize: '18px',
              fontWeight: 'bold',
              textDecoration: 'none',
              boxShadow: '4px 4px 0 rgba(0,0,0,0.15)',
              transition: 'all 0.2s ease',
              marginTop: '16px'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-2px)';
              e.currentTarget.style.boxShadow = '6px 6px 0 rgba(0,0,0,0.25)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '4px 4px 0 rgba(0,0,0,0.15)';
            }}
            >
              Start A Project ↗
            </a>
          </div>
        </section>

      </div>
    );
  }

  window.SPHome = SPHome;
})();
