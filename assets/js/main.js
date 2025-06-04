document.addEventListener('DOMContentLoaded', function () {
  const dropBtn = document.querySelector('.dropbtn');
  const dropdownContent = document.querySelector('.dropdown-content');

  dropBtn.addEventListener('click', function (e) {
    e.preventDefault();
    dropdownContent.classList.toggle('show');
  });
  window.addEventListener('click', function (e) {
    if (!e.target.closest('.dropdown')) {
      dropdownContent.classList.remove('show');
    }
  });
});

const bars = document.querySelector('.bars');
const sideMenu = document.getElementById('side-menu');
const dropdownToggle = document.querySelector('.side-dropdown-toggle');
const dropdownContent = document.querySelector('.side-dropdown-content');

bars.addEventListener('click', (event) => {
  event.stopPropagation();
  sideMenu.classList.toggle('show');
});

dropdownToggle.addEventListener('click', (event) => {
  event.preventDefault();
  event.stopPropagation();
  dropdownContent.classList.toggle('show');
});

document.addEventListener('click', (event) => {
  const clickedInsideDropdown = dropdownContent.contains(event.target);
  const clickedToggle = dropdownToggle.contains(event.target);
  
  if (!clickedInsideDropdown && !clickedToggle) {
    dropdownContent.classList.remove('show');
  }

  if (!sideMenu.contains(event.target) && !bars.contains(event.target)) {
    sideMenu.classList.remove('show');
  }
});
