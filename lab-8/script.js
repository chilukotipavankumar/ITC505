document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault();

    let firstName = document.getElementById('firstName').value.trim();
    let lastName = document.getElementById('lastName').value.trim();
    let email = document.getElementById('email').value.trim();
    let password = document.getElementById('password').value;
    let confirmPassword = document.getElementById('confirmPassword').value;

    // Reset previous error messages
    resetErrors();

    // Check for empty fields
    if (!firstName) {
        showError('firstName', 'First Name is required.');
        return;
    }
    if (!lastName) {
        showError('lastName', 'Last Name is required.');
        return;
    }
    if (!email) {
        showError('email', 'Email is required.');
        return;
    }
    if (!password) {
        showError('password', 'Password is required.');
        return;
    }
    if (!confirmPassword) {
        showError('confirmPassword', 'Confirm Password is required.');
        return;
    }

    // Validate email format
    let emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailPattern.test(email)) {
        showError('email', 'Please enter a valid email address.');
        return;
    }

    // Check if passwords match
    if (password !== confirmPassword) {
        showError('confirmPassword', 'Passwords do not match.');
        return;
    }

    // Encode input to prevent XSS
    firstName = encodeHTML(firstName);
    lastName = encodeHTML(lastName);
    email = encodeHTML(email);

    alert('Form submitted successfully!');
});

function showError(fieldId, message) {
    let field = document.getElementById(fieldId);
    let errorElement = document.createElement('div');
    errorElement.className = 'error';
    errorElement.textContent = message;
    field.parentNode.insertBefore(errorElement, field.nextSibling);
}

function resetErrors() {
    let errors = document.querySelectorAll('.error');
    errors.forEach(function(error) {
        error.remove();
    });
}
