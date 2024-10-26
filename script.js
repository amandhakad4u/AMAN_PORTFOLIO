

window.addEventListener('scroll', () => {
    const section = document.getElementById('work-container');
    const sectionPosition = section.getBoundingClientRect().top;
    const viewportHeight = window.innerHeight;

    // Check if the section is in the viewport
    if (sectionPosition < viewportHeight && sectionPosition > 0) {
        section.classList.add('slide'); // Add class to trigger the animation
    }
});







document.querySelectorAll('.toggle-button').forEach(button => {
    button.addEventListener('click', () => {
        const details = button.nextElementSibling;

        // Close other details when one is opened
        document.querySelectorAll('.details').forEach(otherDetails => {
            if (otherDetails !== details) {
                otherDetails.classList.remove('show');
            }
        });

        // Toggle the 'show' class to expand/collapse details
        details.classList.toggle('show');


        const isOpen = details.classList.contains('show');
        button.textContent = button.textContent.replace(isOpen ? '&#8595' : '&#8594', isOpen ? '&#8594' : '&#8595');
    });
});









document.getElementById('contactForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent the form from submitting normally

    const name = encodeURIComponent(document.getElementById('name').value);
    const email = encodeURIComponent(document.getElementById('email').value);
    const subject = encodeURIComponent(document.getElementById('subject').value);
    const cc = encodeURIComponent(document.getElementById('cc').value);
    const message = encodeURIComponent(document.getElementById('message').value);

    const mailtoLink = `mailto:adhakad@hawk.iit.edu?subject=${subject}&cc=${cc}&body=Name: ${name}%0AEmail: ${email}%0AMessage:%0A${message}`;

    window.location.href = mailtoLink; // Redirect to mailto link
});


