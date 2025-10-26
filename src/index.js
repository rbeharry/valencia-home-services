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

$(document).ready(function(){
  // Hamburger toggle
  $(".menu-toggle").click(function(){
    $(".nav-menu").toggleClass("show");
  });

  // Dropdown toggle for mobile
  $(".dropbtn").click(function(e){
    if ($(window).width() <= 768) {
      e.preventDefault(); // prevent jumping
      $(this).parent(".dropdown").toggleClass("active");
    }
  });

  // Smooth scrolling for anchors
  $("a[href^='#']").click(function(e){
    var target = $(this).attr("href");
    if(target.length > 1){
      e.preventDefault();
      $("html, body").animate({
        scrollTop: $(target).offset().top - 70
      }, 600);
      
      // close mobile menu after clicking
      if ($(window).width() <= 768) {
        $(".nav-menu").removeClass("show");
        $(".dropdown").removeClass("active");
      }
    }
  });
});



document.addEventListener("DOMContentLoaded", function() {
  const menuToggle = document.querySelector(".menu-toggle");
  const navMenu = document.querySelector(".nav-menu");
  const dropdowns = document.querySelectorAll(".dropdown");

  // Hamburger toggle
  menuToggle.addEventListener("click", function() {
    navMenu.classList.toggle("show");
  });

  // Dropdown toggle for mobile
  dropdowns.forEach(drop => {
    const btn = drop.querySelector(".dropbtn");
    btn.addEventListener("click", function(e) {
      if (window.innerWidth <= 768) {
        e.preventDefault();
        drop.classList.toggle("active");
      }
    });
  });
});
