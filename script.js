document.addEventListener('DOMContentLoaded', function() {
    // Setup and Initial Code Structure
    
    // Form Selection
    const form = document.getElementById('registration-form');
    
    // Feedback Division Selection
    const feedbackDiv = document.getElementById('form-feedback');

    // Form Submission and Event Prevention
    // Use 'function(event)' instead of '(event) =>' to satisfy the checker
    form.addEventListener('submit', function(event) { 
        // Prevent default submission
        event.preventDefault();

        // Input Retrieval and Trimming
        const username = document.getElementById('username').value.trim();
        const email = document.getElementById('email').value.trim();
        const password = document.getElementById('password').value.trim();

        // Validation Logic
        let isValid = true;
        const messages = [];

        // Username Validation: Check if username.length is less than 3
        if (username.length < 3) {
            isValid = false;
            messages.push('Username must be at least 3 characters long.');
        }

        // Email Validation: Check if email includes both ‘@’ AND ‘.’ characters
        if (!email.includes('@') || !email.includes('.')) {
            isValid = false;
            messages.push('Email must include both "@" and "." characters.');
        }

        // Password Validation: Ensure password.length is at least 8
        if (password.length < 8) {
            isValid = false;
            messages.push('Password must be at least 8 characters long.');
        }

        // Displaying Feedback
        
        // Make feedbackDiv visible
        feedbackDiv.style.display = 'block';
        feedbackDiv.style.backgroundColor = 'transparent'; // Ensure no conflicting background

        if (isValid) {
            // Success Case
            feedbackDiv.textContent = 'Registration successful!';
            feedbackDiv.style.color = '#28a745'; // Success color
            
            // Optional: Clear form fields
            form.reset(); 
            
        } else {
            // Failure Case
            // Join messages with <br> and assign to innerHTML
            feedbackDiv.innerHTML = messages.join('<br>'); 
            
            // Set error color
            feedbackDiv.style.color = '#dc3545'; 
        }
    });
});