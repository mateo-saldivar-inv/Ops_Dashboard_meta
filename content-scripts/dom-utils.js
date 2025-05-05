(function () {
  window.domUtils = {
    createElement: function (tag, attributes = {}) {
      const element = document.createElement(tag);
      Object.keys(attributes).forEach(attr => {
        element[attr] = attributes[attr];
      });
      return element;
    }
  };
})();
