"use client"
import { useEffect, useState } from "react";
import entranceData from "../data/entrance.json";

// Definir el tipo para los idiomas
type Language = {
  language: string;
  short: string;
  flag: string;
};

export default function Entrance() {
  const [languages, setLanguages] = useState<Language[]>([]);

  useEffect(() => {
    setLanguages(entranceData);
  }, []);

  const handleLanguageClick = (langShort: string) => {
    // Solo hacer scroll si es inglés
    if (langShort === "EN") {
      // Buscar el contenedor con scroll
      const scrollContainer = document.querySelector('.scroll-container');
      if (scrollContainer) {
        scrollContainer.scrollTo({
          top: window.innerHeight,
          behavior: "smooth"
        });
      }
    }
    // Para otros idiomas, no hacer nada (aún no disponibles)
  };

  return (
    <div className="h-screen bg-black flex flex-col md:flex-row items-center justify-center relative w-screen ">
      {/* Logo en el centro */}
      <div className="flex flex-col items-center">
        <img
          src="/logo-entrance.png"
          alt="logo"
          className="h-[400px] lg:h-100 w-auto my-10"
        />

        {/* 📱 Mobile slogan (debajo del logo) */}
        <p className="text-white text-[.7em] mt-13 md:hidden text-center font-semibold">
          Efficiency. Transparency. Accuracy.
        </p>
      </div>

      {/* 🌍 Idiomas en la esquina superior derecha */}
      <div className="absolute top-7 md:top-13 right-7 md:right-30 flex flex-col space-y-2 text-white ">
        {languages.map((lang) => (
          <div
            key={lang.short}
            onClick={() => handleLanguageClick(lang.short)}
            className={`flex items-center space-x-2 cursor-pointer transition-all ${
              lang.short === "EN" 
                ? "hover:underline hover:opacity-80" 
                : "opacity-50 cursor-not-allowed"
            }`}
          >
            <img 
              src={lang.flag} 
              alt={`${lang.language} flag`}
              className="w-5 h-auto invisible"
            />
            <span className="text-sm font-medium">{lang.short}</span>
          </div>
        ))}
      </div>

      {/* 💻 Desktop slogan en esquina inferior izquierda */}
      <div className="absolute bottom-20 left-30 text-white text-lg font-medium hidden md:block md:border-l-1 md:pl-2 md:pt-24">
        <p>Accuracy.</p>
        <p>Efficiency.</p>
        <p>Transparency.</p>
      </div>
    </div>
  );
}