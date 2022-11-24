let mouseCursor = document.querySelector(".cursor");
let navLink = document.querySelectorAll(".navbar-items");
let backDropText = document.querySelectorAll(".back-drop-text");

window.addEventListener("mousemove", cursor);

function cursor(e) {
  mouseCursor.style.top = e.pageY + "px";
  mouseCursor.style.left = e.pageX + "px";
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
