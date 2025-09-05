import { Navbar } from "./components/layout/Navbar";
import { Footer } from "./components/layout/Footer";
import { Routes, Route } from "react-router-dom";
import NotFound from "./pages/NotFound";
import ScrollToTop from "./components/ScrollToTop"; // ✅ Importa ScrollToTop
import { useEffect, useState } from "react";

import Home from "./pages/Home";
import About from "./pages/About";
import Products from "./pages/Products";
import Services from "./pages/Services";
import Gallery from "./pages/Gallery";
import Clients from "./pages/Clients";
import Blog from "./pages/Blog";
import Post from "./pages/Post";
import Contact from "./pages/Contact";

import Tornillo from "./pages/productos/maderas/Tornillo";
import Cachimbo from "./pages/productos/maderas/Cachimbo";
import Panguana from "./pages/productos/maderas/Panguana";
import Copaiba from "./pages/productos/maderas/Copaiba";
import Roble from "./pages/productos/maderas/Roble";
import Bolaina from "./pages/productos/maderas/Bolaina";
import Huayruro from "./pages/productos/maderas/Huayruro";
import Moena from "./pages/productos/maderas/Moena";
import Eucalipto from "./pages/productos/maderas/Eucalipto";
import Higuerilla from "./pages/productos/maderas/Higuerilla";

import Okoume from "./pages/productos/triplay/Okoume";
import Bintangor from "./pages/productos/triplay/Bintangor";
import Lupuna from "./pages/productos/triplay/Lupuna";
import Fenolico from "./pages/productos/triplay/Fenolico-bc";
import FenolicoDobleFilm from "./pages/productos/triplay/Fenolico-doble-film";
import Osb from "./pages/productos/triplay/OSB";
import Mdf from "./pages/productos/triplay/Mdf";

import Parihuelas from "./pages/productos/Parihuelas";
import Durmientes from "./pages/productos/Durmientes";
import Postes from "./pages/productos/Postes";

import Cortes from "./pages/servicios/Cortes";
import Termico from "./pages/servicios/Termico";
import Preventivo from "./pages/servicios/Preventivo";

export default function App() {
  // ✅ Mensajes dinámicos para el botón de WhatsApp
  const mensajes = ["¡Escríbenos!", "Estamos en línea", "Chatea con nosotros"];
  const [texto, setTexto] = useState(mensajes[0]);

  useEffect(() => {
    const intervalo = setInterval(() => {
      setTexto((prev) => {
        const index = mensajes.indexOf(prev);
        return mensajes[(index + 1) % mensajes.length];
      });
    }, 3000); // cambia cada 3 segundos

    return () => clearInterval(intervalo);
  }, []);

  return (
    <>
      <Navbar />
      <ScrollToTop /> {/* ✅ Hace scroll al inicio en cada ruta */}

      {/* ✅ Contenedor principal con padding superior para no ocultar el contenido detrás del navbar fijo */}
      <main className="pt-24">
        <Routes>
          {/* Rutas principales */}
          <Route path="/" element={<Home />} />
          <Route path="/nosotros" element={<About />} />
          <Route path="/productos" element={<Products />} />
          <Route path="/servicios" element={<Services />} />
          <Route path="/galeria" element={<Gallery />} />
          <Route path="/clientes" element={<Clients />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:id" element={<Post />} />
          <Route path="/contacto" element={<Contact />} />

          {/* Ruta específica para Maderas */}
          <Route path="/productos/maderas/tornillo" element={<Tornillo />} />
          <Route path="/productos/maderas/cachimbo" element={<Cachimbo />} />
          <Route path="/productos/maderas/panguana" element={<Panguana />} />
          <Route path="/productos/maderas/copaiba" element={<Copaiba />} />
          <Route path="/productos/maderas/roble" element={<Roble />} />
          <Route path="/productos/maderas/bolaina" element={<Bolaina />} />
          <Route path="/productos/maderas/huayruro" element={<Huayruro />} />
          <Route path="/productos/maderas/moena" element={<Moena />} />
          <Route path="/productos/maderas/eucalipto" element={<Eucalipto />} />
          <Route path="/productos/maderas/higuerilla" element={<Higuerilla />} />

          {/* Triplay */}
          <Route path="/productos/triplay/okoume" element={<Okoume />} />
          <Route path="/productos/triplay/bintangor" element={<Bintangor />} />
          <Route path="/productos/triplay/lupuna" element={<Lupuna />} />
          <Route path="/productos/triplay/fenolico-bc" element={<Fenolico />} />
          <Route path="/productos/triplay/fenolico-doble-film" element={<FenolicoDobleFilm />} />
          <Route path="/productos/triplay/osb" element={<Osb />} />
          <Route path="/productos/triplay/mdf" element={<Mdf />} />

          {/* Otros productos */}
          <Route path="/productos/parihuelas" element={<Parihuelas />} />
          <Route path="/productos/durmientes" element={<Durmientes />} />
          <Route path="/productos/postes" element={<Postes />} />

          {/* Servicios */}
          <Route path="/servicios/cortes" element={<Cortes />} />
          <Route path="/servicios/termico" element={<Termico />} />
          <Route path="/servicios/preventivo" element={<Preventivo />} />

          {/* Página no encontrada */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>

      <Footer />

      {/* ✅ Botón flotante de WhatsApp con mensaje dinámico */}
      <a
        href={`https://wa.me/51966776467?text=${encodeURIComponent(
          "👋 ¡Hola! Bienvenido a Diamadef. Estamos atentos para responder tu consulta."
        )}`}
        target="_blank"
        rel="noopener noreferrer"
        style={{
          position: "fixed",
          bottom: "20px",
          right: "20px",
          display: "flex",
          alignItems: "center",
          gap: "10px",
          backgroundColor: "#25D366",
          color: "white",
          borderRadius: "30px",
          padding: "10px 15px",
          fontSize: "16px",
          fontWeight: "bold",
          textDecoration: "none",
          boxShadow: "0 2px 10px rgba(0,0,0,0.3)",
          zIndex: 1000,
          transition: "all 0.3s ease-in-out",
        }}
      >
        <i className="fab fa-whatsapp" style={{ fontSize: "24px" }}></i>
        <span>{texto}</span>
      </a>
    </>
  );
}
