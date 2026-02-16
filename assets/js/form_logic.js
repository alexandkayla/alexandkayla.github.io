const steps = document.querySelectorAll(".form-step");
const step1Next = document.getElementById("step1Next");
const step2Next = document.getElementById("step2Next");
const submitBtn = document.getElementById("submit")
const prevBtns = document.querySelectorAll(".prev-btn");

const nameInput = document.getElementById("name");
const attyes = document.getElementById("btn-attyes");
const attno = document.getElementById("btn-attno");

const phoneInput = document.getElementById("phone");
const mailInput = document.getElementById("mail");

const usyes = document.getElementById("btn-usyes");
const usno = document.getElementById("btn-usno");

nameInput.addEventListener("input", () => {
  nameInput.style.borderColor = "#ccc";
});

attyes.addEventListener("click", () => {
  attyes.style.borderColor = "#d4af37";
  attno.style.borderColor = "#d4af37";
});

attno.addEventListener("click", () => {
  attyes.style.borderColor = "#d4af37";
  attno.style.borderColor = "#d4af37";
});

phoneInput.addEventListener("input", () => {
  phoneInput.style.borderColor = "#ccc";
});

mailInput.addEventListener("input", () => {
  mailInput.style.borderColor = "#ccc";
});

usyes.addEventListener("click", () => {
  usyes.style.borderColor = "#d4af37";
  usno.style.borderColor = "#d4af37";
});

usno.addEventListener("click", () => {
  usyes.style.borderColor = "#d4af37";
  usno.style.borderColor = "#d4af37";
});

submitBtn.addEventListener("click", () => {
    const selected = document.querySelector('input[name="attendance-us"]:checked');
    if(!selected)
    {
        usyes.style.borderColor = "red";
        usno.style.borderColor = "red";
    }
    else
    {
        showStep("end");
    }
});

function showStep(stepName) {
  steps.forEach(step => {
    step.classList.remove("active");
  });

  document.querySelector(`[data-step="${stepName}"]`)
          .classList.add("active");
}

step1Next.addEventListener("click", () => {
    const selected = document.querySelector('input[name="attendance"]:checked');
  
    // Vérifie si le champ est vide
    if (nameInput.value.trim() === "") {
        nameInput.style.borderColor = "red";
        nameInput.focus();
    }
    else if (!selected) {
        attyes.style.borderColor = "red";
        attno.style.borderColor = "red";
        attyes.focus();
        attno.focus();
    }
    else
    {
        if (selected.value === "YES") 
        {
            showStep("yes");
        } 
        else 
        {
            showStep("no");
        }
    }
});

step2Next.addEventListener("click", () => {
    if (phoneInput.value.trim() === "") {
        phoneInput.style.borderColor = "red";
        phoneInput.focus();
    }
    else if(mailInput.value.trim() === "") {
        mailInput.style.borderColor = "red";
        mailInput.focus();
    }
    else
    {
        showStep("no");
    }
});

prevBtns.forEach(btn => {
  btn.addEventListener("click", () => {
    showStep("1");
  });
});
