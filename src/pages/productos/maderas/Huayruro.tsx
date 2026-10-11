import { useRef } from "react";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import { Seo } from "../../../components/common/Seo";
import { BloqueCotizar } from "../../../components/common/BloqueCotizar";

export default function Huayruro() {
  const pdfRef = useRef<HTMLDivElement>(null);

  const generatePDF = async () => {
    const element = pdfRef.current;
    if (!element) return;

    // Capturar el contenido en canvas
    const canvas = await html2canvas(element, { scale: 2 });
    const imgData = canvas.toDataURL("image/png");

    // Crear PDF
    const pdf = new jsPDF("p", "mm", "a4");

    // Ruta del logo (ubicado en /public/images/logo.png)
    const logo = "/images/logo.png";

    // Medidas de la página
    const pageWidth = pdf.internal.pageSize.getWidth();
    const pageHeight = pdf.internal.pageSize.getHeight();

    // Insertar logo centrado arriba
    const logoWidth = 40;
    const logoHeight = 20;
    const logoX = (pageWidth - logoWidth) / 2;
    const logoY = 10;
    pdf.addImage(logo, "PNG", logoX, logoY, logoWidth, logoHeight);

    // Márgenes del contenido
    const marginX = 15;
    const marginY = 40;
    const contentWidth = pageWidth - marginX * 2;

    // Ajuste de proporción de la imagen
    const imgProps = pdf.getImageProperties(imgData);
    const contentHeight = (imgProps.height * contentWidth) / imgProps.width;

    pdf.addImage(
      imgData,
      "PNG",
      marginX,
      marginY,
      contentWidth,
      contentHeight > pageHeight - marginY ? pageHeight - marginY : contentHeight
    );

    pdf.save("Madera-Huayruro.pdf");
  };

  return (
    <div className="bg-[#f9f7f3] min-h-screen p-6">
      <Seo path="/productos/maderas/huayruro" />

      {/* Botón PDF */}
      <button
        onClick={generatePDF}
        className="bg-green-600 text-white px-4 py-2 rounded-md shadow-md mb-4 hover:bg-green-700 transition"
      >
        Descargar PDF
      </button>

      {/* Contenido a exportar */}
      <div ref={pdfRef} className="max-w-6xl mx-auto">
        {/* Título */}
        <h1 className="text-4xl font-bold text-green-700 mb-6">
          Madera Huayruro en Lima
        </h1>

        {/* Imagen + Descripción */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center mb-8">
          <img
            src="/images/maderas/Huayruro.jpg"
            alt="Madera huayruro en tablas - venta en Lima Diamadef"
            className="w-full h-auto max-h-[220px] object-cover rounded-xl shadow-lg"
          />
          <p className="text-lg text-gray-800 leading-relaxed text-justify">
            La <strong>madera de Huayruro</strong> (<em>Ormosia coccinea</em>) es una especie
            nativa de la selva tropical de Sudamérica, principalmente en regiones
            selváticas como Loreto y Ucayali. Su fuste es cilíndrico, con una altura
            comercial aproximada de 20–30 m y un diámetro a la altura del pecho de
            alrededor de 0.56 m.
            Es altamente valorada en ingeniería de la madera por su favorable relación
            peso/resistencia, lo que la hace ideal para estructuras de carga, pisos y
            elementos sometidos a desgaste.
          </p>
        </div>

        {/* Bloque de venta (no sale en el PDF) */}
        <div data-html2canvas-ignore>
          <BloqueCotizar producto="madera huayruro" />
        </div>

        {/* Características y Usos */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {/* Características */}
          <div className="bg-green-100 border-l-4 border-green-700 p-4 rounded-lg">
            <h2 className="text-2xl font-semibold text-green-800 mb-2">
              Características de la madera huayruro
            </h2>
            <ul className="list-disc list-inside text-gray-700">
              <li>Color: Albura pálida y duramen marrón rojizo con vetas.</li>
              <li>Grano: entrecruzado, textura media a gruesa.</li>
              <li>Brillo: medio a satinado, veteado con arcos y bandas paralelas anchas.</li>
              <li>Olor: ausente o ligeramente aromático.</li>
              <li>Secado: buen comportamiento en secado artificial y alta trabajabilidad.</li>
              <li>Clasificación: semipesada a pesada.</li>
            </ul>
          </div>

          {/* Usos */}
          <div className="bg-yellow-50 border-l-4 border-yellow-600 p-4 rounded-lg">
            <h2 className="text-2xl font-semibold text-yellow-800 mb-2">
              Usos de la madera huayruro
            </h2>
            <ul className="list-disc list-inside text-gray-700">
              <li>Estructuras pesadas: vigas, viguetas, columnas y encofrados.</li>
              <li>Carpintería de obra: pisos, marcos, puertas y ventanas.</li>
              <li>Decoración: chapas, ebanistería, muebles finos.</li>
              <li>Otros: pisos machihembrados, canoas, artesanías.</li>
            </ul>
          </div>
        </div>

        {/* Especificaciones técnicas */}
        <div className="overflow-x-auto bg-white rounded-xl shadow-lg p-4">
          <h2 className="text-2xl font-semibold text-green-700 mb-4">
            Especificaciones técnicas del huayruro
          </h2>
          <table className="min-w-full border border-gray-300">
            <thead className="bg-green-600 text-white">
              <tr>
                <th className="border border-gray-300 px-4 py-2 text-left">Propiedad</th>
                <th className="border border-gray-300 px-4 py-2 text-left">Valor</th>
                <th className="border border-gray-300 px-4 py-2 text-left">Unidad</th>
                <th className="border border-gray-300 px-4 py-2 text-left">Observaciones</th>
              </tr>
            </thead>
            <tbody>
                            {[
                ["Densidad básica", "0.61", "g/cm³", "Madera semipesada, buena durabilidad"],
                ["Contracción volumétrica", "9.40", "%", "Estabilidad dimensional buena"],
                ["Contracción tangencial", "6.30", "%", "Moderada"],
                ["Contracción radial", "3.19", "%", "Baja, buena estabilidad"],
                ["Relación tang./radial (T/R)", "1.98", "—", "Anisotropía moderada"],
                ["Módulo de elasticidad (MOE)", "136 000", "kg/cm²", "Alta rigidez"],
                ["Módulo de ruptura (MOR)", "838", "kg/cm²", "Excelente resistencia a la flexión"],
                ["Compresión paralela", "443", "kg/cm²", "Alta capacidad estructural"],
                ["Compresión perpendicular", "71", "kg/cm²", "Soporta cargas transversales moderadas"],
                ["Corte paralelo a fibras", "105", "kg/cm²", "Resistente al cizallamiento"],
                ["Dureza lateral", "650", "kg/cm²", "Muy dura, superficie resistente"],
                ["Tenacidad (impacto)", "3.70", "kg·m", "Buena capacidad de absorción de choque"]
              ].map((row, index) => (
                <tr key={index} className={index % 2 === 0 ? "bg-white" : "bg-gray-100"}>
                  {row.map((cell, i) => (
                    <td key={i} className="border border-gray-300 px-4 py-2">{cell}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}