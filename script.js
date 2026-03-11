// 1. Lucideアイコンの表示
lucide.createIcons();

// 2. 泡の生成ロジック (React版の移植)
function initBubbles() {
    const container = document.getElementById('bubbles-container');
    if (!container) return;

    const createBubble = () => {
        const bubble = document.createElement('div');
        
        // React版と同じ計算
        const size = Math.random() * 40 + 10 + 'px';
        const left = Math.random() * 100 + 'vw';
        const duration = Math.random() * 5 + 7 + 's';

        bubble.className = 'bubble';
        bubble.style.width = size;
        bubble.style.height = size;
        bubble.style.left = left;
        bubble.style.animationDuration = duration;

        container.appendChild(bubble);

        // 12秒後に削除（Reactのメモリ管理を再現）
        setTimeout(() => {
            bubble.remove();
        }, 12000);
    };

    // 1.5秒ごとに新しい泡を生成
    setInterval(createBubble, 1500);

    // 初回起動時にいくつか生成
    for (let i = 0; i < 6; i++) {
        setTimeout(createBubble, i * 300);
    }
}

// 3. スクロールによるフェードインとトップへ戻るボタン
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

// すべての読み込みが終わったら開始
window.addEventListener('DOMContentLoaded', () => {
    initBubbles();
    initScrollEffects();
});
