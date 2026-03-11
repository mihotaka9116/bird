import React, { useEffect, useState } from 'react';
import { Feather, Mail, Bird } from 'lucide-react';
import BubbleBackground from './components/BubbleBackground';
import PoemCard from './components/PoemCard';

export default function App() {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    // スクロール位置の監視（トップへ戻るボタン用）
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 300);
    };

    // セクションの出現監視（フェードインアニメーション用）
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    const sections = document.querySelectorAll('section');
    sections.forEach((section) => observer.observe(section));

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  // スムーズスクロール関数
  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen relative">
      <BubbleBackground />

      {/* ナビゲーション */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/70 backdrop-blur-md px-[5%] py-3 flex justify-between items-center">
        <a href="#" className="flex items-center gap-2 no-underline text-ocean font-bold">
          <Bird className="w-6 h-6" /> Mon poème
        </a>
        <nav>
          <ul className="flex list-none gap-5 m-0 p-0">
            <li><a href="#concept" onClick={(e) => scrollToSection(e, 'concept')} className="no-underline text-ocean text-sm">Concept</a></li>
            <li><a href="#poem-section" onClick={(e) => scrollToSection(e, 'poem-section')} className="no-underline text-ocean text-sm">名言集</a></li>
            <li><a href="#skills" onClick={(e) => scrollToSection(e, 'skills')} className="no-underline text-ocean text-sm">Skills</a></li>
            <li><a href="#contact" onClick={(e) => scrollToSection(e, 'contact')} className="no-underline text-ocean text-sm">Contact</a></li>
          </ul>
        </nav>
      </header>

      {/* メインビジュアル */}
      <div className="h-screen flex flex-col items-center justify-center relative z-10">
        <h1 className="text-5xl font-bold text-ocean tracking-widest">Mon poème</h1>
      </div>

      {/* 各セクション */}
      <main className="max-w-[1000px] mx-auto px-5 py-24 relative z-10">
        <section id="concept" className="mb-32 text-center">
          <h2 className="flex items-center justify-center gap-4 text-2xl mb-8 group">
            Concept <Feather className="section-feather w-6 h-6" />
          </h2>
          <p>印象に残った言葉たちが、泡のように浮かぶ場所。</p>
        </section>

        {/* ... 他のセクションも同様の構造 ... */}
      </main>

      {/* フッター */}
      <footer className="bg-ocean text-white py-16 text-center mt-24">
        <p>&copy; 2026 Mon poème.</p>
      </footer>
    </div>
  );
}
