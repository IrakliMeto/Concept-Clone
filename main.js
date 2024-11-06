var burgerMenu = document.getElementById('burger-menu');
var overlay = document.getElementById('menu');
burgerMenu.addEventListener('click', function () {
  this.classList.toggle('close');
  overlay.classList.toggle('overlay');
});

document.addEventListener('DOMContentLoaded', function () {
  const link = document.querySelector('#test-item');

  // Use VWO's split testing API
  vwo_$.ready(function () {
    // Check if VWO is loaded
    if (typeof _vwo_code !== 'undefined') {
      // Get the variation number (0 for original, 1 for variation)
      const variation = _vwo_code.variation(1); // "1" is the experiment ID

      if (variation === 0) {
        // Show the original button (A variant)
        link.textContent = 'variation 1';
      } else if (variation === 1) {
        // Show the variation button (B variant)
        link.textContent = 'variation 2';
      }
    }
  });
});

link.addEventListener('click', function () {
  const clickedLink = link.textContent === 'Date' ? 'Date Button' : 'Add Button';

  // Track button click as a goal in VWO
  _vwo_code.track.goal(123); // Replace "123" with your VWO goal ID
});


// this is mobile version header dropdown
document.addEventListener('DOMContentLoaded', function () {
  const dropdownBoxes = document.querySelectorAll('.dropdown-mobile__box');

  dropdownBoxes.forEach(function (box) {
    const titleParent = box.querySelector('.dropdown-mobile__title-parent');
    const dropdownItems = box.querySelector('.dropdown-mobile__items');

    titleParent.addEventListener('click', function () {
      const isActive = box.classList.contains('active');

      dropdownBoxes.forEach(function (otherBox) {
        otherBox.classList.remove('active');
        otherBox.querySelector('.dropdown-mobile__items').classList.remove('active');
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
  const allDropdowns = document.querySelectorAll('.dropdown__box');
  const dropdownBg = document.querySelector('.dropdown__bg');

  allDropdowns.forEach((box) => box.classList.remove('active'));
  dropdownBg.classList.remove('dropdown__bg-active');

  if (!isOpen) {
    dropdownBox.classList.add('active');
    dropdownBg.classList.add('dropdown__bg-active');
  }
}

document.querySelectorAll('.dropdown__item').forEach((item) => {
  item.addEventListener('click', toggleDropdownList);
});

document.addEventListener('DOMContentLoaded', function () {
  var swiper = new Swiper('.swiper-container', {
    slidesOffsetBefore: 16,
    slidesOffsetAfter: 16,
    loop: false,
    initialSlide: 0,
    centeredSlides: false,
    slidesPerView: 'auto',
    spaceBetween: 16,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    scrollbar: {
      el: '.swiper-scrollbar',
      hide: false,
    },
    breakpoints: {
      768: {
        slidesPerView: 'auto',
        spaceBetween: 16,
        slidesOffsetBefore: 16,
        slidesOffsetAfter: 16,
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 30,
        slidesOffsetBefore: 0,
        slidesOffsetAfter: 0,
      },
    }
  });
});
