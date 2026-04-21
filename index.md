---
layout: default
title: Home
lang: en
---

<div class="hero">
  <div class="carousel">
    <!-- SLIDE 1 -->
    <div class="slide">
      <div class="slide-content">
        <h1>Alexandre & Kayla</h1>
        <h1>Dos Santos</h1>
        <br>
        <h1>✨ A Love Without Borders</h1>
        <br>
        <h2>Bienvenue • Bemvindo • Welcome • Bienvenido</h2>
        <br>
        <div class="center-block">
          <p><i>The right person,</i></p>
          <p><i>At the right time.</i></p>
          <p><i>Maybe with the wrong script,</i></p>
          <p><i>But surely on the right line.</i></p>
        </div>
        <h3>We invite you to celebrate our wedding on the French Riviera.</h3>
        <br>
        <a href="{{ base.url }}/{{ page.lang }}/form" class="participate">RSVP</a>
        <br>
        <br>
        <h3>Join us in Cannes from the Friday 2...</h3>
        <h3>... to the Sunday 4 of Octobre 2026</h3>
        <i>The celebration will take place on the saturday 3</i>
      </div>
    </div>
    <!-- SLIDE 2 -->
    <div class="slide">
      <div class="slide-content">
        <div class="flex-block">
          <div class="left-text">
            <p>This is more than a destination wedding.</p>
            <p>It is a tribute to <b>heritage</b>.</p>
            <p>To <b>resilience</b>.</p>
            <p>To <b>faith</b>.</p>
            <p>To <b>love</b> that crossed borders.</p>
          </div>
          <div class="vertical-btn">
            <a href="{{ base.url }}/{{ page.lang }}/travel">✈️ Travel</a>
            <a href="{{ base.url }}/{{ page.lang }}/venue">🏰 Venue</a>
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
            <a href="{{ base.url }}/{{ page.lang }}/hotels">🛏️ Hotel</a>
            <a href="{{ base.url }}/{{ page.lang }}/planning">🎉 Planning</a>
            <a href="{{ base.url }}/{{ page.lang }}/todo">📸 Things to do</a>
          </div>
          <div class="right-text">
            <p><i>Your presence would mean everything to us.</i></p>
            <p><i>No pressure — every answer is honored.</i></p>
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