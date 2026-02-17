"use client";

import { Initiative } from "@/types";
import { MapPin, Sprout } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const MOCK_INITIATIVES: Initiative[] = [
  {
    id: "1",
    title: "Ghaf Tree Reforestation",
    description:
      "Planting the national tree of the UAE, known for its drought resistance and cultural significance.",
    region: "Al Dhaid, Sharjah",
    price: 50,
    imageUrl: "https://picsum.photos/400/300?random=10",
    category: "Desert Greening",
    progress: 75,
    target: 1000,
  },
  {
    id: "2",
    title: "Olive Grove Expansion",
    description:
      "Supporting sustainable agriculture by planting olive trees in the northern highlands.",
    region: "Al Jouf, KSA",
    price: 35,
    imageUrl: "https://picsum.photos/400/300?random=11",
    category: "General Planting",
    progress: 40,
    target: 5000,
  },
  {
    id: "3",
    title: "Urban Shade Initiative",
    description:
      "Planting Neem trees in city centers to reduce urban heat islands.",
    region: "Riyadh, KSA",
    price: 45,
    imageUrl: "https://picsum.photos/400/300?random=12",
    category: "Urban Forestry",
    progress: 15,
    target: 500,
  },
  {
    id: "4",
    title: "Sidr Tree Legacy",
    description:
      "Planting Sidr trees for honey production and ecosystem support.",
    region: "Hatta, Dubai",
    price: 60,
    imageUrl: "https://picsum.photos/400/300?random=13",
    category: "General Planting",
    progress: 90,
    target: 200,
  },
];

export default function InitiativesPage() {
  const { t } = useLanguage();

  return (
    <div className="bg-stone-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-stone-900 sm:text-4xl">
            {t.initiatives.heading}
          </h2>
          <p className="mt-4 max-w-2xl text-xl text-stone-500 mx-auto">
            {t.initiatives.subheading}
          </p>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {MOCK_INITIATIVES.map((initiative) => (
            <div
              key={initiative.id}
              className="flex flex-col bg-white rounded-xl shadow-sm hover:shadow-lg transition-shadow overflow-hidden border border-stone-100"
            >
              <div className="flex-shrink-0 relative">
                <img
                  className="h-48 w-full object-cover"
                  src={initiative.imageUrl}
                  alt={initiative.title}
                />
                <span className="absolute top-4 right-4 rtl:right-auto rtl:left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-green-700 uppercase tracking-wide">
                  {initiative.category}
                </span>
              </div>
              <div className="flex-1 p-6 flex flex-col justify-between">
                <div className="flex-1">
                  <div className="flex items-center text-sm text-stone-500 mb-2">
                    <MapPin className="flex-shrink-0 me-1.5 h-4 w-4 text-green-500" />
                    {initiative.region}
                  </div>
                  <h3 className="text-xl font-bold text-stone-900 group-hover:text-green-600 transition-colors">
                    {initiative.title}
                  </h3>
                  <p className="mt-3 text-base text-stone-500 line-clamp-2">
                    {initiative.description}
                  </p>
                </div>

                <div className="mt-6">
                  <div className="flex items-center justify-between text-sm font-medium text-stone-900 mb-1">
                    <span>{t.initiatives.funded}</span>
                    <span>{initiative.progress}%</span>
                  </div>
                  <div className="w-full bg-stone-200 rounded-full h-2.5 mb-4">
                    <div
                      className="bg-green-600 h-2.5 rounded-full rtl:rounded-r-full rtl:rounded-l-none"
                      style={{ width: `${initiative.progress}%` }}
                    ></div>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-stone-900">
                      ${initiative.price}
                    </span>
                    <button className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500">
                      {t.initiatives.plantNow}{" "}
                      <Sprout className="ms-2 -me-1 h-4 w-4" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
