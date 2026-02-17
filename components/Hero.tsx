import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';

export const Hero: React.FC = () => {
  const { t } = useLanguage();
  
  return (
    <div className="relative bg-stone-900 overflow-hidden">
      {/* Background Decor */}
      <div className="absolute inset-0 z-0 opacity-40">
        <img 
          src="https://picsum.photos/1920/1080?grayscale&blur=2" 
          alt="Texture" 
          className="w-full h-full object-cover"
        />
      </div>

      <div className="max-w-7xl mx-auto">
        <div className="relative z-10 pb-8 bg-stone-900/0 sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
          <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
            <div className="sm:text-center lg:text-start">
              <h1 className="text-4xl tracking-tight font-extrabold text-white sm:text-5xl md:text-6xl">
                <span className="block xl:inline">{t.hero.titleLine1}</span>{' '}
                <span className="block text-green-400 xl:inline">{t.hero.titleLine2}</span>
              </h1>
              <p className="mt-3 text-base text-stone-300 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                {t.hero.subtitle}
              </p>
              <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                <div className="rounded-md shadow">
                  <Link
                    to="/initiatives"
                    className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-stone-900 bg-green-400 hover:bg-green-500 md:py-4 md:text-lg transition-all"
                  >
                    {t.hero.viewInitiatives}
                  </Link>
                </div>
                <div className="mt-3 sm:mt-0 sm:ms-3">
                  <a
                    href="#how-it-works"
                    className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-green-100 bg-green-900 hover:bg-green-800 md:py-4 md:text-lg transition-all"
                  >
                    {t.hero.howItWorks}
                  </a>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
      
      {/* Hero Images Grid */}
      <div className="lg:absolute lg:inset-y-0 lg:right-0 rtl:lg:right-auto rtl:lg:left-0 lg:w-1/2">
        <div className="h-56 w-full sm:h-72 md:h-96 lg:w-full lg:h-full grid grid-cols-2 gap-2 p-4 bg-stone-900/50 backdrop-blur-sm lg:bg-transparent lg:p-0">
           <img
            className="h-full w-full object-cover rounded-tl-3xl lg:rounded-none opacity-90 hover:opacity-100 transition-opacity duration-700 rtl:rounded-tr-3xl rtl:rounded-tl-none"
            src="https://picsum.photos/800/600?random=1"
            alt="Planting in desert"
          />
           <img
            className="h-full w-full object-cover rounded-tr-3xl lg:rounded-none opacity-90 hover:opacity-100 transition-opacity duration-700 translate-y-4 lg:translate-y-12 rtl:rounded-tl-3xl rtl:rounded-tr-none"
            src="https://picsum.photos/800/600?random=2"
            alt="Sapling close up"
          />
           <img
            className="h-full w-full object-cover rounded-bl-3xl lg:rounded-none opacity-90 hover:opacity-100 transition-opacity duration-700 -translate-y-4 lg:-translate-y-12 rtl:rounded-br-3xl rtl:rounded-bl-none"
            src="https://picsum.photos/800/600?random=3"
            alt="Community planting"
          />
           <img
            className="h-full w-full object-cover rounded-br-3xl lg:rounded-none opacity-90 hover:opacity-100 transition-opacity duration-700 rtl:rounded-bl-3xl rtl:rounded-br-none"
            src="https://picsum.photos/800/600?random=4"
            alt="Green forest"
          />
        </div>
      </div>
    </div>
  );
};