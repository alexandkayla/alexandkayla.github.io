---
layout: default
title: Acceuil
lang: es
---

<section class="hero">
  <h1>Alexandre & Kayla</h1>
  <br>
  <p>Celebramos nuestra boda en Cannes este año...</p>
  <p>... sería un placer contar con vosotros!</p>
  <table class="counter-table">
    <tr>
      <th>Meses</th>
      <th>Dias</th>
      <th>Horas</th>
      <th>Minutos</th>
      <th>Segundos</th>
    </tr>
    <tr>
      <td><div class="number" id="months">0</div></td>
      <td><div class="number" id="days">0</div></td>
      <td><div class="number" id="hours">0</div></td>
      <td><div class="number" id="minutes">0</div></td>
      <td><div class="number" id="seconds">0</div></td>
    </tr>
  </table>
  <br>
  <a href="{{ base.url }}/{{ page.lang }}/form" class="participate">Responde aqui.</a>
</section>

<script src="{{ '/assets/js/counter.js' | relative_url }}"></script>
