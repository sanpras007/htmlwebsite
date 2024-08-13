function validateForm() {
    // Get form values
    const email = document.getElementById('email').value.trim();
    const phoneno = document.getElementById('phoneno').value.trim();
    const message = document.getElementById('msg').value.trim();
    const errorSpan = document.getElementById('error-message');

    // Clear previous error messages
    errorSpan.style.display = 'none';
    errorSpan.innerHTML = '';

    // Validate email
    if (!email) {
        showError('Please enter your email.');
        return;
    }
    // Basic email format check
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        showError('Please enter a valid email address.');
        return;
    }

    // Validate phone number
    if (!phoneno) {
        showError('Please enter your phone number.');
        return;
    }
    // Basic phone number format check (optional)
    if (phoneno.length < 10) {
        showError('Please enter a valid phone number.');
        return;
    }

    // Validate message
    if (!message) {
        showError('Please enter a message.');
        return;
    }

    // If all validations pass
    alert('Form submitted successfully!');
}

function showError(message) {
    const errorSpan = document.getElementById('error-message');
    errorSpan.innerHTML = message;
    errorSpan.style.display = 'block';
}
