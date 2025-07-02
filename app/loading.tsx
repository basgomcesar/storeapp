import Image from "next/image";
import loader from "@assets/loader.gif";

const LoadingPage = () => {
  return (
    <div
      className="flex items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900"
    >
      <div className="flex flex-col items-center">
        <Image
          src={loader}
          alt="Loading..."
          width={100}
          height={100}
          className="animate-spin"
        />
        <p className="mt-4 text-lg text-gray-700 dark:text-gray-300">
          Loading, please wait...
        </p>
      </div>
    </div>
  );
};

export default LoadingPage;
