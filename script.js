// Lucideアイコンの初期化
lucide.createIcons();

// 1. 泡の生成（スピードをゆっくりに）
function initBubbles() {
    const container = document.getElementById('bubbles-container');
    if (!container) return;

    const createBubble = () => {
        const bubble = document.createElement('div');
        const size = Math.random() * 40 + 10 + 'px';
        const left = Math.random() * 100 + 'vw';
        
        // ★ スピードを「15秒〜25秒」に設定
        const duration = Math.random() * 10 + 15 + 's';

        bubble.className = 'bubble';
        bubble.style.width = size;
        bubble.style.height = size;
        bubble.style.left = left;
        bubble.style.animationDuration = duration;

        container.appendChild(bubble);

        // 25秒後に削除
        setTimeout(() => { bubble.remove(); }, 25000);
    };

    setInterval(createBubble, 2000); 
    // 初回起動分
    for (let i = 0; i < 5; i++) { setTimeout(createBubble, i * 500); }
}

// 2. クリックで名言を表示する機能
function initPoemToggle() {
    const cards = document.querySelectorAll('.clickable-card');
    cards.forEach(card => {
        card.addEventListener('click', () => {
            card.classList.toggle('is-open');
        });
    });
}

// 3. スクロールエフェクト
function initScrollEffects() {
    const backToTop = document.getElementById('back-to-top');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('section').forEach(section => observer.observe(section));

    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            backToTop.classList.remove('hidden');
        } else {
            backToTop.classList.add('hidden');
        }
    });
}

// まとめて実行
window.addEventListener('DOMContentLoaded', () => {
    initBubbles();
    initPoemToggle();
    initScrollEffects();
});
