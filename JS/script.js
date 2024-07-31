document.addEventListener("DOMContentLoaded", function() {
    // Attach event listener to the form submit event
    var form = document.getElementById("contact-form");
    if (form) {
        form.addEventListener("submit", function(event) {
            event.preventDefault(); // Prevent form submission
            formValidation(); // Validate form
        });
    }
});

function formValidation() {
    // Get input values
    var name = document.getElementById("input-name").value.trim();
    var email = document.getElementById("input-email").value.trim();
    var interest = document.getElementById("input-interest").value;

    // Get error message elements
    var errorName = document.getElementById("error-name");
    var errorEmail = document.getElementById("error-email");
    var errorInterest = document.getElementById("error-interest");

    // Clear previous error messages
    errorName.textContent = "";
    errorEmail.textContent = "";
    errorInterest.textContent = "";

    // Flag to track form validity
    var isValid = true;

    // Validate name
    if (name === "") {
        errorName.textContent = "Name is required.";
        isValid = false;
    }

    // Validate email
    if (email === "") {
        errorEmail.textContent = "Email address is required.";
        isValid = false;
    } else if (!validateEmail(email)) {
        errorEmail.textContent = "Please enter a valid email address.";
        isValid = false;
    }

    // Validate interest
    if (interest === "") {
        errorInterest.textContent = "Please select an option.";
        isValid = false;
    }

    // If form is valid, submit (for demo, we just log the values)
    if (isValid) {
        console.log("Name:", name);
        console.log("Email:", email);
        console.log("Interest:", interest);
        alert("Form submitted successfully!");
        // Optionally, you can submit the form here, e.g., form.submit() or AJAX request
    }
}

function validateEmail(email) {
    // Simple email validation regex
    var re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}