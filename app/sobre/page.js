import Head from "next/head";
import Image from "next/image";

export default function Sobre() {
  return (
    <div className="w-full h-screen flex flex-col justify-center">
      <div className="bg-gray-100">
        <div className="py-8 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-center">
              <Image
                src="/MMs-Logo.png"
                alt="Header Image"
                width={500}
                height={400}
                className="object-cover"
              />
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900">Sobre</h1>
            <p className="mt-4 text-lg text-gray-600">
              Esse site de notícias é uma organização{" "}
              <span className="text-xl font-semibold">MariMario</span> produções
              com participação especial{" "}
              <span className="text-xl font-semibold">Riquelmmy</span>. Aos
              mandos da empresa que mais emprega e menos paga,{" "}
              <span className="text-xl font-semibold">FC Solutions</span>.
            </p>
          </div>
        </div>

        <footer className="bg-gray-800 text-white py-4">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center"></div>
        </footer>
      </div>
    </div>
  );
};
