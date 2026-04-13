---
layout: default
title: Hotels
lang: en
---

<div class="hero">
  <div class="hotels-container">
    <h1>🏨 Recommended Hotels near White House Cannes</h1>
    <br><br>
    <div class="carousel-hotels">
      <button class="nav left" onclick="prevHotel()">❮</button>
      <div class="hotel-card active">
        <h2>🏝 Juliana Hotel Cannes</h2>
        <h3>Quiet 4-star hotel near the sea.</h3>
        <ul>
          <li>Pool</li>
          <li>Peaceful area</li>
          <li>Balconies</li>
        </ul>
        <div class="two-images">
          <img src="/assets/images/hotels/juliana1.webp">
          <img src="/assets/images/hotels/juliana2.jpg">
        </div>
        <div class="hotel-offer">
            <p class="offer-text">✨ Exclusive wedding rate</p>
            <a href="https://app.mews.com/distributor/c2f077ef-c299-436e-8270-ad0200dd8fb1?mewsAvailabilityBlockId=85287789-3abc-4f66-8518-b41a00e45435&mewsStart=2026-10-02&mewsEnd=2026-10-06" target="_blank" class="offer-btn">
                Unlock special rate
            </a>
        </div>
      </div>
      <div class="hotel-card">
        <h2>🏩 Le patio des artistes</h2>
        <h3>4-star Best Western Premier.</h3>
        <ul>
          <li>Bar and patio on panoramic terrace (with Jaccuzi)</li>
          <li>Combines charm and serenity for a romantic week-end</li>
          <li>Large range of room categories</li>
        </ul>
        <div class="two-images">
          <img src="/assets/images/hotels/patio0.webp">
          <img src="/assets/images/hotels/patio1.webp">
        </div>
        <div class="hotel-offer">
            <p class="offer-text">✨ Exclusive wedding rate</p>
            <a href="https://www.secure-hotel-booking.com/d-edge/Best-Western-Le-Patio-s-Artistes-Reservation/29I3/en-US/DateSelection" target="_blank" class="offer-btn">
                Using promotion code: KAYLA
            </a>
        </div>
      </div>
      <div class="hotel-card">
        <h2>🏨 Best Western (Cannes Centre)</h2>
        <h3>A comfortable and centrally located.</h3>
        <ul>
          <li>Close to train station and downtown</li>
          <li>Rooftop with pool</li>
          <li>Modern rooms</li>
        </ul>
        <p>💡 10–15 min walk to La Croisette</p>
        <div class="two-images">
          <img src="/assets/images/hotels/western1.jpg">
          <img src="/assets/images/hotels/western2.webp">
        </div>
      </div>
      <div class="hotel-card">
        <h2>🌴 Mondrian Cannes</h2>
        <h3>Elegant 5-star hotel on La Croisette.</h3>
        <ul>
          <li>Private beach access</li>
          <li>Mediterranean garden</li>
          <li>Restaurants & bar</li>
        </ul>
        <div class="two-images">
          <img src="/assets/images/hotels/modrian1.jpg">
          <img src="/assets/images/hotels/modrian2.webp">
        </div>
      </div>
      <div class="hotel-card">
        <h2>🏨 ibis Cannes Centre</h2>
        <h3>Simple and budget-friendly option.</h3>
        <ul>
          <li>Near shopping area</li>
          <li>Close to beach</li>
          <li>Functional rooms</li>
        </ul>
        <p>💡 Ideal for short stays</p>
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