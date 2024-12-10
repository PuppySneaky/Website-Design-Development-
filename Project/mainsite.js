

/**
 * header active state
 */

const header = document.querySelector("[data-header]");

window.addEventListener("scroll", function () {
  window.scrollY >= 150 ? header.classList.add("active")
    : header.classList.remove("active");
}); 

document.getElementById("profileBtn").addEventListener("click", function() {
  window.location.href = 'profile.html';
});

document.getElementById("cartBtn").addEventListener("click", function() {
  window.location.href = 'cart.html';
});


// Select all "add to cart" buttons
const addToCartButtons = document.querySelectorAll(".card-footer-actions-btn");

addToCartButtons.forEach((button, index) => {
  button.addEventListener("click", () => {
    // Get property card details
    const propertyCard = button.closest(".property-card");
    const propertyDetails = {
      image: propertyCard.querySelector(".card-banner img").src,
      title: propertyCard.querySelector(".card-title a").textContent.trim(),
      price: propertyCard.querySelector(".card-price strong").textContent.trim(),
      location: propertyCard.querySelector("address").textContent.trim(),
      description: propertyCard.querySelector(".card-text").textContent.trim(),
    };

    // Get existing cart items from localStorage
    let cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];

    // Check if the property is already in the cart
    const isPropertyInCart = cartItems.some((item) => item.title === propertyDetails.title);

    if (isPropertyInCart) {
      // If property is already in the cart, show an alert box with slide-in effect
      showAlert("You have already added this property to your cart. Check your cart, or try again later.");
      return; // Exit the function to prevent adding the duplicate property
    }

    // Add the new item to the cart
    cartItems.push(propertyDetails);

    // Save back to localStorage
    localStorage.setItem("cartItems", JSON.stringify(cartItems));

    // Inform the user that the property was added
    showAlert("Property added to cart!");
  });
});

// Function to show the alert box with sliding transition
function showAlert(message) {
  const alertBox = document.getElementById("alert-box");
  alertBox.textContent = message; // Set the alert message

  // Show the alert box with slide-in effect
  alertBox.classList.add("show");

  // After 2 seconds, hide the alert box with slide-out effect
  setTimeout(() => {
    alertBox.classList.remove("show");
  }, 2000); // 2 seconds before it slides out
}

let alertCooldown = false; // Flag to track if alert is in cooldown

// Function to show the alert box with a cooldown
function showAlert(message) {
  if (alertCooldown) return; // If in cooldown, do nothing

  // Set the alert to be in cooldown
  alertCooldown = true;

  // Get the alert box element
  const alertBox = document.getElementById('alert-box');
  alertBox.textContent = message; // Set the alert message

  // Add the 'show' class to slide in the alert box
  alertBox.classList.add('show');

  // After 2 seconds (or desired time), remove the 'show' class to slide it out
  setTimeout(() => {
    alertBox.classList.remove('show');
  }, 2000); // Keep the alert visible for 2 seconds

  // After 3 seconds (or desired cooldown period), allow the alert to show again
  setTimeout(() => {
    alertCooldown = false; // Reset cooldown
  }, 3000); // 3 seconds cooldown before the alert can be shown again
}

// Example usage
document.getElementById("addToCartButton").addEventListener("click", function() {
  showAlert("You have already added your property to your cart. Check your cart, or try again later.");
});



