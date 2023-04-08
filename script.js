// Cursor script

const pointed = document.getElementById("pointed");

const moveCursor = (e) => {
  const mouseY = e.pageY;
  const mouseX = e.pageX;

  pointed.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
};

window.addEventListener("mousemove", moveCursor);

// Sliders script

const slider = document.querySelector(".slider");
const leftArrow = document.querySelector(".left");
const rightArrow = document.querySelector(".right");
const carousel = document.querySelector(".contact");
const previous = document.querySelector(".prev");
const next = document.querySelector(".next");

let index = 0;

leftArrow.addEventListener("click", () => {
  index = index > 0 ? index - 1 : 3;
  slider.style.transform = "translate(" + index * -25 + "%)";
});
rightArrow.addEventListener("click", () => {
  index = index < 3 ? index + 1 : 0;
  slider.style.transform = "translate(" + index * -25 + "%)";
});

previous.addEventListener("click", () => {
  index = index > 0 ? index - 1 : 3;
  carousel.style.transform = "translateY(" + index * -25 + "%)";
});
next.addEventListener("click", () => {
  index = index < 3 ? index + 1 : 0;
  carousel.style.transform = "translateY(" + index * -25 + "%)";
});

// Style for overflow

oDomElement.style.overflowY = "hidden";
