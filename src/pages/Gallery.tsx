import { useState, useEffect } from "react";

export default function Gallery() {
  const images = [
    "/images/galeria/img12.jpg",
    "/images/galeria/mina1.jpg",
    "/images/galeria/img6.jpg",
    "/images/galeria/img8.jpg",
    "/images/galeria/img1.jpg",
    "/images/galeria/img9.jpg",
    "/images/galeria/img5.jpg",
    "/images/galeria/construccion.jpg",
    "/images/galeria/despacho.jpg",
  ];

  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const closeModal = () => setSelectedIndex(null);
  const showPrev = () =>
    setSelectedIndex((prev) =>
      prev !== null ? (prev === 0 ? images.length - 1 : prev - 1) : prev
    );
  const showNext = () =>
    setSelectedIndex((prev) =>
      prev !== null ? (prev === images.length - 1 ? 0 : prev + 1) : prev
    );

  // 👇 Manejo de teclado
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedIndex !== null) {
        if (e.key === "Escape") closeModal();
        if (e.key === "ArrowLeft") showPrev();
        if (e.key === "ArrowRight") showNext();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedIndex]);

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">Galería</h1>
      <p className="mb-6 text-gray-700">
        Explora imágenes de nuestros proyectos y productos.
      </p>

      {/* Grid de imágenes */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {images.map((src, index) => (
          <div
            key={index}
            className="overflow-hidden rounded-xl shadow-md hover:shadow-lg transition cursor-pointer"
            onClick={() => setSelectedIndex(index)}
          >
            <img
              src={src}
              alt={`Galería ${index + 1}`}
              className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>
        ))}
      </div>

      {/* Modal con navegación y teclado */}
      {selectedIndex !== null && (
        <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50">
          <div className="relative max-w-5xl max-h-[90vh] flex items-center">
            {/* Botón cerrar */}
            <button
              className="absolute top-2 right-2 bg-white text-black px-3 py-1 rounded-full shadow-lg hover:bg-gray-200"
              onClick={closeModal}
            >
              ✕
            </button>

            {/* Flecha izquierda */}
            <button
              className="absolute left-2 text-white text-3xl bg-black bg-opacity-50 rounded-full px-3 py-1 hover:bg-opacity-80"
              onClick={showPrev}
            >
              ‹
            </button>

            {/* Imagen seleccionada */}
            <img
              src={images[selectedIndex]}
              alt={`Imagen ${selectedIndex + 1}`}
              className="rounded-lg max-h-[90vh] object-contain mx-auto"
            />

            {/* Flecha derecha */}
            <button
              className="absolute right-2 text-white text-3xl bg-black bg-opacity-50 rounded-full px-3 py-1 hover:bg-opacity-80"
              onClick={showNext}
            >
              ›
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
