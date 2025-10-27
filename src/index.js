document.addEventListener("DOMContentLoaded", () => {
  const dropdowns = document.querySelectorAll(".dropdown");

  dropdowns.forEach(dropdown => {
    const button = dropdown.querySelector(".dropbtn");
    button.addEventListener("click", (e) => {
      e.preventDefault(); // Prevent link from jumping
      dropdown.classList.toggle("active"); // Toggle open/close
    });
  });

  // Optional: close dropdowns when clicking outside
  document.addEventListener("click", (e) => {
    dropdowns.forEach(dropdown => {
      if (!dropdown.contains(e.target)) {
        dropdown.classList.remove("active"); // Close dropdown
      }
    });
  });
});
