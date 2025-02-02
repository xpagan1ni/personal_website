'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { FaGithub, FaExternalLinkAlt, FaCode, FaServer, FaMobileAlt, FaYoutube } from 'react-icons/fa';
import { useLanguage } from '@/i18n/LanguageContext';

interface Project {
  title: string;
  description: string;
  technologies: string[];
  category: 'web' | 'backend' | 'mobile' | 'hardware';
  github?: string;
  live?: string;
  youtube?: string;
  image?: string;
}

const projects: Project[] = [
    {
        title: 'fitness',
        description: 'fitness',
        technologies: ['Swift', 'Firebase'],
        category: 'mobile',
        live: 'https://dinnermind.com'
    },
    {
        title: 'rocket',
        description: 'rocket',
        technologies: ['Python', 'C++', 'Arduino', 'PID Control'],
        category: 'hardware',
        youtube: 'https://www.youtube.com/watch?v=z3rFgn5698Q'
    }
];

const getCategoryIcon = (category: Project['category']) => {
  switch (category) {
    case 'web':
      return <FaCode className="w-4 h-4" />;
    case 'backend':
      return <FaServer className="w-4 h-4" />;
    case 'mobile':
      return <FaMobileAlt className="w-4 h-4" />;
    case 'hardware':
      return <FaCode className="w-4 h-4" />;
  }
};

export default function Projects() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-[#0D0D0D] text-[#FFEDD2] flex flex-col">
      <Navbar />
      <main className="flex-grow max-w-6xl mx-auto px-6 pt-32 pb-12">
        <div className="mb-16 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-[#D4A373]">
            {t('projects.title')}
          </h1>
          <p className="text-lg text-[#8B7355] max-w-2xl mx-auto">
            {t('projects.subtitle')}
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative bg-[#262626]/50 rounded-xl p-8 hover:bg-[#262626] transition-all duration-300 border border-[#8B7355]/10 hover:border-[#D4A373]/20 flex flex-col h-full transform hover:-translate-y-1 hover:shadow-xl"
            >
              {/* Category Badge */}
              <div className="absolute -top-3 left-6 bg-[#D4A373] text-[#0D0D0D] px-4 py-1.5 rounded-full text-sm font-medium flex items-center gap-2 shadow-lg">
                {getCategoryIcon(project.category)}
                {t(`projects.categories.${project.category}`)}
              </div>

              <div className="mt-6">
                {/* Header */}
                <div className="flex justify-between items-start mb-6">
                  <h2 className="text-2xl font-semibold text-[#FFEDD2] group-hover:text-[#D4A373] transition-colors">
                    {t(`projects.items.${project.title}.title`)}
                  </h2>
                  <div className="flex space-x-4">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#8B7355] hover:text-[#D4A373] transition-colors transform hover:scale-110"
                      >
                        <FaGithub className="w-6 h-6" />
                      </a>
                    )}
                    {project.youtube && (
                      <a
                        href={project.youtube}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#8B7355] hover:text-[#D4A373] transition-colors transform hover:scale-110"
                      >
                        <FaYoutube className="w-6 h-6" />
                      </a>
                    )}
                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#8B7355] hover:text-[#D4A373] transition-colors transform hover:scale-110"
                      >
                        <FaExternalLinkAlt className="w-5 h-5" />
                      </a>
                    )}
                  </div>
                </div>

                {/* Description */}
                <p className="text-[#FFEDD2]/80 mb-8 leading-relaxed">
                  {t(`projects.items.${project.title}.description`)}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1.5 bg-[#8B7355]/10 rounded-full text-sm text-[#D4A373] hover:bg-[#8B7355]/20 transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
} 