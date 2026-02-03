---
layout: default
title: Acceuil
lang: es
---

<section class="hero">
  <h1>Alexandre & Kayla</h1>
  <p>Celebramos nuestra boda en Cannes este año, y sería un placer contar con vosotros.</p>

  <div class="counter">
    <span id="days"></span> días restantes.
  </div>

  <nav class="home-links">
    <a href="{{ base.url }}/es/about">Información</a>
  </nav>
</section>

<script>
  const weddingDate = new Date("2026-10-02");
  const today = new Date();
  const diff = Math.ceil((weddingDate - today) / (1000 * 60 * 60 * 24));
  document.getElementById("days").textContent = diff;
</script>
