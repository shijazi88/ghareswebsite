import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Leaf, Menu, X, Globe } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { t, language, setLanguage } = useLanguage();

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'ar' : 'en');
  };

  return (
    <nav className="bg-white border-b border-stone-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <Link to="/" className="flex-shrink-0 flex items-center gap-2">
              <div className="bg-green-600 p-1.5 rounded-lg">
                <Leaf className="h-6 w-6 text-white transform rtl:scale-x-[-1]" />
              </div>
              <span className="font-bold text-xl text-stone-800 tracking-tight">Ghares</span>
            </Link>
            <div className="hidden sm:ms-8 sm:flex sm:space-x-8 sm:space-x-reverse">
              <Link to="/" className="border-transparent text-stone-500 hover:border-green-500 hover:text-green-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
                {t.navbar.home}
              </Link>
              <Link to="/initiatives" className="border-transparent text-stone-500 hover:border-green-500 hover:text-green-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
                {t.navbar.initiatives}
              </Link>
              <a href="#how-it-works" className="border-transparent text-stone-500 hover:border-green-500 hover:text-green-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
                {t.navbar.howItWorks}
              </a>
            </div>
          </div>
          <div className="hidden sm:ms-6 sm:flex sm:items-center gap-4">
            <button 
              onClick={toggleLanguage}
              className="p-2 text-stone-500 hover:text-green-600 transition-colors flex items-center gap-1"
            >
              <Globe className="w-5 h-5" />
              <span className="text-sm font-medium">{language === 'en' ? 'العربية' : 'English'}</span>
            </button>
            <button className="text-stone-500 hover:text-stone-700 font-medium text-sm">
              {t.navbar.signIn}
            </button>
            <button className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-full text-sm font-medium transition-colors shadow-sm">
              {t.navbar.startPlanting}
            </button>
          </div>
          <div className="-me-2 flex items-center sm:hidden gap-2">
            <button 
                onClick={toggleLanguage}
                className="p-2 text-stone-500 hover:text-green-600 transition-colors"
            >
              <span className="font-bold text-sm">{language === 'en' ? 'AR' : 'EN'}</span>
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-stone-400 hover:text-stone-500 hover:bg-stone-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-green-500"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? <X className="block h-6 w-6" /> : <Menu className="block h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Animated Mobile Menu */}
      <div 
        className={`sm:hidden bg-white border-stone-200 overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-96 opacity-100 border-t' : 'max-h-0 opacity-0 border-none'
        }`}
      >
        <div className="pt-2 pb-3 space-y-1">
          <Link to="/" onClick={() => setIsOpen(false)} className="bg-green-50 border-green-500 text-green-700 block ps-3 pe-4 py-2 border-s-4 text-base font-medium">
            {t.navbar.home}
          </Link>
          <Link to="/initiatives" onClick={() => setIsOpen(false)} className="border-transparent text-stone-500 hover:bg-stone-50 hover:border-stone-300 hover:text-stone-700 block ps-3 pe-4 py-2 border-s-4 text-base font-medium">
            {t.navbar.initiatives}
          </Link>
          <a href="#how-it-works" onClick={() => setIsOpen(false)} className="border-transparent text-stone-500 hover:bg-stone-50 hover:border-stone-300 hover:text-stone-700 block ps-3 pe-4 py-2 border-s-4 text-base font-medium">
            {t.navbar.howItWorks}
          </a>
        </div>
        <div className="pt-4 pb-4 border-t border-stone-200">
           <div className="flex flex-col px-4 gap-3">
              <button className="w-full text-center py-2 border border-stone-300 rounded-md text-stone-700 font-medium">
                {t.navbar.signIn}
              </button>
              <button className="w-full text-center py-2 bg-green-600 rounded-md text-white font-medium">
                {t.navbar.startPlanting}
              </button>
           </div>
        </div>
      </div>
    </nav>
  );
};