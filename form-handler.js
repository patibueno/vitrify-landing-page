document.addEventListener("DOMContentLoaded", function () {
  console.log("JS loaded!");
  const form = document.getElementById("contact-form");
  const message = document.getElementById("form-message");

  console.log({ form });

  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      if (message) {
        message.style.display = "block";
      }

      form.reset();
    });
  }
});
