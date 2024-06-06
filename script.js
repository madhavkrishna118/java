document.addEventListener("DOMContentLoaded", function() {
    const loginForm = document.getElementById("login-form");
    const forgotPasswordLink = document.getElementById("forgot-password");
    const signUpLink = document.getElementById("sign-up");

    // Form submit event listener
    loginForm.addEventListener("submit", function(event) {
        event.preventDefault(); // Prevent default form submission
        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;

        // Simple validation - check if username and password are not empty
        if (username.trim() === "" || password.trim() === "") {
            alert("Please enter username and password.");
            return;
        }

        // Perform login - You can add your login logic here
        // For demonstration, just showing an alert with entered username
        alert("Login successful. Welcome, " + username + "!");
        // Redirect to dashboard or another page
        // window.location.href = "dashboard.html";
    });

    // Forgot password link click event listener
    forgotPasswordLink.addEventListener("click", function(event) {
        event.preventDefault();
        // Add your forgot password logic here
        alert("Forgot password functionality will be added soon!");
    });

    // Sign up link click event listener
    signUpLink.addEventListener("click", function(event) {
        event.preventDefault();
        // Redirect to sign-up page or show a sign-up modal
        alert("Sign Up functionality will be added soon!");
    });
});
