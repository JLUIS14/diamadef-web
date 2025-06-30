
import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo-diamadef.png";

const navLinks = [
 { name: "Inicio", path: "/" },
  { name: "Nosotros", path: "/nosotros" },
  { name: "Productos", path: "/productos" },
  { name: "Servicios", path: "/servicios" },
  { name: "Galería", path: "/galeria" },
  { name: "Clientes", path: "/clientes" },
  { name: "Blog", path: "/blog" },
  { name: "Contacto", path: "/contacto" },
];

export const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-gradient-to-r from-green-800 to-green-400 shadow-lg px-4 py-2 flex items-center justify-between">
      {/* Logo */}
      <Link to="/" className="flex items-center">
        <img
           src={logo}
           alt="Logo Diamadef"
           className="
            h-12         // altura pequeña por defecto
            w-auto
            sm:h-16     // altura mediana para pantallas ≥640px
            md:h-20     // altura más grande para pantallas ≥768px
            lg:h-24     // aún más grande para ≥1024px
            max-w-xs    // que nunca sea demasiado grande
            rounded-xl
            bg-white
            shadow-lg
            object-contain
            border-4
            border-green-200
            transition-all
            duration-200
            "
            title="Productos de Calidad Para Tus Proyectos"
         />

      </Link>
      {/* Botón hamburguesa para móvil */}
      <button
        className="md:hidden p-2 focus:outline-none"
        onClick={() => setOpen(!open)}
        aria-label="Abrir menú"
      >
        <span className="block w-6 h-1 bg-white my-1 rounded"></span>
        <span className="block w-6 h-1 bg-white my-1 rounded"></span>
        <span className="block w-6 h-1 bg-white my-1 rounded"></span>
      </button>
      {/* Menú */}
      <ul className={`flex-col md:flex-row md:flex gap-2 items-center absolute md:static top-20 left-0 w-full md:w-auto bg-green-800 md:bg-transparent transition-all duration-300 z-10 ${open ? "flex" : "hidden"}`}>
         {navLinks.map((link) => (
             <li key={link.name}>
              <Link
                to={link.path}
                className="block px-2 py-2 text-white font-semibold hover:text-green-200 transition-colors"
                onClick={() => setOpen(false)}
                >
                  {link.name}
             </Link>
             </li>
         ))}
        </ul>
    </nav>
  );
};
