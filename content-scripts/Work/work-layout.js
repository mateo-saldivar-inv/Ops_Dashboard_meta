(function () {
  window.createWorkLayout = function (formConfig) {
    const workContainer = window.domUtils.createElement("div", { id: "work-container" });

    const form = window.domUtils.createElement("form", { id: "work-form" });

    Object.keys(formConfig).forEach((field) => {
      const fieldType = formConfig[field];

      const fieldLabel = window.domUtils.createElement("label", {
        innerText: field.charAt(0).toUpperCase() + field.slice(1)
      });
      fieldLabel.htmlFor = field;

      let inputField;
      switch (fieldType) {
        case "string":
          inputField = window.domUtils.createElement("input", { type: "text", id: field, name: field });
          break;
        case "int":
          inputField = window.domUtils.createElement("input", { type: "number", id: field, name: field });
          break;
        case "bool":
          inputField = window.domUtils.createElement("input", { type: "checkbox", id: field, name: field });
          break;
        default:
          console.warn(`[Work] Unknown field type: ${fieldType}`);
          return;
      }

      const formGroup = window.domUtils.createElement("div", { className: "form-group" });
      formGroup.appendChild(fieldLabel);
      formGroup.appendChild(inputField);
      form.appendChild(formGroup);
    });

    const finishButton = window.domUtils.createElement("button", {
      id: "finish-button",
      innerText: "Finish",
      type: "button"
    });

    form.appendChild(finishButton);
    workContainer.appendChild(form);

    return { workContainer, form, finishButton };
  };
})();
