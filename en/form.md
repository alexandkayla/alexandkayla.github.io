---
layout: default
title: Form
lang: en
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
            <label class="fs-label" for="name">Full Name</label>
            <input
            class="fs-input"
            id="name"
            name="name"
            placeholder="Enter your name"
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
                Will be able to assist
                </label>
            </div>
        </div>
        <div class="fs-field">
            <label class="fs-label" for="counter">Number of Guests</label>
            <div class="counter-wrapper">
                <button type="button" class="counter-btn" id="decrement">-</button>
                <input type="text" id="counter" name="counter" value="0" readonly />
                <button type="button" class="counter-btn" id="increment">+</button>
            </div>
        </div>
        <div class="fs-field">
            <label class="fs-label" for="phone">Phone Number</label>
            <input
            class="fs-input"
            id="phone"
            name="phone"
            placeholder="Enter your phone number"
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
                Interested in the US celebration in 2027
                </label>
            </div>
        </div>
        <div class="fs-button-group">
            <button class="fs-button" type="submit">Subscribe</button>
        </div>
        </form>
    </div>
</section>

<script src="{{ '/assets/js/guests.js' | relative_url }}"></script>