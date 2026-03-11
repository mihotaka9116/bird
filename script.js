// アイコンの初期化
lucide.createIcons();

// 泡を自動生成する
function createBubbles() {
    const container = document.getElementById('bubbles-container');
    for (let i = 0; i < 15; i++) {
        const bubble = document.createElement('div');
        bubble.className = 'bubble';
        const size = Math.random() * 60 + 20 + 'px';
        bubble.style.width = size;
        bubble.style.height = size;
        bubble.style.left = Math.random() * 100 + 'vw';
        bubble.style.animationDelay = Math.random() * 8 + 's';
        container.appendChild(bubble);
    }
}

// スクロールでふわっと出す
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
        }
    });
}, { threshold: 0.1 });

document.querySelectorAll('section').forEach(section => observer.observe(section));

createBubbles();
