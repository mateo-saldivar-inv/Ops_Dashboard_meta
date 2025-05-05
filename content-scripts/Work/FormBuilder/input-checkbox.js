(function () {
  window.createCheckbox = function (field) {
    const checkboxContainer = document.createElement("div");
    checkboxContainer.className = "DBW1-checkbox-group"; 

    const label = document.createElement("label");
    label.htmlFor = field;
    label.innerText = field.replace(/_/g, " ").toUpperCase();
    label.className = "DBW1-checkbox-label"; 

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.id = field;
    checkbox.className = "DBW1-checkbox"; 

    checkboxContainer.appendChild(label);
    checkboxContainer.appendChild(checkbox);

    return checkboxContainer;
  };
})();
