(function () {
  window.createWorkForm = function (formConfig) {
    const workContainer = document.createElement("div");
    workContainer.id = "DBW1-work-container";

    const workForm = document.createElement("form");
    workForm.id = "DBW1-work-form";

    Object.entries(formConfig).forEach(([field, config]) => {
      const formGroup = document.createElement("div");
      formGroup.className = "DBW1-form-group";

      const label = document.createElement("label");
      label.htmlFor = field;
      label.innerText = field.replace(/_/g, " ").toUpperCase();

      let inputElement;

      if (config === "bool") {  
        inputElement = window.createCheckbox(field);
      } else {
        formGroup.appendChild(label);

        if (typeof config === "string") {
          inputElement = window.createTextInput(field, config);
        } else if (config.type === "dropdown") {
          inputElement = window.createDropdown(field, config.options);
        } else if (config.type === "multi-select") {
          inputElement = window.createMultiSelect(field, config.options);
        } else if (config === "url") {
          inputElement = window.createUrlInput(field);
        } else if (config === "date") {
          inputElement = window.createDateInput(field);
        }
      }

      formGroup.appendChild(inputElement);
      workForm.appendChild(formGroup);
    });

    const finishButton = window.createFinishButton();
    workForm.appendChild(finishButton);
    workContainer.appendChild(workForm);

    return workContainer;
  };
})();
