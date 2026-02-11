document.addEventListener("DOMContentLoaded", () => {
  const PASSWORD = "yesouido";
  const SESSION_KEY = "siteUnlocked";

  if (sessionStorage.getItem(SESSION_KEY) === "true") return;

  const overlay = document.createElement("div");
  overlay.id = "password-overlay";

  overlay.innerHTML = `
    <div class="password-box">
        <h2>Private access</h2>
        <input type="password" id="pwd-input" placeholder="Password" />
        <button id="pwd-btn">Enter</button>
    </div>
  `;

  document.body.appendChild(overlay);

  // Fade-in animation
  requestAnimationFrame(() => {
    overlay.classList.add("visible");
  });

  const input = document.getElementById("pwd-input");
  const button = document.getElementById("pwd-btn");

  function unlock() {
    if (input.value === PASSWORD) {
      sessionStorage.setItem(SESSION_KEY, "true");
      overlay.classList.remove("visible");

      setTimeout(() => overlay.remove(), 300);
    } else {
      input.value = "";
      input.placeholder = "Wrong password";
    }
  }

  button.addEventListener("click", unlock);
  input.addEventListener("keypress", e => {
    if (e.key === "Enter") unlock();
  });

  const toggle = document.getElementById("toggle-pwd");

  toggle.addEventListener("click", () => {
  input.type = input.type === "password" ? "text" : "password";
  toggle.style.opacity = input.type === "text" ? "1" : "0.6";
  });
});