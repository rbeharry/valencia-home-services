$(document).ready(function() {

  // Toggle hamburger menu
  $(".menu-toggle").on("click", function(e) {
    e.stopPropagation(); // stop bubbling
    $(".nav-menu").toggleClass("show");
  });

  // Toggle dropdown menus
  $(".dropdown .dropbtn").on("click", function(e) {
    e.preventDefault();
    e.stopPropagation(); // stop bubbling

    var $dropdown = $(this).parent();

    // Close other dropdowns
    $(".dropdown").not($dropdown).removeClass("active")
      .children(".dropdown-content").stop(true, true).slideUp(200);

    // Toggle this dropdown
    if ($dropdown.hasClass("active")) {
      $dropdown.removeClass("active");
      $dropdown.children(".dropdown-content").stop(true, true).slideUp(200);
    } else {
      $dropdown.addClass("active");
      $dropdown.children(".dropdown-content").stop(true, true).slideDown(200);
    }
  });

  // Stop clicks inside dropdown content from closing menus
  $(".dropdown .dropdown-content").on("click", function(e) {
    e.stopPropagation();
  });

  // Click outside closes all menus
  $(document).on("click", function() {
    $(".nav-menu").removeClass("show");
    $(".dropdown").removeClass("active")
      .children(".dropdown-content").stop(true, true).slideUp(200);
  });
});


$(document).ready(function() {
  // Hamburger toggle
  $(".menu-toggle").click(function(e) {
    e.stopPropagation();
    $(".nav-menu").toggleClass("show");
  });

  // Dropdown toggle
  $(".dropdown .dropbtn").click(function(e) {
    e.preventDefault();
    e.stopPropagation();
    var $dropdown = $(this).parent();
    $(".dropdown").not($dropdown).removeClass("active").find(".dropdown-content").slideUp(200);
    $dropdown.toggleClass("active");
    $dropdown.find(".dropdown-content").slideToggle(200);
  });

  // Prevent dropdown clicks from closing
  $(".dropdown .dropdown-content").click(function(e) {
    e.stopPropagation();
  });

  // Click outside closes everything
  $(document).click(function() {
    $(".nav-menu").removeClass("show");
    $(".dropdown-content").slideUp(200);
    $(".dropdown").removeClass("active");
  });
});
