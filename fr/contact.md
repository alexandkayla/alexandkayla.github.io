---
layout: default
title: Contact
lang: fr
---

<div class="hero">
    <div class="center-block">
        <div class="mail-widget">
            <p class="mail-title">
                Envoyez-nous un message à <strong>alexandkayla.totos@gmail.com</strong>
            </p>
            <input
                type="text"
                id="mail-subject"
                placeholder="Objet"
            >
            <textarea
                id="mail-body"
                placeholder="Écrivez votre message..."
            ></textarea>
            <button onclick="sendMail()" class="mail-send">
                Envoyer ✉️
            </button>
        </div>
    </div>
</div>

<script src="{{ '/assets/js/mail.js' | relative_url }}"></script>