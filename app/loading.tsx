import Image from "next/image";
//Importar el spinner de carga de la biblioteca de iconos
import { LucideLoaderCircle as Spinner } from "lucide-react";

const LoadingPage = () => {
  return (
    <div
      className="flex items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900"
    >
      <div className="flex flex-col items-center">
        <Spinner className="w-16 h-16 animate-spin text-blue-500" />
        <p className="mt-4 text-lg text-gray-700 dark:text-gray-300">
          Loading, please wait...
        </p>
      </div>
    </div>
  );
};

export default LoadingPage;
