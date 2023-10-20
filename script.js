const logo = document.getElementById('logo');
let lastScrollY = window.scrollY;

// This function will run in synchronization with the browser's repaint cycle.
function updateRotation() {
    const scrollPercentage = (lastScrollY / (document.body.scrollHeight - window.innerHeight));
    const rotationDegree = 360 * scrollPercentage;
    logo.style.transform = `rotate(${rotationDegree}deg)`;
    logo.style.webkitTransform = `rotate(${rotationDegree}deg)`; 

}

// Debounce function
function debounce(func, wait = 10, immediate = true) {
    let timeout;
    return function() {
        const context = this, args = arguments;
        const later = function() {
            timeout = null;
            if (!immediate) func.apply(context, args);
        };
        const callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
    };
}

window.addEventListener('scroll', debounce(function() {
    lastScrollY = window.scrollY;
    requestAnimationFrame(updateRotation);
}));
