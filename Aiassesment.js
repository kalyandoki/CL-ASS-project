let nameEl = document.getElementById("name");
let nameErrMsgEl = document.getElementById("nameErrMsg");

let lastNameEl = document.getElementById("lastName");
let lastNameErrMsgEl = document.getElementById("lastNameErrMsg");

let emailEl = document.getElementById("email");
let emailErrMsgEl = document.getElementById("emailErrMsg");

nameEl.addEventListener("blur", function(event) {
    if (event.target.value === "") {
        nameErrMsgEl.textContent = "Please complete this required field.";
        nameEl.style.borderColor = "red";
    } else {
        nameErrMsgEl.textContent = "";
    }
});

lastNameEl.addEventListener("blur", function(event) {
    if (event.target.value === "") {
        lastNameErrMsgEl.textContent = "Please complete this required field.";
        lastNameEl.style.borderColor = "red";
    } else {
        lastNameErrMsgEl.textContent = "";
    }
});

emailEl.addEventListener("blur", function(event) {
    if (event.target.value === "") {
        emailErrMsgEl.textContent = "Please complete this required field.";
        emailEl.style.borderColor = "red";
    } else if (event.target.value !== "kalyan@gmail.com") {
        emailErrMsgEl.textContent = "Email must be formatted correctly.";
        emailEl.style.borderColor = "red";
    } else {
        emailErrMsgEl.textContent = "";
    }
});