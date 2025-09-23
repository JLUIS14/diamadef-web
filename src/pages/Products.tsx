export default function Products() {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">Productos</h1>
      <p className="mb-4">Descubre nuestros productos de madera y derivados:</p>

      <ul className="list-disc ml-6 space-y-4">
        <li>
          <span className="font-semibold">Maderas</span>
          <ul className="list-circle ml-6 space-y-1">
            <li>
              <a href="/productos/maderas/tornillo" className="text-blue-600 hover:underline">
                Tornillo
              </a>
            </li>
            <li>
              <a href="/productos/maderas/cachimbo" className="text-blue-600 hover:underline">
                Cachimbo
              </a>
            </li>
            <li>
              <a href="/productos/maderas/panguana" className="text-blue-600 hover:underline">
                Panguana
              </a>
            </li>
            <li>
              <a href="/productos/maderas/copaiba" className="text-blue-600 hover:underline">
                Copaiba
              </a>
            </li>
            <li>
              <a href="/productos/maderas/roble" className="text-blue-600 hover:underline">
                Roble
              </a>
            </li>
            <li>
              <a href="/productos/maderas/bolaina" className="text-blue-600 hover:underline">
                Bolaina
              </a>
            </li>
            <li>
              <a href="/productos/maderas/huayruro" className="text-blue-600 hover:underline">
                Huayruro
              </a>
            </li>
          </ul>
        </li>

        <li>
          <span className="font-semibold">Triplay</span>
          <ul className="list-circle ml-6 space-y-1">
             <li>
              <a href="/productos/triplay/triplay okoume" className="text-blue-600 hover:underline">
               Triplay Okoume
              </a>
            </li>
            
            
            <li>
              <a href="/productos/triplay/fenolico" className="text-blue-600 hover:underline">
               Triplay Fenólico
              </a>
            </li>
            <li>
              <a href="/productos/triplay/mdf" className="text-blue-600 hover:underline">
                MDF
              </a>
            </li>
            <li>
              <a href="/productos/triplay/osb" className="text-blue-600 hover:underline">
                OSB
              </a>
            </li>
          </ul>
        </li>

        <li>
          <a href="/productos/pallets" className="text-blue-600 hover:underline">
            Pallets
          </a>
        </li>

        <li>
          <a href="/productos/durmientes" className="text-blue-600 hover:underline">
            Durmientes
          </a>
        </li>

        <li>
          <a href="/productos/rollizos" className="text-blue-600 hover:underline">
            Rollizos
          </a>
        </li>
      </ul>
    </div>
  );
}
