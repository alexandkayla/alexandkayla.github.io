---
layout: default
title: Home
---

<section class="hero">
  <h1>Alexandre & Kayla</h1>
  <p>We are celebrating our marriage in Cannes this year, will you join us?</p>

  <div class="counter">
    <span id="days"></span> days to go
  </div>

  <nav class="home-links">
    <a href="/_posts/about">About</a>
    <a href="/rsvp/">RSVP</a>
    <a href="/travel/">Travel</a>
  </nav>
</section>

<script>
  const weddingDate = new Date("2026-06-12");
  const today = new Date();
  const diff = Math.ceil((weddingDate - today) / (1000 * 60 * 60 * 24));
  document.getElementById("days").textContent = diff;
</script>
