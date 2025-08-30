import SloganBanner from "../SloganBanner";

const AboutSection = () => {
  return (
    <section id="nosotros" className="py-16 bg-white">
      <SloganBanner/>
      <div className="container mx-auto px-4 flex flex-col gap-12">
        {/* PRIMERA FILA: Imagen y descripción */}
        <div className="flex flex-col md:flex-row items-center gap-8">
          {/* Imagen */}
          <div className="md:w-1/2 flex justify-center">
            <img
              src="/images/about.jpg"
              alt="Nuestro equipo de trabajo"
              className="rounded-3xl shadow-lg w-[700px] object-cover"
            />
          </div>
       
          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold text-green-900 mb-4">Sobre Nosotros</h2>
            <p className="text-lg text-gray-800 mb-4 text-justify">
              En <b>Diamadef</b> somos apasionados por la madera y la naturaleza. Nos dedicamos a la fabricación y comercialización de productos en madera de alta calidad, combinando tradición, innovación y respeto por el medio ambiente.
            </p>
            <p className="text-lg text-gray-800 text-justify">
              Nuestro equipo trabaja con integridad comprometido en brindar soluciones efectivas que satisfacen a nuestros clientes destacando por nuestros valores y el cuidado del entorno.
            </p>
          </div>
        </div>

        {/* SEGUNDA FILA: Misión, Visión, Valores y Ventajas */}
        <div className="grid md:grid-cols-2 gap-8 items-start mt-8">
          {/* Columna 1: Misión, Visión, Valores */}
          <div>
            <div className="mb-6">
              <span className="block text-xl font-bold text-green-900 mb-2">Misión:</span>{" "}
              <p className="text-lg text-justify text gray-800">Brindar productos y servicios de madera que se adapten a las necesidades de cada cliente, garantizando calidad, soporte técnico especializado y soluciones innovadoras que superen sus expectativas, contribuyendo al desarrollo sostenible y a la excelencia en cada obra y emprendimiento.
              </p>
            </div>
            <div className="mb-4">
              <span className="block text-xl font-bold text-green-900 mb-2">Visión:</span>{" "}
              <p className="text-lg text-justify text gray-800">
              Consolidarnos como la empresa líder y confiable en soluciones integrales de madera, destacando por nuestra competitividad, innovación y compromiso ambiental. Convirtiéndonos en el principal socio estratégico de nuestros clientes, brindando soporte técnico y asesoría permanente que impulse el éxito de cada proyecto.
              </p>
            </div>
            <div className="my-6">
              <span className="block text-xl font-bold text-green-900">Valores:</span>
              <ul className="text-xl list-disc list-inside text-gray-700 ml-4 mt-2">
                <li>Responsabilidad</li>
                <li>Innovación</li>
                <li>Orientación al cliente</li>
                <li>Compromiso</li>
                <li>Respeto</li>
                <li>Integridad</li>
                 <li>Transparencia</li>
                <li>Etica</li>
              </ul>
            </div>
          </div>
          {/* Columna 2: Ventajas competitivas */}
          <div>
            <div className="bg-green-50 rounded-xl p-4 h-full flex flex-col justify-center">
              <p className="block text-xl text-green-900 font-semibold mb-1">¿Por qué elegirnos?</p>
              <ul className="block text-lg list-disc list-inside text-green-800 ml-4">
                <li>Atención personalizada y asesoría experta</li>
                <li>Entrega puntual y cumplimiento de plazos</li>
                <li>Amplio portafolio de productos</li>
                <li>Cobertura nacional e internacional</li>
                <li>Vision tecnológica</li>
                <li>Precios competitivos</li>
                <li>Gestión digital de Proyectos</li>
                <li>Adaptacion a Normas y Regulaciones</li>
                <li>Compromiso con el medio ambiente</li>
                <li>Equipo calificado con vocación de servicio</li>
                <li>Alianzas estratégicas</li>
                <li>Atención multicanal</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );

};



export default AboutSection;
