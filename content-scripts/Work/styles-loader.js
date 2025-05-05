(function () {
    window.loadWorkStyles = function () {
      if (!document.getElementById("work-style")) {
        const link = document.createElement("link");
        link.id = "work-style";
        link.rel = "stylesheet";
        link.href = chrome.runtime.getURL("styles/work.css");
        document.head.appendChild(link);
        console.log("[Work] Loaded work.css");
      }
    };
  })();
  