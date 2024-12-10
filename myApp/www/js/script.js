const signupBtn = document.getElementById('signup-btn');
const signupPage = document.querySelector('.signup-page');
const signupForm = document.getElementById('signup-form');
const signupLoader = document.querySelector('.signup-loader');

signupBtn.addEventListener('click', () => {
    signupPage.classList.remove('hidden');
});

signupForm.addEventListener('submit', (event) => {
    event.preventDefault();

    // Show the loader
    signupLoader.classList.remove('hidden');

    // Simulate a sign-up process (replace with your actual sign-up logic)
    setTimeout(() => {
        // Hide the loader
        signupLoader.classList.add('hidden');

        // Redirect to the home page after successful sign-up
        window.location.href = 'index.html';
    }, 2000);
});

// Add a button to toggle the student mode
const body = document.body;
const toggleStudentMode = () => {
    body.classList.toggle('student-mode');
};

// Add event listeners for login and sign-up forms
document.getElementById('signupForm').addEventListener('submit', function(event) {
    event.preventDefault();
    // Simulate successful sign-up
    window.location.href = 'index.html';
});

document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    // Simulate successful login
    window.location.href = 'index.html';
});