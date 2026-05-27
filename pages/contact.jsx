/**
 * pages/contact.jsx
 * SPContact component - Interactive contact form & studio information
 */

(function () {
  function SPContact() {
    const [selectedServices, setSelectedServices] = React.useState([]);
    const [selectedBudget, setSelectedBudget] = React.useState('');
    const [submitted, setSubmitted] = React.useState(false);

    const services = ['Campaigns', 'Films', 'Post-Production', 'Web & AR', 'AI Engine', 'Brand Design'];
    const budgets = ['< $10k', '$10k - $25k', '$25k - $50k', '$50k+'];

    const toggleService = (s) => {
      if (selectedServices.includes(s)) {
        setSelectedServices(selectedServices.filter(item => item !== s));
      } else {
        setSelectedServices([...selectedServices, s]);
      }
    };

    const handleSubmit = (e) => {
      e.preventDefault();
      setSubmitted(true);
    };

    const timelineSteps = [
      { day: 'Day 0', title: 'Review & Intake', desc: 'Our lead creative evaluates your goals, tags, and budget to ensure alignment with our capabilities.' },
      { day: 'Day 2', title: 'Intake Call', desc: 'A direct, 30-minute Zoom call with a director/developer to align on creative details.' },
      { day: 'Day 5', title: 'Scope & Proposal', desc: 'We deliver three distinct conceptual pathways, flat pricing, and estimated timelines.' },
      { day: 'Day 7', title: 'Kickoff Shoot/Sprint', desc: 'Contracts signed, Slack channels initialized, and first script draft or code repo created.' }
    ];

    const sideCards = [
      { label: 'Write Us', title: 'hello@blackspace.media', desc: 'We reply within 12 hours.', bg: 'var(--lilac)' },
      { label: 'Visit HQ', title: 'Koramangala 5th Block', desc: 'Bengaluru, Karnataka 560095', bg: 'var(--mint)' },
      { label: 'Careers', title: 'join@blackspace.media', desc: 'Always looking for editors & React devs.', bg: 'var(--sky)' },
      { label: 'Follow', title: '@blackspace.media', desc: 'Daily behind-the-scenes on Instagram.', bg: 'var(--butter)' }
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

    const inputStyle = {
      width: '100%',
      padding: '16px 20px',
      borderRadius: '12px',
      border: '2px solid var(--ink)',
      fontSize: '16px',
      outline: 'none',
      background: 'var(--paper)',
      color: 'var(--ink)',
      fontFamily: 'var(--font-body)',
      transition: 'border-color 0.2s ease'
    };

    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '100px', paddingBottom: '120px' }}>
        
        {/* HERO SECTION */}
        <section style={{ padding: '80px 40px 40px 40px', position: 'relative' }}>
          <window.SPStar size={110} color="var(--pop-a)" rotate="-10deg" top="20px" right="200px" />
          
          <h1 style={{
            fontSize: '110px',
            lineHeight: '0.92',
            maxWidth: '1000px',
            margin: '0 0 32px 0',
            fontFamily: 'var(--font-display)',
            fontWeight: 'var(--font-display-weight, 700)',
            letterSpacing: 'var(--font-display-spacing)'
          }}>
            Let’s build <br />
            something <span className="font-italic" style={{ color: 'var(--pop-b)' }}>real</span>.
          </h1>

          <p style={{
            fontSize: '22px',
            lineHeight: '1.5',
            maxWidth: '650px',
            margin: '0',
            opacity: 0.8
          }}>
            Drop us details about your project. Our directors and technical leads review all submissions directly. No sales layers.
          </p>
        </section>

        {/* FORM + SIDEBAR CONTAINER */}
        <section style={{ padding: '0 40px' }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 380px',
            gap: '48px',
            alignItems: 'flex-start'
          }}>
            
            {/* Form Column */}
            <div style={{
              ...cardBaseStyle,
              background: 'var(--paper)',
              boxShadow: '6px 6px 0 var(--ink)',
              padding: '48px'
            }}>
              {submitted ? (
                <div style={{ textAlign: 'center', padding: '60px 0' }}>
                  <window.SPStar size={80} color="var(--pop-a)" rotate="12deg" style={{ position: 'relative', margin: '0 auto 24px auto' }} />
                  <h3 style={{ fontSize: '38px', fontFamily: 'var(--font-display)', fontWeight: 'bold', margin: '0 0 12px 0' }}>
                    Message Dispatched!
                  </h3>
                  <p style={{ fontSize: '18px', opacity: 0.8, maxWidth: '400px', margin: '0 auto' }}>
                    We have successfully written your request to our inbox. Expect a response by tomorrow morning.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '28px' }}>
                  
                  {/* Name & Company */}
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
                    <div>
                      <label style={{ fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.12em', fontWeight: 'bold', display: 'block', marginBottom: '8px' }}>Name *</label>
                      <input type="text" required placeholder="John Doe" style={inputStyle} />
                    </div>
                    <div>
                      <label style={{ fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.12em', fontWeight: 'bold', display: 'block', marginBottom: '8px' }}>Company</label>
                      <input type="text" placeholder="Acme Corp" style={inputStyle} />
                    </div>
                  </div>

                  {/* Email & Phone */}
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
                    <div>
                      <label style={{ fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.12em', fontWeight: 'bold', display: 'block', marginBottom: '8px' }}>Email *</label>
                      <input type="email" required placeholder="john@company.com" style={inputStyle} />
                    </div>
                    <div>
                      <label style={{ fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.12em', fontWeight: 'bold', display: 'block', marginBottom: '8px' }}>Phone</label>
                      <input type="tel" placeholder="+91 99999 88888" style={inputStyle} />
                    </div>
                  </div>

                  {/* Service Chip Selectors */}
                  <div>
                    <label style={{ fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.12em', fontWeight: 'bold', display: 'block', marginBottom: '12px' }}>
                      What do you need help with? (Select multiple)
                    </label>
                    <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
                      {services.map((s) => {
                        const isSelected = selectedServices.includes(s);
                        return (
                          <button
                            key={s}
                            type="button"
                            onClick={() => toggleService(s)}
                            style={{
                              padding: '10px 20px',
                              borderRadius: '999px',
                              border: '1.5px solid var(--ink)',
                              background: isSelected ? 'var(--ink)' : 'transparent',
                              color: isSelected ? 'var(--paper)' : 'var(--ink)',
                              fontSize: '13px',
                              fontWeight: 'bold',
                              cursor: 'pointer',
                              transition: 'all 0.15s ease'
                            }}
                          >
                            {s}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Budget Chip Selector */}
                  <div>
                    <label style={{ fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.12em', fontWeight: 'bold', display: 'block', marginBottom: '12px' }}>
                      Estimated Budget (USD)
                    </label>
                    <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
                      {budgets.map((b) => {
                        const isSelected = selectedBudget === b;
                        return (
                          <button
                            key={b}
                            type="button"
                            onClick={() => setSelectedBudget(b)}
                            style={{
                              padding: '10px 20px',
                              borderRadius: '999px',
                              border: '1.5px solid var(--ink)',
                              background: isSelected ? 'var(--ink)' : 'transparent',
                              color: isSelected ? 'var(--paper)' : 'var(--ink)',
                              fontSize: '13px',
                              fontWeight: 'bold',
                              cursor: 'pointer',
                              transition: 'all 0.15s ease'
                            }}
                          >
                            {b}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Message Textarea */}
                  <div>
                    <label style={{ fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.12em', fontWeight: 'bold', display: 'block', marginBottom: '8px' }}>Project Context / Message *</label>
                    <textarea 
                      required 
                      rows={5} 
                      placeholder="Outline your timeline, target platforms, and what success looks like for this engagement..." 
                      style={{...inputStyle, resize: 'vertical'}}
                    />
                  </div>

                  {/* Checkbox */}
                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                    <input type="checkbox" required id="consent" style={{ marginTop: '4px', accentColor: 'var(--ink)' }} />
                    <label htmlFor="consent" style={{ fontSize: '13px', lineHeight: '1.4', opacity: 0.8, cursor: 'pointer' }}>
                      I agree to share this brief directly with the Blackspace directors and creators. No spam, just real work.
                    </label>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    style={{
                      background: 'var(--ink)',
                      color: 'var(--paper)',
                      padding: '20px 40px',
                      borderRadius: '999px',
                      fontSize: '16px',
                      fontWeight: 'bold',
                      border: 'none',
                      cursor: 'pointer',
                      boxShadow: '4px 4px 0 rgba(0,0,0,0.15)',
                      transition: 'all 0.1s ease',
                      marginTop: '12px'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = 'translateY(-2px)';
                      e.currentTarget.style.boxShadow = '6px 6px 0 rgba(0,0,0,0.2)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = 'none';
                      e.currentTarget.style.boxShadow = '4px 4px 0 rgba(0,0,0,0.15)';
                    }}
                  >
                    Submit Scope Brief ↗
                  </button>

                </form>
              )}
            </div>

            {/* Sidebar Columns */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              {sideCards.map((card, idx) => (
                <div
                  key={idx}
                  style={{
                    ...cardBaseStyle,
                    background: card.bg,
                    padding: '24px',
                    transform: `rotate(${(idx % 2 === 0) ? '-2deg' : '2deg'})`
                  }}
                >
                  <span style={{ fontSize: '10px', textTransform: 'uppercase', letterSpacing: '0.15em', fontWeight: 'bold', opacity: 0.6, marginBottom: '6px' }}>
                    {card.label}
                  </span>
                  <h4 style={{
                    fontSize: '18px',
                    margin: '0 0 4px 0',
                    fontFamily: 'var(--font-display)',
                    fontWeight: 'var(--font-display-weight, 700)'
                  }}>{card.title}</h4>
                  <p style={{ fontSize: '13px', margin: 0, opacity: 0.8 }}>{card.desc}</p>
                </div>
              ))}
            </div>

          </div>
        </section>

        {/* TIMELINE SECTION ("What happens next") */}
        <section style={{ padding: '0 40px' }}>
          <window.SPSectionHead 
            num="02" 
            title="What Happens" 
            titleIt="Next" 
            dek="Our standard rapid onboard timeline. We value speed and clear alignment from Day 0."
          />

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: '24px',
            marginTop: '60px'
          }}>
            {timelineSteps.map((step, idx) => (
              <div
                key={idx}
                style={{
                  ...cardBaseStyle,
                  background: 'var(--paper)',
                  minHeight: '220px',
                  justifyContent: 'space-between',
                  transform: `rotate(${(idx % 2 === 0) ? '-1.5deg' : '1.5deg'})`
                }}
              >
                <span className="font-italic" style={{
                  fontSize: '18px',
                  fontWeight: 'bold',
                  color: 'var(--pop-a)',
                  display: 'block'
                }}>
                  {step.day}
                </span>

                <div style={{ marginTop: '20px' }}>
                  <h4 style={{
                    fontSize: '20px',
                    margin: '0 0 8px 0',
                    fontFamily: 'var(--font-display)',
                    fontWeight: 'var(--font-display-weight, 700)'
                  }}>{step.title}</h4>
                  <p style={{ fontSize: '14px', lineHeight: '1.45', opacity: 0.75, margin: 0 }}>{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* PRINT BUTTON REDIRECT CARD */}
        <section style={{ padding: '0 40px' }}>
          <div style={{
            ...cardBaseStyle,
            background: 'var(--mint)',
            color: 'var(--ink)',
            padding: '60px 40px',
            textAlign: 'center',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '24px'
          }}>
            <h3 style={{
              fontSize: '36px',
              margin: 0,
              fontFamily: 'var(--font-display)',
              fontWeight: 'var(--font-display-weight, 700)'
            }}>
              Need a physical brief form?
            </h3>
            <p style={{ fontSize: '16px', opacity: 0.8, maxWidth: '500px', margin: 0 }}>
              We offer a print-ready version of our contact portal optimized for PDF compilation or standard A4 paper.
            </p>
            <a
              href="contact-print.html"
              target="_blank"
              style={{
                background: 'var(--ink)',
                color: 'var(--paper)',
                padding: '16px 36px',
                borderRadius: '999px',
                fontSize: '15px',
                fontWeight: 'bold',
                textDecoration: 'none',
                boxShadow: '3px 3px 0 rgba(0,0,0,0.15)'
              }}
            >
              Open Print Form ↗
            </a>
          </div>
        </section>

      </div>
    );
  }

  window.SPContact = SPContact;
})();
