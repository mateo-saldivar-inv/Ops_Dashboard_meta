(async function () {
    const configData = await window.loadConfigData();
    if (!configData) return;
  
    const elements = window.createDashboardLayout(configData);
    window.setupDashboardEvents(elements);
  
    if (elements.workTab) {
      window.switchTab("work");
    } else {
      window.switchTab("dashboard");
    }
  })();
  