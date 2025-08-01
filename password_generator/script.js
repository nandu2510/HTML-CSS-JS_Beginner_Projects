const password = document.getElementById("password");
const message = document.getElementById("message");
const submitButton = document.getElementById("submitButton");

password.addEventListener("input", function () {
  const passwordLength = password.value.length;
  let strengthValue = "";

  if (passwordLength < 6) {
    strengthValue = "Weak";
  } else if (passwordLength < 10) {
    strengthValue = "Medium";
  } else {
    strengthValue = "Strong";
  }

  message.textContent = strengthValue;
  message.style.display = "block"; // Display the message
});

submitButton.addEventListener("click", function () {
  const passwordType = password.getAttribute("type");

  if (passwordType === "password") {
    password.setAttribute("type", "text");
  } else {
    password.setAttribute("type", "password");
  }
});
