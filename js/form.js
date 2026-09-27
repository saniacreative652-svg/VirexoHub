// =========================
// SERVICE REQUEST FORM
// =========================

const serviceRequestForm = document.getElementById("serviceRequestForm");
const formMessage = document.getElementById("formMessage");

if (serviceRequestForm) {

    serviceRequestForm.addEventListener("submit", function (event) {

        event.preventDefault();

        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const service = document.getElementById("service").value;
        const budget = document.getElementById("budget").value;
        const message = document.getElementById("message").value.trim();

        // Clear previous message
        formMessage.textContent = "";
        formMessage.className = "";

        // Validation
        if (!name || !email || !service || !budget || !message) {

            formMessage.textContent = "Please fill in all fields.";
            formMessage.className = "error-message";

            return;
        }

        // Email validation
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailPattern.test(email)) {

            formMessage.textContent = "Please enter a valid email address.";
            formMessage.className = "error-message";

            return;
        }

        // Success message
        formMessage.textContent =
            "Your service request has been submitted successfully! Our team will contact you soon.";

        formMessage.className = "success-message";

        // Reset form
        serviceRequestForm.reset();

    });
}