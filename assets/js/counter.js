  const targetDate = new Date("2026-10-01T00:00:00").getTime();

  function updateCounter() {
    const now = new Date().getTime();
    let distance = targetDate - now;
    if(distance < 0) distance = 0;

    const months = Math.floor(distance / (1000 * 60 * 60 * 24 * 30));
    distance -= months * 1000 * 60 * 60 * 24 * 30;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    distance -= days * 1000 * 60 * 60 * 24;

    const hours = Math.floor(distance / (1000 * 60 * 60));
    distance -= hours * 1000 * 60 * 60;

    const minutes = Math.floor(distance / (1000 * 60));
    distance -= minutes * 1000 * 60;

    const seconds = Math.floor(distance / 1000);

    document.getElementById("months").innerText = months;
    document.getElementById("days").innerText = days;
    document.getElementById("hours").innerText = hours;
    document.getElementById("minutes").innerText = minutes;
    document.getElementById("seconds").innerText = seconds;
  }

  setInterval(updateCounter, 1000);
  updateCounter();