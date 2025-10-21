
  // Wait for the DOM to load
  document.addEventListener("DOMContentLoaded", function() {
    // Select all dropdown buttons
    const dropdowns = document.querySelectorAll(".dropdown .dropbtn");

    dropdowns.forEach(button => {
      button.addEventListener("click", function(e) {
        e.preventDefault(); // prevent default anchor action

        const dropdownContent = this.nextElementSibling;

        // Close other dropdowns
        document.querySelectorAll(".dropdown-content").forEach(content => {
          if (content !== dropdownContent) {
            content.style.display = "none";
          }
        });

        // Toggle the clicked dropdown
        if (dropdownContent.style.display === "block") {
          dropdownContent.style.display = "none";
        } else {
          dropdownContent.style.display = "block";
        }
      });
    });

    // Close dropdown if clicked outside
    window.addEventListener("click", function(e) {
      if (!e.target.matches(".dropbtn") && !e.target.closest(".dropdown")) {
        document.querySelectorAll(".dropdown-content").forEach(content => {
          content.style.display = "none";
        });
      }
    });
  });


  // Toggle hamburger menu
function toggleNavbar() {
  var x = document.getElementById("myNavbar");
  if (x.className === "navbar") {
    x.className += " responsive";
  } else {
    x.className = "navbar";
  }
}

// Toggle mobile dropdowns
function toggleDropdown(btn) {
  var content = btn.nextElementSibling;
  if (content.style.display === "block") {
    content.style.display = "none";
  } else {
    content.style.display = "block";
  }
}
