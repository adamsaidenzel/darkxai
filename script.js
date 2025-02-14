// Mobile menu functionality
const hamburger = document.querySelector('.hamburger');
const navList = document.querySelector('.nav-list');
const navLinks = document.querySelectorAll('.nav-list a');

// Toggle mobile menu
hamburger.addEventListener('click', function(e) {
    e.stopPropagation();
    this.classList.toggle('active');
    navList.classList.toggle('active');
});

// Close menu when clicking links
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navList.classList.remove('active');
    });
});

// Close menu when clicking outside
document.addEventListener('click', function(event) {
    if (navList.classList.contains('active') &&
        !event.target.closest('.nav-list') &&
        !event.target.closest('.hamburger')) {
        hamburger.classList.remove('active');
        navList.classList.remove('active');
    }
});

// Close menu on window resize
window.addEventListener('resize', function() {
    if (window.innerWidth > 768) {
        hamburger.classList.remove('active');
        navList.classList.remove('active');
    }
});

// Smooth scrolling for all links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});