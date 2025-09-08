import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const form = useRef<HTMLFormElement>(null);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    if (!form.current) return;

    emailjs
      .sendForm(
        "service_hp22fhb",   //  Service ID
        "template_3vgv4nf",  //  Template ID
        form.current,
        "7LSzM5pC_gcv9Sg9b"    //  Public Key
      )
      .then(
        () => {
          setMessage("✅ Mensaje enviado con éxito.");
          setLoading(false);
          form.current?.reset();
          setTimeout(() => setMessage(""), 5000);
        },
        (error: any) => {
          console.error("FAILED...", error.text || error);
          setMessage("❌ Error al enviar el mensaje: " +  error.text || "Intenta nuevamente.");
          setLoading(false);
          setTimeout(() => setMessage(""), 5000);
        }
      );
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-4xl font-bold text-green-800 mb-6">Contacto</h1>
      <p className="text-gray-600 mb-8">
        Ponte en contacto con nosotros llenando el formulario o vía WhatsApp.
      </p>

      <form
        ref={form}
        onSubmit={sendEmail}
        className="space-y-6 bg-white p-6 rounded-2xl shadow-md"
      >
        <div>
          <label className="block text-gray-700 font-semibold mb-2">
            Nombre
          </label>
          <input
            type="text"
            name="from_name"
            required
            placeholder="Tu nombre"
            className="w-full border border-gray-300 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-green-500"
          />
        </div>

        <div>
          <label className="block text-gray-700 font-semibold mb-2">
            Correo electrónico
          </label>
          <input
            type="email"
            name="from_email"
            required
            placeholder="tucorreo@ejemplo.com"
            className="w-full border border-gray-300 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-green-500"
          />
        </div>

        <div>
          <label className="block text-gray-700 font-semibold mb-2">
            Mensaje
          </label>
          <textarea
            name="message"
            rows={5}
            required
            placeholder="Escribe tu mensaje aquí..."
            className="w-full border border-gray-300 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-green-500"
          ></textarea>
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-green-700 text-white font-semibold py-3 rounded-xl shadow hover:bg-green-800 transition disabled:opacity-50"
        >
          {loading ? "Enviando..." : "Enviar mensaje"}
        </button>
      </form>

      {message && <p className="mt-4 text-center text-green-600">{message}</p>}

      <div className="mt-10 text-gray-700">
        <h2 className="text-2xl font-bold mb-3">Otros medios de contacto</h2>
        <p>📞 Teléfonos: +51 946 917 999  ,  +51 966 776 467</p>
        <p>✉️ Email: ventas@diamadef.com</p>
        <p>
          💬 WhatsApp:{" "}
          <a
            href="https://wa.me/51989681817"
            target="_blank"
            className="text-green-600 font-semibold hover:underline"
          >
            Escríbenos por WhatsApp
          </a>
        </p>
        <p>📍 Dirección: Av. Gerardo Unger 6355, SMP - Lima - Perú</p>
      </div>
    </div>
  );
}


