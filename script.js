// Cursor script

const pointed = document.getElementById("pointed");

const moveCursor = (e) => {
  const mouseY = e.pageY;
  const mouseX = e.pageX;

  pointed.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
};

window.addEventListener("mousemove", moveCursor);

// Sliders script

const carousel = document.querySelector(".contact");
const previous = document.querySelector(".prev");
const next = document.querySelector(".next");

const firstProject = document.querySelector(".first_project");
const secondProject = document.querySelector(".second_project");
const thirdProject = document.querySelector(".third_project");
const slides = document.querySelector(".mockup_picture_container");
const textSlides = document.querySelector(".mockup_description_container");

let index = 0;

previous.addEventListener("click", () => {
  index = index < 3 ? index + 1 : 0;
  carousel.style.transform = "translateY(" + index * -25 + "%)";
});
next.addEventListener("click", () => {
  index = index > 0 ? index - 1 : 3;
  carousel.style.transform = "translateY(" + index * -25 + "%)";
});

// Hamburger navigation toggler

const btn = document.querySelector(".nav-toggler");
const header = document.querySelector(".header");

document.addEventListener("click", (e) => {
  if (e.target.closest(".nav-toggler")) {
    btn.classList.toggle("toggle");
    header.classList.toggle("active");
  } else if (!e.target.closest(".nav-toggler")) {
    btn.classList.remove("toggle");
    header.classList.remove("active");
  }
});
document.addEventListener("scroll", (f) => {
  if (window.scrollY > 50) {
    btn.classList.remove("toggle");
    header.classList.remove("active");
  }
});

// oDomElement.style.overflowY = "hidden";
