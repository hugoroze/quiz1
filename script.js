document.addEventListener("DOMContentLoaded", function() {
    const currentPath = window.location.pathname;
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        if (currentPath.includes(link.getAttribute('href'))) {
            if (link.getAttribute('href') !== '/quiz1/' || currentPath === '/quiz1/' || currentPath === '/quiz1/index.html') {
                link.classList.add('active');
                link.style.fontWeight = 'bold';
            }
        }
    });
});