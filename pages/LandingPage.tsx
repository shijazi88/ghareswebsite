import React from 'react';
import { Hero } from '../components/Hero';
import { EcoAssistant } from '../components/EcoAssistant';
import { User, Shovel, Award, Map, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';

export const LandingPage: React.FC = () => {
  const { t } = useLanguage();

  return (
    <>
      <Hero />
      
      {/* How it Works Section */}
      <section id="how-it-works" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-base text-green-600 font-semibold tracking-wide uppercase">{t.landing.processTitle}</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-stone-900 sm:text-4xl">
              {t.landing.processHeading}
            </p>
            <p className="mt-4 max-w-2xl text-xl text-stone-500 lg:mx-auto">
              {t.landing.processDesc}
            </p>
          </div>

          <div className="mt-20">
            <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
              
              <div className="relative">
                <dt>
                  <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-green-500 text-white">
                    <User className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <p className="ms-16 text-lg leading-6 font-medium text-stone-900">{t.landing.steps[1].title}</p>
                </dt>
                <dd className="mt-2 ms-16 text-base text-stone-500">
                  {t.landing.steps[1].desc}
                </dd>
              </div>

              <div className="relative">
                <dt>
                  <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-green-500 text-white">
                    <Map className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <p className="ms-16 text-lg leading-6 font-medium text-stone-900">{t.landing.steps[2].title}</p>
                </dt>
                <dd className="mt-2 ms-16 text-base text-stone-500">
                  {t.landing.steps[2].desc}
                </dd>
              </div>

              <div className="relative">
                <dt>
                  <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-green-500 text-white">
                    <Shovel className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <p className="ms-16 text-lg leading-6 font-medium text-stone-900">{t.landing.steps[3].title}</p>
                </dt>
                <dd className="mt-2 ms-16 text-base text-stone-500">
                  {t.landing.steps[3].desc}
                </dd>
              </div>

              <div className="relative">
                <dt>
                  <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-green-500 text-white">
                    <Award className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <p className="ms-16 text-lg leading-6 font-medium text-stone-900">{t.landing.steps[4].title}</p>
                </dt>
                <dd className="mt-2 ms-16 text-base text-stone-500">
                  {t.landing.steps[4].desc}
                </dd>
              </div>

            </dl>
          </div>
        </div>
      </section>

      {/* Roles Split Section */}
      <section className="bg-stone-50">
         <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="p-12 md:p-24 flex flex-col justify-center items-start bg-white border-r border-stone-100 rtl:border-r-0 rtl:border-l">
               <span className="text-green-600 font-bold tracking-wider uppercase text-sm mb-2">{t.landing.roles.initiator.tag}</span>
               <h3 className="text-3xl font-extrabold text-stone-900 mb-4">{t.landing.roles.initiator.title}</h3>
               <p className="text-stone-600 mb-8 text-lg">
                  {t.landing.roles.initiator.desc}
               </p>
               <Link to="/initiatives" className="flex items-center text-green-600 font-bold hover:text-green-700 transition-colors">
                  {t.landing.roles.initiator.btn} <ArrowRight className="ms-2 w-5 h-5 rtl:rotate-180" />
               </Link>
            </div>
            <div className="p-12 md:p-24 flex flex-col justify-center items-start bg-stone-100">
               <span className="text-stone-600 font-bold tracking-wider uppercase text-sm mb-2">{t.landing.roles.planter.tag}</span>
               <h3 className="text-3xl font-extrabold text-stone-900 mb-4">{t.landing.roles.planter.title}</h3>
               <p className="text-stone-600 mb-8 text-lg">
                  {t.landing.roles.planter.desc}
               </p>
               <button className="flex items-center text-stone-800 font-bold hover:text-stone-900 transition-colors">
                  {t.landing.roles.planter.btn} <ArrowRight className="ms-2 w-5 h-5 rtl:rotate-180" />
               </button>
            </div>
         </div>
      </section>

      {/* Impact Stats */}
      <section className="bg-green-700 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="grid grid-cols-2 gap-8 md:grid-cols-4 text-center">
              <div>
                 <div className="text-4xl font-bold text-white mb-2">15k+</div>
                 <div className="text-green-200">{t.landing.stats.trees}</div>
              </div>
              <div>
                 <div className="text-4xl font-bold text-white mb-2">240+</div>
                 <div className="text-green-200">{t.landing.stats.planters}</div>
              </div>
              <div>
                 <div className="text-4xl font-bold text-white mb-2">12</div>
                 <div className="text-green-200">{t.landing.stats.cities}</div>
              </div>
              <div>
                 <div className="text-4xl font-bold text-white mb-2">8.5k</div>
                 <div className="text-green-200">{t.landing.stats.certs}</div>
              </div>
           </div>
        </div>
      </section>

      <EcoAssistant />
    </>
  );
};