import { useState, useEffect } from "react";

const images = [
  "/images/img2.jpg",
  "/images/img4.jpg",
  "/images/img14.jpg", // ✅ agrega las imágenes que quieras
];

export const HeroSection = () => {
  const [currentImage, setCurrentImage] = useState(0);

  // Cambio automático
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 5000); // ⏱️ cambia cada 5s
    return () => clearInterval(interval);
  }, []);

  // Funciones de navegación manual
  const goToSlide = (index: number) => setCurrentImage(index);
  const prevSlide = () =>
    setCurrentImage((prev) => (prev - 1 + images.length) % images.length);
  const nextSlide = () =>
    setCurrentImage((prev) => (prev + 1) % images.length);

  return (
    <section
      className="relative flex flex-col items-center justify-center text-center py-20 px-4 min-h-[60vh] bg-cover bg-center transition-all duration-1000"
      style={{
        backgroundImage: `url(${images[currentImage]})`,
      }}
    >
      {/* Capa de oscurecimiento */}
      <div className="absolute inset-0 bg-black bg-opacity-5 transition-all duration-1000"></div>

      {/* Contenido */}
      <div className="relative z-10">
        <h1 className="text-4xl md:text-5xl font-extrabold text-white drop-shadow mb-4">
          Bienvenido a Inversiones Diamadef
        </h1>
        <p className="text-lg md:text-2xl text-white mb-8 max-w-2xl drop-shadow">
          Diseñamos productos únicos en madera con responsabilidad ambiental y
          calidad garantizada.
        </p>
        <a
          href="#productos"
          className="inline-block px-8 py-3 bg-white text-green-800 font-semibold rounded-full shadow hover:bg-yellow-300 transition"
        >
          Explora nuestros productos
        </a>
      </div>

      

      {/* ⬅️ Flecha izquierda */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-black bg-opacity-40 text-white p-3 rounded-full hover:bg-opacity-70 transition z-20"
      >
        &#10094;
      </button>

      {/* ➡️ Flecha derecha */}
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-black bg-opacity-40 text-white p-3 rounded-full hover:bg-opacity-70 transition z-20"
      >
        &#10095;
      </button>
    </section>
  );
};
