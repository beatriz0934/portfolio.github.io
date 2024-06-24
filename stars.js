document.addEventListener('DOMContentLoaded', () => {
    const canvas = document.getElementById('starCanvas');
    const ctx = canvas.getContext('2d');

    function resizeCanvas() {
        canvas.width = window.innerWidth * 0.8; 
        canvas.height = window.innerHeight * 0.8; 
    }

    function createStars() {
        const numStars = 100;
        const stars = [];

        for (let i = 0; i < numStars; i++) {
            const x = Math.random() * canvas.width;
            const y = Math.random() * canvas.height;
            const radius = Math.random() * 1.5;
            const alpha = Math.random() * 0.5 + 0.5;
            stars.push({ x, y, radius, alpha });
        }

        return stars;
    }

    function drawStars(stars) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        stars.forEach(star => {
            ctx.beginPath();
            ctx.arc(star.x, star.y, star.radius, 0, 2 * Math.PI);
            ctx.fillStyle = `rgba(255, 255, 255, ${star.alpha})`;
            ctx.fill();
        });
    }

    function animateStars(stars) {
        stars.forEach(star => {
            star.y -= 0.5;
            if (star.y < 0) {
                star.y = canvas.height;
            }
        });
        drawStars(stars);
        requestAnimationFrame(() => animateStars(stars));
    }

    function init() {
        resizeCanvas();
        const stars = createStars();
        drawStars(stars);
        animateStars(stars);
    }

    window.addEventListener('resize', resizeCanvas);
    init();
});
document.addEventListener('DOMContentLoaded', () => {
    const canvas = document.getElementById('starcanvas');
    const ctx = canvas.getContext('2d');

    function resizeCanvas() {
        canvas.width = window.innerWidth * 0.8; 
        canvas.height = window.innerHeight * 0.8; 
    }

    function createStars() {
        const numStars = 100;
        const stars = [];

        for (let i = 0; i < numStars; i++) {
            const x = Math.random() * canvas.width;
            const y = Math.random() * canvas.height;
            const radius = Math.random() * 1.5;
            const alpha = Math.random() * 0.5 + 0.5;
            stars.push({ x, y, radius, alpha });
        }

        return stars;
    }

    function drawStars(stars) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        stars.forEach(star => {
            ctx.beginPath();
            ctx.arc(star.x, star.y, star.radius, 0, 2 * Math.PI);
            ctx.fillStyle = `rgba(255, 255, 255, ${star.alpha})`;
            ctx.fill();
        });
    }

    function animateStars(stars) {
        stars.forEach(star => {
            star.y -= 0.5;
            if (star.y < 0) {
                star.y = canvas.height;
            }
        });
        drawStars(stars);
        requestAnimationFrame(() => animateStars(stars));
    }

    function init() {
        resizeCanvas();
        const stars = createStars();
        drawStars(stars);
        animateStars(stars);
    }

    window.addEventListener('resize', resizeCanvas);
    init();
});
