
document.addEventListener("DOMContentLoaded", function() {
  const dropdownButtons = document.querySelectorAll(".dropbtn");

  dropdownButtons.forEach(button => {
    button.addEventListener("click", function(e) {
      e.stopPropagation();

      // Close all dropdowns first
      document.querySelectorAll(".dropdown-content").forEach(content => {
        if (content !== this.nextElementSibling) {
          content.style.display = "none";
        }
      });

      // Toggle the clicked dropdown
      const content = this.nextElementSibling;
      content.style.display = content.style.display === "block" ? "none" : "block";
    });
  });

  // Close dropdowns when clicking outside
  document.addEventListener("click", function() {
    document.querySelectorAll(".dropdown-content").forEach(content => {
      content.style.display = "none";
    });
  });
});

