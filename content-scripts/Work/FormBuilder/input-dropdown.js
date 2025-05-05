(function () {
  window.createDropdown = function (field, options) {
    const select = document.createElement("select");
    select.id = field;
    select.className = "DBW1-dropdown";

    const defaultOption = document.createElement("option");
    defaultOption.value = "";
    defaultOption.innerText = "Select an option";
    defaultOption.selected = true;
    defaultOption.disabled = true;
    select.appendChild(defaultOption);

    options.forEach(option => {
      const optionElement = document.createElement("option");
      optionElement.value = option;
      optionElement.innerText = option;
      select.appendChild(optionElement);
    });

    return select;
  };
})();
