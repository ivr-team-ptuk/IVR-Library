window.initNavbar = function initNavbar() {
  const navDropdowns = document.querySelectorAll(".navbar .dropdown");

  navDropdowns.forEach(drop => {
    if (drop.dataset.navbarBound === "true") return;
    drop.dataset.navbarBound = "true";

    const btn = drop.querySelector(".dropbtn");
    const content = drop.querySelector(".dropdown-content");

    if (btn && content) {
      btn.addEventListener("click", (e) => {
        e.preventDefault();
        e.stopPropagation();

        // Close all other nav dropdowns
        document.querySelectorAll(".navbar .dropdown-content").forEach(c => {
          if (c !== content) c.classList.remove("show");
        });

        // Toggle the clicked one
        content.classList.toggle("show");
      });
    }
  });

  const bars = document.querySelector('.bars');
  const sideMenu = document.getElementById('side-menu');

  if (bars && sideMenu && bars.dataset.navbarBound !== "true") {
    bars.dataset.navbarBound = "true";

    bars.addEventListener('click', (event) => {
      event.stopPropagation();
      sideMenu.classList.toggle('show');
    });
  }

  const sideDropdowns = document.querySelectorAll(".side-dropdown");

  sideDropdowns.forEach(side => {
    if (side.dataset.navbarBound === "true") return;
    side.dataset.navbarBound = "true";

    const toggle = side.querySelector(".side-dropdown-toggle");
    const content = side.querySelector(".side-dropdown-content");

    if (toggle && content) {
      toggle.addEventListener("click", (e) => {
        e.preventDefault();
        e.stopPropagation();

        // Close all OTHER side dropdowns
        document.querySelectorAll(".side-dropdown-content").forEach(c => {
          if (c !== content) c.classList.remove("show");
        });

        // Toggle the clicked one
        content.classList.toggle("show");
      });
    }
  });

  if (document.documentElement.dataset.navbarDocumentBound !== "true") {
    document.documentElement.dataset.navbarDocumentBound = "true";
    document.addEventListener('click', (event) => {

      // Close NAV dropdowns
      document.querySelectorAll(".navbar .dropdown-content").forEach(c => {
        const parent = c.parentElement;
        const toggle = parent.querySelector(".dropbtn");

        if (!c.contains(event.target) && !toggle.contains(event.target)) {
          c.classList.remove("show");
        }
      });

      // Close SIDE dropdowns
      document.querySelectorAll(".side-dropdown-content").forEach(c => {
        const parent = c.parentElement;
        const toggle = parent.querySelector(".side-dropdown-toggle");

        if (!c.contains(event.target) && !toggle.contains(event.target)) {
          c.classList.remove("show");
        }
      });

      // Close side menu itself
      const activeBars = document.querySelector('.bars');
      const activeSideMenu = document.getElementById('side-menu');

      if (activeSideMenu && activeBars) {
        if (!activeSideMenu.contains(event.target) && !activeBars.contains(event.target)) {
          activeSideMenu.classList.remove("show");
        }
      }
    });
  }
};

function initExternalLinks() {
  document.querySelectorAll('a.the_link').forEach(link => {
    if (link.dataset.externalLinkBound === "true") return;
    link.dataset.externalLinkBound = "true";

    link.addEventListener('click', function (e) {
      e.preventDefault();
      e.stopPropagation();

      const url = this.getAttribute('href');
      window.open(url, '_blank', 'noopener,noreferrer');

      return false;
    }, true);
  });
}

document.addEventListener("DOMContentLoaded", () => {
  window.initNavbar();
  initExternalLinks();
});

document.addEventListener("navbar:loaded", () => {
  window.initNavbar();
});
