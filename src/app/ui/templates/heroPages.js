"use client";
import React, { useEffect, useState } from "react";

const Hero = ({ data }) => {
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
    <div
      className="h-[60vh] lg:h-screen bg-cover bg-center relative flex items-center"
      style={{
        backgroundImage: `linear-gradient(to left, #0099A8 10%, rgba(0,0,0,0) 50%), url(${currentData.src})`,
      }}
    >
      {/* Contenedor del título */}
      <div className="contenedor-custom relative">
        <div className="absolute right-0 text-white text-center w-full lg:text-right">
          <h1 className="text-4xl lg:text-6xl font-bold">
            {currentData.title}
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Hero;
