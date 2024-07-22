var burgerMenu = document.getElementById('burger-menu');

var overlay = document.getElementById('menu');

burgerMenu.addEventListener('click', function () {
  this.classList.toggle("close");
  overlay.classList.toggle("overlay");
});

document.addEventListener('DOMContentLoaded', function () {
  const dropdownBoxes = document.querySelectorAll('.mobile-dropdown-box');

  dropdownBoxes.forEach(function (box) {
    const titleParent = box.querySelector('.mobile-dropdown-title-parent');
    const dropdownItems = box.querySelector('.mobile-dropdown-items');

    titleParent.addEventListener('click', function () {
      const isActive = box.classList.contains('active');

      dropdownBoxes.forEach(function (otherBox) {
        otherBox.classList.remove('active');
        otherBox.querySelector('.mobile-dropdown-items').classList.remove('active');
      });

      if (!isActive) {
        box.classList.add('active');
        dropdownItems.classList.add('active');
      }
    });
  });
});
