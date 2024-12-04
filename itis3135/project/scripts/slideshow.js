let currentSlideIndex = 0;
const slides = document.querySelectorAll(".slide");
const prevButton = document.getElementById("previous-button");
const nextButton = document.getElementById("next-button");

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.remove("active-slide");
    if (i === index) slide.classList.add("active-slide");
  });
}

function nextSlide() {
  currentSlideIndex = (currentSlideIndex + 1) % slides.length;
  showSlide(currentSlideIndex);
}

function prevSlide() {
  currentSlideIndex = (currentSlideIndex - 1 + slides.length) % slides.length;
  showSlide(currentSlideIndex);
}

prevButton.addEventListener("click", prevSlide);
nextButton.addEventListener("click", nextSlide);
