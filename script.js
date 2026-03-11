// script.js の冒頭に追加
document.body.classList.add('js-enabled');

lucide.createIcons();
// ...（他の関数はそのまま）

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
        const duration = Math.random() * 10 + 15 + 's'; // スピードを15秒〜25秒に設定

        bubble.className = 'bubble';
        bubble.style.width = size;
        bubble.style.height = size;
        bubble.style.left = left;
        bubble.style.animationDuration = duration;

        container.appendChild(bubble);
        setTimeout(() => { bubble.remove(); }, 25000);
    };

    setInterval(createBubble, 2000);
    for (let i = 0; i < 6; i++) { setTimeout(createBubble, i * 400); }
}

// 3. クリックで名言を表示
function initPoemToggle() {
    const cards = document.querySelectorAll('.clickable-card');
    cards.forEach(card => {
        card.addEventListener('click', () => {
            // クラス 'is-open' を付け外しする
            card.classList.toggle('is-open');
        });
    });
}

// 4. ハンバーガーメニューの制御
function initMobileMenu() {
    const toggle = document.getElementById('menu-toggle');
    const nav = document.getElementById('nav-menu');
    const navLinks = document.querySelectorAll('#nav-menu a');

    if (!toggle || !nav) return;

    toggle.addEventListener('click', () => {
        toggle.classList.toggle('active');
        nav.classList.toggle('active');
    });

    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            toggle.classList.remove('active');
            nav.classList.remove('active');
        });
    });
}

// 5. スクロール監視（フェードインと戻るボタン）
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

// すべての読み込みが終わったら、各機能を一度だけ起動する
window.addEventListener('DOMContentLoaded', () => {
    initBubbles();
    initPoemToggle();
    initScrollEffects();
    initMobileMenu();
});
