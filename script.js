// ================================
// Confirm JS is loaded
// ================================
console.log("script.js loaded");

// ================================
// Wait until DOM content is loaded
// ================================
document.addEventListener("DOMContentLoaded", () => {

    // ================================
    // Fade-in animation for all elements with class "fade-in"
    // ================================
    const faders = document.querySelectorAll('.fade-in');

    const appearOptions = {
        threshold: 0.2,
        rootMargin: "0px 0px -50px 0px"
    };

    const appearOnScroll = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, appearOptions);

    faders.forEach(fader => appearOnScroll.observe(fader));

    // ================================
    // Smooth scrolling for internal links (optional)
    // ================================
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    // ================================
    // Optional: Hover animations for buttons (if you want JS-controlled)
    // ================================
    const heroButtons = document.querySelectorAll('.hero-buttons .btn');
    heroButtons.forEach(btn => {
        btn.addEventListener('mouseenter', () => {
            btn.style.transform = 'translateY(-5px)';
        });
        btn.addEventListener('mouseleave', () => {
            btn.style.transform = 'translateY(0)';
        });
    });
});

// ================================
// Header background change on scroll
// Works outside DOMContentLoaded so it tracks scrolling
// ================================
const header = document.getElementById('header');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        header.style.background = '#111'; // darker on scroll
    } else {
        header.style.background = '#1a1a1a'; // original color
    }
});
