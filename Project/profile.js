document.getElementById('editBtn').addEventListener('click', function() {
    document.getElementById('editModal').classList.add('show');
});


document.getElementById('cancelBtn').addEventListener('click', function() {
    document.getElementById('editModal').classList.remove('show');
});

// Update the profile information and picture on form submit
document.getElementById('editProfileForm').addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent the form from refreshing the page

    // Get the updated values from the form
    const username = document.getElementById('editUsername').value;
    const email = document.getElementById('editEmail').value;
    const phone = document.getElementById('editPhone').value;
    const address = document.getElementById('editAddress').value;
    const postalCode = document.getElementById('editPostalCode').value;

    // Get the updated profile picture (if any)
    const fileInput = document.getElementById('editProfilePic');
    const file = fileInput.files[0];
    const reader = new FileReader();

    // Update the profile picture if a new file is selected
    if (file) {
        reader.onload = function(event) {
            document.getElementById('profilePicPreview').src = event.target.result;
            document.querySelector('.profile-left img').src = event.target.result; // Update profile picture on the main profile page
        };
        reader.readAsDataURL(file); // Load the selected image
    }

    // Update the profile information dynamically
    document.getElementById('profileName').textContent = username;
    document.getElementById('profileEmail').textContent = email;
    document.getElementById('profilePhone').textContent = phone;
    document.getElementById('profileAddress').textContent = address;
    document.getElementById('profilePostalCode').textContent = postalCode;

    // Close the modal after updating with smooth fade-out
    document.getElementById('editModal').classList.remove('show');
});

// Handle profile picture preview before saving
document.getElementById('editProfilePic').addEventListener('change', function(e) {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onload = function(event) {
        document.getElementById('profilePicPreview').src = event.target.result;
    };

    if (file) {
        reader.readAsDataURL(file);
    }
});

// Check if the user is logged in and update the profile page accordingly
window.onload = function() {
    const loggedInEmail = localStorage.getItem('loggedInEmail');
    const profileEmail = document.getElementById('profileEmail');
    const editEmail = document.getElementById('editEmail');

    if (loggedInEmail) {
        // Update the email fields with the logged-in email
        profileEmail.textContent = loggedInEmail;
        editEmail.value = loggedInEmail;
    } else {
        // If not logged in, redirect to login page
        window.location.href = 'login.html';
    }
};


