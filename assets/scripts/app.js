let mouseCursor = document.querySelector(".cursor");
let navLink = document.querySelectorAll(".navbar-items");
let backDropText = document.querySelectorAll(".back-drop-text");
let hamburgercross = document.querySelectorAll(".burger-menu__line");
let hambureger = document.querySelector(".burger-menu");

window.addEventListener("mousemove", cursor);

function cursor(e) {
  mouseCursor.style.top = e.clientY + "px";
  mouseCursor.style.left = e.clientX + "px";
}

navLink.forEach((link) => {
  link.addEventListener("mouseleave", () => {
    mouseCursor.classList.remove("link-grow");
  });
  link.addEventListener("mouseover", () => {
    mouseCursor.classList.add("link-grow");
  });
});

backDropText.forEach((link) => {
  link.addEventListener("mouseover", () => {
    mouseCursor.classList.add("about-link");
  });
  link.addEventListener("mouseleave", () => {
    mouseCursor.classList.remove("about-link");
  });
});

hambureger.addEventListener("click", () => {
  hamburgercross.forEach((link) => {
    link.classList.toggle("burgerline-active");
  });
});

// hambureger.forEach((link) => {
//   link.addEventListener("click", () => {
//     hamburgercross.classList.add("burgerline-active");
//   });
// });
