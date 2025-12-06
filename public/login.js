document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('login-form');

    loginForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        if (validateForm(username, password)) {
            simulateLogin(username, password);
        } else {
            alert('Please fill in both fields.');
        }
    });

    function validateForm(username, password) {
        return username.trim() !== '' && password.trim() !== '';
    }

    function simulateLogin(username, password) {
        // Simulate login success for demonstration
        alert('Login successful for user: ' + username);
        // Redirect to dashboard (replace with actual redirection)
        window.location.href = '/dashboard';
    }
});