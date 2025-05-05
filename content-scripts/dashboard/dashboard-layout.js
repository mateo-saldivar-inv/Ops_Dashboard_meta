(function () {
  window.createDashboardLayout = function (configData) {
    const hasWorkTab = configData.projects.safety.manticore_hook &&
                       configData.projects.safety.manticore_hook.trim() !== "";

    const dashboardContainer = window.domUtils.createElement("div", { id: "dashboard-extension" });
    document.body.appendChild(dashboardContainer);

    const dashboardButton = window.createDashboardButton();
    dashboardContainer.appendChild(dashboardButton);

    const dashboardWindow = window.domUtils.createElement("div", { id: "dashboard-window", style: "display: none;" });

    const dashboardHeader = window.domUtils.createElement("div", { id: "dashboard-header" });
    const tabs = window.domUtils.createElement("div", { id: "tabs" });

    let workTab = null;
    if (hasWorkTab) {
      workTab = window.domUtils.createElement("button", { className: "tab", innerText: "Work" });
      workTab.dataset.tab = "work";
      tabs.appendChild(workTab);
    }

    const dashboardTab = window.domUtils.createElement("button", { className: "tab", innerText: "Dashboard" });
    dashboardTab.dataset.tab = "dashboard";

    const guidelinesTab = window.domUtils.createElement("button", { className: "tab", innerText: "Guidelines" });
    guidelinesTab.dataset.tab = "guidelines";

    tabs.appendChild(dashboardTab);
    tabs.appendChild(guidelinesTab);

    const buttonContainer = window.domUtils.createElement("div", { id: "button-container" });

    const refreshButton = window.domUtils.createElement("button", { id: "refresh-button", innerHTML: "&#x21bb;" });
    const closeButton = window.domUtils.createElement("button", { id: "close-button", innerHTML: "&times;" });

    buttonContainer.appendChild(refreshButton);
    buttonContainer.appendChild(closeButton);

    dashboardHeader.appendChild(tabs);
    dashboardHeader.appendChild(buttonContainer);

    const iframeContainer = window.domUtils.createElement("div", { id: "iframe-container" });

    const dashboardIframe = window.createIframe("dashboard-iframe", configData.projects.safety.dashboard_link);
    const guidelinesIframe = window.createIframe("guidelines-iframe", Object.values(configData.projects.safety.guidelines)[0]);

    iframeContainer.appendChild(dashboardIframe);
    iframeContainer.appendChild(guidelinesIframe);
    guidelinesIframe.style.display = "none";

    const workContent = window.domUtils.createElement("div", { 
      id: "work-content", 
      style: "display: none; width: 100%; height: 100%;" 
    });

    iframeContainer.appendChild(workContent); 

    dashboardWindow.appendChild(dashboardHeader);
    dashboardWindow.appendChild(iframeContainer);
    dashboardContainer.appendChild(dashboardWindow);

    return { 
      dashboardContainer, 
      dashboardButton, 
      dashboardWindow, 
      dashboardHeader, 
      workTab, 
      dashboardTab, 
      guidelinesTab, 
      refreshButton, 
      closeButton, 
      workContent 
    };
  };
})();
