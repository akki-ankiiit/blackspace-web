/* global React */
// Shared Sticker Pop tokens + components — used across all pages

window.SP_THEMES = {
  classic: {
    name: 'Classic',
    paper: '#f2ede2',
    ink: '#0a0a0a',
    pastels: ['#9de6d8', '#dfc4f0', '#a7d0f5', '#f5d77a', '#f6b39a'],
    popA: '#FF4D1A',
    popB: '#FF2E8B',
    popC: '#2E4CFF',
  },
  citrus: {
    name: 'Citrus',
    paper: '#f5f0e4',
    ink: '#111',
    pastels: ['#fff2b0', '#ffd6a5', '#c4e9b0', '#d9f1ff', '#f4c9d4'],
    popA: '#FF6A00',
    popB: '#E4003A',
    popC: '#007A3D',
  },
  bubblegum: {
    name: 'Bubblegum',
    paper: '#f6efe7',
    ink: '#0c0c0c',
    pastels: ['#ffc9df', '#c9e4ff', '#e3d5ff', '#d0f0c0', '#fff1a8'],
    popA: '#FF2E8B',
    popB: '#6A2EFF',
    popC: '#FF4D1A',
  },
  marine: {
    name: 'Marine',
    paper: '#eee8db',
    ink: '#0a1a24',
    pastels: ['#bde0e8', '#c9e6c2', '#f0d9b8', '#ead6ea', '#d5e3f4'],
    popA: '#0040D8',
    popB: '#FF4D1A',
    popC: '#009A68',
  },
  neon: {
    name: 'Neon pastel',
    paper: '#f0ece0',
    ink: '#0a0a0a',
    pastels: ['#baf0a8', '#c0f0ef', '#f0c0e8', '#f0e8a8', '#ffcfb8'],
    popA: '#FF2E8B',
    popB: '#C8FF00',
    popC: '#2E4CFF',
  },
};

window.SP_TYPE = {
  acidGaraHelv: {
    name: 'Acid™ · Garamond · Helvetica',
    display: '"Space Grotesk", "Acid Grotesk", "Helvetica Neue", sans-serif',
    italic:  '"EB Garamond", "Apple Garamond", Garamond, serif',
    body:    '"Helvetica Neue", Helvetica, Arial, sans-serif',
  },
  allHelv: {
    name: 'All Helvetica',
    display: '"Helvetica Neue", Helvetica, Arial, sans-serif',
    italic:  '"EB Garamond", "Apple Garamond", Garamond, serif',
    body:    '"Helvetica Neue", Helvetica, Arial, sans-serif',
  },
  serifFirst: {
    name: 'Garamond-led',
    display: '"EB Garamond", "Apple Garamond", Garamond, serif',
    italic:  '"EB Garamond", "Apple Garamond", Garamond, serif',
    body:    '"Helvetica Neue", Helvetica, Arial, sans-serif',
  },
};

// --- Nav ---
window.SPNav = function SPNav({ T, F, active = 'Work' }) {
  const items = ['Work', 'Studio', 'Services', 'Journal', 'Contact'];
  const hrefs = { Work:'work.html', Studio:'studio.html', Services:'services.html', Journal:'#', Contact:'contact.html' };
  const navStyle = { display:'flex', justifyContent:'space-between', alignItems:'center', padding:'22px 40px', fontSize:13, fontFamily:F.body };
  const logo = { fontFamily:F.display, fontSize:22, fontWeight:700, letterSpacing:'-0.03em', display:'flex', alignItems:'center', gap:8, color:T.ink };
  const pillWrap = { display:'flex', gap:6, background:T.ink, padding:4, borderRadius:999, color:T.paper, fontSize:12 };
  const pill = (a) => ({ padding:'8px 16px', borderRadius:999, background:a?T.paper:'transparent', color:a?T.ink:T.paper, fontWeight:500, textDecoration:'none' });
  const cta = { background:T.popA, color:T.paper, padding:'10px 18px', borderRadius:999, fontWeight:500, fontSize:13, border:`1px solid ${T.ink}`, textDecoration:'none' };
  return (
    <nav style={navStyle}>
      <a href="index.html" style={{...logo, textDecoration:'none'}}>
        <span style={{color:T.popA, fontSize:18}}>✳</span>Blackspace
      </a>
      <div style={pillWrap}>
        {items.map(it => <a key={it} href={hrefs[it]} style={pill(active===it)}>{it}</a>)}
      </div>
      <a href="contact.html" style={cta}>Start a project →</a>
    </nav>
  );
};

// --- Sticker (handmade feel) ---
// variants: tape, torn, round, square; rotation, shadow, tape colors
window.SPSticker = function SPSticker({ T, F, top, left, right, bottom, rotate=0, bg, variant='tape', tape, size='md', children, zIndex=10 }) {
  const dims = size === 'sm' ? { minW: 140, pad: '10px 14px' } : size === 'lg' ? { minW: 220, pad: '14px 18px' } : { minW: 170, pad: '12px 16px' };
  const shadowOffset = 3 + Math.floor(Math.abs(rotate) / 4);
  const base = {
    position: 'absolute',
    top, left, right, bottom,
    transform: `rotate(${rotate}deg)`,
    background: bg,
    color: T.ink,
    padding: dims.pad,
    minWidth: dims.minW,
    boxShadow: `${shadowOffset}px ${shadowOffset+1}px 0 ${T.ink}, 0 12px 24px rgba(0,0,0,0.12)`,
    border: `1px solid ${T.ink}`,
    zIndex,
    fontFamily: F.body,
  };

  if (variant === 'torn') {
    // rough-edge paper: skew slightly + slight clip
    base.borderRadius = '4px 12px 6px 14px';
    base.clipPath = 'polygon(0% 6%, 8% 0%, 92% 2%, 100% 10%, 98% 94%, 88% 100%, 12% 98%, 2% 92%)';
    base.border = 'none';
    base.boxShadow = `0 14px 28px rgba(0,0,0,0.18)`;
  } else if (variant === 'round') {
    base.borderRadius = 999;
  } else if (variant === 'square') {
    base.borderRadius = 6;
  } else {
    // tape/index card
    base.borderRadius = 10;
  }

  const tapeStyle = tape ? {
    position:'absolute', top:-12, left:'50%', marginLeft:-28,
    width:56, height:20, background:tape,
    opacity:0.85,
    boxShadow:'0 2px 4px rgba(0,0,0,0.15)',
    transform:`rotate(${rotate > 0 ? -3 : 4}deg)`,
    zIndex:1,
    backgroundImage: `repeating-linear-gradient(90deg, transparent 0 4px, rgba(0,0,0,0.04) 4px 5px)`,
  } : null;

  return (
    <div style={base}>
      {tape && <div style={tapeStyle}></div>}
      <div style={{position:'relative', zIndex:2}}>{children}</div>
    </div>
  );
};

// --- Sticker label (icon + label + name) ---
window.SPStatusSticker = function SPStatusSticker(props) {
  const { T, F, icon, iconBg, label, name } = props;
  return (
    <window.SPSticker {...props}>
      <div style={{ display:'flex', alignItems:'center', gap:10 }}>
        <div style={{
          width:36, height:36, borderRadius:10,
          background: iconBg || T.ink, color: T.paper,
          display:'flex', alignItems:'center', justifyContent:'center',
          fontWeight:700, fontSize:14, fontFamily:F.display,
        }}>{icon}</div>
        <div>
          <div style={{ fontSize:9, letterSpacing:'0.2em', textTransform:'uppercase', opacity:0.7, fontFamily:F.body }}>{label}</div>
          <div style={{ fontSize:13, fontWeight:600, fontFamily:F.body, letterSpacing:'-0.005em' }}>{name}</div>
        </div>
      </div>
    </window.SPSticker>
  );
};

// --- Star shape ---
window.SPStar = function SPStar({ size=80, color, rotate=0, top, left, right, bottom, zIndex=9 }) {
  return <div style={{
    position:'absolute', width:size, height:size, top, left, right, bottom,
    transform:`rotate(${rotate}deg)`, background:color, zIndex,
    clipPath:'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)',
  }}></div>;
};

// --- Marquee strip ---
window.SPMarquee = function SPMarquee({ T, F, words, bg, fg }) {
  const style = { background: bg || T.ink, color: fg || T.paper, padding:'20px 0', overflow:'hidden', whiteSpace:'nowrap', fontFamily: F.display, fontSize:48, fontWeight:700, letterSpacing:'-0.03em', borderTop:`1px solid ${T.ink}`, borderBottom:`1px solid ${T.ink}` };
  const sep = { display:'inline-block', margin:'0 30px', color: T.popA };
  const list = [...words, ...words]; // repeat for visual density
  return (
    <div style={style}>
      {list.map((w, i) => (
        <span key={i}>
          {w}
          <span style={sep}>✳</span>
        </span>
      ))}
    </div>
  );
};

// --- Section head (num / title / dek) ---
window.SPSectionHead = function SPSectionHead({ T, F, num, title, titleIt, dek }) {
  return (
    <div style={{ display:'grid', gridTemplateColumns:'140px 1fr 300px', gap:40, alignItems:'baseline', marginBottom:60 }}>
      <span style={{ fontSize:12, letterSpacing:'0.15em', textTransform:'uppercase', fontFamily:F.body, color:T.ink }}>{num}</span>
      <h2 style={{ fontFamily:F.display, fontSize:96, fontWeight:700, letterSpacing:'-0.04em', lineHeight:0.94, margin:0, color:T.ink }}>
        {title} {titleIt && <span style={{ fontFamily:F.italic, fontStyle:'italic', fontWeight:400 }}>{titleIt}</span>}
      </h2>
      <p style={{ fontFamily:F.italic, fontStyle:'italic', fontSize:18, margin:0, opacity:0.8, color:T.ink, textAlign:'right', maxWidth:280 }}>{dek}</p>
    </div>
  );
};

// --- Footer ---
window.SPFooter = function SPFooter({ T, F }) {
  const footer = { padding:'40px', display:'grid', gridTemplateColumns:'2fr 1fr 1fr 1fr', gap:40, borderTop:`1px solid ${T.ink}`, background: T.paper, color: T.ink, fontFamily: F.body, fontSize:13 };
  const h = { fontSize:11, letterSpacing:'0.15em', textTransform:'uppercase', marginBottom:12, opacity:0.7 };
  const bigWord = { fontFamily:F.display, fontSize:120, fontWeight:700, letterSpacing:'-0.05em', lineHeight:0.9, margin:0 };
  const it = { fontFamily:F.italic, fontStyle:'italic', fontWeight:400 };
  const col = { display:'flex', flexDirection:'column', gap:8 };
  return (
    <footer style={footer}>
      <div>
        <h3 style={bigWord}>let's<span style={it}>talk.</span></h3>
        <div style={{ marginTop:20, fontSize:14, opacity:0.7 }}>© Blackspace™ 2025 — all feelings reserved.</div>
      </div>
      <div style={col}>
        <div style={h}>Studio</div>
        <a href="studio.html" style={{color:T.ink, textDecoration:'none'}}>About</a>
        <a href="services.html" style={{color:T.ink, textDecoration:'none'}}>Services</a>
        <a href="work.html" style={{color:T.ink, textDecoration:'none'}}>Work</a>
        <a href="#" style={{color:T.ink, textDecoration:'none'}}>Journal</a>
      </div>
      <div style={col}>
        <div style={h}>Contact</div>
        <span>hello@blackspace.media</span>
        <span>Bengaluru, IN</span>
        <span>+91 00 0000 0000</span>
      </div>
      <div style={col}>
        <div style={h}>Social</div>
        <span>Instagram ↗</span>
        <span>LinkedIn ↗</span>
        <span>Vimeo ↗</span>
      </div>
    </footer>
  );
};
