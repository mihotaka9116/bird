document.body.classList.add('js-enabled');

window.addEventListener('DOMContentLoaded', () => {
    // 1. Lucideアイコンの初期化
    if (typeof lucide !== 'undefined') {
        lucide.createIcons();
    }

    // 2. 泡の生成
    initBubbles();

    // 3. 名言の開閉
    initPoemToggle();

    // 4. スマホメニュー
    initMobileMenu();

    // 5. スクロール監視
    initScrollEffects();
});

function initBubbles() {
    const container = document.getElementById('bubbles-container');
    if (!container) return;
    const createBubble = () => {
        const bubble = document.createElement('div');
        bubble.className = 'bubble';
        bubble.style.width = Math.random() * 40 + 10 + 'px';
        bubble.style.height = bubble.style.width;
        bubble.style.left = Math.random() * 100 + 'vw';
        bubble.style.animationDuration = Math.random() * 10 + 15 + 's';
        container.appendChild(bubble);
        setTimeout(() => bubble.remove(), 25000);
    };
    setInterval(createBubble, 2000);
}

function initPoemToggle() {
    const cards = document.querySelectorAll('.clickable-card');
    cards.forEach(card => {
        card.addEventListener('click', () => {
            card.classList.toggle('is-open');
        });
    });
}

function initMobileMenu() {
    const toggle = document.getElementById('menu-toggle');
    const nav = document.getElementById('nav-menu');
    if (!toggle || !nav) return;

    toggle.addEventListener('click', () => {
        toggle.classList.toggle('active');
        nav.classList.toggle('active');
    });

    document.querySelectorAll('#nav-menu a').forEach(link => {
        link.addEventListener('click', () => {
            toggle.classList.remove('active');
            nav.classList.remove('active');
        });
    });
}

function initScrollEffects() {
    const backToTop = document.getElementById('back-to-top');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) entry.target.classList.add('is-visible');
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('section').forEach(s => observer.observe(s));

    window.addEventListener('scroll', () => {
        if (window.scrollY > 400) backToTop?.classList.remove('hidden');
        else backToTop?.classList.add('hidden');
    });
}
