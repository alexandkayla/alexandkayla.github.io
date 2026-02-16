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
        id="multiStepForm"
        >
            <div class="form-step active" data-step="1">
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
                <div class="fs-field">
                    <label class="fs-label">Will you be able to attend?</label>
                    <div class="choice-group">
                        <input type="radio" id="attend-yes" name="attendance" value="YES" required>
                        <label for="attend-yes" class="choice-btn" id="btn-attyes">Yes</label>
                        <input type="radio" id="attend-no" name="attendance" value="NO">
                        <label for="attend-no" class="choice-btn" id="btn-attno">No</label>
                    </div>
                </div>
                <div class="fs-button-group">
                    <button class="fs-button" id="step1Next" type=button>Next</button>
                </div>
            </div>
            <div class="form-step" data-step="yes">
                <div class="fs-field">
                    <label class="fs-label">Guests</label>
                    <div id="guests-wrapper">
                        <!-- Les champs invités seront ajoutés ici -->
                    </div>
                    <button type="button" id="add-guest" class="counter-btn">+ Add guest</button>
                </div>
                <div class="fs-field">
                    <label class="fs-label" for="phone">Phone Number</label>
                    <input
                    class="fs-input"
                    id="phone"
                    name="phone"
                    placeholder="Enter your phone number"
                    />
                </div>
                <div class="fs-field">
                    <label class="fs-label" for="mail">Mail address</label>
                    <input
                    class="fs-input"
                    id="mail"
                    name="mail"
                    placeholder="Enter your mail address"
                    />
                </div>
                <div class="fs-button-group">
                    <button class="fs-button" id="step2Next" type=button>Next</button>
                </div>
            </div>
            <div class="form-step" data-step="no">
                <div class="fs-field">
                    <label class="fs-label">Interested in the US celebration in 2027</label>
                    <div class="choice-group">
                        <input type="radio" id="us-yes" name="attendance-us" value="YES" required>
                        <label for="us-yes" class="choice-btn" id="btn-usyes">Yes</label>
                        <input type="radio" id="us-no" name="attendance-us" value="NO">
                        <label for="us-no" class="choice-btn" id="btn-usno">No</label>
                    </div>
                </div>
                <div class="fs-button-group">
                    <button class="fs-button" type="submit" id="submit">Submit</button>
                </div>
            </div>
            <div class="form-step" data-step="end">
                <button class="fs-button" type=button>Thanks!</button>
            </div>
        </form>
    </div>
</section>

<script src="{{ '/assets/js/guests.js' | relative_url }}"></script>
<script src="{{ '/assets/js/form_logic.js' | relative_url }}"></script>