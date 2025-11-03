// --- "We Animation" (Scroll-Reveal) Script ---

// Function to check if an element is in the viewport
function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// Function to handle the scroll event
function handleScrollAnimation() {
    const animatedSections = document.querySelectorAll('.section-animate');
    
    animatedSections.forEach(section => {
        // Only trigger if the section is about halfway into the viewport
        const triggerPoint = window.innerHeight * 0.85; 
        const sectionTop = section.getBoundingClientRect().top;

        if (sectionTop < triggerPoint) {
            section.classList.add('visible');
        } 
        // Optional: remove 'visible' if you want it to hide again when scrolling up
        /*
        else {
            section.classList.remove('visible');
        }
        */
    });
}

// Listen for scroll and initial load
window.addEventListener('scroll', handleScrollAnimation);

// Run on page load to check if any sections are already visible
document.addEventListener('DOMContentLoaded', handleScrollAnimation);
