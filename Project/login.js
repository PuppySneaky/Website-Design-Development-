function toggleForm() {
    const signInBox = document.getElementById('signInBox');
    const signUpBox = document.getElementById('signUpBox');
    signInBox.style.display = signInBox.style.display === 'none' ? 'block' : 'none';
    signUpBox.style.display = signUpBox.style.display === 'none' ? 'block' : 'none';
  }

  function togglePasswordVisibility(inputId = 'password', toggleIconId = 'toggleIcon') {
    const passwordInput = document.getElementById(inputId);
    const toggleIcon = document.getElementById(toggleIconId);
    
    if (passwordInput.type === 'password') {
      passwordInput.type = 'text';
      toggleIcon.classList.replace('bi-eye-slash-fill', 'bi-eye-fill');
    } else {
      passwordInput.type = 'password';
      toggleIcon.classList.replace('bi-eye-fill', 'bi-eye-slash-fill');
    }
  }

  function togglePasswordVisibility(inputId = 'password', toggleIconId = 'toggleIcon') {
      const passwordInput = document.getElementById(inputId);
      const toggleIcon = document.getElementById(toggleIconId);

      if (passwordInput.type === 'password') {
          passwordInput.type = 'text';
          toggleIcon.classList.replace('bi-eye-slash-fill', 'bi-eye-fill');
      } else {
          passwordInput.type = 'password';
          toggleIcon.classList.replace('bi-eye-fill', 'bi-eye-slash-fill');
      }
  }

  // User data stored in localStorage
const usersKey = "users"; // Key for storing users in localStorage

// Initialize users if not already in localStorage
if (!localStorage.getItem(usersKey)) {
localStorage.setItem(usersKey, JSON.stringify([]));
}

// Selectors
const loginForm = document.getElementById('loginForm');
const signUpForm = document.getElementById('signUpForm');
const errorMessage = document.getElementById('error-message');
const signUpError = document.getElementById('signUpError');

// Login function
// Modify the login function to store the email in localStorage after a successful login
function login(event) {
    event.preventDefault();

    const username = document.getElementById('email').value; // Using email field as username
    const password = document.getElementById('password').value;

    // Get users from localStorage
    const users = JSON.parse(localStorage.getItem(usersKey));

    // Check if user exists in the array
    const user = users.find(user => user.username === username && user.password === password);

    if (user) {
        // Save login status in localStorage
        localStorage.setItem('isLoggedIn', 'true');
        localStorage.setItem('loggedInEmail', username); // Store the email

        alert(`Welcome, ${username}!`);
        // Redirect to home page
        window.location.href = 'mainsite.html';
    } else {
        errorMessage.textContent = 'Invalid email or password';
        errorMessage.style.display = 'block';
    }
}

// Register function
function register(event) {
event.preventDefault();

const email = document.getElementById('signUpEmail').value;
const password = document.getElementById('signUpPassword').value;
const confirmPassword = document.getElementById('confirmPassword').value;

if (!email || !password || !confirmPassword) {
    signUpError.textContent = 'All fields are required';
    signUpError.style.display = 'block';
    return;
}

if (password !== confirmPassword) {
    signUpError.textContent = 'Passwords do not match';
    signUpError.style.display = 'block';
    return;
}

// Get users from localStorage
const users = JSON.parse(localStorage.getItem(usersKey));

// Check if email already exists
if (users.find(user => user.username === email)) {
    signUpError.textContent = 'Email is already registered';
    signUpError.style.display = 'block';
    return;
}

// Add new user to localStorage
users.push({ username: email, password });
localStorage.setItem(usersKey, JSON.stringify(users));

alert('Registration successful! You can now log in.');
toggleForm(); // Switch back to login form
}

// Toggle between Sign In and Sign Up forms
function toggleForm() {
document.getElementById('signInBox').style.display = 
    document.getElementById('signInBox').style.display === 'none' ? 'block' : 'none';
document.getElementById('signUpBox').style.display = 
    document.getElementById('signUpBox').style.display === 'none' ? 'block' : 'none';
}

// Add event listeners
if (loginForm) loginForm.addEventListener('submit', login);
if (signUpForm) signUpForm.addEventListener('submit', register);






