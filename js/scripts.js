document.addEventListener('DOMContentLoaded', function() {
    // Example of a simple interactive feature: a greeting message
    const greetingElement = document.getElementById('greeting');
    if (greetingElement) {
        greetingElement.textContent = 'Welcome to my website!';
    }

    // Function to validate a form (example)
    const form = document.getElementById('contact-form');
    if (form) {
        form.addEventListener('submit', function(event) {
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;

            if (!name || !email) {
                event.preventDefault();
                alert('Please fill in all fields.');
            }
        });
    }

    // Dynamic content loading example (placeholder)
    const loadMoreButton = document.getElementById('load-more');
    if (loadMoreButton) {
        loadMoreButton.addEventListener('click', function() {
            const contentArea = document.getElementById('content-area');
            const newContent = document.createElement('p');
            newContent.textContent = 'Here is some more content loaded dynamically!';
            contentArea.appendChild(newContent);
        });
    }
});