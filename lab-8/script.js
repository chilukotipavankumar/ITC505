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
    let isValid = true;
    if (!firstName) {
        showError('firstNameError', 'First Name is required.');
        isValid = false;
    }
    if (!lastName) {
        showError('lastNameError', 'Last Name is required.');
        isValid = false;
    }
    if (!email) {
        showError('emailError', 'Email is required.');
        isValid = false;
    }
    if (!password) {
        showError('passwordError', 'Password is required.');
        isValid = false;
    }
    if (!confirmPassword) {
        showError('confirmPasswordError', 'Confirm Password is required.');
        isValid = false;
    }

    // Validate email format
    let emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (email && !emailPattern.test(email)) {
        showError('emailError', 'Please enter a valid email address.');
        isValid = false;
    }

    // Check if passwords match
    if (password && confirmPassword && password !== confirmPassword) {
        showError('confirmPasswordError', 'Passwords do not match.');
        isValid = false;
    }

    if (isValid) {
        // Encode input to prevent XSS
        firstName = encodeHTML(firstName);
        lastName = encodeHTML(lastName);
        email = encodeHTML(email);

        alert('Form submitted successfully!');
    }
});

function showError(elementId, message) {
    let errorElement = document.getElementById(elementId);
    errorElement.textContent = message || errorElement.textContent;
    errorElement.style.display = 'block';
    let inputElement = errorElement.previousElementSibling;
    inputElement.classList.add('error-input');
}

function resetErrors() {
    const errorElements = document.querySelectorAll('.error');
    errorElements.forEach(function(element) {
        element.style.display = 'none';
    });
    const inputElements = document.querySelectorAll('.error-input');
    inputElements.forEach(function(element) {
        element.classList.remove('error-input');
    });
}
