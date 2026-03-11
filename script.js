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

// 泡を作る関数
function createBubbles() {
    const container = document.getElementById('bubbles-container');
    if (!container) return; // コンテナがない場合は何もしない

    for (let i = 0; i < 20; i++) {
        const bubble = document.createElement('div');
        bubble.className = 'bubble';
        
        // ランダムな大きさと配置
        const size = Math.random() * 60 + 20 + 'px';
        bubble.style.width = size;
        bubble.style.height = size;
        bubble.style.left = Math.random() * 100 + 'vw';
        
        // アニメーションのタイミングをバラバラにする
        bubble.style.animationDelay = Math.random() * 8 + 's';
        bubble.style.animationDuration = Math.random() * 5 + 7 + 's'; // 7〜12秒で上昇
        
        container.appendChild(bubble);
    }
}

// 画面が読み込まれたら実行
window.addEventListener('DOMContentLoaded', createBubbles);
