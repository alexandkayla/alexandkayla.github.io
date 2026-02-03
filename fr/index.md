---
layout: default
title: Acceuil
lang: fr
---

<section class="hero">
  <h1>Alexandre & Kayla</h1>
  <p>Nous célèbrerons notre marriage à Cannes cette année, et ce serait un plaisir de vous compter parmi nous.</p>

  <div class="counter">
    <span id="days"></span> jours restants.
  </div>

  <nav class="home-links">
    <a href="{{ base.url }}/fr/about">Informations</a>
  </nav>
</section>

<script>
  const weddingDate = new Date("2026-10-02");
  const today = new Date();
  const diff = Math.ceil((weddingDate - today) / (1000 * 60 * 60 * 24));
  document.getElementById("days").textContent = diff;
</script>
