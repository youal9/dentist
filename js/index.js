const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("nav-menu");
const menuIcon = document.getElementById("menu-icon");
const navbar = document.querySelector(".navbar");

let menuOpen = false;

// Klick på hamburgaren
hamburger.addEventListener("click", () => {
  menuOpen = !menuOpen;
  navMenu.classList.toggle("active");
  hamburger.classList.toggle("active");

  if (menuOpen) {
    menuIcon.classList.remove("fa-bars");
    menuIcon.classList.add("fa-x");
  } else {
    menuIcon.classList.remove("fa-x");
    menuIcon.classList.add("fa-bars");
  }
});

// Scroll: ändra navbar (men påverka INTE menyn automatiskt!)
window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});

// btn länk till kontakt)
document.getElementById("bokaBtn").addEventListener("click",function(){
  window.location.href="Kontakt.html";
})
