'use client';

import { FaXTwitter, FaEnvelope, FaCode, FaBriefcase } from 'react-icons/fa6';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { useLanguage } from '@/i18n/LanguageContext';

export default function Home() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-[#0D0D0D] text-[#FFEDD2] flex flex-col">
      <Navbar />
      <main className="flex-grow max-w-3xl mx-auto px-6 pt-32 pb-12">
        {/* Hero Section */}
        <section className="space-y-6 mb-24">
          <h1 className="text-4xl md:text-6xl font-bold">
            <span className="text-[#D4A373]">{t('home.title')}</span>
          </h1>
          <p className="text-xl text-[#8B7355] max-w-2xl border-l-2 border-[#262626] pl-4">
            {t('home.subtitle')}
          </p>
        </section>

        <div className="space-y-24">
          {/* About Section */}
          <section>
            <div className="flex items-center gap-2 mb-6">
              <FaCode className="text-[#D4A373] w-5 h-5" />
              <h2 className="text-2xl font-semibold text-[#D4A373]">{t('home.about.title')}</h2>
            </div>
            <div className="space-y-4">
              {(t('home.about.content') as unknown as string[]).map((paragraph, index) => (
                <p key={index} className="text-lg text-[#FFEDD2]/80 leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>
          </section>

          {/* Experience Section */}
          <section>
            <div className="flex items-center gap-2 mb-8">
              <FaBriefcase className="text-[#D4A373] w-5 h-5" />
              <h2 className="text-2xl font-semibold text-[#D4A373]">{t('home.experience.title')}</h2>
            </div>
            <div className="space-y-8">
              <div className="relative pl-6 border-l border-[#262626]">
                <div className="absolute w-3 h-3 bg-[#D4A373] rounded-full -left-[6.5px] top-1"></div>
                <h3 className="text-lg font-medium text-[#FFEDD2]">{t('home.experience.senior.title')}</h3>
                <p className="text-[#8B7355] mb-2">{t('home.experience.senior.company')} • {t('home.experience.senior.period')}</p>
                <p className="text-[#FFEDD2]/70">
                  {t('home.experience.senior.description')}
                </p>
              </div>
              <div className="relative pl-6 border-l border-[#262626]">
                <div className="absolute w-3 h-3 bg-[#D4A373] rounded-full -left-[6.5px] top-1"></div>
                <h3 className="text-lg font-medium text-[#FFEDD2]">{t('home.experience.developer.title')}</h3>
                <p className="text-[#8B7355] mb-2">{t('home.experience.developer.company')} • {t('home.experience.developer.period')}</p>
                <p className="text-[#FFEDD2]/70">
                  {t('home.experience.developer.description')}
                </p>
              </div>
            </div>
          </section>

          {/* Skills Section */}
          <section>
            <div className="flex items-center gap-2 mb-8">
              <FaCode className="text-[#D4A373] w-5 h-5" />
              <h2 className="text-2xl font-semibold text-[#D4A373]">{t('home.skills.title')}</h2>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {[
                'Swift',
                'Python',
                'Kotlin',
                'C++',
                'Arduino',
                'PID Control',
                'Cybersecurity',
                'OSINT',
                'Penetration Testing'
              ].map((skill) => (
                <div
                  key={skill}
                  className="px-4 py-3 bg-[#262626] rounded-lg text-sm text-[#FFEDD2]/70 hover:bg-[#8B7355]/20 transition-colors"
                >
                  {skill}
                </div>
              ))}
            </div>
          </section>

          {/* Contact Section */}
          <section>
            <div className="flex items-center gap-2 mb-8">
              <FaEnvelope className="text-[#D4A373] w-5 h-5" />
              <h2 className="text-2xl font-semibold text-[#D4A373]">{t('home.contact.title')}</h2>
            </div>
            <div className="bg-[#262626] p-6 rounded-lg border border-[#8B7355]/20">
              <p className="text-[#FFEDD2]/80 mb-6">
                {t('home.contact.content')}
              </p>
              <a
                href="https://x.com/hiddeyoshit"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-[#D4A373] hover:text-[#FFEDD2] transition-colors"
              >
                <FaXTwitter className="w-4 h-4" />
                @hiddeyoshit
              </a>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}
