// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Intersection Observer for scroll animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe all sections and animate-in elements
document.querySelectorAll('section, .animate-in').forEach((element) => {
    observer.observe(element);
});

// Navbar scroll effect
const navbar = document.querySelector('.navbar');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll <= 0) {
        navbar.style.boxShadow = 'none';
    } else {
        navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
    }
    
    lastScroll = currentScroll;
});

// Feature card hover effect
document.querySelectorAll('.feature-card').forEach(card => {
    card.addEventListener('mouseenter', (e) => {
        const icon = card.querySelector('i');
        icon.style.transform = 'scale(1.2) rotate(5deg)';
    });

    card.addEventListener('mouseleave', (e) => {
        const icon = card.querySelector('i');
        icon.style.transform = 'scale(1) rotate(0deg)';
    });
});

// Price card hover effect
document.querySelectorAll('.price-card').forEach(card => {
    card.addEventListener('mouseenter', (e) => {
        const button = card.querySelector('.price-button');
        button.style.transform = 'scale(1.1)';
    });

    card.addEventListener('mouseleave', (e) => {
        const button = card.querySelector('.price-button');
        button.style.transform = 'scale(1)';
    });
});

// Form submission animation
const contactForm = document.querySelector('.contact-form');
contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const submitButton = contactForm.querySelector('.submit-button');
    const originalText = submitButton.textContent;
    
    submitButton.textContent = 'Thanks! ✨';
    submitButton.style.backgroundColor = '#059669';
    
    setTimeout(() => {
        submitButton.textContent = originalText;
        submitButton.style.backgroundColor = '';
        contactForm.reset();
    }, 2000);
});

// Add parallax effect to hero image
const heroImage = document.querySelector('.hero-image');
window.addEventListener('mousemove', (e) => {
    const mouseX = e.clientX / window.innerWidth - 0.5;
    const mouseY = e.clientY / window.innerHeight - 0.5;
    
    heroImage.style.transform = `perspective(1000px) rotateY(${mouseX * 5}deg) rotateX(${-mouseY * 5}deg)`;
});