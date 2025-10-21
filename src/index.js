

document.addEventListener("DOMContentLoaded", function() {
  const dropdowns = document.querySelectorAll(".dropdown");

  dropdowns.forEach(dropdown => {
    const button = dropdown.querySelector(".dropbtn");

    button.addEventListener("click", function(e) {
      e.stopPropagation();

      // Close all other dropdowns first
      dropdowns.forEach(d => {
        if (d !== dropdown) d.classList.remove("show");
      });

      // Toggle the clicked dropdown
      dropdown.classList.toggle("show");
    });
  });

  // Close dropdowns when clicking outside
  document.addEventListener("click", function() {
    dropdowns.forEach(d => d.classList.remove("show"));
  });

  // Close dropdowns when clicking a link inside them
  document.querySelectorAll(".dropdown-content a").forEach(link => {
    link.addEventListener("click", () => {
      dropdowns.forEach(d => d.classList.remove("show"));
    });
  });
});

