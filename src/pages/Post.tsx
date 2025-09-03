import { useParams, Link } from "react-router-dom";

const posts: Record<
  string,
  {
    title: string;
    image: string;
    content: string;
    video: string;
  }
> = {
  "1": {
    title: "Cómo elegir la mejor madera para tu proyecto",
    image: "/images/blog/madera.jpg",
    content: `
      La elección de la madera adecuada depende del tipo de proyecto que tengas en mente.
     
      Para elegir la mejor madera, considera factores clave como el uso y la durabilidad que requiere tu proyecto (exterior vs. interior), la estética deseada (color, veta), la facilidad de trabajo, la estabilidad frente a humedad y temperatura, tu presupuesto y si buscas opciones sostenibles. Cada especie tiene características únicas, por lo que elegir la madera adecuada implica equilibrar estos factores para lograr el resultado que buscas. 
    `,
    video: "https://www.youtube.com/embed/ScMzIvxBSi4",
  },
  "2": {
    title: "Tratamientos para la conservación de la madera",
    image: "/images/blog/tratamiento1.jpg",
    content: `
      Los tratamientos ignífugos y preventivos permiten extender la vida útil de la madera.
      Además, reducen riesgos de plagas y problemas de humedad.
      El tratamiento preventivo de la madera se enfoca en protegerla contra hongos, insectos, humedad y luz solar antes de que sufra daños, mediante métodos como la inmersión en químicos, el curado con aceites, la aplicación de lasures, la técnica de carbonizado (Shou-Sugi-Ban) o el uso de productos específicos. La preparación adecuada de la superficie, que incluye limpieza y secado, es un paso crucial para la efectividad del tratamiento
    `,
    video: "",
  },
};

export default function Post() {
  const { id } = useParams();
  const post = id ? posts[id] : null;

  if (!post) {
    return (
      <div className="p-6 text-center">
        <h2 className="text-2xl font-bold text-red-600">Post no encontrado</h2>
        <Link to="/blog" className="text-blue-500 underline">
          Volver al Blog
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-4xl font-bold mb-4 text-green-800">{post.title}</h1>

      <img
        src={post.image}
        alt={post.title}
        className="w-full rounded-2xl shadow-md mb-6"
      />

      <div className="prose prose-lg text-gray-700 mb-8">
        <p>{post.content}</p>
      </div>

      {post.video && (
        <div className="aspect-w-16 aspect-h-9 mb-8">
          <iframe
            src={post.video}
            title="Video relacionado"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full h-96 rounded-lg shadow-md"
          ></iframe>
        </div>
      )}

      <Link
        to="/blog"
        className="inline-block mt-6 px-6 py-3 bg-green-700 text-white rounded-xl shadow hover:bg-green-800 transition"
      >
        ← Volver al Blog
      </Link>
    </div>
  );
}
