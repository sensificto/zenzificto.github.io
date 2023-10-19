const logo = document.getElementById('logo');

window.addEventListener('scroll', function() {
    const scrollPercentage = (window.scrollY / (document.body.scrollHeight - window.innerHeight));
    const rotationDegree = 360 * scrollPercentage;
    logo.style.transform = `rotate(${rotationDegree}deg)`;
});