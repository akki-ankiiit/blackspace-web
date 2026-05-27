/**
 * sp-kit.jsx
 * Blackspace Sticker Pop UI kit. Exports components and definitions to `window`.
 */

(function () {
  // --- DESIGN SYSTEMS ---

  const SP_THEMES = {
    Classic: {
      name: 'Classic',
      paper: '#f2ede2',
      ink: '#0a0a0a',
      pastels: ['#9de6d8', '#dfc4f0', '#a7d0f5', '#f5d77a', '#f6b39a'],
      pops: ['#FF4D1A', '#FF2E8B', '#2E4CFF']
    },
    Citrus: {
      name: 'Citrus',
      paper: '#fcfbf7',
      ink: '#1c160e',
      pastels: ['#ffee93', '#ffc09f', '#f5d77a', '#e2f0d9', '#ffddc1'],
      pops: ['#FF6B35', '#FFB703', '#4895EF']
    },
    Bubblegum: {
      name: 'Bubblegum',
      paper: '#fff5f7',
      ink: '#2b0c1e',
      pastels: ['#ffccd5', '#f0e6ff', '#dfc4f0', '#ffc3a0', '#ffafcc'],
      pops: ['#FF2E8B', '#B5179E', '#7209B7']
    },
    Marine: {
      name: 'Marine',
      paper: '#f0f7fc',
      ink: '#03071e',
      pastels: ['#a7d0f5', '#90e0ef', '#caf0f8', '#b5e2fa', '#d8e2dc'],
      pops: ['#2E4CFF', '#0077B6', '#00B4D8']
    },
    'Neon pastel': {
      name: 'Neon pastel',
      paper: '#fbfbf0',
      ink: '#000000',
      pastels: ['#ccffec', '#f3e8ff', '#ffffcc', '#ffe3ec', '#ffeacc'],
      pops: ['#FF4D1A', '#FF2E8B', '#00F0FF']
    }
  };

  const SP_TYPE = {
    'Acid+Gara+Helv': {
      name: 'Acid Grotesk + Garamond + Helvetica',
      display: "'Space Grotesk', -apple-system, sans-serif",
      displayWeight: '700',
      displayLetterSpacing: '-0.045em',
      italic: "'EB Garamond', serif",
      italicStyle: 'italic',
      italicWeight: '400',
      body: '-apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif',
      bodyWeight: '400'
    },
    'All Helvetica': {
      name: 'All Helvetica',
      display: '-apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif',
      displayWeight: '700',
      displayLetterSpacing: '-0.02em',
      italic: '-apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif',
      italicStyle: 'italic',
      italicWeight: '400',
      body: '-apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif',
      bodyWeight: '400'
    },
    'Garamond-led': {
      name: 'Garamond-led',
      display: "'EB Garamond', serif",
      displayWeight: '600',
      displayLetterSpacing: '-0.01em',
      italic: "'EB Garamond', serif",
      italicStyle: 'italic',
      italicWeight: '400',
      body: "'EB Garamond', serif",
      bodyWeight: '400'
    }
  };

  // --- STYLES & STYLING HELPERS ---

  const baseStyles = `
    * {
      box-sizing: border-box;
      transition: background-color 0.4s ease, color 0.4s ease, border-color 0.4s ease;
    }
    body {
      margin: 0;
      padding: 0;
      background-color: var(--paper);
      color: var(--ink);
      font-family: var(--font-body);
      min-width: 1440px;
      overflow-x: auto;
    }
    
    /* Scrollbar */
    ::-webkit-scrollbar {
      width: 12px;
      height: 12px;
    }
    ::-webkit-scrollbar-track {
      background: var(--paper);
    }
    ::-webkit-scrollbar-thumb {
      background: var(--ink);
      border: 3px solid var(--paper);
      border-radius: 99px;
    }
    
    @keyframes marquee {
      0% { transform: translate3d(0, 0, 0); }
      100% { transform: translate3d(-50%, 0, 0); }
    }
    
    @media print {
      body {
        background-color: #ffffff !important;
        color: #000000 !important;
        -webkit-print-color-adjust: exact;
        print-color-adjust: exact;
      }
      .no-print {
        display: none !important;
      }
    }
  `;

  // Inject CSS styles into head
  const styleEl = document.createElement('style');
  styleEl.textContent = baseStyles;
  document.head.appendChild(styleEl);


  // --- REUSABLE COMPONENTS ---

  // Logo component
  function SPLogo() {
    return (
      <a href="index.html" style={{
        display: 'flex',
        alignItems: 'center',
        gap: '10px',
        textDecoration: 'none',
        color: 'var(--ink)',
        fontSize: '22px',
        fontWeight: 'var(--font-display-weight, 700)',
        fontFamily: 'var(--font-display)'
      }}>
        <span style={{
          display: 'inline-flex',
          width: '24px',
          height: '24px',
          backgroundColor: 'var(--pop-a)',
          clipPath: 'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)',
          transform: 'rotate(12deg)',
          transition: 'transform 0.4s ease'
        }} className="logo-star" />
        <span style={{ letterSpacing: '-0.03em' }}>blackspace</span>
      </a>
    );
  }

  // Navigation Menu
  function SPNav({ activePage }) {
    const navItems = [
      { name: 'Work', url: 'work.html', key: 'work' },
      { name: 'Studio', url: 'studio.html', key: 'studio' },
      { name: 'Services', url: 'services.html', key: 'services' },
      { name: 'Journal', url: 'journal.html', key: 'journal' },
      { name: 'Contact', url: 'contact.html', key: 'contact' }
    ];

    return (
      <header className="no-print" style={{
        position: 'absolute',
        top: '0',
        left: '0',
        width: '100%',
        zIndex: '100',
        padding: '32px 40px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        background: 'transparent',
        transition: 'background 0.4s ease'
      }}>
        {/* Left: Logo & Subtext */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
          <a href="index.html" style={{ 
            display: 'flex', 
            alignItems: 'center', 
            gap: '8px', 
            textDecoration: 'none', 
            color: 'var(--ink)', 
            fontSize: '22px', 
            fontWeight: 'var(--font-display-weight, 700)', 
            fontFamily: 'var(--font-display)',
            letterSpacing: '-0.02em'
          }}>
            <span style={{ color: 'var(--pop-a)', fontSize: '24px' }}>✳</span> Blackspace
          </a>
          <span style={{ fontSize: '10px', textTransform: 'uppercase', letterSpacing: '0.15em', fontWeight: 'bold', opacity: 0.5, fontFamily: 'var(--font-display)' }}>
            ✳ BLACKSPACE — A CONTENT STUDIO
          </span>
        </div>

        {/* Center: Pill Navbar */}
        <nav style={{ 
          display: 'flex', 
          gap: '32px', 
          alignItems: 'center',
          background: 'var(--ink)',
          padding: '14px 40px',
          borderRadius: '999px',
          marginTop: '-4px'
        }}>
          {navItems.map((item) => {
            const isActive = activePage === item.key;
            return (
              <a
                key={item.key}
                href={item.url}
                style={{
                  fontSize: '12px',
                  fontWeight: '600',
                  textTransform: 'capitalize',
                  textDecoration: 'none',
                  color: isActive ? 'var(--paper)' : 'rgba(255, 255, 255, 0.7)',
                  transition: 'color 0.2s ease',
                  fontFamily: 'var(--font-display)'
                }}
                onMouseEnter={(e) => { e.currentTarget.style.color = 'var(--paper)'; }}
                onMouseLeave={(e) => { if (!isActive) e.currentTarget.style.color = 'rgba(255, 255, 255, 0.7)'; }}
              >
                {item.name}
              </a>
            );
          })}
        </nav>

        {/* Right: CTA & Subtext */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '32px', alignItems: 'flex-end' }}>
          <a href="contact.html" style={{
            background: 'var(--pop-a)',
            color: '#fff',
            padding: '14px 28px',
            borderRadius: '999px',
            fontSize: '13px',
            fontWeight: 'bold',
            textDecoration: 'none',
            fontFamily: 'var(--font-display)',
            marginTop: '-4px',
            transition: 'transform 0.2s ease, background 0.2s ease'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'translateY(-2px)';
            e.currentTarget.style.background = '#e64517';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'none';
            e.currentTarget.style.background = 'var(--pop-a)';
          }}>
            Start a project →
          </a>
          <span style={{ fontSize: '10px', textTransform: 'uppercase', letterSpacing: '0.15em', fontWeight: 'bold', opacity: 0.5, fontFamily: 'var(--font-display)' }}>
            BENGALURU - IN - EST. 2022
          </span>
        </div>
      </header>
    );
  }

  // Tape element for stickers
  function SPTape({ color }) {
    const tapeBg = color || 'rgba(255, 255, 255, 0.7)';
    return (
      <div style={{
        position: 'absolute',
        top: '-14px',
        left: '50%',
        transform: 'translateX(-50%) rotate(-3deg)',
        width: '100px',
        height: '24px',
        background: tapeBg,
        backdropFilter: 'blur(2px)',
        boxShadow: '0 2px 5px rgba(0,0,0,0.06)',
        borderLeft: '1px dashed rgba(0,0,0,0.1)',
        borderRight: '1px dashed rgba(0,0,0,0.1)',
        backgroundImage: 'linear-gradient(45deg, rgba(0,0,0,0.03) 25%, transparent 25%, transparent 50%, rgba(0,0,0,0.03) 50%, rgba(0,0,0,0.03) 75%, transparent 75%, transparent)',
        backgroundSize: '10px 10px',
        zIndex: 5,
        pointerEvents: 'none'
      }} />
    );
  }

  // Sticker component
  function SPSticker({
    variant = 'square',
    bg = 'var(--mint)',
    rotation = '0deg',
    style = {},
    children,
    hoverScale = true
  }) {
    const [currentRotate, setCurrentRotate] = React.useState(rotation);
    const parsedRotation = parseFloat(rotation) || 0;

    const baseStickerStyle = {
      display: 'inline-flex',
      flexDirection: 'column',
      background: bg,
      border: '1px solid var(--ink)',
      padding: '16px 20px',
      color: 'var(--ink)',
      position: 'relative',
      transform: `rotate(${currentRotate})`,
      transition: 'transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275), box-shadow 0.4s ease',
      cursor: 'default',
      userSelect: 'none',
      ...style
    };

    // Card shadow styling logic
    if (variant === 'round') {
      baseStickerStyle.borderRadius = '999px';
      baseStickerStyle.boxShadow = '4px 5px 0 var(--ink)';
    } else if (variant === 'square') {
      baseStickerStyle.borderRadius = '12px';
      baseStickerStyle.boxShadow = '4px 5px 0 var(--ink)';
    } else if (variant === 'torn') {
      baseStickerStyle.borderRadius = '2px';
      baseStickerStyle.clipPath = 'polygon(2% 1%, 98% 3%, 97% 95%, 68% 98%, 32% 96%, 1% 94%)';
    } else {
      // tape
      baseStickerStyle.borderRadius = '12px';
      baseStickerStyle.boxShadow = '4px 5px 0 var(--ink)';
    }

    const handleMouseEnter = () => {
      if (hoverScale) {
        // Exaggerate rotation slightly on hover + add minor tilt
        setCurrentRotate(`${parsedRotation + (parsedRotation >= 0 ? 4 : -4)}deg`);
      }
    };

    const handleMouseLeave = () => {
      setCurrentRotate(rotation);
    };

    const stickerEl = (
      <div
        style={baseStickerStyle}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {variant === 'tape' && <SPTape />}
        {children}
      </div>
    );

    if (variant === 'torn') {
      // Wrapper to cast shadow for clipped path
      return (
        <div style={{
          display: 'inline-block',
          filter: 'drop-shadow(4px 5px 0 var(--ink))',
          transform: `rotate(${currentRotate})`,
          transition: 'transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)'
        }}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <div style={{
            ...baseStickerStyle,
            transform: 'none',
            boxShadow: 'none'
          }}>
            {children}
          </div>
        </div>
      );
    }

    return stickerEl;
  }

  // Status sticker mapping status alerts
  function SPStatusSticker({ statusType = 'editing', rotation = '-3deg' }) {
    const statuses = {
      onset: { label: 'Right now', value: 'On Set 🎬', bg: 'var(--mint)' },
      editing: { label: 'Currently', value: 'Editing 💻', bg: 'var(--lilac)' },
      coffee: { label: 'Team status', value: 'Brewing Coffee ☕', bg: 'var(--butter)' },
      draft: { label: 'In the oven', value: 'Draft Engine 🚀', bg: 'var(--peach)' }
    };

    const current = statuses[statusType] || statuses.editing;

    return (
      <SPSticker variant="tape" bg={current.bg} rotation={rotation}>
        <span style={{ fontSize: '10px', textTransform: 'uppercase', letterSpacing: '0.12em', opacity: 0.8, marginBottom: '2px' }}>
          {current.label}
        </span>
        <span style={{ fontSize: '15px', fontWeight: '700', fontFamily: 'var(--font-display)' }}>
          {current.value}
        </span>
      </SPSticker>
    );
  }

  // Decorative Star component
  function SPStar({
    size = 64,
    color = 'var(--pop-a)',
    rotate = '0deg',
    top,
    right,
    left,
    bottom,
    style = {}
  }) {
    const positionStyles = {
      position: 'absolute',
      width: `${size}px`,
      height: `${size}px`,
      backgroundColor: color,
      clipPath: 'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)',
      transform: `rotate(${rotate})`,
      top: top !== undefined ? top : 'auto',
      right: right !== undefined ? right : 'auto',
      left: left !== undefined ? left : 'auto',
      bottom: bottom !== undefined ? bottom : 'auto',
      zIndex: 1,
      pointerEvents: 'none',
      transition: 'transform 0.5s ease',
      ...style
    };

    return <div className="sp-star" style={positionStyles} />;
  }

  // Endless horizontal scrolling word marquee
  function SPMarquee({ words = [] }) {
    // Duplicate words array to allow continuous overlap
    const items = [...words, ...words, ...words, ...words];
    return (
      <div className="no-print" style={{
        overflow: 'hidden',
        borderTop: '2px solid var(--ink)',
        borderBottom: '2px solid var(--ink)',
        background: 'var(--paper)',
        padding: '20px 0',
        width: '100%',
        display: 'flex',
        userSelect: 'none'
      }}>
        <div style={{
          display: 'flex',
          whiteSpace: 'nowrap',
          animation: 'marquee 25s linear infinite',
          width: 'max-content'
        }}>
          {items.map((word, idx) => (
            <div key={idx} style={{
              display: 'inline-flex',
              alignItems: 'center',
              fontSize: '44px',
              fontWeight: '700',
              textTransform: 'uppercase',
              fontFamily: 'var(--font-display)',
              marginRight: '60px',
              color: 'var(--ink)'
            }}>
              <span>{word}</span>
              <span style={{
                display: 'inline-block',
                width: '18px',
                height: '18px',
                backgroundColor: 'var(--pop-a)',
                marginLeft: '60px',
                clipPath: 'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)'
              }} />
            </div>
          ))}
        </div>
      </div>
    );
  }

  // Section Header component
  function SPSectionHead({ num, title, titleIt, dek }) {
    return (
      <div style={{
        marginBottom: '64px',
        position: 'relative'
      }}>
        <div style={{
          fontSize: '14px',
          fontWeight: '700',
          letterSpacing: '0.2em',
          textTransform: 'uppercase',
          color: 'var(--pop-a)',
          marginBottom: '16px'
        }}>
          {num} /
        </div>
        <h2 style={{
          fontSize: '84px',
          fontWeight: 'var(--font-display-weight, 700)',
          fontFamily: 'var(--font-display)',
          lineHeight: '0.95',
          margin: '0 0 20px 0',
          letterSpacing: 'var(--font-display-spacing, -0.04em)'
        }}>
          {title}{' '}
          {titleIt && (
            <span style={{
              fontFamily: 'var(--font-italic)',
              fontStyle: 'var(--font-italic-style, italic)',
              fontWeight: 'var(--font-italic-weight, 400)',
              color: 'var(--ink)',
              opacity: 0.85
            }}>
              {titleIt}
            </span>
          )}
        </h2>
        {dek && (
          <p style={{
            fontSize: '20px',
            lineHeight: '1.5',
            maxWidth: '600px',
            margin: '0',
            opacity: 0.8
          }}>
            {dek}
          </p>
        )}
      </div>
    );
  }

  // Footer Component
  function SPFooter() {
    return (
      <footer className="no-print" style={{
        borderTop: '2px solid var(--ink)',
        background: 'var(--ink)',
        color: 'var(--paper)',
        padding: '80px 40px 40px 40px',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-start',
          marginBottom: '80px'
        }}>
          <div>
            <h3 style={{
              fontSize: '48px',
              fontFamily: 'var(--font-display)',
              fontWeight: 'var(--font-display-weight, 700)',
              letterSpacing: '-0.03em',
              margin: '0 0 16px 0'
            }}>
              blackspace®
            </h3>
            <p style={{
              fontSize: '18px',
              lineHeight: '1.6',
              maxWidth: '360px',
              opacity: 0.7,
              margin: '0'
            }}>
              Writers who shoot. Editors who pitch. Directors who care about commas. Bengaluru, IN.
            </p>
          </div>
          <div style={{ display: 'flex', gap: '80px' }}>
            <div>
              <div style={{ fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.15em', opacity: 0.5, marginBottom: '24px' }}>
                Quick Links
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                <a href="work.html" style={{ color: 'var(--paper)', textDecoration: 'none', fontSize: '15px', opacity: 0.8 }}>Selected Work</a>
                <a href="studio.html" style={{ color: 'var(--paper)', textDecoration: 'none', fontSize: '15px', opacity: 0.8 }}>The Studio</a>
                <a href="services.html" style={{ color: 'var(--paper)', textDecoration: 'none', fontSize: '15px', opacity: 0.8 }}>Services Menu</a>
                <a href="contact.html" style={{ color: 'var(--paper)', textDecoration: 'none', fontSize: '15px', opacity: 0.8 }}>Get In Touch</a>
              </div>
            </div>
            <div>
              <div style={{ fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.15em', opacity: 0.5, marginBottom: '24px' }}>
                Connect
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                <a href="mailto:hello@blackspace.media" style={{ color: 'var(--paper)', textDecoration: 'none', fontSize: '15px', opacity: 0.8 }}>hello@blackspace.media</a>
                <a href="#" style={{ color: 'var(--paper)', textDecoration: 'none', fontSize: '15px', opacity: 0.8 }}>Instagram</a>
                <a href="#" style={{ color: 'var(--paper)', textDecoration: 'none', fontSize: '15px', opacity: 0.8 }}>LinkedIn</a>
                <a href="Blackspace Client Deck.html" style={{ color: 'var(--pop-b)', textDecoration: 'none', fontSize: '15px', fontWeight: 'bold' }}>Client Deck ↗</a>
              </div>
            </div>
          </div>
        </div>

        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          borderTop: '1px solid rgba(242, 237, 226, 0.1)',
          paddingTop: '32px',
          fontSize: '14px',
          opacity: 0.5
        }}>
          <div>© {new Date().getFullYear()} Blackspace. All rights reserved.</div>
          <div>Made in Bengaluru, India.</div>
        </div>
      </footer>
    );
  }

  // --- EXPORT TO WINDOW ---
  window.SP_THEMES = SP_THEMES;
  window.SP_TYPE = SP_TYPE;
  window.SPNav = SPNav;
  window.SPSticker = SPSticker;
  window.SPStatusSticker = SPStatusSticker;
  window.SPStar = SPStar;
  window.SPMarquee = SPMarquee;
  window.SPSectionHead = SPSectionHead;
  window.SPFooter = SPFooter;

})();
