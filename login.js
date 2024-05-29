function togglePasswordVisibility() {
  var passwordInput = document.getElementById("password");
  var eyeIcon = document.querySelector(".password-toggle");

  if (passwordInput.type === "password") {
    passwordInput.type = "text";
    eyeIcon.classList.remove("ri-eye-off-line");
    eyeIcon.classList.add("ri-eye-line");
  } else {
    passwordInput.type = "password";
    eyeIcon.classList.remove("ri-eye-line");
    eyeIcon.classList.add("ri-eye-off-line");
  }
}

function toggleSecretCodeVisibility() {
  var secretCodeInput = document.getElementById("secretCode");
  var eyeIcon = document.querySelectorAll(".password-toggle")[1];

  if (secretCodeInput.type === "password") {
    secretCodeInput.type = "text";
    eyeIcon.classList.remove("ri-eye-off-line");
    eyeIcon.classList.add("ri-eye-line");
  } else {
    secretCodeInput.type = "password";
    eyeIcon.classList.remove("ri-eye-line");
    eyeIcon.classList.add("ri-eye-off-line");
  }
}
function toggleSecretCodeVisibility() {
  var secretCodeInput = document.getElementById("secretCode");
  var eyeIcon = document.querySelectorAll(".password-toggle")[2];

  if (secretCodeInput.type === "password") {
    secretCodeInput.type = "text";
    eyeIcon.classList.remove("ri-eye-off-line");
    eyeIcon.classList.add("ri-eye-line");
  } else {
    secretCodeInput.type = "password";
    eyeIcon.classList.remove("ri-eye-line");
    eyeIcon.classList.add("ri-eye-off-line");
  }
}

document
  .getElementById("loginForm")
  .addEventListener("submit", function (event) {
    if (!validateForm()) {
      event.preventDefault();
    }
  });

function validateForm() {
  var username = document.forms["loginForm"]["username"].value;
  var password = document.forms["loginForm"]["password"].value;
  var secretCode = document.forms["loginForm"]["secret-code"].value;
  var usernameInput = document.forms["loginForm"]["username"];
  var passwordInput = document.forms["loginForm"]["password"];
  var secretCodeInput = document.forms["loginForm"]["secret-code"];

  if (username == "") {
    usernameInput.placeholder = "Username must be filled out";
    usernameInput.classList.add("error-placeholder");
    return false;
  }

  if (password == "") {
    passwordInput.placeholder = "Password must be filled out";
    passwordInput.classList.add("error-placeholder");
    return false;
  }

  if (secretCode == "") {
    secretCodeInput.placeholder = "Secret Code must be filled out";
    secretCodeInput.classList.add("error-placeholder");
    return false;
  }

  return true;
}

const navMenu = document.getElementById("menu_icon");
const header = document.getElementById("header");

let flg = 0;
navMenu.addEventListener("click", () => {
  if (flg == 0) {
    header.style.left = "-100%";
    flg = 1;
  } else {
    header.style.left = "0%";
    flg = 0;
  }
});
