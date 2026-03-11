// 1. アイコンを表示
lucide.createIcons();

// 2. 泡をゆっくり生成
function initBubbles() {
    const container = document.getElementById('bubbles-container');
    if (!container) return;

    const createBubble = () => {
        const bubble = document.createElement('div');
        const size = Math.random() * 40 + 10 + 'px';
        const left = Math.random() * 100 + 'vw';
        // スピードを15秒〜25秒に設定
        const duration = Math.random() * 10 + 15 + 's';

        bubble.className = 'bubble';
        bubble.style.width = size;
        bubble.style.height = size;
        bubble.style.left = left;
        bubble.style.animationDuration = duration;

        container.appendChild(bubble);
        // アニメーションが終わる頃に削除
        setTimeout(() => { bubble.remove(); }, 25000);
    };

    setInterval(createBubble, 2000);
    // 最初にある程度出しておく
    for (let i = 0; i < 6; i++) { setTimeout(createBubble, i * 400); }
}

// 3. クリックで名言を表示
function initPoemToggle() {
    const cards = document.querySelectorAll('.clickable-card');
    cards.forEach(card => {
        card.addEventListener('click', () => {
            card.classList.toggle('is-open');
        });
    });
}

// 4. スクロール監視（フェードインと戻るボタン）
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
        if (window.scrollY > 400) {
            backToTop.classList.remove('hidden');
        } else {
            backToTop.classList.add('hidden');
        }
    });
}

// ページ読み込み完了時にすべて起動
window.addEventListener('DOMContentLoaded', () => {
    initBubbles();
    initPoemToggle();
    initScrollEffects();
});
