$(function () {
  const $navMenu = $(".nav-menu");
  const $dropdowns = $(".dropdown");

  // 1️⃣  Hamburger toggle
  $(".menu-toggle").on("click", function (e) {
    e.stopImmediatePropagation();      // strongest stop
    $navMenu.toggleClass("show");
  });

  // 2️⃣  Dropdown toggle
  $dropdowns.children(".dropbtn").on("click", function (e) {
    e.preventDefault();
    e.stopImmediatePropagation();      // block bubbling at source

    const $thisDropdown = $(this).parent();

    // close others first
    $dropdowns.not($thisDropdown)
      .removeClass("active")
      .children(".dropdown-content")
      .stop(true, true)
      .slideUp(200);

    // toggle current
    if ($thisDropdown.hasClass("active")) {
      $thisDropdown
        .removeClass("active")
        .children(".dropdown-content")
        .stop(true, true)
        .slideUp(200);
    } else {
      $thisDropdown
        .addClass("active")
        .children(".dropdown-content")
        .stop(true, true)
        .slideDown(200);
    }
  });

  // 3️⃣  Anything inside navbar should never close it
  $(".navbar, .nav-menu, .dropdown-content").on("click", function (e) {
    e.stopImmediatePropagation();
  });

  // 4️⃣  Click outside closes everything
  $(document).on("click", function () {
    $navMenu.removeClass("show");
    $dropdowns.removeClass("active")
      .children(".dropdown-content")
      .stop(true, true)
      .slideUp(200);
  });
});
