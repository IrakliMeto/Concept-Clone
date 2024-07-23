var burgerMenu = document.getElementById('burger-menu');

var overlay = document.getElementById('menu');

burgerMenu.addEventListener('click', function () {
  this.classList.toggle("close");
  overlay.classList.toggle("overlay");
});


// this is mobile version header dropdown 
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


// this is for desktop header dropdown
function toggleDropdownList(event) {
  const dropdownBox = event.currentTarget.parentElement;
  const isOpen = dropdownBox.classList.contains('active');
  const allDropdowns = document.querySelectorAll('.dropdown-box');
  const dropdownBg = document.querySelector('.dropdown-bg');

  allDropdowns.forEach(box => box.classList.remove('active'));
  dropdownBg.classList.remove('dropdown-bg-active');

  if (!isOpen) {
    dropdownBox.classList.add('active');
    dropdownBg.classList.add('dropdown-bg-active');
  }
}

