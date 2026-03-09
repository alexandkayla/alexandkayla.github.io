document.querySelectorAll(".slider-container").forEach(container => {

  const slider = container.querySelector(".slider");
  const slides = container.querySelectorAll(".slide");
  const next = container.querySelector(".next");
  const prev = container.querySelector(".prev");

  let index = 0;

  function update() {
    slider.style.transform = `translateX(-${index * 100}%)`;
  }

  next.onclick = () => {
    index = (index + 1) % slides.length;
    update();
  };

  prev.onclick = () => {
    index = (index - 1 + slides.length) % slides.length;
    update();
  };

});