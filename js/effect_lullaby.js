(() => {
    const superCard = document.getElementById('effect-lullaby');
    addSpotlightEffect(superCard);
    addStarEffect(superCard);
    function addSpotlightEffect(card) {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            card.style.setProperty('--mouse-x', `${x}px`);
            card.style.setProperty('--mouse-y', `${y}px`);
        });
    }
    function addStarEffect(card) {
        let starInterval;
        card.addEventListener('mouseenter', () => {
            starInterval = setInterval(() => { createStar(card); }, 100);
        });
        card.addEventListener('mouseleave', () => {
            clearInterval(starInterval);
        });
    }
    function createStar(container) {
        const star = document.createElement('div');
        star.classList.add('snow-lullaby');
        const size = Math.random() * 15 + 10;
        star.style.width = `${size}px`;
        star.style.height = `${size}px`;
        const xPos = Math.random() * (container.offsetWidth - size);
        const yPos = Math.random() * (container.offsetHeight - size);
        star.style.left = `${xPos}px`;
        star.style.top = `${yPos}px`;
        container.appendChild(star);
        setTimeout(() => { star.remove(); }, 1500);
    }
})();