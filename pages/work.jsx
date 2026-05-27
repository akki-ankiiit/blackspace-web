/**
 * pages/work.jsx
 * SPWork component - Selected projects index
 */

(function () {
  function SPWork() {
    const [filter, setFilter] = React.useState('All');

    const filters = ['All', 'Campaigns', 'Films', 'Web & AR', 'AI'];

    const projects = [
      { id: 1, title: 'Okinawa Odyssey', client: 'Japan Tourism', desc: 'A multi-part cinematic documentary series showcasing the rural, untouched beauty of remote island chains.', tags: ['Films', 'Campaigns'], span: { col: 'span 8', row: 'span 3' }, bg: 'var(--peach)', label: 'Award Winner' },
      { id: 2, title: 'MistriBhai Portal', client: 'MistriBhai Inc', desc: 'A customer-facing web dashboard and scheduling engine built using React.', tags: ['Web & AR'], span: { col: 'span 4', row: 'span 3' }, bg: 'var(--mint)' },
      { id: 3, title: 'Generative Dreamscapes', client: 'OpenAI Studio', desc: 'Neural synthesis of architectural render concepts.', tags: ['AI'], span: { col: 'span 4', row: 'span 2' }, bg: 'var(--lilac)' },
      { id: 4, title: 'Marvel AR Gesture', client: 'Disney India', desc: 'Webcam-based real-time Three.js interaction system.', tags: ['Web & AR'], span: { col: 'span 4', row: 'span 2' }, bg: 'var(--sky)' },
      { id: 5, title: 'Iron Man HUD Prototype', client: 'Stark Industries', desc: 'Design of high-density data visualizations for military avionics systems.', tags: ['Web & AR'], span: { col: 'span 6', row: 'span 2' }, bg: 'var(--butter)' },
      { id: 6, title: 'Particle Face Mapping', client: 'Creative Labs', desc: 'An experiment in face-mesh mapping using WebGL and MediaPipe.', tags: ['Web & AR', 'AI'], span: { col: 'span 6', row: 'span 2' }, bg: 'var(--peach)' }
    ];

    const historicalProjects = [
      { year: '2025', client: 'Acme Corp', project: 'Project Neon Pulse', scope: 'Brand Campaign', result: '3.4M Impressions' },
      { year: '2025', client: 'Studio Ghibli', project: 'Heritage Archive Site', scope: 'Web Design', result: 'Webby Nominee' },
      { year: '2024', client: 'Netflix IN', project: 'Sacred Games S3 Promo', scope: 'Video/Teaser', result: '12M Views' },
      { year: '2024', client: 'Mercedes Benz', project: 'E-Class Launch Kit', scope: 'Digital Experience', result: '+18% Signups' },
      { year: '2024', client: 'Spotify India', project: 'Wrapped Bangalore Live', scope: 'OOH/Social', result: 'Trending #1' },
      { year: '2023', client: 'Unicef', project: 'Clean Water Initiative', scope: 'Docu Film', result: '$4.2M Raised' },
      { year: '2023', client: 'Nike India', project: 'Run the Streets', scope: 'Campaign', result: 'Sales +12%' },
      { year: '2023', client: 'Swiggy', project: 'Late Night Indulgence', scope: 'Social Ads', result: '14% Conversion' },
      { year: '2022', client: 'IKEA', project: 'Assembly Made Fun', scope: 'Interactive Guide', result: 'App Feature' }
    ];

    const filteredProjects = filter === 'All' 
      ? projects 
      : projects.filter(p => p.tags.includes(filter));

    const cardBaseStyle = {
      border: '2px solid var(--ink)',
      borderRadius: '20px',
      padding: '32px',
      boxShadow: '4px 4px 0 var(--ink)',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      position: 'relative',
      overflow: 'hidden'
    };

    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '100px', paddingBottom: '120px' }}>
        
        {/* HERO SECTION */}
        <section style={{ padding: '80px 40px 40px 40px', position: 'relative' }}>
          <window.SPStar size={90} color="var(--pop-b)" rotate="-15deg" top="40px" right="140px" />
          
          <h1 style={{
            fontSize: '110px',
            lineHeight: '0.92',
            maxWidth: '1000px',
            margin: '0 0 32px 0',
            fontFamily: 'var(--font-display)',
            fontWeight: 'var(--font-display-weight, 700)',
            letterSpacing: 'var(--font-display-spacing)'
          }}>
            Selected <br />
            & archival <span className="font-italic" style={{ color: 'var(--pop-a)' }}>works</span>.
          </h1>

          <p style={{
            fontSize: '22px',
            lineHeight: '1.5',
            maxWidth: '650px',
            margin: '0 0 48px 0',
            opacity: 0.8
          }}>
            We build visual systems and tactile narratives for brands who want to be remembered. Here is a curated selection of our creative output.
          </p>

          {/* Filter Pills */}
          <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
            {filters.map((f) => {
              const isActive = filter === f;
              return (
                <button
                  key={f}
                  onClick={() => setFilter(f)}
                  style={{
                    padding: '12px 28px',
                    borderRadius: '999px',
                    border: '2px solid var(--ink)',
                    background: isActive ? 'var(--ink)' : 'var(--paper)',
                    color: isActive ? 'var(--paper)' : 'var(--ink)',
                    fontSize: '14px',
                    fontWeight: 'bold',
                    cursor: 'pointer',
                    boxShadow: isActive ? 'none' : '3px 3px 0 var(--ink)',
                    transform: isActive ? 'translate(2px, 2px)' : 'none',
                    transition: 'all 0.15s ease'
                  }}
                  onMouseEnter={(e) => {
                    if (!isActive) {
                      e.currentTarget.style.transform = 'translateY(-2px)';
                      e.currentTarget.style.boxShadow = '5px 5px 0 var(--ink)';
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!isActive) {
                      e.currentTarget.style.transform = 'none';
                      e.currentTarget.style.boxShadow = '3px 3px 0 var(--ink)';
                    }
                  }}
                >
                  {f}
                </button>
              );
            })}
          </div>
        </section>

        {/* PROJECTS BENTO GRID */}
        <section style={{ padding: '0 40px' }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(12, 1fr)',
            gap: '24px',
            gridAutoRows: 'minmax(180px, auto)'
          }}>
            {filteredProjects.map((p) => (
              <div
                key={p.id}
                style={{
                  ...cardBaseStyle,
                  background: p.bg,
                  gridColumn: p.span.col,
                  gridRow: p.span.row,
                  minHeight: p.span.row.includes('3') ? '440px' : '280px'
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                  <div style={{ display: 'flex', gap: '8px' }}>
                    {p.tags.map((t, i) => (
                      <span key={i} style={{
                        fontSize: '11px',
                        textTransform: 'uppercase',
                        letterSpacing: '0.15em',
                        border: '1px solid var(--ink)',
                        padding: '4px 10px',
                        borderRadius: '999px',
                        fontWeight: '600',
                        opacity: 0.8
                      }}>{t}</span>
                    ))}
                  </div>
                  {p.label && (
                    <div style={{ transform: 'rotate(6deg) translateY(-8px)' }}>
                      <window.SPSticker variant="square" bg="var(--butter)" rotation="2deg" style={{ padding: '6px 12px' }}>
                        <span style={{ fontSize: '11px', fontWeight: 'bold' }}>{p.label}</span>
                      </window.SPSticker>
                    </div>
                  )}
                </div>
                
                <div style={{ marginTop: '30px' }}>
                  <div style={{ fontSize: '13px', opacity: 0.6, marginBottom: '6px', fontWeight: 'bold' }}>{p.client}</div>
                  <h3 style={{
                    fontSize: '40px',
                    lineHeight: '1.05',
                    margin: '0 0 12px 0',
                    fontFamily: 'var(--font-display)',
                    fontWeight: 'var(--font-display-weight, 700)'
                  }}>{p.title}</h3>
                  <p style={{ fontSize: '16px', opacity: 0.8, lineHeight: '1.4', margin: 0, maxWidth: '580px' }}>{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* MARQUEE */}
        <window.SPMarquee words={['Featured Work', 'Okinawa Odyssey', 'MistriBhai App', 'Generative Design', 'AR Hand Interactions', 'Marvel Experience']} />

        {/* CHRONOLOGICAL TABLE-LIKE ARCHIVE */}
        <section style={{ padding: '0 40px' }}>
          <window.SPSectionHead 
            num="02" 
            title="Archival" 
            titleIt="Database" 
            dek="A tabular retrospective of select campaigns and creative work built over the last few years."
          />

          <div style={{
            border: '2px solid var(--ink)',
            borderRadius: '20px',
            overflow: 'hidden',
            boxShadow: '6px 6px 0 var(--ink)',
            background: 'var(--paper)',
            marginTop: '48px'
          }}>
            {/* Table Header */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: '80px 220px 1fr 200px 200px 60px',
              padding: '20px 32px',
              borderBottom: '2px solid var(--ink)',
              background: 'var(--ink)',
              color: 'var(--paper)',
              fontWeight: 'bold',
              textTransform: 'uppercase',
              letterSpacing: '0.15em',
              fontSize: '11px'
            }}>
              <span>Year</span>
              <span>Client</span>
              <span>Project Title</span>
              <span>Scope</span>
              <span>Metrics / Result</span>
              <span style={{ textAlign: 'right' }}>Link</span>
            </div>

            {/* Table Body */}
            {historicalProjects.map((row, idx) => {
              const isEven = idx % 2 === 0;
              return (
                <div 
                  key={idx}
                  style={{
                    display: 'grid',
                    gridTemplateColumns: '80px 220px 1fr 200px 200px 60px',
                    padding: '24px 32px',
                    borderBottom: idx === historicalProjects.length - 1 ? 'none' : '1px solid rgba(10, 10, 10, 0.1)',
                    background: isEven ? 'transparent' : 'rgba(10, 10, 10, 0.03)',
                    alignItems: 'center',
                    fontSize: '15px',
                    fontWeight: '500'
                  }}
                >
                  <span style={{ fontFamily: 'var(--font-display)', fontWeight: 'bold' }}>{row.year}</span>
                  <span style={{ opacity: 0.8 }}>{row.client}</span>
                  <span style={{ fontWeight: '700', fontSize: '16px' }}>{row.project}</span>
                  <span>
                    <span style={{
                      background: 'var(--lilac)',
                      padding: '4px 10px',
                      borderRadius: '999px',
                      fontSize: '12px',
                      border: '1px solid var(--ink)'
                    }}>{row.scope}</span>
                  </span>
                  <span className="font-italic" style={{ opacity: 0.85 }}>{row.result}</span>
                  <span style={{ textAlign: 'right', fontWeight: 'bold', cursor: 'pointer' }}>↗</span>
                </div>
              );
            })}
          </div>
        </section>

        {/* LILAC QUOTE BLOCK */}
        <section style={{ padding: '0 40px' }}>
          <div style={{
            ...cardBaseStyle,
            background: 'var(--lilac)',
            color: 'var(--ink)',
            padding: '80px 40px',
            textAlign: 'center',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '24px'
          }}>
            <span style={{ fontSize: '72px', lineHeight: '0.5', color: 'var(--pop-a)' }}>“</span>
            <blockquote className="font-italic" style={{
              fontSize: '38px',
              lineHeight: '1.4',
              maxWidth: '850px',
              margin: '0',
              color: 'var(--ink)'
            }}>
              Writers who shoot. Editors who pitch. Directors who care about commas. The visual language matches the team structure — lean, creative, and slightly irreverent.
            </blockquote>
            <cite style={{
              fontSize: '14px',
              textTransform: 'uppercase',
              letterSpacing: '0.15em',
              fontWeight: 'bold',
              fontStyle: 'normal',
              opacity: 0.7
            }}>
              — GQ Magazine Editorial, 2025
            </cite>
          </div>
        </section>

        {/* CTA */}
        <section style={{ padding: '0 40px' }}>
          <div style={{
            ...cardBaseStyle,
            background: 'var(--butter)',
            padding: '80px',
            textAlign: 'center',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '32px'
          }}>
            <window.SPStar size={80} color="var(--pop-a)" rotate="10deg" top="20px" right="60px" />
            <window.SPStar size={60} color="var(--pop-c)" rotate="-25deg" bottom="40px" left="60px" />
            
            <h2 style={{
              fontSize: '80px',
              lineHeight: '1.0',
              margin: '0',
              fontFamily: 'var(--font-display)',
              fontWeight: 'var(--font-display-weight, 700)',
              letterSpacing: '-0.04em'
            }}>
              Want to see more <br />
              custom projects?
            </h2>
            <p style={{
              fontSize: '20px',
              maxWidth: '500px',
              lineHeight: '1.5',
              opacity: 0.8,
              margin: '0'
            }}>
              We have a deeper private catalog and specialized client decks. Get in touch to view targeted case studies.
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
              Contact Studio ↗
            </a>
          </div>
        </section>

      </div>
    );
  }

  window.SPWork = SPWork;
})();
