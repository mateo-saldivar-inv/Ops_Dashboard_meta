(function () {
    window.createDashboardButton = function () {
      const button = document.createElement("button");
      button.id = "dashboard-button";
      button.title = "Open Dashboard";
      button.innerHTML = `
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="12" height="12">
          <rect width="24" height="24" rx="3" ry="3" fill="#303030"/>
          <rect x="3" y="3" width="18" height="18" rx="1.5" ry="1.5" fill="#202020"/>
          <rect x="6" y="6" width="4.5" height="12" fill="#505050"/>
          <rect x="10.5" y="10.5" width="4.5" height="7.5" fill="#505050"/>
          <rect x="15" y="8.25" width="4.5" height="9.75" fill="#505050"/>
        </svg>
      `;
      return button;
    };
  })();
  