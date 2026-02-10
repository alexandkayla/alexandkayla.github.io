---
layout: default
title: Form
lang: es
---

<section class="hero">
    <div class="fs-form-wrapper">
        <form
        action="https://formspree.io/f/xgolvjld"
        class="fs-form"
        target="_top"
        method="POST"
        >
        <div class="fs-field">
            <label class="fs-label" for="name">Nom et prénom</label>
            <input
            class="fs-input"
            id="name"
            name="name"
            placeholder="Entrez votre nom"
            required
            />
        </div>
        <div class="fs-checkbox-field col-span-full">
            <div class="fs-checkbox-wrapper" style="display: flex; align-items: center;">
                <input
                    class="fs-checkbox"
                    id="fr-celebration"
                    name="fr-celebration"
                    type="checkbox"
                    value="YES"
                />
                <label class="fs-label" for="fr-celebration" style="margin-left: 10px;">
                Je pourrais être présent
                </label>
            </div>
        </div>
        <div class="fs-field">
            <label class="fs-label" for="counter">Nombre d'invités</label>
            <div class="counter-wrapper">
                <button type="button" class="counter-btn" id="decrement">-</button>
                <input type="text" id="counter" name="counter" value="0" readonly />
                <button type="button" class="counter-btn" id="increment">+</button>
            </div>
        </div>
        <div class="fs-field">
            <label class="fs-label" for="phone">Numéro de téléphone</label>
            <input
            class="fs-input"
            id="phone"
            name="phone"
            placeholder="Entrez votre numéro de téléphone"
            required
            />
        </div>
        <div class="fs-checkbox-field col-span-full">
            <div class="fs-checkbox-wrapper" style="display: flex; align-items: center;">
                <input
                    class="fs-checkbox"
                    id="us-celebration"
                    name="us-celebration"
                    type="checkbox"
                    value="YES"
                />
                <label class="fs-label" for="us-celebration" style="margin-left: 10px;">
                Intéressé par la célébration à venir aux Etats-Unis en 2027
                </label>
            </div>
        </div>
        <div class="fs-button-group">
            <button class="fs-button" type="submit">Envoyer</button>
        </div>
        </form>
    </div>
</section>

<script src="{{ '/assets/js/guests.js' | relative_url }}"></script>