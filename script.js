// script.js

// Preloader
window.addEventListener("load", () => {
    document.getElementById("preloader").style.display = "none";
  });
  
  // AOS Initialization
  AOS.init({
    duration: 1000,
    once: true,
  });
  
  // Typed.js
  const typed = new Typed(".typing", {
    strings: ["Web Developer", "Frontend Enthusiast", "JavaScript Ninja"],
    typeSpeed: 60,
    backSpeed: 30,
    loop: true,
  });
  
  // Scroll to top button
  const scrollTopBtn = document.getElementById("scrollTopBtn");
  window.onscroll = function () {
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
      scrollTopBtn.style.display = "block";
    } else {
      scrollTopBtn.style.display = "none";
    }
  };
  scrollTopBtn.onclick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  
  // Theme Toggle
  const themeToggle = document.getElementById("themeToggle");
  const body = document.body;
  themeToggle.addEventListener("click", () => {
    body.classList.toggle("dark");
  });
  
  // Hamburger menu toggle
  const hamburger = document.getElementById("hamburger");
  const navLinks = document.getElementById("navLinks");
  hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("show");
  });
  