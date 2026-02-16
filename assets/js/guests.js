document.addEventListener("DOMContentLoaded", () => {
  const addBtn = document.getElementById("add-guest");
  const wrapper = document.getElementById("guests-wrapper");

  let guestCount = 0;

  addBtn.addEventListener("click", () => {
    guestCount++;

    const div = document.createElement("div");
    div.className = "guest-field";

    const input = document.createElement("input");
    input.type = "text";
    input.name = `guest_${guestCount}`;
    input.placeholder = `Guest ${guestCount} name`;
    input.required = true;

    const removeBtn = document.createElement("button");
    removeBtn.type = "button";
    removeBtn.textContent = "–";
    removeBtn.addEventListener("click", () => {
      wrapper.removeChild(div);
      guestCount--;
      updatePlaceholders();
    });

    div.appendChild(input);
    div.appendChild(removeBtn);
    wrapper.appendChild(div);
  });

  function updatePlaceholders() {
    const inputs = wrapper.querySelectorAll("input");
    inputs.forEach((input, index) => {
      input.placeholder = `Guest ${index + 1} name`;
      input.name = `guest_${index + 1}`;
    });
  }
});