// Project 1: write your form validation in this file.

const form = document.querySelector("#signup-form");

const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const frequencyInput = document.querySelector("#frequency");

const formMessage = document.querySelector("#form-message");

form.addEventListener("submit", function(event) {
    event.preventDefault();

    const name = nameInput.value.trim();
    const email = emailInput.value.trim();
    const frequency = frequencyInput.value;

    let isValid = true;

    const nameError = document.querySelector("#name-error");
    const emailError = document.querySelector("#email-error");
    const frequencyError = document.querySelector("#frequency-error");

    
    if (name === "") {
        nameError.textContent = "Enter your name.";
        nameInput.setAttribute("aria-invalid", "true");
        isValid = false;
    } else {
        nameError.textContent = "";
        nameInput.removeAttribute("aria-invalid");
    }

    
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (email === "") {
        emailError.textContent = "Enter your email address.";
        emailInput.setAttribute("aria-invalid", "true");
        isValid = false;
    } else if (!emailPattern.test(email)) {
        emailError.textContent = "Enter an email address like name@example.com.";
        emailInput.setAttribute("aria-invalid", "true");
        isValid = false;
    } else {
        emailError.textContent = "";
        emailInput.removeAttribute("aria-invalid");
    }

   
    if (frequency === "") {
        frequencyError.textContent = "Choose how often we should email you.";
        frequencyInput.setAttribute("aria-invalid", "true");
        isValid = false;
    } else {
        frequencyError.textContent = "";
        frequencyInput.removeAttribute("aria-invalid");
    }

    if (!isValid) {
        formMessage.textContent = "";
        formMessage.classList.remove("success");

        if (nameInput.hasAttribute("aria-invalid")) {
            nameInput.focus();
        } else if (emailInput.hasAttribute("aria-invalid")) {
            emailInput.focus();
        } else if (frequencyInput.hasAttribute("aria-invalid")) {
            frequencyInput.focus();
        }

        return;
    }

    formMessage.textContent = `Thank you, ${name}! You're on the mailing list.`;
    formMessage.classList.add("success");

    form.reset();
});
