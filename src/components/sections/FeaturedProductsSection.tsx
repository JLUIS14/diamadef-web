import { Link } from "react-router-dom";
import img10 from '../../assets/productos/img10.jpg';
import img11 from '../../assets/productos/FenolicoDobleFilm.jpg';
import img12 from '../../assets/productos/img12.jpg';
const productos = [
  {
    nombre: "Triplay Fenólico",
    imagen: img11,
    descripcion: "Fabricada con capas de pino, abedul, eucalipto y alamo, impregnada en resina fenolica con alta resistencia a la abrasión, humedad, calor y productos quimicos, cumple con normativas WBP, ideal para uso estructural y exterior",
    link:  "/productos/triplay/Fenolico-doble-film",
  },
  {
    nombre: "MDF natural",
    imagen: img12,
    descripcion: "Es un producto de madera que se obtiene procesando fibras de madera combinándolo con cera y resina para formar paneles estables y uniformes.",
    link: "/productos/triplay/Mdf",
  },
  {
    nombre: "Madera Selecta Nacional",
    imagen: img10,
    descripcion: "diversos tipos de madera nacional; Tornillo, Eucalipto, Roble, Copaiba, Cachimbo, Panguana, con caracteristicas similares en sus propiedades físicas y mecánicas.",
    link: "/productos/maderas/Tornillo"
  },
];

export default function FeaturedProductsSection() {
  return (
    <section className="py-12 px-4 bg-white" id="productos">
      <h2 className="text-3xl font-bold text-green-900 mb-8 text-center">Productos Destacados</h2>
      <div className="max-w-6xl mx-auto grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
        {productos.map((prod) => (
          <div key={prod.nombre} className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-shadow p-4 flex flex-col items-center border border-green-100">
            <img
              src={prod.imagen}
              alt={`${prod.nombre} - ${prod.descripcion.slice(0, 120)}...`}
              className="w-full h-48 object-cover rounded-lg mb-4"
              loading="lazy"
            />
            <h3 className="text-xl font-semibold text-green-800">{prod.nombre}</h3>
            <p className="text-gray-700 text-justify mt-2">{prod.descripcion}</p>
            
            <Link to={prod.link}>
            <button className="mt-4 bg-green-700 text-white px-4 py-2 rounded hover:bg-yellow-500 transition-colors">
             Ver más
            </button>
          </Link>

          </div>
        ))}
      </div>
    </section>
  );
}
