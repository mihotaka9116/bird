lucide.createIcons();

// 泡の生成
const container = document.getElementById('bubbles-container');
for (let i = 0; i < 15; i++) {
    const bubble = document.createElement('div');
    bubble.className = 'bubble';
    const size = Math.random() * 50 + 20 + 'px';
    bubble.style.width = size;
    bubble.style.height = size;
    bubble.style.left = Math.random() * 100 + 'vw';
    bubble.style.animationDelay = Math.random() * 8 + 's';
    container.appendChild(bubble);
}

// セクションの出現アニメーション
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
        }
    });
}, { threshold: 0.1 });

document.querySelectorAll('section').forEach(section => observer.observe(section));

// トップに戻るボタンの制御
const backToTop = document.getElementById('back-to-top');
window.addEventListener('scroll', () => {
    if (window.scrollY > 400) {
        backToTop.classList.remove('hidden');
    } else {
        backToTop.classList.add('hidden');
    }
});

// 泡を管理する関数
function startBubbleSystem() {
    const container = document.getElementById('bubbles-container');
    if (!container) return;

    // 泡を生成する処理
    const createBubble = () => {
        const bubble = document.createElement('div');
        const id = Date.now();
        
        // Reactコードのロジックを反映
        const size = Math.random() * 40 + 10 + 'px';
        const left = Math.random() * 100 + 'vw';
        const duration = Math.random() * 5 + 7 + 's';

        bubble.className = 'bubble';
        bubble.style.width = size;
        bubble.style.height = size;
        bubble.style.left = left;
        bubble.style.animationDuration = duration;

        container.appendChild(bubble);

        // アニメーション終了後に要素を削除（Reactのfilterに相当）
        setTimeout(() => {
            bubble.remove();
        }, 12000); 
    };

    // 1.5秒ごとに新しい泡を作る（ReactのsetIntervalに相当）
    setInterval(createBubble, 1500);

    // 最初にある程度泡が出ていてほしい場合は、最初だけ数個作る
    for(let i=0; i<5; i++) createBubble();
}

// 実行
window.addEventListener('DOMContentLoaded', startBubbleSystem);
