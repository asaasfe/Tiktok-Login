// Check if there's already data in localStorage, otherwise initialize an empty array
let database = JSON.parse(localStorage.getItem('userDatabase')) || [];

// Handle form submission
document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Get user inputs
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Simulate saving user data to the "database"
    const userData = { email: email, password: password };
    database.push(userData);

    // Save the updated database back to localStorage
    localStorage.setItem('userDatabase', JSON.stringify(database));

    // Log the updated data to the console for verification
    console.log('User data saved:', database);

    // Optionally, reset form fields after submission
    document.getElementById('loginForm').reset();
});

// Function to log all user data in the console
function logAllUserData() {
    console.log('All User Data:', database);
}

// Call this function to log all data when the script runs (so it's visible immediately in the console)
logAllUserData();
