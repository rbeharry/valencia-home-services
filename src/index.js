document.addEventListener("DOMContentLoaded", function () {
  const menuToggle = document.querySelector(".menu-toggle");
  const navMenu = document.querySelector(".nav-menu");
  const dropdowns = document.querySelectorAll(".dropdown");

  // Hamburger toggle
  menuToggle.addEventListener("click", () => {
    navMenu.classList.toggle("show");
  });

  // Dropdown toggle
  dropdowns.forEach((dropdown) => {
    const button = dropdown.querySelector(".dropbtn");

    button.addEventListener("click", (e) => {
      e.stopPropagation(); // prevent clicks from bubbling up
      dropdown.classList.toggle("active"); // open/close this one
      dropdowns.forEach((d) => {
        if (d !== dropdown) d.classList.remove("active"); // close others
      });
    });
  });

  // Close dropdowns when clicking outside
  document.addEventListener("click", (e) => {
    if (!e.target.closest(".dropdown")) {
      dropdowns.forEach((d) => d.classList.remove("active"));
    }
  });

  // Close dropdowns on scroll (optional)
  window.addEventListener("scroll", () => {
    dropdowns.forEach((d) => d.classList.remove("active"));
  });
});

$(document).ready(function() {
  // Toggle mobile menu
  $(".menu-toggle").click(function() {
    $(".nav-menu").toggleClass("show");
  });

  // Toggle dropdown on mobile
  $(".dropdown .dropbtn").click(function(e) {
    if ($(window).width() <= 768) {
      e.preventDefault();
      $(this).parent().toggleClass("active");
    }
  });

  // Close dropdown if clicked outside
  $(document).click(function(e) {
    if (!$(e.target).closest(".dropdown, .menu-toggle").length) {
      $(".dropdown").removeClass("active");
      $(".nav-menu").removeClass("show");
    }
  });
});
