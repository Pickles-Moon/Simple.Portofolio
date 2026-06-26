/**
 * animation.js
 * Handles scroll-based animations using Intersection Observer.
 * No external libraries needed.
 */

const initAnimations = () => {
    const animatedElements = document.querySelectorAll('.animate');

    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.15 // Trigger when 15% of element is visible
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Add the 'active' class to trigger CSS animations
                entry.target.classList.add('active');
                // Stop observing once animated
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    animatedElements.forEach(el => {
        observer.observe(el);
    });
};
