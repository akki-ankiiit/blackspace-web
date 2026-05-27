/**
 * deck-stage.js
 * Manages presentation deck scaling (16:9, 1920x1080 basis) and keyboard navigation.
 */
(function () {
  function setupDeck() {
    const container = document.getElementById('deck-container');
    if (!container) return;

    function resizeDeck() {
      const baseWidth = 1920;
      const baseHeight = 1080;
      const windowWidth = window.innerWidth;
      const windowHeight = window.innerHeight;

      // Calculate scale to fit viewport while maintaining 16:9
      const scaleX = windowWidth / baseWidth;
      const scaleY = windowHeight / baseHeight;
      const scale = Math.min(scaleX, scaleY);

      // Apply transform scale
      container.style.transform = `translate(-50%, -50%) scale(${scale})`;
      container.style.width = `${baseWidth}px`;
      container.style.height = `${baseHeight}px`;
      container.style.left = '50%';
      container.style.top = '50%';
      container.style.position = 'absolute';
      container.style.transformOrigin = 'center center';
    }

    // Set body styling to prevent overflow and center deck
    document.body.style.margin = '0';
    document.body.style.padding = '0';
    document.body.style.overflow = 'hidden';
    document.body.style.backgroundColor = '#0a0a0a';
    document.body.style.width = '100vw';
    document.body.style.height = '100vh';
    document.body.style.position = 'relative';

    window.addEventListener('resize', resizeDeck);
    resizeDeck();

    // Trigger double check after fonts render
    setTimeout(resizeDeck, 500);
  }

  // Bind to window load
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', setupDeck);
  } else {
    setupDeck();
  }
})();
