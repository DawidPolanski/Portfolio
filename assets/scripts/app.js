let mouseCursor = document.querySelector(".cursor");
let navLink = document.querySelectorAll(".navbar-items");
let backDropText = document.querySelectorAll(".back-drop-text");
let hamburgercross = document.querySelectorAll(".burger-menu__line");
let hamburger = document.querySelector(".burger-menu");
let navigation = document.querySelectorAll(".navigation-menu");
let portfolioImg = document.querySelectorAll(".portfolio-img");
var clickcounter = 0;

window.addEventListener("mousemove", cursor);

function cursor(e) {
  mouseCursor.style.top = e.clientY + "px";
  mouseCursor.style.left = e.clientX + "px";
}

portfolioImg.forEach((link) => {
  link.addEventListener("mouseleave", () => {
    mouseCursor.classList.remove("cursorgrayscale");
  });

  link.addEventListener("mouseover", () => {
    mouseCursor.classList.add("cursorgrayscale");
  });
});

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

hamburger.addEventListener("click", () => {
  hamburgercross.forEach((link) => {
    link.classList.toggle("burgerline-active");
  });
});

hamburger.addEventListener("click", () => {
  if (clickcounter == 0) {
    navigation.forEach((link) => {
      link.classList.add("open");
      mouseCursor.classList.add("cursornav");
      clickcounter++;
    });
  } else if (clickcounter == 1) {
    navigation.forEach((link) => {
      link.classList.remove("open");
      mouseCursor.classList.remove("cursornav");
      clickcounter--;
    });
  }
});
