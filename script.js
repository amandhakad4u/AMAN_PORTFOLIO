
window.addEventListener('scroll', function() {

    const title = document.querySelector('.title');

    if (window.scrollY > 50) { 

        title.classList.add('scrolled');
    } else {

        title.classList.remove('scrolled');
    }
});






document.addEventListener('DOMContentLoaded', () => {
    const slider = document.querySelector('.slider');
    const nextButton = document.querySelector('.next');
    const prevButton = document.querySelector('.prev');
    const tileWidth = document.querySelector('.news-tile').offsetWidth;
    let index = 0;

    function updateSlider() {
        slider.style.transform = `translateX(-${index * tileWidth}px)`;
    }

    nextButton.addEventListener('click', () => {
        if (index < slider.children.length - 4) {
            index++;
            updateSlider();
        }
    });

    prevButton.addEventListener('click', () => {
        if (index > 0) {
            index--;
            updateSlider();
        }
    });

    // Optionally, adjust slider on window resize
    window.addEventListener('resize', () => {
        updateSlider();
    });
});



document.querySelectorAll('.toggle-button').forEach(button => {
    button.addEventListener('click', () => {
        const details = button.nextElementSibling;

        // Toggle the 'show' class to expand/collapse details
        details.classList.toggle('show');

        // Close other details when one is opened
        document.querySelectorAll('.details').forEach(otherDetails => {
            if (otherDetails !== details) {
                otherDetails.classList.remove('show');
            }
        });
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



