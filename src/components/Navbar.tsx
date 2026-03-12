import { Menu, X, Globe } from 'lucide-react';
import { useState } from 'react';

export default function Navbar({
  currentPage,
  setCurrentPage,
  language,
  setLanguage,
}: {
  currentPage: string;
  setCurrentPage: (page: string) => void;
  language: string;
  setLanguage: (lang: string) => void;
}) {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = {
    zh: [
      { id: 'home', label: '首页' },
      { id: 'products', label: '产品中心' },
      { id: 'about', label: '关于我们' },
      { id: 'contact', label: '联系我们' },
    ],
    en: [
      { id: 'home', label: 'Home' },
      { id: 'products', label: 'Products' },
      { id: 'about', label: 'About Us' },
      { id: 'contact', label: 'Contact' },
    ],
  };

  const links = language === 'zh' ? navLinks.zh : navLinks.en;

  const handleNav = (id: string) => {
    setCurrentPage(id);
    setIsOpen(false);
  };

  const toggleLanguage = () => {
    setLanguage(language === 'zh' ? 'en' : 'zh');
  };

  return (
    <nav className="sticky top-0 z-[100] bg-white border-b border-[#0B3C5D]/10 shadow-sm font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo / Brand */}
          <div
            className="flex items-center gap-3 cursor-pointer select-none group min-w-0"
            onClick={() => handleNav('home')}
          >
            <span className="flex items-center justify-center h-10 sm:h-11 lg:h-12 w-auto max-w-[160px] rounded-lg bg-white border border-[#0B3C5D]/10 shadow-sm overflow-hidden px-2">
              <img
                src="/assets/logo.png"
                alt={language === 'zh' ? '百代兴石材机械' : 'Best       Glory'}
                className="h-full w-auto object-contain"
                loading="eager"
              />
            </span>
            <span className="font-bold text-lg lg:text-xl text-[#0B3C5D] tracking-tight truncate max-w-[52vw] sm:max-w-none whitespace-nowrap">
              {language === 'zh' ? '百代兴石材机械' : 'Best       Glory'}
            </span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-1 lg:gap-2">
            {links.map(link => (
              <button
                key={link.id}
                onClick={() => handleNav(link.id)}
                className={`px-4 py-2.5 rounded-lg text-sm font-semibold transition-all duration-200
                  ${currentPage === link.id
                    ? 'bg-[#0B3C5D] text-white'
                    : 'text-[#0B3C5D]/80 hover:bg-[#F5F7FA] hover:text-[#0B3C5D]'
                  }`}
              >
                {link.label}
              </button>
            ))}
            <button
              onClick={toggleLanguage}
              className="ml-2 flex items-center gap-1.5 px-3 py-2 rounded-lg text-sm font-medium text-[#0B3C5D]/80 hover:bg-[#F5F7FA] hover:text-[#0B3C5D] transition-colors border border-[#0B3C5D]/20"
              aria-label={language === 'zh' ? 'Switch to English' : '切换为中文'}
            >
              <Globe className="h-4 w-4" />
              {language === 'zh' ? 'EN' : '中文'}
            </button>
            <button
              onClick={() => handleNav('contact')}
              className="ml-2 px-5 py-2.5 rounded-lg text-sm font-semibold bg-[#00AEEF] text-white shadow-md hover:bg-[#1D70B8] hover:shadow-lg transition-all duration-200"
            >
              {language === 'zh' ? '获取报价' : 'Get Quote'}
            </button>
          </div>

          {/* Mobile */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={toggleLanguage}
              className="p-2 rounded-lg text-[#0B3C5D] border border-[#0B3C5D]/20"
              aria-label={language === 'zh' ? 'Switch to English' : '切换为中文'}
            >
              <Globe className="h-5 w-5" />
            </button>
            <button
              onClick={() => handleNav('contact')}
              className="px-3 py-2 rounded-lg text-sm font-semibold bg-[#00AEEF] text-white"
            >
              {language === 'zh' ? '联系' : 'Contact'}
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg text-[#0B3C5D] border border-[#0B3C5D]/20"
              aria-label={isOpen ? 'Close menu' : 'Open menu'}
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-[#0B3C5D]/10 shadow-lg">
          <div className="px-4 py-4 space-y-1">
            {links.map(link => (
              <button
                key={link.id}
                onClick={() => handleNav(link.id)}
                className={`block w-full text-left px-4 py-3 rounded-lg text-base font-semibold transition-colors
                  ${currentPage === link.id ? 'bg-[#0B3C5D] text-white' : 'text-[#0B3C5D] hover:bg-[#F5F7FA]'}`}
              >
                {link.label}
              </button>
            ))}
            <button
              onClick={() => handleNav('contact')}
              className="block w-full text-left px-4 py-3 rounded-lg text-base font-semibold bg-[#00AEEF] text-white mt-2"
            >
              {language === 'zh' ? '获取报价' : 'Get Quote'}
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
