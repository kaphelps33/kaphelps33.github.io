$(document).ready(function () {
  let slideIndex = 1;

  function showSlides(n) {
    let slides = $(".slide");
    let smallSlides = $(".demo");
    let captionText = $("#caption");

    if (n > slides.length) slideIndex = 1;
    if (n < 1) slideIndex = slides.length;

    slides.hide();
    smallSlides.removeClass("active");

    $(slides[slideIndex - 1]).show();
    $(smallSlides[slideIndex - 1]).addClass("active");
    captionText.text($(smallSlides[slideIndex - 1]).attr("alt"));
  }

  showSlides(slideIndex);

  $(".demo").click(function () {
    slideIndex = $(this).parent().index() + 1;
    showSlides(slideIndex);
  });

  $(".prev").click(function () {
    slideIndex--;
    showSlides(slideIndex);
  });

  $(".next").click(function () {
    slideIndex++;
    showSlides(slideIndex);
  });
});
