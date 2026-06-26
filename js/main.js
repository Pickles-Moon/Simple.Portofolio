/**
 * main.js
 * Entry point for initializing all vanilla JavaScript modules.
 * Keeping it clean and modular for beginners.
 */

document.addEventListener('DOMContentLoaded', () => {
    // 1. Initialize Typing Effect
    if (typeof initTyping === 'function') {
        initTyping();
    }

    // 2. Initialize Navigation (Smooth Scroll, Active Links, Mobile Menu)
    if (typeof initNavigation === 'function') {
        initNavigation();
    }

    // 3. Initialize Scroll Animations (Intersection Observer)
    if (typeof initAnimations === 'function') {
        initAnimations();
    }
});
