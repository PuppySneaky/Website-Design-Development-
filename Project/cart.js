// Function to render the cart items
function renderCartItems() {
    const cartContainer = document.querySelector(".cart-container");

    // Get cart items from localStorage
    const cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];

    // Check if the cart is empty
    if (cartItems.length === 0) {
        cartContainer.innerHTML = `
            <div class="empty-cart-message">
                <p>There is no your dream home in here, find it 
                    <a href="mainsite.html">here</a>.
                </p>
            </div>`;
        return;
    }

    // Generate HTML for each cart item
    const cartHTML = cartItems
        .map((item, index) => {
            return `
            <div class="cart-item">
                <img src="${item.image}" alt="${item.title}" class="cart-item-image">
                <div class="cart-item-details">
                    <h3>${item.title}</h3>
                    <p><strong>Price:</strong> ${item.price}</p>
                    <p><strong>Location:</strong> ${item.location}</p>
                    <p>${item.description}</p>
                </div>
                <div class="button-container">  <!-- Button container for vertical layout -->
                    <button class="remove-item" onclick="removeCartItem(${index})">
                        <i class="fas fa-trash"></i> <!-- Trash icon -->
                    </button>
                    <button class="contact-agent" onclick="contactAgent(${index})">
                        <i class="fas fa-envelope"></i> <!-- Email icon -->
                    </button>
                </div>
            </div>`;
        })
        .join("");

    // Populate the cart container
    cartContainer.innerHTML = `
        <div class="cart-items">
            ${cartHTML}
        </div>`;
}

// Function to remove an item from the cart
function removeCartItem(index) {
    // Get the cart items from localStorage
    const cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];

    // Remove the item at the specified index
    cartItems.splice(index, 1);

    // Save the updated cart back to localStorage
    localStorage.setItem("cartItems", JSON.stringify(cartItems));

    // Re-render the cart items after removal
    renderCartItems();
}

// Function to contact the agent (using email link or other method)
function contactAgent(index) {
    const cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
    const item = cartItems[index];
    
    // Use the agent's email (example here)
    const agentEmail = "agent@example.com"; 

    // Redirect to the default mail client
    window.location.href = `mailto:${agentEmail}?subject=Inquiry about ${item.title}`;
}

// Call the function to display cart items on page load
renderCartItems();

function removeCartItem(index) {
    const cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
    const cartContainer = document.querySelector(".cart-container");
  
    // Add the 'removing' class to the cart item to trigger the transition
    const itemToRemove = cartContainer.querySelectorAll(".cart-item")[index];
    itemToRemove.classList.add("removing");
  
    // Wait for the transition to finish (e.g., 500ms)
    setTimeout(() => {
      // Remove the item from the cartItems array
      cartItems.splice(index, 1);
  
      // Save the updated cart back to localStorage
      localStorage.setItem("cartItems", JSON.stringify(cartItems));
  
      // Re-render the cart items after removal
      renderCartItems();
    }, 500); // Timeout should match the duration of the transition (0.5s)
  }
  