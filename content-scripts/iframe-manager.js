(function() {
    window.createIframe = function(id, src = '') {
      const iframe = document.createElement('iframe');
      iframe.id = id;
      iframe.className = 'scaled-iframe';
      iframe.src = src;
      return iframe;
    };
  })();
  