const navMenuBtn = document.querySelector(".nav__menu__btn"),
  navLinks = document.querySelector(".nav__links"),
  i = navMenuBtn.querySelector("i");
navMenuBtn.addEventListener("click", () => {
  navLinks.classList.toggle("open");
  const isOpen = navLinks.classList.contains("open");
  i.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-line");
});
navLinks.addEventListener("click", () => {
  navLinks.classList.remove("open");
  i.setAttribute("class", "ri-menu-line");
});

const navSearch = document.querySelector(".nav__search");
navSearch.addEventListener("click", () => {
  navSearch.classList.toggle("open");
});

const scrollRevealOption = {
  distance: "50px",
  origin: "bottom",
  duration: 1000,
};

ScrollReveal().reveal(".header__image img", {
  ...scrollRevealOption,
  origin: "right",
});

ScrollReveal().reveal(".header__content div", {
  duration: 1000,
  delay: 500,
});

ScrollReveal().reveal(".header__content h1", {
  ...scrollRevealOption,
  delay: 1000,
});

ScrollReveal().reveal(".header__content p", {
  ...scrollRevealOption,
  delay: 1500,
});
ScrollReveal().reveal(".deals__card", {
  ...scrollRevealOption,
  interval: 500,
});
ScrollReveal().reveal(".about__image img", {
  ...scrollRevealOption,
  origin: "ritgh",
});
ScrollReveal().reveal(".about__card", {
  duration: 1000,
  interval: 500,
  delay: 500,
});

const swiper = new Swiper(".swiper", {
  loop: true,
});
