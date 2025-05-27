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