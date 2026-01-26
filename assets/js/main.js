document.addEventListener("DOMContentLoaded", () => {

  const navDropdowns = document.querySelectorAll(".navbar .dropdown");

  navDropdowns.forEach(drop => {
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

  if (bars && sideMenu) {
    bars.addEventListener('click', (event) => {
      event.stopPropagation();
      sideMenu.classList.toggle('show');
    });
  }

  const sideDropdowns = document.querySelectorAll(".side-dropdown");

  sideDropdowns.forEach(side => {
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
    if (sideMenu && bars) {
      if (!sideMenu.contains(event.target) && !bars.contains(event.target)) {
        sideMenu.classList.remove("show");
      }
    }
  });

});

document.querySelectorAll('a.the_link').forEach(link => {
  link.setAttribute('target', '_blank');
});
