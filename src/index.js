$(document).ready(function() {
  // Hamburger toggle
  $(".menu-toggle").click(function() {
    $("#nav-menu").toggleClass("show");
  });

  // Dropdown toggle
  $(".dropdown > .dropbtn").click(function(e) {
    e.preventDefault();
    e.stopPropagation();

    const $dropdown = $(this).parent(".dropdown");

    // Close other dropdowns
    $(".dropdown").not($dropdown).removeClass("active");

    // Toggle clicked dropdown
    $dropdown.toggleClass("active");
  });

  // Close dropdowns when clicking outside
  $(document).click(function() {
    $(".dropdown").removeClass("active");
  });
});
