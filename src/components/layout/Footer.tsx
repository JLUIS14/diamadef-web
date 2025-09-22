export const Footer = () => {
  return (
    <footer className="bg-green-900 text-white py-6 mt-12">
      <div className="container mx-auto px-4 text-center">
        {/* Correo destacado */}
        <div className="mb-4 flex justify-center">
          <a
            href="mailto:ventas@diamadef.com"
            className="bg-green-700 text-white font-bold px-4 py-2 rounded-lg shadow hover:bg-yellow-300 transition-colors"
          >
           ✉️ Email:  ventas@diamadef.com
          </a>
        </div>

        {/* Derechos reservados */}
        <p className="text-sm">
          © {new Date().getFullYear()} Diamadef. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
};
