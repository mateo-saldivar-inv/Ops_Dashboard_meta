(function () {
    window.setupWorkEvents = function (workForm, formConfig, webhookUrl) {
      document.getElementById("finish-button").addEventListener("click", () => {
        const formData = {};
  
        Object.entries(formConfig).forEach(([field, config]) => {
          const inputElement = document.getElementById(field);
  
          if (config === "bool") {
            formData[field] = inputElement.checked;
          } else if (typeof config === "object" && config.type === "multi-select") {
            formData[field] = Array.from(
              document.querySelectorAll(`#${field} input:checked`)
            ).map(checkbox => checkbox.value);
          } else if (typeof config === "string" && config === "url") {
            formData[field] = inputElement.href;
          } else {
            formData[field] = inputElement.value;
          }
        });
  
        console.log("[Work] Submitting form data:", formData);
  
        fetch(webhookUrl, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        })
        .then(response => response.json())
        .then(data => console.log("[Work] Submission successful:", data))
        .catch(error => console.error("[Work] Submission failed:", error));
  
        workForm.reset();
      });
    };
  })();
  