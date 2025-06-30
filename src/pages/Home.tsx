import {HeroSection} from "../components/sections/HeroSection";
import ValuesSection from "../components/sections/ValuesSection";
import FeaturedProductsSection from "../components/sections/FeaturedProductsSection";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <ValuesSection />
      <FeaturedProductsSection />
      {/* Aquí puedes agregar más secciones tipo: Productos destacados, Galería rápida, CTA, etc. */}
    </div>
  );
}