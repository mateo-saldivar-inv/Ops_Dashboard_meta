(function () {
  window.createMultiSelect = function (field, options) {
    const container = document.createElement("div");
    container.className = "DBW1-multi-checkbox-group"; 

    options.forEach(option => {
      const checkboxContainer = document.createElement("div");
      checkboxContainer.className = "DBW1-checkbox-group";

      const checkbox = document.createElement("input");
      checkbox.type = "checkbox";
      checkbox.id = `${field}-${option}`;
      checkbox.value = option;
      checkbox.className = "DBW1-checkbox";

      const checkboxLabel = document.createElement("label");
      checkboxLabel.htmlFor = `${field}-${option}`;
      checkboxLabel.innerText = option;
      checkboxLabel.className = "DBW1-checkbox-label";

      checkboxContainer.appendChild(checkbox);
      checkboxContainer.appendChild(checkboxLabel);
      container.appendChild(checkboxContainer);
    });

    return container;
  };
})();
