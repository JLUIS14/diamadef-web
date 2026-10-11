import { useState, useEffect } from "react";
import { Seo } from "../common/Seo";

const images = [
  "/images/img14.jpg",
  "/images/img4.jpg",
  "/images/img13.jpg",
  "/images/img2.jpg",
  "/images/img16.jpg",
];

const WHATSAPP_URL =
  "https://wa.me/51946917999?text=" +
  encodeURIComponent("Hola Diamadef, quisiera una cotización de madera.");

export const HeroSection = () => {
  const [currentImage, setCurrentImage] = useState(0);

  // Cambio automático cada 5 s
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const prevSlide = () =>
    setCurrentImage((prev) => (prev - 1 + images.length) % images.length);
  const nextSlide = () =>
    setCurrentImage((prev) => (prev + 1) % images.length);

  return (
    <section
      aria-label="Venta de madera en Lima - Inversiones Diamadef"
      className="relative flex flex-col items-center justify-center text-center py-20 px-4 min-h-[60vh] bg-cover bg-center transition-all duration-1000"
      style={{
        backgroundImage: `url(${images[currentImage]})`,
      }}
    >
      <Seo path="/" />
      {/* Capa de oscurecimiento */}
      <div className="absolute inset-0 bg-black bg-opacity-20 transition-all duration-1000"></div>

      {/* Contenido */}
      <div className="relative z-10 max-w-4xl">
        <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold text-white drop-shadow mb-4 opacity-0 animate-fadeInUp">
          Venta de Madera en Lima y todo el Perú
          <br />
          <span className="text-yellow-400">MADESBA</span>
        </h1>

        <p className="text-base sm:text-lg md:text-2xl text-white mb-8 max-w-3xl mx-auto text-center drop-shadow animate-fadeInUp-delay1 bg-black bg-opacity-30 p-3 rounded">
          <strong>Madera tornillo, bolaina, cachimbo, eucalipto</strong> y más.
          <strong> Triplay, fenólicos, MDF, OSB, parihuelas, durmientes y postes</strong>.
          Cortes a medida y tratamiento de madera, con envíos a todo el Perú.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 justify-center opacity-0 animate-fadeInUp-delay2">
          <a
            href="#productos"
            className="inline-block px-8 py-3 bg-white text-green-800 font-semibold text-lg md:text-xl rounded-full shadow hover:bg-yellow-300 transition"
          >
            Ver productos de madera
          </a>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-3 bg-green-600 text-white font-semibold text-lg md:text-xl rounded-full shadow hover:bg-green-500 transition"
          >
            Cotizar por WhatsApp
          </a>
        </div>
      </div>

      {/* Flecha izquierda */}
      <button
        onClick={prevSlide}
        aria-label="Imagen anterior"
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-black bg-opacity-40 text-white p-3 rounded-full hover:bg-opacity-70 transition z-20"
      >
        &#10094;
      </button>

      {/* Flecha derecha */}
      <button
        onClick={nextSlide}
        aria-label="Imagen siguiente"
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-black bg-opacity-40 text-white p-3 rounded-full hover:bg-opacity-70 transition z-20"
      >
        &#10095;
      </button>
    </section>
  );
};