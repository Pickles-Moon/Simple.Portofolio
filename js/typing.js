/**
 * typing.js
 * Creates a dynamic typing and deleting effect for the Hero section.
 */

const initTyping = () => {
    const textElement = document.querySelector('.typing-text');
    
    // Edit the roles you want to type out here
    const words = [
        "Frontend Engineer", 
        "UI/UX Designer", 
        "Software Architect"
    ];
    
    let wordIndex = 0;
    let charIndex = 0;
    let isDeleting = false;

    // Typing speed control
    const typeDelay = 100;
    const eraseDelay = 50;
    const newWordDelay = 2000; // Time to wait before deleting

    function type() {
        const currentWord = words[wordIndex];
        
        if (isDeleting) {
            // Remove a character
            textElement.textContent = currentWord.substring(0, charIndex - 1);
            charIndex--;
        } else {
            // Add a character
            textElement.textContent = currentWord.substring(0, charIndex + 1);
            charIndex++;
        }

        let typeSpeed = isDeleting ? eraseDelay : typeDelay;

        // If word is complete, pause then delete
        if (!isDeleting && charIndex === currentWord.length) {
            typeSpeed = newWordDelay;
            isDeleting = true;
        } 
        // If word is completely deleted, move to next word
        else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            wordIndex++;
            if (wordIndex === words.length) {
                wordIndex = 0; // Loop back to start
            }
            typeSpeed = 500; // Pause before typing new word
        }

        setTimeout(type, typeSpeed);
    }

    // Start the typing loop
    setTimeout(type, 1000);
};
