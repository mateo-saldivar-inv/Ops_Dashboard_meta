(function () {
  window.createUrlInput = function (field) {
    const link = document.createElement("a");
    link.href = "#";
    link.id = field;
    link.target = "_blank";
    link.innerText = "Open Link";
    link.className = "DBW1-link"; 
    return link;
  };
})();
