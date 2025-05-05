import { switchTab } from '../content-scripts/tab-manager.js';

document.getElementById('refresh-button').addEventListener('click', () => {
  const visibleIframe = document.querySelector('iframe:not([style*="display: none"])');
  if (visibleIframe) {
    visibleIframe.src = visibleIframe.src;
  }
});

document.querySelectorAll('.tab').forEach(tab => {
  tab.addEventListener('click', (event) => switchTab(event.target.dataset.tab));
});
