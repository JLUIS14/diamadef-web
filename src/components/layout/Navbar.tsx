import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo-diamadef.png";
import { productsMenu, ProductMenuItem, SubmenuItem } from "../../constants/productsMenu";

// Servicios definidos directamente (o puedes usar un archivo similar a productsMenu)
const servicesMenu = [
  { name: "Servicio de Cortes", path: "/servicios/Cortes" },
  { name: "Tratamiento Térmico", path: "/servicios/termico" },
 
  { name: "Tratamiento Preventivo", path: "/servicios/preventivo" },
];

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
  const [openProducts, setOpenProducts] = useState(false);
  const [submenuOpen, setSubmenuOpen] = useState<number | null>(null);
  const [openServices, setOpenServices] = useState(false);

  return (
    <nav className="bg-gradient-to-r from-green-800 to-green-400 shadow-lg px-4 py-2 flex items-center justify-between relative z-[9999]">
      {/* Logo */}
      <Link to="/" className="flex items-center">
        <img
          src={logo}
          alt="Logo Diamadef"
          className="h-12 w-auto sm:h-16 md:h-20 lg:h-24 rounded-xl bg-white shadow-lg object-contain border-4 border-green-200 transition-all duration-200"
          title="Productos de Calidad Para Tus Proyectos"
        />
      </Link>

      {/* Botón móvil */}
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
        {navLinks.map((link) => {
          if (link.name === "Productos") {
            return (
              <li
                key="productos"
                className="relative group"
                onMouseEnter={() => setOpenProducts(true)}
                onMouseLeave={() => {
                  setOpenProducts(false);
                  setSubmenuOpen(null);
                }}
              >
                <button
                  type="button"
                  className="px-2 py-2 text-white font-semibold hover:bg-yellow-400 transition-colors flex items-center"
                >
                  Productos <span className="ml-1 text-[10px] align-middle inline-block translate-y-[1px]">▼</span>
                </button>
                <ul className={`absolute left-0 top-full mt-0 min-w-[240px] bg-white text-green-900 shadow-xl rounded z-50 ${openProducts ? "block" : "hidden"}`}>
                  {productsMenu.map((item: ProductMenuItem, idx: number) => (
                    <li
                      key={item.label}
                      className="relative group"
                      onMouseEnter={() => setSubmenuOpen(idx)}
                      onMouseLeave={() => setSubmenuOpen(null)}
                    >
                      {item.submenu ? (
                        <>
                          <span className="flex justify-between items-center px-4 py-2 cursor-pointer hover:bg-yellow-300">
                            {item.label}
                            <span className="ml-2 text-[10px] leading-none translate-y-[1px]">▶</span>
                          </span>
                          <ul className={`absolute top-0 left-full w-56 bg-white text-green-900 shadow-xl rounded z-50 transition-all duration-200 ${submenuOpen === idx ? "block" : "hidden"}`}>
                            {item.submenu.map((sub: SubmenuItem) => (
                              <li key={sub.name}>
                                <Link
                                  to={sub.path}
                                  className="block px-4 py-2 hover:bg-yellow-300"
                                  onClick={() => {
                                    setOpen(false);
                                    setOpenProducts(false);
                                  }}
                                >
                                  {sub.name}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </>
                      ) : (
                        <Link
                          to={item.path || "#"}
                          className="block px-4 py-2 hover:bg-yellow-300"
                          onClick={() => {
                            setOpen(false);
                            setOpenProducts(false);
                          }}
                        >
                          {item.label}
                        </Link>
                      )}
                    </li>
                  ))}
                </ul>
              </li>
            );
          }

          if (link.name === "Servicios") {
            return (
              <li
                key="servicios"
                className="relative group"
                onMouseEnter={() => setOpenServices(true)}
                onMouseLeave={() => setOpenServices(false)}
              >
                <button
                  type="button"
                  className="px-2 py-2 text-white font-semibold hover:bg-yellow-400 transition-colors flex items-center"
                >
                  Servicios <span className="ml-1 text-[10px] align-middle inline-block translate-y-[1px]">▼</span>
                </button>
                <ul className={`absolute left-0 top-full mt-0 min-w-[240px] bg-white text-green-900 shadow-xl rounded z-50 ${openServices ? "block" : "hidden"}`}>
                  {servicesMenu.map((service) => (
                    <li key={service.name}>
                      <Link
                        to={service.path}
                        className="block px-4 py-2 hover:bg-yellow-300"
                        onClick={() => {
                          setOpen(false);
                          setOpenServices(false);
                        }}
                      >
                        {service.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </li>
            );
          }

          // Enlaces normales
          return (
            <li key={link.name}>
              <Link
                to={link.path}
                className="block px-2 py-2 text-white font-semibold hover:bg-yellow-400 transition-colors"
                onClick={() => setOpen(false)}
              >
                {link.name}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};
