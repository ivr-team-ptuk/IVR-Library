document.addEventListener("DOMContentLoaded", () => {
  const placeholder = document.getElementById("navbar-placeholder");
  if (!placeholder) return;

  const rootPrefix = placeholder.dataset.navbarRoot || "./";

  fetch(`${rootPrefix}navbar.html`)
    .then(response => {
      if (!response.ok) {
        throw new Error(`Unable to load navbar: ${response.status}`);
      }
      return response.text();
    })
    .then(html => {
      placeholder.innerHTML = html;

      placeholder.querySelectorAll("[data-root-href]").forEach(link => {
        link.setAttribute("href", `${rootPrefix}${link.dataset.rootHref}`);
      });

      document.dispatchEvent(new CustomEvent("navbar:loaded"));
    })
    .catch(error => {
      console.error(error);
    });
});
