(function () {
    window.setupDashboardEvents = function (elements) {
      const { dashboardButton, dashboardWindow, workTab, dashboardTab, guidelinesTab, refreshButton, closeButton, workContent } = elements;
  
      if (workTab) workTab.addEventListener("click", () => window.switchTab("work"));
      dashboardTab.addEventListener("click", () => window.switchTab("dashboard"));
      guidelinesTab.addEventListener("click", () => window.switchTab("guidelines"));
  
      dashboardButton.addEventListener("click", () => {
        dashboardWindow.style.display = dashboardWindow.style.display === "none" ? "block" : "none";
      });
  
      closeButton.addEventListener("click", () => {
        dashboardWindow.style.display = "none";
      });
  
      refreshButton.addEventListener("click", () => {
        const activeIframe = document.querySelector("#dashboard-extension .scaled-iframe:not([style*='display: none'])");
        if (activeIframe) activeIframe.src = activeIframe.src;
      });
  
      window.enableDragging(dashboardWindow, elements.dashboardHeader);
    };
  })();
  