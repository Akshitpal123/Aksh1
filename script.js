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
            window.location.href = "Main.html";
        } else {
            alert("Invalid username or password. Please try again.");
        }
    });

    // ... (other event listeners and logic)
});

// script.js

document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("signupForm").addEventListener("submit", function (event) {
        event.preventDefault();

        var signupUsername = document.getElementById("signupUsername").value;
        var signupPassword = document.getElementById("signupPassword").value;

        // Check if the username is already taken
        if (localStorage.getItem(signupUsername)) {
            alert("Username is already taken. Please choose another.");
        } else {
            // Store user data in localStorage
            localStorage.setItem(signupUsername, signupPassword);
            alert("Signup successful! You can now log in.");
        }
    });

    // ... (other event listeners and logic)
});
