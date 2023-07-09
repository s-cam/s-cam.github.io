document.addEventListener('DOMContentLoaded', function() {
    // Navigation button click event listeners
    const navButtons = document.querySelectorAll('.navigation-buttons li a');
    navButtons.forEach(function(button) {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(button.getAttribute('href'));
            target.scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});
