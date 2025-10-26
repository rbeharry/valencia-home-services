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





  const menuToggle = document.querySelector('.menu-toggle');
  const navMenu = document.querySelector('.nav-menu');

  menuToggle.addEventListener('click', () => {
    navMenu.classList.toggle('show');
  });

  // Optional: toggle dropdowns on mobile when clicked
  const dropdowns = document.querySelectorAll('.dropdown');
  dropdowns.forEach(dropdown => {
    const button = dropdown.querySelector('.dropbtn');
    button.addEventListener('click', () => {
      dropdown.classList.toggle('active');
    });
  });