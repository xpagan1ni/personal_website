'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect, useRef } from 'react';
import { useLanguage, languages } from '@/i18n/LanguageContext';

export default function Navbar() {
  const pathname = usePathname();
  const [isLangMenuOpen, setIsLangMenuOpen] = useState(false);
  const { currentLang, setLanguage, t } = useLanguage();
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsLangMenuOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <nav className="fixed w-full bg-[#0D0D0D]/90 backdrop-blur-sm border-b border-[#262626] z-50">
      <div className="max-w-3xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="relative w-10 h-10 flex items-center justify-center">
            <div className="absolute inset-0 border-2 border-[#D4A373] rounded-lg animate-spin-slow"></div>
            <Link 
              href="/" 
              className="relative text-xl font-medium text-[#D4A373] hover:text-[#FFEDD2] transition-colors"
            >
              HÖ
            </Link>
          </div>
          
          <div className="flex items-center space-x-6">
            <Link
              href="/"
              className={`${
                pathname === '/'
                  ? 'text-[#D4A373]'
                  : 'text-[#FFEDD2]/70 hover:text-[#FFEDD2]'
              } transition-colors`}
            >
              {t('nav.home')}
            </Link>
            <Link
              href="/projects"
              className={`${
                pathname === '/projects'
                  ? 'text-[#D4A373]'
                  : 'text-[#FFEDD2]/70 hover:text-[#FFEDD2]'
              } transition-colors`}
            >
              {t('nav.projects')}
            </Link>

            {/* Language Selector */}
            <div className="relative" ref={menuRef}>
              <button
                onClick={() => setIsLangMenuOpen(!isLangMenuOpen)}
                className="flex items-center gap-2 text-[#FFEDD2]/70 hover:text-[#FFEDD2] transition-colors"
              >
                <span>{currentLang.flag}</span>
                <span>{currentLang.code.toUpperCase()}</span>
              </button>

              {/* Dropdown Menu */}
              {isLangMenuOpen && (
                <div className="absolute right-0 mt-2 py-2 w-40 bg-[#262626] rounded-lg shadow-xl border border-[#8B7355]/20">
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => {
                        setLanguage(lang);
                        setIsLangMenuOpen(false);
                      }}
                      className={`w-full px-4 py-2 text-left flex items-center gap-2 hover:bg-[#8B7355]/20 transition-colors ${
                        currentLang.code === lang.code
                          ? 'text-[#D4A373]'
                          : 'text-[#FFEDD2]/70'
                      }`}
                    >
                      <span>{lang.flag}</span>
                      <span>{lang.name}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
} 