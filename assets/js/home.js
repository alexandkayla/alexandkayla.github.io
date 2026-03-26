let currentSlide = 0;

function moveSlide(dir) {
  const carousel = document.querySelector(".carousel");
  const total = 3;

  currentSlide = (currentSlide + dir + total) % total;

  carousel.style.transform = `translateX(-${currentSlide * 100}%)`;
}