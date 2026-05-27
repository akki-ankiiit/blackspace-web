/**
 * pages/journal.jsx
 * SPJournal component - Studio thoughts and articles
 */

(function () {
  function SPJournal() {
    const [filter, setFilter] = React.useState('All');
    const [email, setEmail] = React.useState('');
    const [subscribed, setSubscribed] = React.useState(false);

    const filters = ['All', 'Essays', 'Behind the Scenes', 'Notes'];

    const articles = [
      {
        id: 1,
        title: "AI as a Mixer (Why Chefs Still Cook)",
        date: "May 24, 2026",
        category: "Essays",
        desc: "Why artificial intelligence is a seasoning, not the main course, in modern commercial video and design production. An analysis of client expectations.",
        bg: "var(--mint)",
        rotation: "-1.5deg",
        readTime: "5 min read"
      },
      {
        id: 2,
        title: "Comma Placement & Kinetic Typography",
        date: "May 10, 2026",
        category: "Notes",
        desc: "An obsession with detailed typography that separates top-tier motion graphics from generic templates. Why we care about the small stuff.",
        bg: "var(--lilac)",
        rotation: "2deg",
        readTime: "3 min read"
      },
      {
        id: 3,
        title: "Shooting in Okinawa: Logistical Nightmares",
        date: "April 28, 2026",
        category: "Behind the Scenes",
        desc: "How our lean production crew navigated island typhoons, language barriers, and dynamic lighting setups for the Japan Tourism series.",
        bg: "var(--sky)",
        rotation: "-2.5deg",
        readTime: "8 min read"
      },
      {
        id: 4,
        title: "Sticker Pop: The Evolution of Web Aesthetics",
        date: "April 15, 2026",
        category: "Essays",
        desc: "Exploring why websites are returning to physical, tactile visual systems like shadows, borders, torn tape, and bright color palettes.",
        bg: "var(--butter)",
        rotation: "1.2deg",
        readTime: "6 min read"
      },
      {
        id: 5,
        title: "Designing the MistriBhai Portal",
        date: "March 30, 2026",
        category: "Behind the Scenes",
        desc: "Translating an offline service marketplace into a smooth customer portal. Notes on UX patterns and visual design system alignment.",
        bg: "var(--peach)",
        rotation: "-1.8deg",
        readTime: "4 min read"
      }
    ];

    const filteredArticles = filter === 'All'
      ? articles
      : articles.filter(a => a.category === filter);

    const handleSubscribe = (e) => {
      e.preventDefault();
      if (email.trim()) {
        setSubscribed(true);
        setEmail('');
      }
    };

    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '100px', paddingBottom: '120px' }}>
        
        {/* HERO SECTION */}
        <section style={{ padding: '80px 40px 40px 40px', position: 'relative' }}>
          <window.SPStar size={100} color="var(--pop-a)" rotate="12deg" top="40px" right="160px" />
          <window.SPStar size={60} color="var(--pop-b)" rotate="-20deg" top="240px" left="80px" />
          
          <h1 style={{
            fontSize: '110px',
            lineHeight: '0.92',
            maxWidth: '1000px',
            margin: '0 0 32px 0',
            fontFamily: 'var(--font-display)',
            fontWeight: 'var(--font-display-weight, 700)',
            letterSpacing: 'var(--font-display-spacing)'
          }}>
            The Blackspace <br />
            <span className="font-italic" style={{ color: 'var(--pop-a)' }}>journal</span>.
          </h1>

          <p style={{
            fontSize: '22px',
            lineHeight: '1.5',
            maxWidth: '650px',
            margin: '0 0 48px 0',
            opacity: 0.8
          }}>
            Read articles, case study write-ups, creative code experiments, and studio updates from the Blackspace team.
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

        {/* ARTICLES GRID */}
        <section style={{ padding: '0 40px' }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(12, 1fr)',
            gap: '32px'
          }}>
            {filteredArticles.map((article, idx) => {
              // Bento grid mapping
              const isLarge = idx === 0 || idx === 3;
              const gridSpan = isLarge ? 'span 8' : 'span 4';
              
              return (
                <div 
                  key={article.id}
                  style={{
                    gridColumn: gridSpan,
                    display: 'flex',
                    flexDirection: 'column'
                  }}
                >
                  <window.SPSticker
                    variant="square"
                    bg={article.bg}
                    rotation={article.rotation}
                    style={{
                      padding: '40px',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'space-between',
                      minHeight: '400px',
                      height: '100%',
                      width: '100%'
                    }}
                  >
                    <div>
                      {/* Top bar of card */}
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
                        <span style={{
                          fontSize: '11px',
                          textTransform: 'uppercase',
                          letterSpacing: '0.15em',
                          border: '1px solid var(--ink)',
                          padding: '4px 12px',
                          borderRadius: '999px',
                          fontWeight: '600',
                          background: 'rgba(255,255,255,0.4)',
                          color: 'var(--ink)'
                        }}>{article.category}</span>
                        <span style={{ fontSize: '12px', opacity: 0.6, fontWeight: 'bold' }}>{article.readTime}</span>
                      </div>
                      
                      {/* Content */}
                      <h3 style={{
                        fontSize: '36px',
                        lineHeight: '1.1',
                        margin: '0 0 16px 0',
                        fontFamily: 'var(--font-display)',
                        fontWeight: 'var(--font-display-weight, 700)',
                        letterSpacing: '-0.02em'
                      }}>{article.title}</h3>
                      
                      <p style={{
                        fontSize: '16px',
                        lineHeight: '1.5',
                        opacity: 0.8,
                        margin: '0 0 24px 0'
                      }}>{article.desc}</p>
                    </div>

                    {/* Bottom bar of card */}
                    <div style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      borderTop: '1px solid rgba(10, 10, 10, 0.1)',
                      paddingTop: '20px',
                      marginTop: 'auto'
                    }}>
                      <span style={{ fontSize: '13px', opacity: 0.6, fontWeight: 'bold' }}>{article.date}</span>
                      <a href="#" style={{
                        fontSize: '14px',
                        fontWeight: 'bold',
                        color: 'var(--ink)',
                        textDecoration: 'none',
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '6px',
                        transition: 'transform 0.2s ease'
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.transform = 'translateX(4px)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.transform = 'none';
                      }}>
                        Read article <span style={{ fontSize: '16px' }}>→</span>
                      </a>
                    </div>
                  </window.SPSticker>
                </div>
              );
            })}
          </div>
        </section>

        {/* MARQUEE */}
        <window.SPMarquee words={['The Journal', 'Essays', 'Design Logs', 'Behind the Scenes', 'Commas Matter', 'Writers Who Shoot']} />

        {/* NEWSLETTER CTA */}
        <section style={{ padding: '0 40px' }}>
          <div style={{
            border: '2px solid var(--ink)',
            borderRadius: '20px',
            background: 'var(--butter)',
            padding: '80px',
            position: 'relative',
            overflow: 'hidden',
            boxShadow: '6px 6px 0 var(--ink)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'center',
            gap: '24px'
          }}>
            <window.SPStar size={80} color="var(--pop-a)" rotate="-15deg" top="20px" left="40px" />
            <window.SPStar size={70} color="var(--pop-b)" rotate="25deg" bottom="20px" right="40px" />
            
            <h2 style={{
              fontSize: '64px',
              lineHeight: '1.0',
              margin: '0',
              fontFamily: 'var(--font-display)',
              fontWeight: 'var(--font-display-weight, 700)',
              letterSpacing: '-0.03em'
            }}>
              Subscribe to the Dispatch
            </h2>
            <p style={{
              fontSize: '20px',
              maxWidth: '550px',
              lineHeight: '1.5',
              opacity: 0.8,
              margin: '0 0 16px 0'
            }}>
              Minimal noise. Tactical ideas on film, layout design, and writing. Delivered once every blue moon.
            </p>

            {subscribed ? (
              <window.SPSticker variant="square" bg="var(--mint)" rotation="2deg" style={{ padding: '16px 32px' }}>
                <span style={{ fontSize: '18px', fontWeight: 'bold', display: 'flex', alignItems: 'center', gap: '8px' }}>
                  ✓ You're on the list!
                </span>
              </window.SPSticker>
            ) : (
              <form onSubmit={handleSubscribe} style={{
                display: 'flex',
                gap: '12px',
                width: '100%',
                maxWidth: '500px'
              }}>
                <input 
                  type="email" 
                  placeholder="your.email@domain.com"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  style={{
                    flex: '1',
                    padding: '16px 24px',
                    borderRadius: '999px',
                    border: '2px solid var(--ink)',
                    fontSize: '16px',
                    fontFamily: 'var(--font-body)',
                    background: 'var(--paper)',
                    color: 'var(--ink)',
                    outline: 'none'
                  }}
                />
                <button 
                  type="submit"
                  style={{
                    background: 'var(--ink)',
                    color: 'var(--paper)',
                    padding: '16px 32px',
                    borderRadius: '999px',
                    border: '2px solid var(--ink)',
                    fontSize: '16px',
                    fontWeight: 'bold',
                    cursor: 'pointer',
                    boxShadow: '3px 3px 0 rgba(0,0,0,0.15)',
                    transition: 'all 0.2s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-2px)';
                    e.currentTarget.style.boxShadow = '5px 5px 0 rgba(0,0,0,0.2)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'none';
                    e.currentTarget.style.boxShadow = '3px 3px 0 rgba(0,0,0,0.15)';
                  }}
                >
                  Join →
                </button>
              </form>
            )}
          </div>
        </section>

      </div>
    );
  }

  window.SPJournal = SPJournal;
})();
