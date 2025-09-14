import { Link } from "react-router-dom";

const posts = [
  {
    id: 1,
    title: "Cómo elegir la mejor madera para tu proyecto",
   
    excerpt: "Aprende a diferenciar los tipos de madera y cuál es la ideal para construcción, muebles o acabados...",
    image: "/images/blog/elegir.jpg",
  },
  {
    id: 2,
    title: "Tratamientos para la conservación de la madera",
   
    excerpt: "Conoce las últimas técnicas de tratamiento para que la madera tenga mayor durabilidad y resistencia...",
    image: "/images/blog/tratamiento.jpg",
  },
];

export default function Blog() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-6 flex justify-center">
      <div className="max-w-5xl w-full">
        <h1 className="text-5xl font-bold mb-6 text-center text-green-900">
          Blog
        </h1>
      {/* Video institucional */}
      <div className="mb-6 aspect-video">
        <iframe
          className="w-full h-full rounded-lg shadow-lg"
          src="https://www.youtube.com/embed/i2myQ1gG0X0"
          title="Video Institucional Diamadef"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>


        <p className="text-3xl text-center text-green-900 mb-10">
          Descubre consejos, proyectos y tendencias en el mundo de la madera.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {posts.map((post) => (
            <div
              key={post.id}
              className="bg-white rounded-xl shadow-md hover:shadow-xl transition duration-300 overflow-hidden"
            >
              <img
                src={post.image}
                alt={post.title}
                className="h-73 max-w-md object-cover"
              />
              <div className="p-6">
                <h2 className="text-2xl font-bold mb-2 text-green-800">
                  {post.title}
                </h2>
                <p className="text-sm text-gray-500 mb-4">""</p>
                <p className="text-gray-700 mb-4">{post.excerpt}</p>
                <Link
                  to={`/blog/${post.id}`}
                  className="text-green-700 font-semibold hover:underline"
                >
                  Leer más →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
