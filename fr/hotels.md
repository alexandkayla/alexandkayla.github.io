---
layout: default
title: Hôtels
lang: fr
---

<div class="hero">
  <div class="hotels-container">
    <h1>🏨 Hôtels recommandés près du White House Cannes</h1>
    <br><br>
    <div class="carousel-hotels">
      <button class="nav left" onclick="prevHotel()">❮</button>
      <div class="hotel-card active">
        <h2>🏝 Juliana Hotel Cannes</h2>
        <h3>Hôtel 4 étoiles calme près de la mer.</h3>
        <ul>
          <li>Piscine</li>
          <li>Quartier paisible</li>
          <li>Balcons</li>
        </ul>
        <div class="two-images">
          <img src="/assets/images/hotels/juliana1.webp">
          <img src="/assets/images/hotels/juliana2.jpg">
        </div>
        <div class="hotel-offer">
            <p class="offer-text">✨ Tarif mariage exclusif</p>
            <a href="https://app.mews.com/distributor/c2f077ef-c299-436e-8270-ad0200dd8fb1?mewsAvailabilityBlockId=85287789-3abc-4f66-8518-b41a00e45435&mewsStart=2026-10-02&mewsEnd=2026-10-06" target="_blank" class="offer-btn">
                Débloquer le tarif spécial
            </a>
        </div>
      </div>
      <div class="hotel-card">
        <h2>🏩 Le patio des artistes</h2>
        <h3>Best Western Premier 4 étoiles.</h3>
        <ul>
          <li>Bar et patio sur terrasse panoramique (avec jacuzzi)</li>
          <li>Allie charme et sérénité pour un week-end romantique</li>
          <li>Large choix de catégories de chambres</li>
        </ul>
        <div class="two-images">
          <img src="/assets/images/hotels/patio0.webp">
          <img src="/assets/images/hotels/patio1.webp">
        </div>
        <div class="hotel-offer">
            <p class="offer-text">✨ Tarif mariage exclusif</p>
            <a href="https://www.secure-hotel-booking.com/d-edge/Best-Western-Le-Patio-s-Artistes-Reservation/29I3/en-US/DateSelection" target="_blank" class="offer-btn">
                Utiliser le code promotionnel : KAYLA
            </a>
        </div>
      </div>
      <div class="hotel-card">
        <h2>🏨 Best Western (Cannes Centre)</h2>
        <h3>Confortable et idéalement situé en centre-ville.</h3>
        <ul>
          <li>Proche de la gare et du centre</li>
          <li>Rooftop avec piscine</li>
          <li>Chambres modernes</li>
        </ul>
        <p>💡 À 10–15 min à pied de La Croisette</p>
        <div class="two-images">
          <img src="/assets/images/hotels/western1.jpg">
          <img src="/assets/images/hotels/western2.webp">
        </div>
      </div>
      <div class="hotel-card">
        <h2>🌴 Mondrian Cannes</h2>
        <h3>Hôtel 5 étoiles élégant sur La Croisette.</h3>
        <ul>
          <li>Accès plage privée</li>
          <li>Jardin méditerranéen</li>
          <li>Restaurants et bar</li>
        </ul>
        <div class="two-images">
          <img src="/assets/images/hotels/modrian1.jpg">
          <img src="/assets/images/hotels/modrian2.webp">
        </div>
      </div>
      <div class="hotel-card">
        <h2>🏨 ibis Cannes Centre</h2>
        <h3>Option simple et économique.</h3>
        <ul>
          <li>Proche des commerces</li>
          <li>À proximité de la plage</li>
          <li>Chambres fonctionnelles</li>
        </ul>
        <p>💡 Idéal pour les courts séjours</p>
        <div class="two-images">
          <img src="/assets/images/hotels/ibis1.jpg">
          <img src="/assets/images/hotels/ibis2.jpg">
        </div>
      </div>
      <button class="nav right" onclick="nextHotel()">❯</button>
    </div>
  </div>
</div>

<script src="{{ '/assets/js/hotels.js' | relative_url }}"></script>