import { Card, CardContent } from "@/components/ui/card";

const clients = [
  { logo: "/images/clientes/iccgsa.jpg" },
  { logo: "/images/clientes/terrazul.jpg" },
  { logo: "/images/clientes/cosapi1.jpg" },
  { logo: "/images/clientes/sotrami.jpg" },
  { logo: "/images/clientes/RB.jpg" },
  { logo: "/images/clientes/sinohidro1.jpg" },
  { logo: "/images/clientes/unitelec.jpg" },
  { logo: "/images/clientes/saasa.jpg" },
  { logo: "/images/clientes/ursa.jpg" },
  { logo: "/images/clientes/biddle.jpg" },
  { logo: "/images/clientes/sanmiguel.jpg" },
  { logo: "/images/clientes/viviendas.jpg" },
  
];

export default function Clients() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-6">
      <div className="max-w-6xl w-full text-center">
        <h1 className="text-5xl font-bold mb-6 text-green-900">
          Nuestros Clientes
        </h1>
        <p className="text-lg text-blue-600 mb-10">
          <strong>Algunas empresas que confían en nosotros.</strong>
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {clients.map((client, index) => (
            <Card
              key={index}
              className="shadow-lg hover:shadow-2xl transition-all duration-300 rounded-2xl"
            >
              <CardContent className="flex items-center justify-center p-6">
                <img
                  src={client.logo}
                  alt={`Cliente ${index + 1}`}
                  className="h-32 w-auto object-contain"
                />
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
