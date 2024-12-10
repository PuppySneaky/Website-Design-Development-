document.getElementById("reportConcernButton").addEventListener("click", function () {
    const contactFormBox = document.getElementById("contactFormBox");
    contactFormBox.style.display = "block";
    document.body.classList.add("modal-open");
});
  
document.getElementById("closeContactForm").addEventListener("click", function () {
    const contactFormBox = document.getElementById("contactFormBox");
    contactFormBox.style.display = "none";
    document.body.classList.remove("modal-open");
});
  
document.getElementById("contactForm").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevents the form from submitting and page refresh

    // Simulate a successful form submission
    let isFormValid = true;  // You can add form validation here if necessary

    if (isFormValid) {
        // Display a success message
        const successMessage = document.createElement("p");
        successMessage.textContent = "Thank you for your submission! We will get back to you shortly.";
        successMessage.style.color = "green";
        successMessage.style.fontWeight = "bold";
        successMessage.style.marginTop = "20px";

        // Append success message to the form
        document.getElementById("contactForm").appendChild(successMessage);

        // Optional: Reset form fields if needed, but keep the form visible
        document.getElementById("contactForm").reset();
    } else {
        // Handle validation error (optional)
        alert("Please fill out all required fields.");
    }
});

