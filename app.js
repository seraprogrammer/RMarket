document.getElementById("ri-menu").addEventListener("click", function () {
  document.querySelector(".sidebar_nav").classList.toggle("active");
});

document.querySelector(".ri-close-line").addEventListener("click", () => {
  document.querySelector(".sidebar_nav").classList.remove("active");
});

const togglePasswordVisibility = (inputId, toggleIconId) => {
  const inputField = document.getElementById(inputId);
  const toggleIcon = document.getElementById(toggleIconId);
  toggleIcon.addEventListener("click", () => {
    if (inputField.type === "password") {
      inputField.type = "text";
      toggleIcon.classList.remove("ri-eye-line");
      toggleIcon.classList.add("ri-eye-off-line");
    } else {
      inputField.type = "password";
      toggleIcon.classList.remove("ri-eye-off-line");
      toggleIcon.classList.add("ri-eye-line");
    }
  });
};

togglePasswordVisibility("old_password", "old_password_toggle");
togglePasswordVisibility("new_password", "new_password_toggle");
togglePasswordVisibility("confirm_password", "confirm_password_toggle");
togglePasswordVisibility("old_secret_code", "old_secret_code_toggle");
togglePasswordVisibility("new_secret_code", "new_secret_code_toggle");
togglePasswordVisibility("confirm_secret_code", "confirm_secret_code_toggle");
