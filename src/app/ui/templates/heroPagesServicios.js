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

  // Determinar el color del gradient basado en la última parte de la URL
  const gradientColor = lastPartOfUrl === "pharma" ? "#0099A8" : "#252969";

  return (
    <div className="h-[60vh] lg:h-[70vh] 2xl:h-[60vh] relative flex items-center">
      {/* Video de fondo */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
      >
        <source src={currentData.src} type="video/mp4" />
        Tu navegador no soporta el formato de video.
      </video>

      {/* Overlay con el gradiente */}
      <div
        className="absolute top-0 left-0 w-full h-full bg-gradient-to-r"
        style={{
          background: `linear-gradient(to right, ${gradientColor} 10%, rgba(0,0,0,0) 50%)`,
        }}
      ></div>

      {/* Contenedor del título */}
      <div className="contenedor-custom relative z-10">
        <div className="mt-10 text-white text-center w-full lg:text-left">
          <h1 className="titles-hero-pages" data-aos="zoom-in">
            {currentData.title}
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Hero;
