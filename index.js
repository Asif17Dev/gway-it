//jshint esversion:6
let menu = document.querySelector(".menu-img");
let nav = document.querySelector("nav");
let menuIcon = document.querySelector(".menu-img i");

let navActivate = false;

menu.addEventListener("click", function () {
  if (nav.style.transform === "translateX(-100%)") {
    nav.style.transform = "translateX(0)";
    menuIcon.classList.add("fa-times");
  } else {
    nav.style.transform = "translateX(-100%)";
    menuIcon.classList.remove("fa-times");
  }
});
