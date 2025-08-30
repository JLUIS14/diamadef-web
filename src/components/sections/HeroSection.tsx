export const HeroSection = () => (
  <section className="relative flex flex-col items-center justify-center text-center py-20 px-4 bg-gradient-to-br from-green-700 to-green-400 min-h-[40vh]">
    <h1 className="text-4xl md:text-5xl font-extrabold text-white drop-shadow mb-4">
      Bienvenido a Inversiones Diamadef
    </h1>
    <p className="text-lg md:text-2xl text-white mb-8 max-w-2xl drop-shadow">
      Diseñamos productos únicos en madera con responsabilidad ambiental y calidad garantizada.
    </p>
    <a
      href="#productos"
      className="inline-block px-8 py-3 bg-white text-green-800 font-semibold rounded-full shadow hover:bg-yellow-300 transition"
    >
      Explora nuestros productos
    </a>
  </section>
);
