  // Get all dropdown buttons
  const dropdownButtons = document.querySelectorAll(".dropbtn");

  dropdownButtons.forEach(button => {
    button.addEventListener("click", function (e) {
      e.preventDefault(); // Prevent accidental link jumps
      e.stopPropagation(); // Prevent clicks from closing immediately

      // Close other dropdowns first
      document.querySelectorAll(".dropdown-content").forEach(content => {
        if (content !== this.nextElementSibling) {
          content.style.display = "none";
        }
      });

      // Toggle current dropdown
      const dropdownContent = this.nextElementSibling;
      if (dropdownContent.style.display === "block") {
        dropdownContent.style.display = "none";
      } else {
        dropdownContent.style.display = "block";
      }
    });
  });

  // Close dropdown when clicking outside
  window.addEventListener("click", function () {
    document.querySelectorAll(".dropdown-content").forEach(content => {
      content.style.display = "none";
    });
  });

  