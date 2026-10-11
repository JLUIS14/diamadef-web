interface BloqueCotizarProps {
  producto: string; // ej: "madera tornillo", "triplay okoume"
}

export const BloqueCotizar = ({ producto }: BloqueCotizarProps) => {
  const url =
    "https://wa.me/51946917999?text=" +
    encodeURIComponent(`Hola Diamadef, quisiera cotizar ${producto}.`);

  return (
    <div className="bg-white border border-green-200 rounded-xl shadow p-5 mb-8 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
      <p className="text-gray-800 text-lg">
        En <strong>Inversiones Diamadef (Madesba)</strong> vendemos <strong>{producto} en Lima</strong>,
        con <strong>cortes a medida</strong> y <strong>envíos a todo el Perú</strong>.
      </p>
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block text-center px-6 py-3 bg-green-600 text-white font-semibold rounded-full shadow hover:bg-green-700 transition whitespace-nowrap"
      >
        Cotizar por WhatsApp
      </a>
    </div>
  );
};