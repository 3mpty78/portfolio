// Loader

let loader = document.getElementById("loader");

window.addEventListener("load", () => {
  loader.style.display = "none";
});

// Hamburger navigation toggler

const btn = document.querySelector(".nav-toggler");
const header = document.querySelector("header");

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

// 3D hover effect

function design3d() {
  let design = document.getElementById("design");

  const height = design.clientHeight;
  const width = design.clientWidth;

  design.addEventListener("mousemove", handleMove);

  function handleMove(e) {
    /* Store the x position */
    const xVal = e.layerX;
    /* Store the y position */
    const yVal = e.layerY;

    const yRotation = 10 * ((xVal - width / 2) / width);

    /* Calculate the rotation along the X-axis */
    const xRotation = -10 * ((yVal - height / 2) / height);
    const string =
      "perspective(500px) scale(1.01) rotateX(" +
      xRotation +
      "deg) rotateY(" +
      yRotation +
      "deg)";

    design.style.transform = string;
  }
  design.addEventListener("mouseout", function () {
    design.style.transform =
      "perspective(500px) scale(1) rotateX(0) rotateY(0)";
  });
}

function code3d() {
  let code = document.getElementById("code");

  const height = code.clientHeight;
  const width = code.clientWidth;

  code.addEventListener("mousemove", handleMove);

  function handleMove(e) {
    /* Store the x position */
    const xVal = e.layerX;
    /* Store the y position */
    const yVal = e.layerY;

    const yRotation = 10 * ((xVal - width / 2) / width);

    /* Calculate the rotation along the X-axis */
    const xRotation = -10 * ((yVal - height / 2) / height);
    const string =
      "perspective(500px) scale(1.01) rotateX(" +
      xRotation +
      "deg) rotateY(" +
      yRotation +
      "deg)";

    code.style.transform = string;
  }
  code.addEventListener("mouseout", function () {
    code.style.transform = "perspective(500px) scale(1) rotateX(0) rotateY(0)";
  });
}

function other3d() {
  let other = document.getElementById("other");

  const height = other.clientHeight;
  const width = other.clientWidth;

  other.addEventListener("mousemove", handleMove);

  function handleMove(e) {
    /* Store the x position */
    const xVal = e.layerX;
    /* Store the y position */
    const yVal = e.layerY;

    const yRotation = 10 * ((xVal - width / 2) / width);

    /* Calculate the rotation along the X-axis */
    const xRotation = -10 * ((yVal - height / 2) / height);
    const string =
      "perspective(500px) scale(1.01) rotateX(" +
      xRotation +
      "deg) rotateY(" +
      yRotation +
      "deg)";

    other.style.transform = string;
  }
  other.addEventListener("mouseout", function () {
    other.style.transform = "perspective(500px) scale(1) rotateX(0) rotateY(0)";
  });
}

function learn3d() {
  let learn = document.getElementById("learning");

  const height = learn.clientHeight;
  const width = learn.clientWidth;

  learn.addEventListener("mousemove", handleMove);

  function handleMove(e) {
    /* Store the x position */
    const xVal = e.layerX;
    /* Store the y position */
    const yVal = e.layerY;

    const yRotation = 5 * ((xVal - width / 2) / width);

    /* Calculate the rotation along the X-axis */
    const xRotation = -5 * ((yVal - height / 2) / height);
    const string =
      "perspective(500px) scale(1.01) rotateX(" +
      xRotation +
      "deg) rotateY(" +
      yRotation +
      "deg)";

    learn.style.transform = string;
  }
  learn.addEventListener("mouseout", function () {
    learn.style.transform = "perspective(500px) scale(1) rotateX(0) rotateY(0)";
  });
}

function insta3d() {
  let insta = document.getElementById("insta");

  const height = insta.clientHeight;
  const width = insta.clientWidth;

  insta.addEventListener("mousemove", handleMove);

  function handleMove(e) {
    /* Store the x position */
    const xVal = e.layerX;
    /* Store the y position */
    const yVal = e.layerY;

    const yRotation = 10 * ((xVal - width / 2) / width);

    /* Calculate the rotation along the X-axis */
    const xRotation = -10 * ((yVal - height / 2) / height);
    const string =
      "perspective(500px) scale(1.01) rotateX(" +
      xRotation +
      "deg) rotateY(" +
      yRotation +
      "deg)";

    insta.style.transform = string;
  }
  insta.addEventListener("mouseout", function () {
    insta.style.transform = "perspective(500px) scale(1) rotateX(0) rotateY(0)";
  });
}
