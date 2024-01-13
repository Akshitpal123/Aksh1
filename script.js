document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("loginForm").addEventListener("submit", function (event) {
        event.preventDefault();

        var username = document.getElementById("username").value;
        var password = document.getElementById("password").value;

        // List of valid usernames and passwords
        var validCredentials = [
            { username: "user1", password: "pass1" },
            { username: "user2", password: "pass2" },
            { username: "user3", password: "pass3" }
            // Add more username-password pairs as needed
        ];

        // Check if entered credentials match any in the list
        var isValid = validCredentials.some(function (cred) {
            return cred.username === username && cred.password === password;
        });

        if (isValid) {
            alert("Login successful! Redirecting to Home...");
            window.location.href = "Main.html";
        } else {
            alert("Invalid username or password. Please try again.");
        }
    });
});
  
