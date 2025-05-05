(function() {
  if (document.getElementById('dashboard-icon')) return;

  const icon = document.createElement('img');
  icon.src = chrome.runtime.getURL('icon.png');
  icon.id = 'dashboard-icon';
  icon.title = 'Open Dashboard';
  document.body.appendChild(icon);

  icon.addEventListener('click', () => {
    const popupUrl = chrome.runtime.getURL('popup/popup.html');
    window.open(popupUrl, 'Dashboard', 'width=500,height=500');
  });
})();
