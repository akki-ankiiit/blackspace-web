/**
 * pages/studio.jsx
 * SPStudio component - About page details
 */

(function () {
  function SPStudio() {
    const beliefs = [
      { num: 'I', title: 'Flawless Commas, Bold Vision', text: 'We believe that <b>impeccable details</b> and <i>radical execution</i> go hand-in-hand. Creative direction is useless without rigorous craftsmanship.' },
      { num: 'II', title: 'Lean Crews, Direct Access', text: 'We operate <b>without accounts layers</b>. Our directors write scripts and our editors shoot plates. You talk directly to the builders.' },
      { num: 'III', title: 'Personality Over Boilerplate', text: 'Bespoke systems, <i>handcrafted illustrations</i>, and textured layouts. We refuse to let the internet grow uniform and flat.' },
      { num: 'IV', title: 'Accelerate via Machine', text: 'We treat <b>artificial intelligence</b> as a draft catalyst. We speed up loops, prototype faster, and reserve human taste for final polish.' },
      { num: 'V', title: 'Bengaluru First', text: 'Rooted in the creative chaos of <b>Koramangala</b>, we bring Indian talent and globally-polished standards to every production.' },
      { num: 'VI', title: 'Radical Ownership', text: 'We do not sell hours; we deliver finished work. We take complete responsibility for <b>concept, execution, and delivery</b>.' }
    ];

    const team = [
      { name: 'Akki', role: 'Founder & Director', emoji: '🎬', bg: 'var(--mint)' },
      { name: 'Vikram', role: 'Lead Writer', emoji: '✍️', bg: 'var(--lilac)' },
      { name: 'Priya', role: 'Chief Editor', emoji: '💻', bg: 'var(--sky)' },
      { name: 'Natasha', role: 'Cinematographer', emoji: '🎥', bg: 'var(--butter)' },
      { name: 'Rahul', role: 'Tech & Frontend', emoji: '⚡', bg: 'var(--peach)' },
      { name: 'Dev', role: 'Art Director', emoji: '🎨', bg: 'var(--mint)' },
      { name: 'Sarah', role: 'Operations', emoji: '📋', bg: 'var(--lilac)' },
      { name: 'Karan', role: 'Sound Designer', emoji: '🔊', bg: 'var(--sky)' },
      { name: 'Commy', role: 'The Grammar Dog', emoji: '🐕', bg: 'var(--butter)', isDog: true }
    ];

    const milestones = [
      { year: '2023', title: 'The Spark', desc: 'Blackspace founded in Koramangala 5th block. 3 writers, 1 edit suite, a lot of filter coffee.' },
      { year: '2023', title: 'Sound & Vision', desc: 'Upgraded to full Dolby Atmos sound mixing suite and dual color grading suites.' },
      { year: '2024', title: 'Interactive Arm', desc: 'Launched web engineering division, bridging video narrative with Three.js web portals.' },
      { year: '2024', title: 'Webby Nod', desc: 'Received a Webby nomination for our interactive documentary system.' },
      { year: '2025', title: 'Okinawa Odyssey', desc: 'Produced and distributed our first multi-part documentary series across Asia.' },
      { year: '2026', title: 'Sticker Pop Live', desc: 'Completed design and code launch of the Blackspace visual ecosystem.' }
    ];

    const press = [
      { pub: 'GQ Magazine', quote: 'Blackspace is redefining what a lean content agency can do in the age of generative tools.' },
      { pub: 'Fast Company', quote: 'A brilliant mix of perfect typography, analog textures, and high-performance WebGL engineering.' },
      { pub: 'Wired', quote: 'They manage to use AI tools tastefully without stripping the human personality out of the craft.' },
      { pub: 'Creative Review', quote: 'A visual breath of fresh air. Playful, rotated, and highly distinct design paradigms.' }
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
          <window.SPStar size={110} color="var(--pop-a)" rotate="10deg" top="20px" right="200px" />
          <window.SPStar size={60} color="var(--pop-c)" rotate="-15deg" bottom="40px" right="60px" />

          <h1 style={{
            fontSize: '110px',
            lineHeight: '0.92',
            maxWidth: '1100px',
            margin: '0 0 32px 0',
            fontFamily: 'var(--font-display)',
            fontWeight: 'var(--font-display-weight, 700)',
            letterSpacing: 'var(--font-display-spacing)'
          }}>
            Writers who <span className="font-italic" style={{ color: 'var(--pop-b)' }}>shoot</span>.<br />
            Editors who pitch.
          </h1>

          <p style={{
            fontSize: '22px',
            lineHeight: '1.5',
            maxWidth: '700px',
            margin: '0',
            opacity: 0.8
          }}>
            Blackspace is an independent content studio in Bengaluru, India. We construct visual stories, digital applications, and brand frameworks for organizations looking to communicate with clarity and force.
          </p>
        </section>

        {/* WORKSPACE PHOTO PLACEHOLDER */}
        <section style={{ padding: '0 40px' }}>
          <div style={{
            ...cardBaseStyle,
            background: 'var(--paper)',
            borderWidth: '2px',
            padding: '120px 40px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center',
            backgroundImage: 'radial-gradient(var(--ink) 1px, transparent 1px)',
            backgroundSize: '24px 24px',
            minHeight: '420px'
          }}>
            <div style={{ transform: 'rotate(-4deg) translateY(-20px)', zIndex: 2 }}>
              <window.SPSticker variant="tape" bg="var(--pop-a)" rotation="-4deg" style={{ padding: '24px 40px' }}>
                <span style={{ fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.2em', color: 'var(--paper)', marginBottom: '8px', opacity: 0.8 }}>Blackspace Headquarters</span>
                <span className="font-display" style={{ fontSize: '32px', fontWeight: 'bold', color: 'var(--paper)' }}>Koramangala, Bengaluru</span>
              </window.SPSticker>
            </div>
            
            <div style={{
              position: 'absolute',
              bottom: '20px',
              left: '40px',
              transform: 'rotate(6deg)'
            }}>
              <window.SPSticker variant="round" bg="var(--butter)" rotation="6deg" style={{ padding: '8px 16px' }}>
                <span style={{ fontSize: '12px', fontWeight: 'bold' }}>Founded 2023 ⚡</span>
              </window.SPSticker>
            </div>

            <div style={{
              position: 'absolute',
              bottom: '20px',
              right: '40px',
              transform: 'rotate(-6deg)'
            }}>
              <window.SPSticker variant="square" bg="var(--mint)" rotation="-6deg" style={{ padding: '8px 16px' }}>
                <span style={{ fontSize: '12px', fontWeight: 'bold' }}>11 Humans, 1 Dog 🐕</span>
              </window.SPSticker>
            </div>
          </div>
        </section>

        {/* BELIEFS (Roman numerals, italic/bold) */}
        <section style={{ padding: '0 40px' }}>
          <window.SPSectionHead 
            num="01" 
            title="Our Governing" 
            titleIt="Beliefs" 
            dek="Our workflow is built on transparency, craftsmanship, and a heavy rejection of corporate filler."
          />

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gap: '40px 60px',
            marginTop: '60px'
          }}>
            {beliefs.map((b, idx) => (
              <div 
                key={idx}
                style={{
                  ...cardBaseStyle,
                  background: 'transparent',
                  border: 'none',
                  boxShadow: 'none',
                  borderBottom: '1px solid rgba(10, 10, 10, 0.1)',
                  borderRadius: 0,
                  padding: '0 0 32px 0',
                  flexDirection: 'row',
                  gap: '24px',
                  alignItems: 'flex-start'
                }}
              >
                <span className="font-italic" style={{
                  fontSize: '52px',
                  fontWeight: 'bold',
                  color: 'var(--pop-a)',
                  lineHeight: '0.8',
                  width: '60px'
                }}>
                  {b.num}
                </span>
                <div>
                  <h3 style={{
                    fontSize: '24px',
                    margin: '0 0 14px 0',
                    fontFamily: 'var(--font-display)',
                    fontWeight: 'var(--font-display-weight, 700)'
                  }}>{b.title}</h3>
                  <p 
                    style={{ fontSize: '17px', lineHeight: '1.55', margin: 0, opacity: 0.8 }}
                    dangerouslySetInnerHTML={{ __html: b.text }}
                  />
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* TEAM CARDS (6-column, 3/4 aspect ratio) */}
        <section style={{ padding: '0 40px' }}>
          <window.SPSectionHead 
            num="02" 
            title="The Creative" 
            titleIt="Roster" 
            dek="An agile group of directors, editors, writers, and technical specialists based under one roof."
          />

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(6, 1fr)',
            gap: '20px',
            marginTop: '60px'
          }}>
            {team.map((member, idx) => (
              <div
                key={idx}
                style={{
                  ...cardBaseStyle,
                  background: member.bg,
                  padding: '24px 20px',
                  aspectRatio: '3/4',
                  justifyContent: 'space-between',
                  transform: `rotate(${(idx % 3 === 0) ? '-2deg' : (idx % 3 === 1) ? '2deg' : '0deg'})`,
                  transition: 'transform 0.3s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = `rotate(${(idx % 2 === 0) ? '3deg' : '-3deg'}) translateY(-4px)`;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = `rotate(${(idx % 3 === 0) ? '-2deg' : (idx % 3 === 1) ? '2deg' : '0deg'})`;
                }}
              >
                <div style={{
                  fontSize: '44px',
                  lineHeight: '1',
                  background: 'rgba(255, 255, 255, 0.4)',
                  width: '60px',
                  height: '60px',
                  borderRadius: '12px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  border: '1px solid var(--ink)'
                }}>
                  {member.emoji}
                </div>
                
                <div>
                  <h4 style={{
                    fontSize: '22px',
                    margin: '0 0 4px 0',
                    fontFamily: 'var(--font-display)',
                    fontWeight: 'var(--font-display-weight, 700)'
                  }}>
                    {member.name}
                  </h4>
                  <p style={{
                    fontSize: '12px',
                    margin: 0,
                    textTransform: 'uppercase',
                    letterSpacing: '0.1em',
                    fontWeight: 'bold',
                    opacity: 0.6
                  }}>
                    {member.role}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* TIMELINE (3-col, absolute year stickers) */}
        <section style={{ padding: '0 40px' }}>
          <window.SPSectionHead 
            num="03" 
            title="Timeline of" 
            titleIt="Events" 
            dek="Our brief but high-velocity journey from a local Koramangala room to a cross-disciplinary content studio."
          />

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '32px',
            marginTop: '80px'
          }}>
            {milestones.map((m, idx) => (
              <div
                key={idx}
                style={{
                  ...cardBaseStyle,
                  background: 'var(--paper)',
                  padding: '48px 28px 28px 28px',
                  minHeight: '220px'
                }}
              >
                {/* Absolute Year Sticker */}
                <div style={{
                  position: 'absolute',
                  top: '-12px',
                  left: '20px',
                  transform: `rotate(${(idx % 2 === 0) ? '-4deg' : '4deg'})`
                }}>
                  <window.SPSticker 
                    variant="square" 
                    bg={idx % 3 === 0 ? 'var(--mint)' : idx % 3 === 1 ? 'var(--lilac)' : 'var(--peach)'}
                    rotation="0deg"
                    style={{ padding: '4px 12px' }}
                  >
                    <span style={{ fontSize: '14px', fontWeight: 'bold', fontFamily: 'var(--font-display)' }}>{m.year}</span>
                  </window.SPSticker>
                </div>
                
                <h4 style={{
                  fontSize: '22px',
                  margin: '12px 0 10px 0',
                  fontFamily: 'var(--font-display)',
                  fontWeight: 'var(--font-display-weight, 700)'
                }}>{m.title}</h4>
                <p style={{ fontSize: '15px', lineHeight: '1.45', opacity: 0.8, margin: 0 }}>{m.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* MARQUEE */}
        <window.SPMarquee words={['Koramangala 5th Block', 'Bengaluru, IN', 'Founded 2023', 'Writers Who Shoot', 'Editors Who Pitch', '11 Humans', '1 Dog']} />

        {/* PRESS & RECOGNITION */}
        <section style={{ padding: '0 40px' }}>
          <window.SPSectionHead 
            num="04" 
            title="Press &" 
            titleIt="Traction" 
            dek="What creative journals, design critics, and industry portals have to say about the Blackspace approach."
          />

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: '24px',
            marginTop: '60px'
          }}>
            {press.map((p, idx) => (
              <div
                key={idx}
                style={{
                  ...cardBaseStyle,
                  background: idx % 2 === 0 ? 'var(--mint)' : 'var(--lilac)',
                  justifyContent: 'space-between',
                  minHeight: '240px'
                }}
              >
                <p className="font-italic" style={{ fontSize: '17px', lineHeight: '1.5', margin: '0 0 24px 0', fontWeight: '500' }}>
                  “{p.quote}”
                </p>
                <div style={{
                  fontSize: '12px',
                  fontWeight: 'bold',
                  textTransform: 'uppercase',
                  letterSpacing: '0.15em',
                  opacity: 0.7
                }}>
                  {p.pub}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section style={{ padding: '0 40px' }}>
          <div style={{
            ...cardBaseStyle,
            background: 'var(--pop-a)',
            color: 'var(--paper)',
            padding: '80px',
            textAlign: 'center',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '32px'
          }}>
            <window.SPStar size={90} color="var(--butter)" rotate="10deg" top="20px" right="60px" />
            <window.SPStar size={70} color="var(--mint)" rotate="-15deg" bottom="40px" left="60px" />
            
            <h2 style={{
              fontSize: '80px',
              lineHeight: '1.0',
              margin: '0',
              fontFamily: 'var(--font-display)',
              fontWeight: 'var(--font-display-weight, 700)',
              letterSpacing: '-0.04em'
            }}>
              Want to see our <br />
              crews in action?
            </h2>
            <p style={{
              fontSize: '20px',
              maxWidth: '500px',
              lineHeight: '1.5',
              opacity: 0.8,
              margin: '0'
            }}>
              We are constantly shooting across India. Drop a message to visit our Bangalore edit suites or see live projects.
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
              Get In Touch ↗
            </a>
          </div>
        </section>

      </div>
    );
  }

  window.SPStudio = SPStudio;
})();
