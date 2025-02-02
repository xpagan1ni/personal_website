'use client';

import { FaGithub, FaLinkedin, FaXTwitter } from 'react-icons/fa6';
import { useLanguage } from '@/i18n/LanguageContext';

export default function Footer() {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0D0D0D] border-t border-[#262626]">
      <div className="max-w-6xl mx-auto px-6 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-[#8B7355] text-sm">
            © {currentYear} Hakan Ören. {t('footer.rights')}
          </div>
          
          <div className="flex space-x-6">
            <a
              href="https://github.com/xpagan1ni"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#8B7355] hover:text-[#D4A373] transition-colors transform hover:scale-110"
            >
              <FaGithub className="w-5 h-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/hakan-%C3%B6ren-19aa79191/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#8B7355] hover:text-[#D4A373] transition-colors transform hover:scale-110"
            >
              <FaLinkedin className="w-5 h-5" />
            </a>
            <a
              href="https://x.com/hiddeyoshit"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#8B7355] hover:text-[#D4A373] transition-colors transform hover:scale-110"
            >
              <FaXTwitter className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
} 