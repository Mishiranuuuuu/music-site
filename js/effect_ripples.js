(() => {
    const card = document.getElementById('effect-ripples');
    let interval;
    card.addEventListener('mouseenter', () => {
        interval = setInterval(() => createStar(card), 100);
    });
    card.addEventListener('mouseleave', () => {
        clearInterval(interval);
    });
    function createStar(container) {
        const star = document.createElement('div');
        star.classList.add('star-particle-ripples');
        const size = Math.random() * 6 + 2;
        star.style.width = `${size}px`;
        star.style.height = `${size}px`;
        star.style.left = `${Math.random() * (container.offsetWidth - size)}px`;
        star.style.top = `${Math.random() * (container.offsetHeight - size)}px`;
        container.appendChild(star);
        setTimeout(() => star.remove(), 1500);
    }
})();
