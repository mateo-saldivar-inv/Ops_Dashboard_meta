(function() {
  window.loadConfigData = async function() {
    try {
      const response = await fetch(chrome.runtime.getURL('config/config.json'));
      const data = await response.json();
      console.log('Configuration loaded:', data);
      return data;
    } catch (error) {
      console.error('Error fetching config.json:', error);
      return null;
    }
  };
})();
