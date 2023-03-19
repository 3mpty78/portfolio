const slider = document.querySelector(".slider");
const leftArrow = document.querySelector(".left");
const rightArrow = document.querySelector(".right");

let index = 0;

leftArrow.addEventListener("click", () => {
  index = index > 0 ? index - 1 : 3;
  slider.style.transform = "translate(" + index * -25 + "%)";
});
rightArrow.addEventListener("click", () => {
  index = index < 3 ? index + 1 : 0;
  slider.style.transform = "translate(" + index * -25 + "%)";
});
