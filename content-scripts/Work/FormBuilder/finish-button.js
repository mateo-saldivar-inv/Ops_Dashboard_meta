(function () {
    window.createFinishButton = function () {
      const finishButton = document.createElement("button");
      finishButton.id = "DBW1-finish-button";
      finishButton.type = "button";
      finishButton.innerText = "Finish";
      return finishButton;
    };
  })();
  