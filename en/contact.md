---
layout: default
title: Contact
lang: en
---

<div class="hero">
    <div class="center-block">
        <div class="mail-widget">
            <p class="mail-title">
                Send us a message at <strong>alexandkayla.totos@gmail.com</strong>
            </p>
            <input
                type="text"
                id="mail-subject"
                placeholder="Subject"
            >
            <textarea
                id="mail-body"
                placeholder="Write your message..."
            ></textarea>
            <button onclick="sendMail()" class="mail-send">
                Send ✉️
            </button>
        </div>
    </div>
</div>

<script src="{{ '/assets/js/mail.js' | relative_url }}"></script>