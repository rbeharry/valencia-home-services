
document.addEventListener("DOMContentLoaded", function() {
  const servicesBtn = document.getElementById("servicesBtn");
  const servicesMenu = document.getElementById("servicesMenu");

  // Detect if it's a touch device
  const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;

  if (isTouchDevice) {
    servicesBtn.addEventListener("click", function(e) {
      e.preventDefault();
      servicesMenu.classList.toggle("show");
    });

    // Close the dropdown if user taps outside
    window.addEventListener("click", function(e) {
      if (!servicesBtn.contains(e.target) && !servicesMenu.contains(e.target)) {
        servicesMenu.classList.remove("show");
      }
    });
  }
});
