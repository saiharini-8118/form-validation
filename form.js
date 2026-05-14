// Selecting form
const form = document.getElementById("myForm");

// Submit Event
form.addEventListener("submit", function(event) {

  event.preventDefault();

  // Input values
  let fullName =
    document.getElementById("fullName").value.trim();

  let email =
    document.getElementById("email").value.trim();

  let phone =
    document.getElementById("phone").value.trim();

  let password =
    document.getElementById("password").value.trim();

  let confirmPassword =
    document.getElementById("confirmPassword").value.trim();

  // Error elements
  let nameError =
    document.getElementById("nameError");

  let emailError =
    document.getElementById("emailError");

  let phoneError =
    document.getElementById("phoneError");

  let passwordError =
    document.getElementById("passwordError");

  let confirmError =
    document.getElementById("confirmError");

  // Clear previous errors
  nameError.innerText = "";
  emailError.innerText = "";
  phoneError.innerText = "";
  passwordError.innerText = "";
  confirmError.innerText = "";

  let isValid = true;

  // Name Validation
  if (fullName.length < 5) {
    nameError.innerText =
      "Name must be at least 5 characters";

    isValid = false;
  }

  // Email Validation
  if (!email.includes("@")) {
    emailError.innerText =
      "Enter correct email";

    isValid = false;
  }

  // Phone Validation
  if (
    phone === "1234567890" ||
    phone.length !== 10 ||
    isNaN(phone)
  ) {
    phoneError.innerText =
      "Enter valid 10-digit phone number";

    isValid = false;
  }

  // Password Validation
  if (
    password.toLowerCase() === "password" ||
    password.toLowerCase() === fullName.toLowerCase() ||
    password.length < 8
  ) {
    passwordError.innerText =
      "Password is not strong";

    isValid = false;
  }

  // Confirm Password
  if (password !== confirmPassword) {
    confirmError.innerText =
      "Passwords do not match";

    isValid = false;
  }

  // Success
  if (isValid) {

    // Redirect to success page
    window.location.href = "success.html";
  }

});