/**
 * tweaks-panel.jsx
 * Floating, draggable control panel to adjust themes and fonts on the fly.
 */

(function () {
  function SPTweaksPanel({ currentTheme, onThemeChange, currentType, onTypeChange }) {
    const [collapsed, setCollapsed] = React.useState(false);
    const [position, setPosition] = React.useState({ x: 0, y: 0 });
    const [dragging, setDragging] = React.useState(false);
    const dragStart = React.useRef({ x: 0, y: 0 });

    React.useEffect(() => {
      const handleMouseMove = (e) => {
        if (!dragging) return;
        const newX = e.clientX - dragStart.current.x;
        const newY = e.clientY - dragStart.current.y;
        
        // Keep it reasonably bounded within window
        const maxX = window.innerWidth - 300;
        const maxY = window.innerHeight - 80;
        setPosition({
          x: Math.max(-window.innerWidth + 350, Math.min(0, newX)),
          y: Math.max(-window.innerHeight + 450, Math.min(0, newY))
        });
      };

      const handleMouseUp = () => {
        setDragging(false);
      };

      if (dragging) {
        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('mouseup', handleMouseUp);
      }

      return () => {
        window.removeEventListener('mousemove', handleMouseMove);
        window.removeEventListener('mouseup', handleMouseUp);
      };
    }, [dragging]);

    const handleMouseDown = (e) => {
      // Don't drag if clicking buttons, select inputs, or interactive labels
      if (e.target.closest('button') || e.target.closest('input') || e.target.closest('.interactive-swatch')) {
        return;
      }
      setDragging(true);
      dragStart.current = {
        x: e.clientX - position.x,
        y: e.clientY - position.y
      };
      e.preventDefault();
    };

    const themes = window.SP_THEMES || {};
    const types = window.SP_TYPE || {};

    const panelStyle = {
      position: 'fixed',
      bottom: '30px',
      right: '30px',
      width: collapsed ? 'auto' : '320px',
      background: 'var(--paper)',
      border: '2px solid var(--ink)',
      borderRadius: '20px',
      boxShadow: '6px 6px 0 var(--ink)',
      zIndex: 9999,
      transform: `translate(${position.x}px, ${position.y}px)`,
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
      color: 'var(--ink)',
      userSelect: 'none',
      transition: dragging ? 'none' : 'transform 0.1s ease, width 0.3s ease',
      overflow: 'hidden'
    };

    if (collapsed) {
      return (
        <div style={panelStyle} className="no-print">
          <div 
            onMouseDown={handleMouseDown}
            style={{
              padding: '12px 18px',
              cursor: dragging ? 'grabbing' : 'grab',
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              fontWeight: 'bold',
              fontSize: '13px',
              letterSpacing: '0.05em'
            }}
          >
            <span>✳ TWEAKS</span>
            <button 
              onClick={() => setCollapsed(false)}
              style={{
                background: 'var(--ink)',
                color: 'var(--paper)',
                border: 'none',
                borderRadius: '999px',
                padding: '4px 10px',
                fontSize: '11px',
                cursor: 'pointer',
                fontWeight: 'bold'
              }}
            >
              Open
            </button>
          </div>
        </div>
      );
    }

    return (
      <div style={panelStyle} className="no-print">
        {/* Header (Drag Handle) */}
        <div
          onMouseDown={handleMouseDown}
          style={{
            padding: '14px 20px',
            borderBottom: '2px solid var(--ink)',
            background: 'var(--ink)',
            color: 'var(--paper)',
            cursor: dragging ? 'grabbing' : 'grab',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            fontWeight: 'bold',
            fontSize: '13px',
            letterSpacing: '0.08em'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <span style={{ color: 'var(--mint)' }}>✳</span> DESIGN TWEAKS
          </div>
          <button
            onClick={() => setCollapsed(true)}
            style={{
              background: 'transparent',
              border: '1px solid rgba(255,255,255,0.3)',
              color: 'var(--paper)',
              borderRadius: '999px',
              width: '24px',
              height: '24px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              fontSize: '10px',
              fontWeight: 'bold'
            }}
          >
            ✕
          </button>
        </div>

        {/* Content */}
        <div style={{ padding: '20px', display: 'flex', flexDirection: 'column', gap: '20px' }}>
          
          {/* Theme Selector */}
          <div>
            <div style={{ fontSize: '11px', fontWeight: 'bold', letterSpacing: '0.1em', textTransform: 'uppercase', opacity: 0.7, marginBottom: '10px' }}>
              Color Palette
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              {Object.keys(themes).map((key) => {
                const theme = themes[key];
                const isSelected = currentTheme === key;
                return (
                  <div
                    key={key}
                    className="interactive-swatch"
                    onClick={() => onThemeChange(key)}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      padding: '8px 12px',
                      borderRadius: '10px',
                      border: '1px solid ' + (isSelected ? 'var(--ink)' : 'transparent'),
                      background: isSelected ? 'rgba(10, 10, 10, 0.05)' : 'transparent',
                      cursor: 'pointer',
                      transition: 'all 0.2s ease'
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <input
                        type="radio"
                        checked={isSelected}
                        onChange={() => {}}
                        style={{ margin: 0, accentColor: 'var(--ink)' }}
                      />
                      <span style={{ fontSize: '14px', fontWeight: isSelected ? '600' : '400' }}>{theme.name}</span>
                    </div>
                    {/* Swatches */}
                    <div style={{ display: 'flex', gap: '3px' }}>
                      {/* Pastels */}
                      {theme.pastels.slice(0, 3).map((c, i) => (
                        <div key={i} style={{ width: '12px', height: '12px', borderRadius: '50%', backgroundColor: c, border: '1px solid rgba(0,0,0,0.1)' }} />
                      ))}
                      {/* Pops */}
                      {theme.pops.slice(0, 2).map((c, i) => (
                        <div key={i} style={{ width: '12px', height: '12px', borderRadius: '50%', backgroundColor: c, border: '1px solid rgba(0,0,0,0.1)' }} />
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Font Selector */}
          <div>
            <div style={{ fontSize: '11px', fontWeight: 'bold', letterSpacing: '0.1em', textTransform: 'uppercase', opacity: 0.7, marginBottom: '10px' }}>
              Typography Pairing
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              {Object.keys(types).map((key) => {
                const type = types[key];
                const isSelected = currentType === key;
                return (
                  <div
                    key={key}
                    className="interactive-swatch"
                    onClick={() => onTypeChange(key)}
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '4px',
                      padding: '8px 12px',
                      borderRadius: '10px',
                      border: '1px solid ' + (isSelected ? 'var(--ink)' : 'transparent'),
                      background: isSelected ? 'rgba(10, 10, 10, 0.05)' : 'transparent',
                      cursor: 'pointer',
                      transition: 'all 0.2s ease'
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <input
                        type="radio"
                        checked={isSelected}
                        onChange={() => {}}
                        style={{ margin: 0, accentColor: 'var(--ink)' }}
                      />
                      <span style={{ fontSize: '13px', fontWeight: isSelected ? '600' : '400' }}>{type.name}</span>
                    </div>
                    {/* Preview */}
                    <div style={{ display: 'flex', gap: '8px', paddingLeft: '22px', fontSize: '11px', opacity: 0.6 }}>
                      <span style={{ fontFamily: type.display, fontWeight: 'bold' }}>Display</span>
                      <span style={{ fontFamily: type.italic, fontStyle: 'italic' }}>Italic</span>
                      <span style={{ fontFamily: type.body }}>Body</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Info and helper */}
          <div style={{
            fontSize: '10px',
            lineHeight: '1.4',
            opacity: 0.5,
            borderTop: '1px solid rgba(10, 10, 10, 0.1)',
            paddingTop: '12px',
            textAlign: 'center'
          }}>
            Changes persist via localStorage.
          </div>

        </div>
      </div>
    );
  }

  window.SPTweaksPanel = SPTweaksPanel;
})();
