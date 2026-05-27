/**
 * pages/app.jsx
 * Root application wrapper that handles state synchronization for themes and typography pairings.
 */

(function () {
  function SPApp({ activePage, children }) {
    const themes = window.SP_THEMES || {};
    const types = window.SP_TYPE || {};

    // Get persisted settings or fall back to defaults
    const [themeKey, setThemeKey] = React.useState(() => {
      return localStorage.getItem('sp-theme-key') || 'Classic';
    });

    const [typeKey, setTypeKey] = React.useState(() => {
      return localStorage.getItem('sp-type-key') || 'Acid+Gara+Helv';
    });

    // Sync state changes with localStorage
    const handleThemeChange = (newTheme) => {
      setThemeKey(newTheme);
      localStorage.setItem('sp-theme-key', newTheme);
    };

    const handleTypeChange = (newType) => {
      setTypeKey(newType);
      localStorage.setItem('sp-type-key', newType);
    };

    const theme = themes[themeKey] || themes['Classic'];
    const type = types[typeKey] || types['Acid+Gara+Helv'];

    // Inject dynamic CSS variables inside a React styled tag
    const dynamicVariables = `
      :root {
        --paper: ${theme.paper};
        --ink: ${theme.ink};
        --mint: ${theme.pastels[0]};
        --lilac: ${theme.pastels[1]};
        --sky: ${theme.pastels[2]};
        --butter: ${theme.pastels[3]};
        --peach: ${theme.pastels[4]};
        --pop-a: ${theme.pops[0]};
        --pop-b: ${theme.pops[1]};
        --pop-c: ${theme.pops[2]};
        
        --font-display: ${type.display};
        --font-display-weight: ${type.displayWeight};
        --font-display-spacing: ${type.displayLetterSpacing || '0'};
        
        --font-italic: ${type.italic};
        --font-italic-style: ${type.italicStyle || 'italic'};
        --font-italic-weight: ${type.italicWeight || '400'};
        
        --font-body: ${type.body};
        --font-body-weight: ${type.bodyWeight || '400'};
      }
      
      h1, h2, h3, .font-display {
        font-family: var(--font-display);
        font-weight: var(--font-display-weight);
        letter-spacing: var(--font-display-spacing);
      }
      
      .font-italic {
        font-family: var(--font-italic);
        font-style: var(--font-italic-style);
        font-weight: var(--font-italic-weight);
      }
      
      body {
        background-color: var(--paper);
        color: var(--ink);
        font-family: var(--font-body);
        font-weight: var(--font-body-weight);
      }
    `;

    return (
      <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
        <style dangerouslySetInnerHTML={{ __html: dynamicVariables }} />
        
        {/* Navigation Header */}
        <window.SPNav activePage={activePage} />

        {/* Content Region */}
        <main style={{ flex: '1', display: 'flex', flexDirection: 'column' }}>
          {children}
        </main>

        {/* Footer */}
        <window.SPFooter />

        {/* Customizer Panel */}
        <window.SPTweaksPanel
          currentTheme={themeKey}
          onThemeChange={handleThemeChange}
          currentType={typeKey}
          onTypeChange={handleTypeChange}
        />
      </div>
    );
  }

  window.SPApp = SPApp;
})();
