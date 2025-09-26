export default function Products() {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">Productos</h1>
      <p className="mb-6">Descubre nuestra gama de productos de madera y derivados:</p>

      <ul className="list-disc ml-6 space-y-4">
        {/* Maderas */}
        <li>
          <span className="font-semibold">Maderas</span>
          <ul className="list-circle ml-6 space-y-1">
            <li><a href="/productos/maderas/tornillo" className="text-blue-600 hover:underline">Tornillo</a></li>
            <li><a href="/productos/maderas/cachimbo" className="text-blue-600 hover:underline">Cachimbo</a></li>
            <li><a href="/productos/maderas/panguana" className="text-blue-600 hover:underline">Panguana</a></li>
            <li><a href="/productos/maderas/copaiba" className="text-blue-600 hover:underline">Copaiba</a></li>
            <li><a href="/productos/maderas/roble" className="text-blue-600 hover:underline">Roble</a></li>
            <li><a href="/productos/maderas/bolaina" className="text-blue-600 hover:underline">Bolaina</a></li>
            <li><a href="/productos/maderas/huayruro" className="text-blue-600 hover:underline">Huayruro</a></li>
            <li><a href="/productos/maderas/moena" className="text-blue-600 hover:underline">Moena</a></li>
            <li><a href="/productos/maderas/eucalipto" className="text-blue-600 hover:underline">Eucalipto</a></li>
            <li><a href="/productos/maderas/higuerilla" className="text-blue-600 hover:underline">Higuerilla</a></li>
          </ul>
        </li>

        {/* Triplay */}
        <li>
          <span className="font-semibold">Triplay</span>
          <ul className="list-circle ml-6 space-y-1">
            <li><a href="/productos/triplay/okoume" className="text-blue-600 hover:underline">Okoumé</a></li>
            <li><a href="/productos/triplay/bintangor" className="text-blue-600 hover:underline">Bintangor</a></li>
            <li><a href="/productos/triplay/lupuna" className="text-blue-600 hover:underline">Lupuna</a></li>
            <li><a href="/productos/triplay/fenolico-bc" className="text-blue-600 hover:underline">Fenólico BC</a></li>
            <li><a href="/productos/triplay/fenolico-doble-film" className="text-blue-600 hover:underline">Fenólico Doble Film</a></li>
            <li><a href="/productos/triplay/osb" className="text-blue-600 hover:underline">OSB</a></li>
            <li><a href="/productos/triplay/mdf" className="text-blue-600 hover:underline">MDF</a></li>
          </ul>
        </li>

        {/* Otros productos */}
        <li>
          <a href="/productos/parihuelas" className="text-blue-600 hover:underline">
            Parihuelas
          </a>
        </li>
        <li>
          <a href="/productos/durmientes" className="text-blue-600 hover:underline">
            Durmientes
          </a>
        </li>
        <li>
          <a href="/productos/postes" className="text-blue-600 hover:underline">
            Postes
          </a>
        </li>
      </ul>
    </div>
  );
}
