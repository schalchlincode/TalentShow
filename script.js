document.addEventListener('DOMContentLoaded', function () {
    console.log("Talent Show Website Loaded with Fancy Effects!");

    // H1 Bounce Animation
    let title = document.querySelector('h1');
    setInterval(() => {
        title.classList.toggle('glow');
    }, 1000);

    // Floating Animation for All Links
    let links = document.querySelectorAll('a');
    links.forEach((link, index) => {
        link.style.position = 'relative';
        link.style.animation = `floatEffect ${1 + index * 0.2}s infinite alternate ease-in-out`;
    });

    // Floating Keyframe Animation
    let styleSheet = document.createElement("style");
    styleSheet.innerHTML = `
        @keyframes floatEffect {
            from { top: 0px; }
            to { top: -5px; }
        }
    `;
    document.head.appendChild(styleSheet);
});