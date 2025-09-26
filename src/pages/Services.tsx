export default function Services() {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">Servicios</h1>
      <p className="mb-4">Estos son los servicios que ofrecemos:</p>

      <ul className="list-disc ml-6 space-y-2">
        <li>
          <a
            href="/servicios/cortes"
            className="text-blue-600 hover:underline"
          >
            Servicio de cortes
          </a>
        </li>
        <li>
          <a
            href="/servicios/termico"
            className="text-blue-600 hover:underline"
          >
            Servicio de tratamiento térmico
          </a>
        </li>
        <li>
          <a
            href="/servicios/preventivo"
            className="text-blue-600 hover:underline"
          >
            Servicio de tratamiento preventivo
          </a>
        </li>
      </ul>
    </div>
  );
}
