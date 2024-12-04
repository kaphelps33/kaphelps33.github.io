// Get the button
const backToTopButton = document.getElementById("back-to-top");

// Show the button when the user scrolls down
window.addEventListener("scroll", () => {
  if (window.scrollY > 100) {
    // Show when scrolled 100px down
    backToTopButton.style.display = "block";
  } else {
    backToTopButton.style.display = "none";
  }
});

// Smooth scroll back to top when the button is clicked
backToTopButton.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});
