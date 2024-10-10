import { Layout } from "@/components/layout/layout";
import { Link } from "react-router-dom";
export const ErrorPage = () => {
  return (
    <Layout>
      <div className="flex flex-col items-center justify-start min-h-screen p-4 text-white bg-navy-900">
        <h1 className="mb-4 font-bold tracking-tighter text-8xl">
          <span className="text-transparent bg-gradient-to-r from-blue-300 via-purple-500 to-pink-500 bg-clip-text">
            404
          </span>
        </h1>
        <h2 className="mb-6 text-4xl font-semibold">Page Not Found</h2>
        <p className="max-w-2xl mb-8 text-xl text-center text-gray-300">
          Lo sentimos, la página que estás buscando no se pudo encontrar. Puede
          que haya sido movida o ya no exista.
        </p>
        <Link
          to="/"
          className="px-6 py-3 font-semibold text-white transition duration-300 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700"
        >
          Volver al Inicio
        </Link>
      </div>
    </Layout>
  );
};
