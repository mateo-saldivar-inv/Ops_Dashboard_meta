(function () {
  window.setupTabs = function () {
    document.querySelectorAll(".tab").forEach((tab) => {
      tab.addEventListener("click", (event) => {
        const tabName = event.target.dataset.tab;
        if (tabName) {
          window.switchTab(tabName);
        }
      });
    });
  };

  window.switchTab = function (tab) {
    if (!tab) return;

    const workContent = document.getElementById("work-content");
    const dashboardIframe = document.getElementById("dashboard-iframe");
    const guidelinesIframe = document.getElementById("guidelines-iframe");

    if (workContent) workContent.style.display = "none";
    if (dashboardIframe) dashboardIframe.style.display = "none";
    if (guidelinesIframe) guidelinesIframe.style.display = "none";

    document.querySelectorAll("#dashboard-extension .tab").forEach((tabElement) => {
      tabElement.classList.remove("active");
    });

    const clickedTab = document.querySelector(`.tab[data-tab="${tab}"]`);
    if (clickedTab) clickedTab.classList.add("active");

    if (tab === "work" && workContent) {
      workContent.style.display = "block";
      workContent.style.width = "100%";
      workContent.style.height = "100%";
      workContent.style.overflow = "auto";
    } else if (tab === "dashboard" && dashboardIframe) {
      dashboardIframe.style.display = "block";
    } else if (tab === "guidelines" && guidelinesIframe) {
      guidelinesIframe.style.display = "block";
    }
  };
})();
