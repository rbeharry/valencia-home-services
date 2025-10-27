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



$(function() {
  // Toggle hamburger menu
  $('.menu-toggle').on('click', function(e) {
    e.stopPropagation();
    $('#nav-menu').toggleClass('show');
    // close any open dropdowns when toggling main menu closed
    if (!$('#nav-menu').hasClass('show')) {
      $('.dropdown').removeClass('active');
      $('.dropdown .dropdown-content').slideUp(150);
    }
  });

  // Prevent main clicks from closing immediately
  $('#nav-menu').on('click', function(e){
    e.stopPropagation();
  });

  // Dropdown button click (mobile & tablet)
  $('.dropdown .dropbtn').on('click', function(e) {
    // If desktop (hover) we don't want to prevent normal anchor navigation.
    if (window.matchMedia('(max-width: 768px)').matches) {
      e.preventDefault();
      e.stopPropagation();

      var $parent = $(this).closest('.dropdown');

      // close other dropdowns
      $('.dropdown').not($parent).removeClass('active').find('.dropdown-content').slideUp(150);

      // toggle requested dropdown
      $parent.toggleClass('active');
      $parent.find('.dropdown-content').stop(true, true).slideToggle(150);
    }
    // otherwise allow desktop anchor (hover) behaviour
  });

  // prevent clicks inside dropdown content from closing (very important)
  $('.dropdown .dropdown-content').on('click', function(e) { e.stopPropagation(); });

  // click outside: close all
  $(document).on('click', function() {
    $('#nav-menu').removeClass('show');
    $('.dropdown').removeClass('active');
    $('.dropdown .dropdown-content').slideUp(150);
  });

  // optional: close on escape key
  $(document).on('keyup', function(e){
    if (e.key === 'Escape') {
      $('#nav-menu').removeClass('show');
      $('.dropdown').removeClass('active');
      $('.dropdown .dropdown-content').slideUp(150);
    }
  });
});