// Navigation menu
// remove the logo variable if you are using an image
const logo = document.querySelector('.logo');
const toggle = document.querySelector('.toggle-menu');
const navMenu = document.querySelector('.nav');
const navList = document.querySelector('.nav__list');
const navLinks = document.querySelectorAll('.nav__link');

// Function to show navigation menu
const showNavItems = () => {
  navMenu.classList.toggle('showNav');
  const close = toggle.querySelector('i');
  close.classList.toggle('closeIcon');
  // remove this variable if you are using an image
  logo.classList.toggle('invertLogo');
};

// Function to change active link
const changeActiveLink = (link) => {
  link.addEventListener('click', () => {
    const active = document.querySelector('.active');
    active.classList.remove('active');
    link.classList.add('active');

    showNavItems();
  });
};

// Event listeners
navLinks.forEach(changeActiveLink);
toggle.addEventListener('click', showNavItems);
