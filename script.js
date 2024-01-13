// script.js

document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("loginForm").addEventListener("submit", function (event) {
        event.preventDefault();

        var loginUsername = document.getElementById("loginUsername").value;
        var loginPassword = document.getElementById("loginPassword").value;

        // Check if the entered credentials match stored user data
        var storedPassword = localStorage.getItem(loginUsername);

        if (storedPassword && storedPassword === loginPassword) {
            alert("Login successful!");
            // Redirect to main.html after successful login
            window.location.href = "main.html";
        } else {
            alert("Invalid username or password. Please try again.");
        }
    });

    // ... (other event listeners and logic)
});
