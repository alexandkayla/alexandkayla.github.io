---
layout: default
title: Home
lang: en
---

<section class="hero">
  <h1>Alexandre & Kayla</h1>
  <p>We are celebrating our marriage in Cannes this year, would you be part of it?</p>

  <div class="counter">
    <span id="days"></span> days to go
  </div>

  <nav class="home-links">
    <a href="/en/about/">About</a>
  </nav>
</section>

<script>
  const weddingDate = new Date("2026-10-02");
  const today = new Date();
  const diff = Math.ceil((weddingDate - today) / (1000 * 60 * 60 * 24));
  document.getElementById("days").textContent = diff;
</script>
