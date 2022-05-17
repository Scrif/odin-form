const pw = document.querySelector("#password");
const pwC = document.querySelector("#passwordConfirm");
const firstName = document.querySelector("#firstname");
const lastName = document.querySelector("#lastname");
const email = document.querySelector("#email");
const tel = document.querySelector("#phonenumber");
const pwError = document.querySelector("#password-confirm-error");
const fnError = document.querySelector("#first-name-error");
const lnError = document.querySelector("#last-name-error");
const emailError = document.querySelector("#email-error");
const telError = document.querySelector("#tel-error");
const pwConfirmError = document.querySelector("#password-confirm-error");

firstName.addEventListener("input", function (event) {
    if (firstName.value === "") {
    fnError.textContent = "Please enter your first name.";
    } else {
        fnError.textContent = "";
    }
});

lastName.addEventListener("input", function (event) {
    if (lastName.value === "") {
    lnError.textContent = "Please enter your last name.";
    } else {
        lnError.textContent = "";
    }
});

tel.addEventListener("input", function (event) {
    if (tel.validity.patternMismatch) {
    telError.textContent = "Please enter a 10 digit phone number.";
    } else {
        telError.textContent = "";
    }
});

email.addEventListener("input", function (event) {
    if (email.validity.typeMismatch) {
    emailError.textContent = "Please enter a valid email. ex: johnSmith@email.com";
    } else {
        emailError.textContent = "";
    }
});