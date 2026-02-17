"use client";

import { Leaf, Twitter, Facebook, Instagram, Mail } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export const Footer: React.FC = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-stone-900 text-stone-300">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-8 xl:col-span-1">
            <div className="flex items-center gap-2">
              <Leaf className="h-8 w-8 text-green-500 transform rtl:scale-x-[-1]" />
              <span className="text-2xl font-bold text-white">Ghares</span>
            </div>
            <p className="text-base text-stone-400">{t.footer.tagline}</p>
            <div className="flex space-x-6 rtl:space-x-reverse">
              <a href="#" className="text-stone-400 hover:text-green-500">
                <span className="sr-only">Facebook</span>
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="text-stone-400 hover:text-green-500">
                <span className="sr-only">Instagram</span>
                <Instagram className="h-6 w-6" />
              </a>
              <a href="#" className="text-stone-400 hover:text-green-500">
                <span className="sr-only">Twitter</span>
                <Twitter className="h-6 w-6" />
              </a>
            </div>
          </div>
          <div className="mt-12 grid grid-cols-2 gap-8 xl:mt-0 xl:col-span-2">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold text-stone-200 tracking-wider uppercase">
                  {t.footer.solutions}
                </h3>
                <ul className="mt-4 space-y-4">
                  <li>
                    <a href="#" className="text-base hover:text-white">
                      {t.footer.forInitiators}
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-base hover:text-white">
                      {t.footer.forPlanters}
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-base hover:text-white">
                      {t.footer.corporate}
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-base hover:text-white">
                      {t.footer.certificates}
                    </a>
                  </li>
                </ul>
              </div>
              <div className="mt-12 md:mt-0">
                <h3 className="text-sm font-semibold text-stone-200 tracking-wider uppercase">
                  {t.footer.support}
                </h3>
                <ul className="mt-4 space-y-4">
                  <li>
                    <a href="#" className="text-base hover:text-white">
                      {t.footer.helpCenter}
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-base hover:text-white">
                      {t.footer.regions}
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-base hover:text-white">
                      {t.footer.privacy}
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-base hover:text-white">
                      {t.footer.contact}
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="md:grid md:grid-cols-1 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold text-stone-200 tracking-wider uppercase">
                  {t.footer.contact}
                </h3>
                <ul className="mt-4 space-y-4">
                  <li className="flex items-center">
                    <Mail className="h-5 w-5 me-2 text-green-500" />{" "}
                    support@ghares.com
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-12 border-t border-stone-800 pt-8">
          <p className="text-base text-stone-400 xl:text-center">
            {t.footer.copyright}
          </p>
        </div>
      </div>
    </footer>
  );
};
