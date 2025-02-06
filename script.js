document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const formData = {
        email: this.querySelector('[type="email"]').value,
        message: this.querySelector('textarea').value
    };

    // Formspree integration (requires setup at formspree.io)
    fetch('https://formspree.io/f/datesoon@getdate.in', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
    })
    .then(response => {
        if (response.ok) {
            showMessage('Message sent successfully! We\'ll respond shortly.', 'success');
            this.reset();
        } else {
// Mobile menu toggle
document.addEventListener('DOMContentLoaded', () => {
    const mobileMenuButton = document.createElement('button');
    mobileMenuButton.className = 'mobile-menu-toggle';
    mobileMenuButton.innerHTML = '<i class="fas fa-bars"></i>';
    
    const nav = document.querySelector('.nav');
    nav.appendChild(mobileMenuButton);
    
    mobileMenuButton.addEventListener('click', () => {
        nav.classList.toggle('active');
    });
    
    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!nav.contains(e.target) && nav.classList.contains('active')) {
            nav.classList.remove('active');
        }
    });
    
    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        });
    });
});
            throw new Error('Failed to send message');
        }
    })
    .catch(error => {
        showMessage('Error sending message. Please try again later.', 'error');
        console.error('Error:', error);
    });
});

function showMessage(text, type) {
    const messageDiv = document.createElement('div');
    messageDiv.className = `message ${type}`;
    messageDiv.textContent = text;
    
    const contactSection = document.querySelector('.contact');
    contactSection.insertBefore(messageDiv, contactSection.firstChild);
    
    setTimeout(() => {
        messageDiv.remove();
    }, 5000);
}