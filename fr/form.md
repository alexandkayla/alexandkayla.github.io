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
                    <label class="fs-label" for="name">Nom complet</label>
                    <input
                    class="fs-input"
                    id="name"
                    name="name"
                    placeholder="Prénom NOM"
                    required
                    />
                </div>
                <div class="fs-field">
                    <label class="fs-label">Serez-vous présent?</label>
                    <div class="choice-group">
                        <input type="radio" id="attend-yes" name="attendance" value="YES" required>
                        <label for="attend-yes" class="choice-btn" id="btn-attyes">Oui</label>
                        <input type="radio" id="attend-no" name="attendance" value="NO">
                        <label for="attend-no" class="choice-btn" id="btn-attno">Non</label>
                    </div>
                </div>
                <div class="fs-button-group">
                    <button class="fs-button" id="step1Next" type=button>Suivant</button>
                </div>
            </div>
            <div class="form-step" data-step="yes">
                <div class="fs-field">
                    <label class="fs-label">Invités</label>
                    <div id="guests-wrapper">
                        <!-- Les champs invités seront ajoutés ici -->
                    </div>
                    <button type="button" id="add-guest" class="fs-button">+ Ajouter un invité</button>
                </div>
                <div class="fs-field">
                    <label class="fs-label" for="phone">Numéro de téléphone</label>
                    <input
                    class="fs-input"
                    id="phone"
                    name="phone"
                    placeholder="Votre numéro de téléphone"
                    />
                </div>
                <div class="fs-field">
                    <label class="fs-label" for="email">Mail</label>
                    <input
                    class="fs-input"
                    id="email"
                    name="email"
                    placeholder="@.com"
                    />
                </div>
                <div class="fs-field">
                    <label class="fs-label" for="mail"><i>Addresse (optionnel)</i></label>
                    <input
                    class="fs-input"
                    id="mail"
                    name="mail"
                    placeholder="Votre addresse"
                    />
                </div>
                <div class="fs-button-group">
                    <button class="fs-button" id="step2Next" type=button>Suivant</button>
                </div>
            </div>
            <div class="form-step" data-step="no">
                <div class="fs-field">
                    <label class="fs-label">Intéressé par la célébration aux USA en 2027</label>
                    <div class="choice-group">
                        <input type="radio" id="us-yes" name="attendance-us" value="YES" required>
                        <label for="us-yes" class="choice-btn" id="btn-usyes">Oui</label>
                        <input type="radio" id="us-no" name="attendance-us" value="NO">
                        <label for="us-no" class="choice-btn" id="btn-usno">Non</label>
                    </div>
                </div>
                <div class="fs-button-group">
                    <button class="fs-button" type="submit" id="submit">Envoyer</button>
                </div>
            </div>
            <div class="form-step" data-step="end">
                <button class="fs-button" type=button>Merci!</button>
            </div>
        </form>
    </div>
</section>

<script src="{{ '/assets/js/guests.js' | relative_url }}"></script>
<script src="{{ '/assets/js/form_logic.js' | relative_url }}"></script>