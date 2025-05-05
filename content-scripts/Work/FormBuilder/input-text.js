(function () {
  window.createTextInput = function (field, type) {
    const input = document.createElement("input");
    input.type = type === "int" ? "number" : "text";
    input.id = field;
    input.className = "DBW1-input"; 
    return input;
  };
})();
