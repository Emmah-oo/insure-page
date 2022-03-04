const burger = document.querySelector(".burger");
const links = document.querySelectorAll(".nav-links li");
const nav = document.querySelector(".nav-links");

burger.addEventListener("click", () => {
  nav.classList.toggle("active");
  burger.classList.toggle("toggle");
});

//animate links
links.forEach((link, index) => {
  link.style.animation = "navLinkFade 0.5s ease forwards ${index / 7 + 2}s";
});
