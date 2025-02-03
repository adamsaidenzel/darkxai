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