
import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo-diamadef.png";
import {
  productsMenu,
  ProductMenuItem,
  SubmenuItem,
} from "../../constants/productsMenu";

// Servicios
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

  // Links a redes — cámbialos por los tuyos reales
  const socialLinks = {
    linkedin: "https://www.linkedin.com",
    facebook: "https://www.facebook.com",
    instagram: "https://www.instagram.com",
    youtube: "https://www.youtube.com/embed/i2myQ1gG0X0",
    tiktok: "https://www.tiktok.com",
  };

  return (
    <nav
      id="navbar"
      className="fixed top-0 left-0 w-full z-50 bg-gradient-to-r from-green-700 to-green-400 shadow-lg px-4 py-2 flex items-center justify-between"
    >
      <div className="flex items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <img
            src={logo}
            alt="Logo Diamadef"
            className="h-12 w-auto sm:h-24 md:h-28 lg:h-32 rounded-xl bg-white shadow-lg object-contain border-4 border-green-200 transition-all duration-200"
            title="Productos de Calidad Para Tus Proyectos"
          />
        </Link>

        {/* Redes junto al logo */}
        <div className="hidden md:flex items-center gap-2 ml-4">
          {/* LinkedIn */}
          <a
            href={socialLinks.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="w-8 h-8 rounded-full flex items-center justify-center text-white shadow-sm"
            style={{ backgroundColor: "#0A66C2" }}
            title="LinkedIn"
          >
            <i className="fab fa-linkedin-in"></i>
          </a>
          {/* Facebook */}
          <a
            href={socialLinks.facebook}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
            className="w-8 h-8 rounded-full flex items-center justify-center text-white shadow-sm"
            style={{ backgroundColor: "#1877F2" }}
            title="Facebook"
          >
            <i className="fab fa-facebook-f"></i>
          </a>
          {/* Instagram */}
          <a
            href={socialLinks.instagram}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="w-8 h-8 rounded-full flex items-center justify-center text-white shadow-sm"
            title="Instagram"
            style={{
              background:
                "linear-gradient(45deg, #f58529 0%, #dd2a7b 50%, #515bd4 100%)",
            }}
          >
            <i className="fab fa-instagram"></i>
          </a>
          {/* YouTube */}
          <a
            href={socialLinks.youtube}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="YouTube"
            className="w-8 h-8 rounded-full flex items-center justify-center text-white shadow-sm"
            style={{ backgroundColor: "#FF0000" }}
            title="YouTube"
          >
            <i className="fab fa-youtube"></i>
          </a>
          {/* TikTok */}
          <a
            href={socialLinks.tiktok}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="TikTok"
            className="w-8 h-8 rounded-full flex items-center justify-center text-white shadow-sm"
            style={{ backgroundColor: "#010101" }}
            title="TikTok"
          >
            <i className="fab fa-tiktok"></i>
          </a>
        </div>
      </div>

      {/* Botón móvil */}
      <button
        className="md:hidden p-2 focus:outline-none z-50 relative"
        onClick={() => setOpen(!open)}
        aria-label="Abrir menú"
      >
        <span className="block w-6 h-1 bg-white my-1 rounded"></span>
        <span className="block w-6 h-1 bg-white my-1 rounded"></span>
        <span className="block w-6 h-1 bg-white my-1 rounded"></span>
      </button>

      {/* Sidebar móvil */}
      <div
        className={`fixed top-0 left-0 h-full w-72 bg-green-900 text-white shadow-2xl transform transition-transform duration-300 ease-in-out md:hidden overflow-y-auto z-40 ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="p-4 flex justify-between items-center border-b border-green-700">
          <span className="font-bold text-lg">Menú</span>
          <button
            onClick={() => setOpen(false)}
            className="text-white text-2xl font-bold"
            aria-label="Cerrar menú"
          >
            ×
          </button>
        </div>

        {/* Redes en móvil */}
        <div className="p-4 flex gap-3">
          <a
            href={socialLinks.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="w-9 h-9 rounded-full flex items-center justify-center text-white shadow-sm"
            style={{ backgroundColor: "#0A66C2" }}
            title="LinkedIn"
          >
            <i className="fab fa-linkedin-in"></i>
          </a>
          <a
            href={socialLinks.facebook}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
            className="w-9 h-9 rounded-full flex items-center justify-center text-white shadow-sm"
            style={{ backgroundColor: "#1877F2" }}
            title="Facebook"
          >
            <i className="fab fa-facebook-f"></i>
          </a>
          <a
            href={socialLinks.instagram}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="w-9 h-9 rounded-full flex items-center justify-center text-white shadow-sm"
            title="Instagram"
            style={{
              background:
                "linear-gradient(45deg, #f58529 0%, #dd2a7b 50%, #515bd4 100%)",
            }}
          >
            <i className="fab fa-instagram"></i>
          </a>
          <a
            href={socialLinks.youtube}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="YouTube"
            className="w-9 h-9 rounded-full flex items-center justify-center text-white shadow-sm"
            style={{ backgroundColor: "#FF0000" }}
            title="YouTube"
          >
            <i className="fab fa-youtube"></i>
          </a>
          <a
            href={socialLinks.tiktok}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="TikTok"
            className="w-9 h-9 rounded-full flex items-center justify-center text-white shadow-sm"
            style={{ backgroundColor: "#010101" }}
            title="TikTok"
          >
            <i className="fab fa-tiktok"></i>
          </a>
        </div>

        {/* Links móviles */}
        <ul className="flex flex-col">
          {navLinks.map((link) => {
            if (link.name === "Productos") {
              return (
                <li key="productos" className="border-b border-green-700">
                  <button
                    className="w-full text-left px-4 py-3 font-semibold flex justify-between items-center"
                    onClick={() => setOpenProducts(!openProducts)}
                  >
                    Productos <span>{openProducts ? "▲" : "▼"}</span>
                  </button>
                  {openProducts && (
                    <ul className="bg-green-800">
                      {productsMenu.map((item: ProductMenuItem, idx: number) => (
                        <li key={item.label}>
                          {item.submenu ? (
                            <>
                              <button
                                className="w-full text-left px-6 py-2 flex justify-between items-center hover:bg-green-700"
                                onClick={() =>
                                  setSubmenuOpen(
                                    submenuOpen === idx ? null : idx
                                  )
                                }
                              >
                                {item.label}{" "}
                                <span>
                                  {submenuOpen === idx ? "▲" : "▶"}
                                </span>
                              </button>
                              {submenuOpen === idx && (
                                <ul className="bg-green-700">
                                  {item.submenu.map((sub: SubmenuItem) => (
                                    <li key={sub.name}>
                                      <Link
                                        to={sub.path}
                                        className="block px-8 py-2 hover:bg-green-600"
                                        onClick={() => setOpen(false)}
                                      >
                                        {sub.name}
                                      </Link>
                                    </li>
                                  ))}
                                </ul>
                              )}
                            </>
                          ) : (
                            <Link
                              to={item.path || "#"}
                              className="block px-6 py-2 hover:bg-green-700"
                              onClick={() => setOpen(false)}
                            >
                              {item.label}
                            </Link>
                          )}
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              );
            }

            if (link.name === "Servicios") {
              return (
                <li key="servicios" className="border-b border-green-700">
                  <button
                    className="w-full text-left px-4 py-3 font-semibold flex justify-between items-center"
                    onClick={() => setOpenServices(!openServices)}
                  >
                    Servicios <span>{openServices ? "▲" : "▼"}</span>
                  </button>
                  {openServices && (
                    <ul className="bg-green-800">
                      {servicesMenu.map((service) => (
                        <li key={service.name}>
                          <Link
                            to={service.path}
                            className="block px-6 py-2 hover:bg-green-700"
                            onClick={() => setOpen(false)}
                          >
                            {service.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              );
            }

            return (
              <li key={link.name} className="border-b border-green-700">
                <Link
                  to={link.path}
                  className="block px-4 py-3 font-semibold hover:bg-green-700"
                  onClick={() => setOpen(false)}
                >
                  {link.name}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>

      {/* Menú Desktop */}
      <div className="hidden md:flex items-center gap-6">
        <ul className="flex gap-2 items-center">
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
                    className="px-2 py-2 text-white text-lg font-semibold hover:bg-yellow-400 transition-colors flex items-center"
                  >
                    Productos <span className="ml-1 text-[10px]">▼</span>
                  </button>
                  <ul
                    className={`absolute left-0 top-full mt-0 min-w-[240px] bg-white text-green-900 shadow-xl rounded z-50 ${
                      openProducts ? "block" : "hidden"
                    }`}
                  >
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
                              {item.label}{" "}
                              <span className="ml-2 text-[10px]">▶</span>
                            </span>
                            <ul
                              className={`${
                                submenuOpen === idx ? "block" : "hidden"
                              } absolute top-0 left-full w-56 bg-white text-green-900 shadow-xl rounded`}
                            >
                              {item.submenu.map((sub: SubmenuItem) => (
                                <li key={sub.name}>
                                  <Link
                                    to={sub.path}
                                    className="block px-4 py-2 hover:bg-yellow-300"
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
                    className="px-2 py-2 text-white text-lg font-semibold hover:bg-yellow-400 transition-colors flex items-center"
                  >
                    Servicios <span className="ml-1 text-[10px]">▼</span>
                  </button>
                  <ul
                    className={`absolute left-0 top-full mt-0 min-w-[240px] bg-white text-green-900 shadow-xl rounded z-50 ${
                      openServices ? "block" : "hidden"
                    }`}
                  >
                    {servicesMenu.map((service) => (
                      <li key={service.name}>
                        <Link
                          to={service.path}
                          className="block px-4 py-2 hover:bg-yellow-300"
                        >
                          {service.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </li>
              );
            }

            return (
              <li key={link.name}>
                <Link
                  to={link.path}
                  className="block px-3 py-2 text-white text-lg font-semibold hover:bg-yellow-400 transition-colors"
                >
                  {link.name}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};
