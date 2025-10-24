document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.getElementById("menu-toggle");
  const navMenu = document.getElementById("nav-menu");
  const dropdowns = Array.from(document.querySelectorAll(".dropdown"));

  menuToggle.addEventListener("click", (e) => {
    e.stopPropagation();
    navMenu.classList.toggle("show");
  });

  dropdowns.forEach(dropdown => {
    const btn = dropdown.querySelector(".dropbtn");
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      e.stopPropagation();
      dropdowns.forEach(d => { if(d !== dropdown) d.classList.remove("active"); });
      dropdown.classList.toggle("active");
    });
  });

  document.addEventListener("click", () => {
    navMenu.classList.remove("show");
    dropdowns.forEach(d => d.classList.remove("active"));
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      navMenu.classList.remove("show");
      dropdowns.forEach(d => d.classList.remove("active"));
    }
  });
});
