document.addEventListener("DOMContentLoaded", () => {
    // Fade in header on load
    const header = document.getElementById("header");
    header.style.opacity = 1;
});

function navigateToWebsite() {
    const button = document.getElementById("contact-button");
    // Create ripple effect
    const ripple = document.createElement("span");
    ripple.classList.add("ripple");

    // Position ripple
    const rect = button.getBoundingClientRect();
    ripple.style.width = ripple.style.height = Math.max(rect.width, rect.height) + 'px';
    ripple.style.left = event.clientX - rect.left - (rect.width / 2) + 'px';
    ripple.style.top = event.clientY - rect.top - (rect.height / 2) + 'px';

    button.appendChild(ripple);

    // Navigate after ripple effect
    setTimeout(() => {
        window.location.href = 'https://ronenbenyaakov.github.io/ronenBenYaakovProjects.github.io/'; // Update with your URL
    }, 600); // Match duration of ripple animation
}



