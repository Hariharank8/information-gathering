// API endpoints
const API_BASE_URL = 'http://localhost:5000/api';

// Fetch features from backend
async function loadFeatures() {
    try {
        const response = await fetch(`${API_BASE_URL}/features`);
        const features = await response.json();
        const featuresGrid = document.querySelector('.features-grid');
        
        featuresGrid.innerHTML = features.map(feature => `
            <div class="feature-card">
                <div class="icon">${feature.icon}</div>
                <h3>${feature.title}</h3>
                <p>${feature.description}</p>
            </div>
        `).join('');
    } catch (error) {
        console.error('Error loading features:', error);
    }
}

// Fetch stats from backend
async function loadStats() {
    try {
        const response = await fetch(`${API_BASE_URL}/stats`);
        const stats = await response.json();
        const statsGrid = document.querySelector('.stats-grid');
        
        statsGrid.innerHTML = stats.map(stat => `
            <div class="stat-card">
                <h3>${stat.number}</h3>
                <p>${stat.label}</p>
            </div>
        `).join('');
    } catch (error) {
        console.error('Error loading stats:', error);
    }
}

// Handle contact form submission
async function handleContactSubmit(event) {
    event.preventDefault();
    const form = event.target;
    const formData = new FormData(form);
    
    try {
        const response = await fetch(`${API_BASE_URL}/contact`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(Object.fromEntries(formData)),
        });
        
        if (response.ok) {
            alert('Thank you for your message! We will get back to you soon.');
            form.reset();
        } else {
            throw new Error('Failed to submit form');
        }
    } catch (error) {
        console.error('Error submitting form:', error);
        alert('Sorry, there was an error submitting your message. Please try again.');
    }
}

// Handle newsletter subscription
async function handleNewsletterSubmit(event) {
    event.preventDefault();
    const form = event.target;
    const email = form.querySelector('input[type="email"]').value;
    
    try {
        const response = await fetch(`${API_BASE_URL}/newsletter`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email }),
        });
        
        if (response.ok) {
            alert('Thank you for subscribing to our newsletter!');
            form.reset();
        } else {
            throw new Error('Failed to subscribe');
        }
    } catch (error) {
        console.error('Error subscribing to newsletter:', error);
        alert('Sorry, there was an error subscribing. Please try again.');
    }
}

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Intersection Observer for fade-in animations
const observerOptions = {
    root: null,
    threshold: 0.1,
    rootMargin: '0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe all sections for animation
document.querySelectorAll('section').forEach(section => {
    observer.observe(section);
});

// Feature card hover effect
document.querySelectorAll('.feature-card').forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.transform = 'translateY(-5px)';
    });
    
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'translateY(0)';
    });
});

// Initialize data loading
document.addEventListener('DOMContentLoaded', () => {
    loadFeatures();
    loadStats();
    
    // Set up form event listeners
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', handleContactSubmit);
    }
    
    const newsletterForm = document.getElementById('newsletter-form');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', handleNewsletterSubmit);
    }
});