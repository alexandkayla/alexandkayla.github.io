let current = 0;
const cards = document.querySelectorAll(".hotel-card");

function showCard(index) {
  cards.forEach((card, i) => {
    card.classList.remove("active");
    if (i === index) card.classList.add("active");
  });
}

function nextHotel() {
  current = (current + 1) % cards.length;
  showCard(current);
}

function prevHotel() {
  current = (current - 1 + cards.length) % cards.length;
  showCard(current);
}