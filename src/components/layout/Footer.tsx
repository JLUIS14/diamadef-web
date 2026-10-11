export const Footer = () => {
  return (
    <footer className="bg-green-900 text-white py-8 mt-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center md:text-left">

          {/* Empresa */}
          <div>
            <h2 className="text-lg font-bold mb-2">Inversiones Diamadef E.I.R.L. (Madesba)</h2>
            <p className="text-sm text-green-100">
              Venta de madera, triplay, fenólicos, tableros, parihuelas,
              durmientes y postes en Lima, con envíos a todo el Perú.
            </p>
          </div>

          {/* Dirección */}
          <div>
            <h2 className="text-lg font-bold mb-2">Dirección</h2>
            <address className="not-italic text-sm text-green-100">
              Av. Gerardo Unger 6355<br />
              Lima, Perú
            </address>
          </div>

          {/* Contacto */}
          <div>
            <h2 className="text-lg font-bold mb-2">Contacto</h2>
            <ul className="text-sm space-y-2">
              <li>
                <a
                  href="https://wa.me/51946917999"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-yellow-300 transition-colors"
                >
                  📱 WhatsApp: +51 946 917 999
                </a>
              </li>
              <li>
                <a
                  href="tel:+51946917999"
                  className="hover:text-yellow-300 transition-colors"
                >
                  📞 Teléfono: +51 946 917 999
                </a>
              </li>
              <li>
                <a
                  href="mailto:ventas@diamadef.com"
                  className="hover:text-yellow-300 transition-colors"
                >
                  ✉️ ventas@diamadef.com ventas@madesba.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Derechos reservados */}
        <p className="text-sm text-center text-green-200 border-t border-green-700 mt-6 pt-4">
          © {new Date().getFullYear()} Inversiones Diamadef E.I.R.L. (Madesba). Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
};