(async function () {
  window.loadWorkStyles();

  const configData = await fetch(chrome.runtime.getURL("config/config.json"))
    .then(res => res.json())
    .catch(() => null);

  if (!configData?.projects?.safety) return;

  const hook = configData.projects.safety.manticore_hook;
  if (!hook?.trim()) return;

  const formConfig = await fetch(chrome.runtime.getURL("config/form-config.json"))
    .then(res => res.json())
    .catch(() => null);

  if (!formConfig) return;

  const workContent = document.getElementById("work-content");
  if (!workContent) return;

  const workForm = window.createWorkForm(formConfig);
  workContent.appendChild(workForm);

  workContent.style.display = "block";
  workContent.style.width = "100%";
  workContent.style.height = "100%";
  workContent.style.overflow = "auto";

  window.setupWorkEvents(workForm, formConfig, hook);
})();