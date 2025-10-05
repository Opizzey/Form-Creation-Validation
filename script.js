document.addEventListener('DOMContentLoaded', () => {
    // Setup and Initial Code Structure
    
    // Form Selection
    const form = document.getElementById('registration-form');
    
    // Feedback Division Selection
    const feedbackDiv = document.getElementById('form-feedback');

    // Form Submission and Event Prevention
    form.addEventListener('submit', (event) => {
        // Prevent default submission
        event.preventDefault();

        // Input Retrieval and Trimming
        // Retrieve User Inputs using document.getElementById and .trim()
        const username = document.getElementById('username').value.trim();
        const email = document.getElementById('email').value.trim();
        const password = document.getElementById('password').value.trim();

        // Validation Logic

        // Initialize Validation Variables
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
        
        // Make feedbackDiv visible by setting its style.display to “block”
        feedbackDiv.style.display = 'block';
        
        // Optional: Remove any previous background styling if it conflicts
        feedbackDiv.style.backgroundColor = 'transparent';

        if (isValid) {
            // If isValid remains true:
            // Set the textContent of feedbackDiv to “Registration successful!”
            feedbackDiv.textContent = 'Registration successful!';
            
            // Set its style.color to “#28a745” (Success color)
            feedbackDiv.style.color = '#28a745';
            
            // Optional: Clear form fields
            form.reset(); 
            
        } else {
            // If isValid is false:
            
            // Join messages with <br> to form a single string, and assign this to the innerHTML
            feedbackDiv.innerHTML = messages.join('<br>'); 
            
            // Set feedbackDiv.style.color to “#dc3545” (Error color)
            feedbackDiv.style.color = '#dc3545';
        }
    });
});