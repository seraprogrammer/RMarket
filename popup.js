document.addEventListener("DOMContentLoaded", function () {
  const editButtons = document.querySelectorAll(".edit-button");
  const editPopup = document.getElementById("editPopup");
  const overlay = document.getElementById("overlay");

  editButtons.forEach((button) => {
    button.addEventListener("click", function () {
      editPopup.style.display = "block";
      overlay.style.display = "block";
    });
  });

  overlay.addEventListener("click", function () {
    editPopup.style.display = "none";
    overlay.style.display = "none";
  });
});
