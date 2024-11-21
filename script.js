// Simulated database
let database = [];

// Handle form submission
document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Get user inputs
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Simulate saving user data to "database"
    database.push({ email: email, password: password });

    // Log the data to the console for verification
    console.log('User data saved:', database);

    // Optionally, reset form fields after submission
    document.getElementById('loginForm').reset();
});
