// validation.js
document.getElementById('registrationForm').addEventListener('submit', function (e) {
    // Get form fields
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const age = document.getElementById('age').value.trim();

    // Alphabetic validation for Name
    const nameRegex = /^[A-Za-z\s]+$/;
    if (!nameRegex.test(name)) {
        alert('Name must contain only alphabetic characters.');
        e.preventDefault();
        return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert('Please enter a valid email address.');
        e.preventDefault();
        return;
    }

    // Numeric validation for Age
    const ageRegex = /^\d+$/;
    if (!ageRegex.test(age)) {
        alert('Age must be a numeric value.');
        e.preventDefault();
        return;
    }

    // If all validations pass
    alert('Form submitted successfully!');
});
