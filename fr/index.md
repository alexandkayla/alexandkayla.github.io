---
layout: default
title: Accueil
lang: fr
---

<div class="hero">
  <div class="carousel">
    <!-- SLIDE 1 -->
    <div class="slide">
      <div class="slide-content">
        <h1>✨ Un amour sans frontières</h1>
        <br>
        <h2>Bienvenue • Bem-vindo • Welcome • Bienvenido</h2>
        <br>
        <div class="center-block">
          <p><i>La bonne personne,</i></p>
          <p><i>au bon moment.</i></p>
          <p><i>Peut-être avec le mauvais scénario,</i></p>
          <p><i>mais assurément sur la bonne trajectoire.</i></p>
        </div>
        <h3>Nous vous invitons à célébrer notre mariage sur la Côte d’Azur.</h3>
        <br>
        <a href="{{ base.url }}/{{ page.lang }}/form" class="participate">RSVP</a>
        <br>
        <br>
        <h3>Rejoignez-nous à Cannes (2–4 octobre 2026)</h3>
      </div>
    </div>
    <!-- SLIDE 2 -->
    <div class="slide">
      <div class="slide-content">
        <div class="flex-block">
          <div class="left-text">
            <p>C’est bien plus qu’un mariage destination.</p>
            <p>C’est un hommage à <b>l’héritage</b>.</p>
            <p>À la <b>résilience</b>.</p>
            <p>À la <b>foi</b>.</p>
            <p>À un <b>amour</b> qui a traversé les frontières.</p>
          </div>
          <div class="vertical-btn">
            <a href="{{ base.url }}/{{ page.lang }}/travel">✈️ Voyage</a>
            <a href="{{ base.url }}/{{ page.lang }}/venue">🏰 Lieu</a>
            <a href="{{ base.url }}/{{ page.lang }}/contact">📩 Contact</a>
          </div>
        </div>
      </div>
    </div>
    <!-- SLIDE 3 -->
    <div class="slide">
      <div class="slide-content">
        <div class="flex-block">
          <div class="vertical-btn">
            <a href="{{ base.url }}/{{ page.lang }}/hotels">🛏️ Hôtels</a>
            <a href="{{ base.url }}/{{ page.lang }}/itineraries">🎉 Itinéraires</a>
            <a href="{{ base.url }}/{{ page.lang }}/todo">📸 Choses à faire</a>
          </div>
          <div class="right-text">
            <p><i>Votre présence compterait énormément pour nous.</i></p>
            <p><i>Aucune pression — chaque réponse est respectée.</i></p>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- NAV -->
  <div class="nav left" onclick="moveSlide(-1)">❮</div>
  <div class="nav right" onclick="moveSlide(1)">❯</div>

</div>

<script src="{{ '/assets/js/home.js' | relative_url }}"></script>