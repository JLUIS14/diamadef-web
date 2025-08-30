export interface SubmenuItem {
  name: string;
  path: string;
}

export interface ProductMenuItem {
  label: string;
  path?: string;
  submenu?: SubmenuItem[];
}


export const productsMenu: ProductMenuItem[] = [
  {
    label: "Maderas",
    submenu: [
      { name: "Tornillo", path: "/productos/maderas/tornillo" },
      { name: "Cachimbo", path: "/productos/maderas/cachimbo" },
      { name: "Panguana", path: "/productos/maderas/panguana" },
      { name: "Copaiba", path: "/productos/maderas/copaiba" },
      { name: "Roble", path: "/productos/maderas/roble" },
      { name: "Bolaina", path: "/productos/maderas/bolaina" },
      { name: "Huayruro", path: "/productos/maderas/huayruro" },
      { name: "Moena", path: "/productos/maderas/moena" },
      { name: "Eucalipto", path: "/productos/maderas/eucalipto" },
      { name: "Higuerilla", path: "/productos/maderas/higuerilla" },
    ],
  },
  {
    label: "Triplay",
    submenu: [
      { name: "Triplay Okoume", path: "/productos/triplay/okoume" },
      { name: "Triplay Bintangor", path: "/productos/triplay/bintangor" },
      { name: "Triplay Lupuna", path: "/productos/triplay/lupuna" },
      { name: "Triplay Fenólico", path: "/productos/triplay/fenolico-bc" },
      { name: "Triplay Fenólico Doble Film", path: "/productos/triplay/fenolico-doble-film" },
      { name: "Tablero OSB", path: "/productos/triplay/osb" },
   
      { name: "MDF", path: "/productos/triplay/mdf" },
    ],
  },
  { label: "Pallets / Parihuelas", path: "/productos/parihuelas" },
  { label: "Durmientes de Madera", path: "/productos/durmientes" },
  { label: "Postes de Madera", path: "/productos/postes" },
];
