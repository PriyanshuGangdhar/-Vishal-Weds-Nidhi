
function checkPassword() {
    var enteredPassword = document.getElementById("password").value;
    var correctPassword = "1234";
    var errorMessage = document.getElementById("error-message");
    var content = document.getElementById("content");
    var passwordInput = document.getElementById("password");
    var submitButton = document.getElementById("submit-btn");

    if (enteredPassword === correctPassword) {
        content.classList.remove("hidden");
        passwordInput.style.display = "none";
        submitButton.style.display = "none";
        errorMessage.textContent = "";
    } else {
        errorMessage.textContent = "Incorrect password, please try again.";
        content.classList.add("hidden");
    }
}
