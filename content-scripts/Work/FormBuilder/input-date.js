(function () {
    window.createDateInput = function (field) {
      const input = document.createElement("input");
      input.type = "date";
      input.id = field;
      input.className = "DBW1-input"; 
      return input;
    };
  })();
  