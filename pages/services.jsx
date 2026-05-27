/**
 * pages/services.jsx
 * SPServices component - Services detailed overview
 */

(function () {
  function SPServices() {
    const services = [
      { num: '01', title: 'Full Scale Campaigns', desc: 'From the initial creative brief to script writing, visual storyboards, casting, physical production, and distribution management. We craft campaigns that get noticed.', span: { col: 'span 6', row: 'span 2' }, bg: 'var(--pop-a)', color: 'var(--paper)' },
      { num: '02', title: 'Branded Films & Commercials', desc: 'High-production value documentary shorts, commercial spots, and cinematic branded narratives designed to capture attention in the first 3 seconds.', span: { col: 'span 6', row: 'span 1' }, bg: 'var(--mint)' },
      { num: '03', title: 'High-End Post', desc: 'Bespoke editing, offline/online workflows, sound design, and precision color correction using industry grade pipelines.', span: { col: 'span 3', row: 'span 1' }, bg: 'var(--lilac)' },
      { num: '04', title: 'Brand Architecture', desc: 'Translating strategy into visual and written codes. Naming, logos, positioning statements, and complete design books.', span: { col: 'span 3', row: 'span 1' }, bg: 'var(--sky)' },
      { num: '05', title: 'AI-Augmented Workflows', desc: 'Deploying custom LLMs and image generation models to accelerate mockup rounds, storyboarding, and raw copy drafting.', span: { col: 'span 4', row: 'span 1' }, bg: 'var(--butter)' },
      { num: '06', title: 'Bespoke Web & Interactive', desc: 'Creative engineering utilizing Three.js, React, and custom WebGL to build digital experiences that break away from uniform grid templates.', span: { col: 'span 8', row: 'span 1' }, bg: 'var(--peach)' }
    ];

    const processes = [
      { step: '01', name: 'The Call', desc: 'A direct 30-minute conversation. No agency pitching, just developers and creatives talking about your goals.' },
      { step: '02', name: 'The Brief', desc: 'We distill the conversation into a single page of scope, target constraints, and bold creative direction.' },
      { step: '03', name: 'The Concept', desc: 'We deliver three distinct avenues. High contrast directions that explore different visual and thematic styles.' },
      { step: '04', name: 'The Make', desc: 'Physical shooting, script editing, and digital compilation. Rapid feedback loops keep you aligned.' },
      { step: '05', name: 'The Ship', desc: 'We deploy web portals, release master video clips, and supply raw, unpackaged visual assets.' }
    ];

    const faqs = [
      { q: 'Who actually works on my project?', a: 'You work directly with our core team. We do not have accounts managers or sales intermediaries. Your main contact point is the lead writer, designer, or engineer on the project.' },
      { q: 'How does the design customization panel work?', a: 'Every page features our Tweaks customizer panel. You can preview different color palettes (Classic, Citrus, Bubblegum, etc.) and type systems on the fly to see how the system holds up under different parameters.' },
      { q: 'Do you work with global clients?', a: 'Yes. While we are headquartered in Bengaluru, we have produced campaigns and built applications for clients across Japan, the United States, and Western Europe.' },
      { q: 'How long do projects typically take?', a: 'Video productions range from 4 to 8 weeks. Brand identity systems take 6 weeks. High-performance React portals and custom WebGL pages require 6 to 10 weeks depending on complexity.' },
      { q: 'What is your stance on generative tools?', a: 'We embrace them. We use AI engines for fast concept loops, mood board composition, and draft scripts. However, we do not ship raw machine outputs. The editing, detail work, and final code are human-crafted.' },
      { q: 'Do you charge by the hour or by the project?', a: 'We charge flat, project-based fees. We outline the scope and deliverables in Day 0, and that rate remains constant. No sudden invoice surprises.' }
    ];

    const cardBaseStyle = {
      border: '2px solid var(--ink)',
      borderRadius: '20px',
      padding: '32px',
      boxShadow: '4px 4px 0 var(--ink)',
      display: 'flex',
      flexDirection: 'column',
      position: 'relative',
      overflow: 'hidden'
    };

    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '100px', paddingBottom: '120px' }}>
        
        {/* HERO SECTION */}
        <section style={{ padding: '80px 40px 40px 40px', position: 'relative' }}>
          <window.SPStar size={100} color="var(--pop-c)" rotate="-20deg" top="30px" right="160px" />
          
          <h1 style={{
            fontSize: '110px',
            lineHeight: '0.92',
            maxWidth: '1000px',
            margin: '0 0 32px 0',
            fontFamily: 'var(--font-display)',
            fontWeight: 'var(--font-display-weight, 700)',
            letterSpacing: 'var(--font-display-spacing)'
          }}>
            Services <br />
            & capabilities <span className="font-italic" style={{ color: 'var(--pop-a)' }}>menu</span>.
          </h1>

          <p style={{
            fontSize: '22px',
            lineHeight: '1.5',
            maxWidth: '650px',
            margin: '0',
            opacity: 0.8
          }}>
            A highly integrated set of creative tools and engineering disciplines focused on delivering high-fidelity campaigns, films, and digital platforms.
          </p>
        </section>

        {/* SERVICES MENU */}
        <section style={{ padding: '0 40px' }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(12, 1fr)',
            gap: '24px',
            gridAutoRows: 'minmax(200px, auto)'
          }}>
            {services.map((s, idx) => (
              <div
                key={idx}
                style={{
                  ...cardBaseStyle,
                  background: s.bg,
                  color: s.color || 'var(--ink)',
                  gridColumn: s.span.col,
                  gridRow: s.span.row,
                  justifyContent: 'space-between',
                  minHeight: s.span.row.includes('2') ? '440px' : '230px'
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                  <span style={{ fontSize: '14px', fontWeight: 'bold', opacity: 0.7 }}>{s.num}</span>
                  <span style={{ fontSize: '20px', display: idx === 0 ? 'block' : 'none' }}>✳</span>
                </div>

                <div style={{ marginTop: '24px' }}>
                  <h3 style={{
                    fontSize: '38px',
                    lineHeight: '1.1',
                    margin: '0 0 12px 0',
                    fontFamily: 'var(--font-display)',
                    fontWeight: 'var(--font-display-weight, 700)'
                  }}>{s.title}</h3>
                  <p style={{ fontSize: '15px', lineHeight: '1.45', opacity: 0.85, margin: 0, maxWidth: '640px' }}>{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* MARQUEE */}
        <window.SPMarquee words={['Creative Briefs', 'Cinematic Shoots', 'Color Grading', 'Brand Manuals', 'React Apps', 'Prompt Engineering']} />

        {/* PROCESS (5-step equal width) */}
        <section style={{ padding: '0 40px' }}>
          <window.SPSectionHead 
            num="02" 
            title="The Productive" 
            titleIt="Lifecycle" 
            dek="How we move from initial query to final deliverables in five structured, transparent stages."
          />

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(5, 1fr)',
            gap: '20px',
            marginTop: '60px'
          }}>
            {processes.map((p, idx) => (
              <div
                key={idx}
                style={{
                  ...cardBaseStyle,
                  background: 'var(--paper)',
                  minHeight: '260px',
                  justifyContent: 'space-between',
                  transform: `rotate(${(idx % 2 === 0) ? '-1.5deg' : '1.5deg'})`
                }}
              >
                <div style={{
                  fontSize: '36px',
                  fontWeight: 'bold',
                  fontFamily: 'var(--font-display)',
                  color: 'var(--pop-a)',
                  lineHeight: '1'
                }}>
                  {p.step}
                </div>
                
                <div style={{ marginTop: '20px' }}>
                  <h4 style={{
                    fontSize: '20px',
                    margin: '0 0 8px 0',
                    fontFamily: 'var(--font-display)',
                    fontWeight: 'var(--font-display-weight, 700)'
                  }}>{p.name}</h4>
                  <p style={{ fontSize: '14px', lineHeight: '1.4', opacity: 0.75, margin: 0 }}>{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* FAQ (2-column layout) */}
        <section style={{ padding: '0 40px' }}>
          <window.SPSectionHead 
            num="03" 
            title="Frequently Asked" 
            titleIt="Queries" 
            dek="Common operational questions about budgets, tools, workflows, and deliverables."
          />

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gap: '24px',
            marginTop: '60px'
          }}>
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                style={{
                  ...cardBaseStyle,
                  background: idx % 4 === 0 ? 'var(--mint)' : idx % 4 === 1 ? 'var(--lilac)' : idx % 4 === 2 ? 'var(--sky)' : 'var(--butter)',
                  justifyContent: 'flex-start',
                  gap: '12px'
                }}
              >
                <h4 style={{
                  fontSize: '20px',
                  margin: 0,
                  fontFamily: 'var(--font-display)',
                  fontWeight: 'var(--font-display-weight, 700)'
                }}>
                  {faq.q}
                </h4>
                <p style={{
                  fontSize: '15px',
                  lineHeight: '1.5',
                  margin: 0,
                  opacity: 0.8
                }}>
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section style={{ padding: '0 40px' }}>
          <div style={{
            ...cardBaseStyle,
            background: 'var(--lilac)',
            padding: '80px',
            textAlign: 'center',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '32px'
          }}>
            <window.SPStar size={80} color="var(--pop-a)" rotate="12deg" top="30px" left="60px" />
            <window.SPStar size={70} color="var(--pop-b)" rotate="-10deg" bottom="40px" right="60px" />
            
            <h2 style={{
              fontSize: '80px',
              lineHeight: '1.0',
              margin: '0',
              fontFamily: 'var(--font-display)',
              fontWeight: 'var(--font-display-weight, 700)',
              letterSpacing: '-0.04em'
            }}>
              Ready to talk <br />
              about your scope?
            </h2>
            <p style={{
              fontSize: '20px',
              maxWidth: '500px',
              lineHeight: '1.5',
              opacity: 0.8,
              margin: '0'
            }}>
              We will set up a quick 30-minute intro call to see if our capabilities align with your vision.
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
              Start The Process ↗
            </a>
          </div>
        </section>

      </div>
    );
  }

  window.SPServices = SPServices;
})();
