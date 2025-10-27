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


$(function () {
  const $navMenu = $(".nav-menu");
  const $menuToggle = $(".menu-toggle");
  const $dropdowns = $(".dropdown");

  // 1) Hamburger toggle (supports click & touch)
  $menuToggle.on("click touchstart", function (e) {
    e.preventDefault();
    e.stopImmediatePropagation();
    $navMenu.toggleClass("show");
  });

  // 2) Dropdown toggle on mobile/tablet: ONLY toggle when tap/click on the button
  $dropdowns.children(".dropbtn").on("click touchstart", function (e) {
    // On desktop hover will still work — this click handler only affects touch/click events.
    e.preventDefault();
    e.stopImmediatePropagation();

    const $thisDropdown = $(this).parent();

    // Close other open dropdowns
    $dropdowns.not($thisDropdown)
      .removeClass("active")
      .children(".dropdown-content")
      .stop(true, true)
      .slideUp(180);

    // Toggle the clicked dropdown
    if ($thisDropdown.hasClass("active")) {
      $thisDropdown.removeClass("active")
        .children(".dropdown-content")
        .stop(true, true)
        .slideUp(180);
    } else {
      $thisDropdown.addClass("active")
        .children(".dropdown-content")
        .stop(true, true)
        .slideDown(180);
    }
  });

  // 3) Prevent clicks inside the menu from bubbling to document
  $(".navbar, .nav-menu, .dropdown-content").on("click touchstart", function (e) {
    e.stopImmediatePropagation();
  });

  // 4) Click/touch outside closes everything
  $(document).on("click touchstart", function () {
    $navMenu.removeClass("show");
    $dropdowns.removeClass("active")
      .children(".dropdown-content")
      .stop(true, true)
      .slideUp(180);
  });

  // 5) Optional: if user resizes from small -> large, ensure mobile classes are cleared
  $(window).on("resize", function () {
    if ($(window).width() > 768) {
      $navMenu.removeClass("show");
      $dropdowns.removeClass("active").children(".dropdown-content").removeAttr("style");
    }
  });
});
