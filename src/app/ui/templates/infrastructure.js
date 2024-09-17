"use client";
import Image from "next/image";
import Play from "../../../../public/assets/play.png";
import React, { useEffect, useState } from "react";

const Infrastructure = ({ data }) => {
  const [lastPartOfUrl, setLastPartOfUrl] = useState("");
  const [currentData, setCurrentData] = useState(null);

  useEffect(() => {
    // Asegurarse de que el código solo se ejecute en el lado del cliente
    if (typeof window !== "undefined") {
      const currentPath = window.location.pathname;
      let lastPart = currentPath.substring(currentPath.lastIndexOf("/") + 1);

      // Validar y ajustar la última parte de la URL
      if (lastPart === "logistica") {
        lastPart = "logistics";
      }

      if (lastPart === "sector-farmaceutico-sanitario") {
        lastPart = "farma-san";
      }

      if (lastPart === "contacto") {
        lastPart = "contact";
      }

      setLastPartOfUrl(lastPart);

      // Acceder dinámicamente a los datos según la última parte de la URL
      if (data[lastPart]) {
        setCurrentData(data[lastPart]);
      } else {
        // Manejo del caso en que no se encuentran datos para la clave dada
        setCurrentData(null);
      }
    }
  }, [data]);

  // Si currentData es null, muestra un mensaje de carga o error
  if (!currentData) {
    return <p>Cargando...</p>;
  }

  return (
    <div>
      <div className="contenedor-custom !py-12 lg:!py-28">
        <div className="flex items-center justify-center flex-col gap-y-10">
          <h1
            className="text-2xl lg:text-4xl text-black"
            dangerouslySetInnerHTML={{
              __html: currentData.infrastructure.title,
            }}
          ></h1>
          <p
            className="text-base lg:text-lg text-black text-center w-full lg:w-2/3 mx-auto"
            dangerouslySetInnerHTML={{
              __html: currentData.infrastructure.paragraph,
            }}
          ></p>
        </div>
      </div>
      <div className="relative w-full py-40 lg:py-80">
        {/* Imagen de fondo */}
        <Image
          src={currentData.infrastructure.src}
          alt="Infrastructure Background"
          layout="fill"
          objectFit="cover"
          quality={100}
          className="z-0"
        />

        {/* Overlay oscuro */}
        <div className="absolute top-0 left-0 w-full h-full bg-[#27817a] opacity-50 z-10"></div>

        {/* Botón de Play */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20">
          <button className="bg-white w-20 h-20 rounded-full shadow-lg hover:bg-gray-300 transition duration-300 ease-in-out flex justify-center items-center">
            <Image
              className="ml-2"
              src={Play}
              alt="Play Button"
              width={30}
              height={30}
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Infrastructure;
