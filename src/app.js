// Toggle Menu on Mobile
const hamburger = document.getElementById('hamburger');
const menu = document.getElementById('menu');

hamburger.addEventListener('click', () => {
    menu.classList.toggle('active');
});

// Highlight Active Menu Item on Scroll
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.menu li a');

window.addEventListener('scroll', () => {
    let current = '';

    sections.forEach(section => {
        const sectionTop = section.offsetTop - 60;
        if (pageYOffset >= sectionTop) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

ddEventListener('DOMContentLoaded', () => {
    console.log('Website Loaded');
});

// Smooth Scroll on Click
navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);

        window.scrollTo({
            top: targetSection.offsetTop - 50,
            behavior: 'smooth'
        });

        // Close menu on mobile after click
        if (menu.classList.contains('active')) {
            menu.classList.remove('active');
        }
    });
});
