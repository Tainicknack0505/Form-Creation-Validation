
// Wrapping the entire script in DOMContentLoaded event listener:

document.addEventListener ('DOMContentLoaded', function() {
    
    // Selecting the form with the id="registration-form"
    const form = document.getElementById('registration-form');

    // Selecting the feedback division with id="form-feedback"
    const feedbackDiv = document.getElementById('form-feedback');

    // Adding event listener for form submission
    form.addEventListener ('submit', function(event) {

    // preventing form from submitting to the server
    event.preventDefault();

    // Retrieving and trimming the values
    const username = document.getElementById('username').value.trim();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();

    // Validation variables 
    let isValid = true;
    const messages = [];

    // Username Validation
    if (username.length < 3) {
        isValid = false;
        messages.push('Username must be at least 3 characters long.');
    }

    // Email Validation
    if (!email.includes('@') || !email.includes('.')) {
        isValid = false;
        messages.push('Email mst contain "@" and "." characters.');
    }

    // Password Validation
    if (password.length < 8) {
        isValid = false;
        messages.push('Password must be at least 8 characters long.');
    }

    // Displaying Feedback
    feedbackDiv.style.display = 'block';
    if (isValid) {
        feedbackDiv.textContent = 'Registration successful!';
        feedbackDiv.style.color = '#28a745';
    } else {
        feedbackDiv.innerHTML = messages.join('<br>');
        feedbackDiv.style.color = '#dc3545';
        }

    });

});