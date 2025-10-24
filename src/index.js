document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.getElementById("menu-toggle");
  const navMenu = document.getElementById("nav-menu");
  const dropdowns = Array.from(document.querySelectorAll(".dropdown"));

  // Toggle main menu (hamburger)
  menuToggle.addEventListener("click", (e) => {
    e.stopPropagation();
    navMenu.classList.toggle("show");
  });

  // Toggle dropdowns
  dropdowns.forEach(dropdown => {
    const btn = dropdown.querySelector(".dropbtn");
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      e.stopPropagation();
      dropdowns.forEach(d => { if(d !== dropdown) d.classList.remove("active"); });
      dropdown.classList.toggle("active");
    });
  });

  // Close menus when clicking outside
  document.addEventListener("click", () => {
    navMenu.classList.remove("show");
    dropdowns.forEach(d => d.classList.remove("active"));
  });

  // Close with Escape key
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      navMenu.classList.remove("show");
      dropdowns.forEach(d => d.classList.remove("active"));
    }
  });
});



const menuToggle = document.querySelector('.menu-toggle');
const navMenu = document.querySelector('.nav-menu');

menuToggle.addEventListener('click', () => {
  navMenu.classList.toggle('show'); // slide menu in/out
});