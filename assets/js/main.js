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

bars.addEventListener('click', (event) => {
  event.stopPropagation();
  sideMenu.classList.toggle('show');
});

document.addEventListener('click', (event) => {
  if (!sideMenu.contains(event.target) && !bars.contains(event.target)) {
    sideMenu.classList.remove('show');
  }
});

sideMenu.addEventListener('click', (event) => {
  event.stopPropagation();
});

const dropdownToggle = document.querySelector('.side-dropdown-toggle');
const dropdownContent = document.querySelector('.side-dropdown-content');

dropdownToggle.addEventListener('click', (event) => {
    event.preventDefault();
    event.stopPropagation(); 
    dropdownContent.classList.toggle('show');
});

document.addEventListener('click', (event) => {
    if (!dropdownContent.contains(event.target) && !dropdownToggle.contains(event.target)) {
        dropdownContent.classList.remove('show');
    }
});
