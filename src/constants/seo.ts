export const SITE_URL = "https://diamadef.com";

interface SeoEntry {
  title: string;
  description: string;
}

export const seoData: Record<string, SeoEntry> = {
  // ===== Páginas principales =====
  "/": {
    title: "Venta de Madera, Triplay y Fenólicos en Lima | Diamadef (Madesba)",
    description: "Venta de madera en Lima con envíos a todo el Perú: madera tornillo, bolaina, eucalipto, triplay, fenólicos, MDF, OSB, parihuelas, durmientes y postes. Cotiza por WhatsApp.",
  },
  "/productos": {
    title: "Productos de Madera en Lima: Maderas, Triplay y Tableros | Diamadef (Madesba)",
    description: "Catálogo de productos de madera: tornillo, cachimbo, bolaina, eucalipto, triplay okoume y lupuna, fenólicos, MDF, OSB, parihuelas, durmientes y postes. Envíos a todo el Perú.",
  },
  "/servicios": {
    title: "Servicios de Madera: Cortes a Medida y Tratamiento | Diamadef (Madesba)",
    description: "Servicio de cortes de madera a medida, tratamiento térmico y tratamiento preventivo en Lima. Atendemos proyectos de construcción, industria y minería en todo el Perú.",
  },
  "/nosotros": {
    title: "Nosotros | Inversiones Diamadef – Distribuidora de Madera en Lima",
    description: "Conoce a Inversiones Diamadef E.I.R.L., distribuidora de madera, triplay y tableros en Lima con envíos a nivel nacional.",
  },
  "/galeria": {
    title: "Galería de Proyectos y Productos de Madera | Diamadef (Madesba)",
    description: "Fotos de nuestros productos de madera, triplay, parihuelas y trabajos realizados para clientes en Lima y todo el Perú.",
  },
  "/clientes": {
    title: "Clientes | Empresas que Confían en Diamadef (Madesba)",
    description: "Empresas de construcción, minería, industria y agroindustria que compran madera, triplay y parihuelas a Inversiones Diamadef.",
  },
  "/blog": {
    title: "Blog de Madera: Usos, Tipos y Consejos | Diamadef (Madesba)",
    description: "Artículos sobre tipos de madera, usos del triplay y fenólicos, cuidado y tratamiento de la madera para tus proyectos.",
  },
  "/contacto": {
    title: "Contacto y Cotizaciones de Madera en Lima | Diamadef (Madesba)",
    description: "Cotiza madera, triplay y tableros: WhatsApp +51 946 917 999, ventas@diamadef.com. Av. Gerardo Unger 6355, Lima. Envíos a todo el Perú.",
  },

  // ===== Servicios =====
  "/servicios/Cortes": {
    title: "Servicio de Cortes de Madera a Medida en Lima | Diamadef (Madesba)",
    description: "Cortamos madera, triplay y tableros a la medida de tu proyecto en Lima. Cotiza por WhatsApp +51 946 917 999.",
  },
  "/servicios/termico": {
    title: "Tratamiento Térmico de Madera en Lima | Diamadef (Madesba)",
    description: "Tratamiento térmico de madera y parihuelas en Lima para exportación e industria. Cotiza con Diamadef.",
  },
  "/servicios/preventivo": {
    title: "Tratamiento Preventivo de Madera en Lima | Diamadef (Madesba)",
    description: "Tratamiento preventivo de madera contra insectos y hongos para mayor durabilidad. Servicio en Lima con envíos a todo el Perú.",
  },

  // ===== Maderas =====
  "/productos/maderas/tornillo": {
    title: "Madera Tornillo en Lima | Venta por Mayor y Menor – Diamadef (Madesba)",
    description: "Venta de madera tornillo en Lima para construcción y carpintería. Cortes a medida y envíos a todo el Perú. Cotiza por WhatsApp.",
  },
  "/productos/maderas/cachimbo": {
    title: "Madera Cachimbo en Lima | Venta y Cortes – Diamadef (Madesba)",
    description: "Venta de madera cachimbo en Lima para carpintería y muebles. Cortes a medida y envíos a nivel nacional.",
  },
  "/productos/maderas/panguana": {
    title: "Madera Panguana en Lima | Venta – Diamadef (Madesba)",
    description: "Venta de madera panguana en Lima. Cortes a medida y envíos a todo el Perú. Cotiza con Diamadef.",
  },
  "/productos/maderas/copaiba": {
    title: "Madera Copaiba en Lima | Venta – Diamadef (Madesba)",
    description: "Venta de madera copaiba en Lima para tus proyectos. Cortes a medida y envíos a todo el Perú.",
  },
   "/productos/maderas/roble": {
    title: "Madera Roble Económica en Lima | Encofrado y Obra – Diamadef (Madesba)",
    description: "Madera roble en Lima: grupo de maderas amazónicas suaves y económicas para encofrado, embalaje y obra. Cortes a medida y envíos a todo el Perú.",
  },
  "/productos/maderas/bolaina": {
    title: "Madera Bolaina en Lima | Venta y Cortes – Diamadef (Madesba)",
    description: "Venta de madera bolaina en Lima, liviana y versátil para encofrados, cajonería y carpintería. Envíos a todo el Perú.",
  },
  "/productos/maderas/huayruro": {
    title: "Madera Huayruro en Lima | Venta – Diamadef (Madesba)",
    description: "Venta de madera huayruro en Lima. Cortes a medida y envíos a todo el Perú. Cotiza por WhatsApp.",
  },
  "/productos/maderas/moena": {
    title: "Madera Moena en Lima | Venta – Diamadef (Madesba)",
    description: "Venta de madera moena en Lima para carpintería y muebles. Cortes a medida y envíos a nivel nacional.",
  },
  "/productos/maderas/eucalipto": {
    title: "Madera Eucalipto en Lima | Tablas y Vigas – Diamadef (Madesba)",
    description: "Venta de madera eucalipto en Lima: tablas, vigas y listones para construcción. Envíos a todo el Perú.",
  },
  "/productos/maderas/higuerilla": {
    title: "Madera Higuerilla en Lima | Venta – Diamadef (Madesba)",
    description: "Venta de madera higuerilla en Lima. Cortes a medida y envíos a todo el Perú. Cotiza con Diamadef.",
  },

  // ===== Triplay y tableros =====
    "/productos/triplay/okoume": {
    title: "Triplay Okoume en Lima | Muebles y Carpintería Fina – Diamadef (Madesba)",
    description: "Venta de triplay okoume en Lima: tablero liviano de acabado fino para muebles, puertas y revestimientos. 1.22 x 2.44 m de 4 a 18 mm. Envíos a todo el Perú.",
  },
  "/productos/triplay/bintangor": {
  title: "Triplay Bintangor en Lima | Muebles y Puertas – Diamadef (Madesba)",
  description: "Venta de triplay bintangor en Lima: cara rojiza y acabado liso para muebles, puertas y revestimientos. 1.22 x 2.44 m de 3 a 18 mm. Envíos a todo el Perú.",
},
  "/productos/triplay/lupuna": {
    title: "Triplay Lupuna en Lima | Encofrado y Carpintería – Diamadef (Madesba)",
    description: "Venta de triplay lupuna en Lima: tableros 1.22 x 2.44 m de 4 a 18 mm para encofrado, muebles y embalaje. Cortes a medida y envíos a todo el Perú. Cotiza por WhatsApp.",
  },
    "/productos/triplay/fenolico-bc": {
    title: "Triplay Fenólico B/C en Lima | Encofrado – Diamadef (Madesba)",
    description: "Venta de triplay fenólico B/C en Lima: encolado WBP resistente a la humedad, 1.22 x 2.44 m de 9 a 18 mm para encofrado y construcción. Envíos a todo el Perú.",
  },
  "/productos/triplay/fenolico-doble-film": {
    title: "Triplay Fenólico Doble Film en Lima | Encofrado Reutilizable – Diamadef (Madesba)",
    description: "Venta de triplay fenólico doble film en Lima: film 180 g/m², encolado WBP, 1.22 x 2.44 m de 12 a 18 mm. De 8 a 15 usos en encofrado. Envíos a todo el Perú.",
  },
  "/productos/triplay/osb": {
    title: "Tablero OSB en Lima | Techos, Pisos y Tabiques – Diamadef (Madesba)",
    description: "Venta de tableros OSB en Lima para techos, entrepisos, tabiques, cercos y embalaje. Formato 1.22 x 2.44 m, económico y resistente. Envíos a todo el Perú.",
  },
  "/productos/triplay/mdf": {
    title: "Tablero MDF en Lima | Crudo y RH para Muebles – Diamadef (Madesba)",
    description: "Venta de tableros MDF en Lima: superficie lisa para muebles, puertas y molduras. Espesores de 9 a 25 mm, versión RH resistente a humedad. Envíos a todo el Perú.",
  },
  // ===== Otros productos =====
  "/productos/parihuelas": {
  title: "Parihuelas y Pallets de Madera en Lima | NIMF 15 – Diamadef (Madesba)",
  description: "Fabricación de parihuelas de madera en Lima de 2 y 4 entradas, medidas estándar o a pedido, con tratamiento térmico NIMF 15 para exportación. Envíos a todo el Perú.",
},
"/productos/durmientes": {
  title: "Durmientes de Madera en Lima | Ferrocarril y Minería – Diamadef (Madesba)",
  description: "Venta de durmientes de madera dura y tratada en Lima para vías férreas, minería y obras civiles. Medidas estándar o a pedido. Envíos a todo el Perú.",
},
"/productos/postes": {
  title: "Postes de Madera Tratada en Lima | Electrificación y Cercos – Diamadef (Madesba)",
  description: "Venta de postes de madera tratada en Lima de 6 a 12 m para electrificación, telecomunicaciones, cercos y obras. Envíos a todo el Perú.",
},
};