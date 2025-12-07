document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('login-form');

    loginForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;

        if (validateForm(email, password)) {
            login(email, password);
        } else {
            alert('Please fill in both fields.');
        }
    });

    function validateForm(email, password) {
        return email.trim() !== '' && password.trim() !== '';
    }

    function login(email, password) {
        // Simulate login success for demonstration
        alert('Login successful for email: ' + email);
        // Redirect to dashboard (replace with actual redirection)
        window.location.href = '/dashboard';
    }
});