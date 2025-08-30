// src/components/SloganBanner.tsx
import fondoSlogan from "../assets/img3.jpg"; // Usa tu mejor imagen

export default function SloganBanner() {
  return (
    <section className="relative w-full h-64 flex items-center justify-center mb-8 rounded-2xl overflow-hidden shadow-lg">
      <img
        src={fondoSlogan}
        alt="Soluciones en madera"
        className="absolute inset-0 w-full h-full object-cover opacity-80"
      />
      <div className="relative z-10 text-center">
        <h1 className="text-2xl md:text-4xl font-extrabold text-yellow-200 drop-shadow-lg">
          Diamadef Inspirando Proyectos, Creando un Futuro Sostenible
        </h1>
        {/* Se puede agregar un botón aquí si fuera necesario */}
      </div>
    </section>
  );
}
