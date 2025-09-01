"use client";
import React, { useEffect, useState } from "react";

const Hero = ({ data }) => {
  const [lastPartOfUrl, setLastPartOfUrl] = useState("");
  const [currentData, setCurrentData] = useState(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const currentPath = window.location.pathname;
      let lastPart = currentPath.substring(currentPath.lastIndexOf("/") + 1);

      switch (lastPart) {
        case "logistica.html":
        case "logistica":
          lastPart = "logistics";
          break;

        case "pharma.html":
        case "pharma":
          lastPart = "pharma";
          break;

        case "full-service.html":
        case "full-service":
          lastPart = "full-service";
          break;

        case "sector-farmaceutico-sanitario.html":
        case "sector-farmaceutico-sanitario":
          lastPart = "farma-san";
          break;

        case "contacto.html":
        case "contacto":
          lastPart = "contact";
          break;

        case "industria.html":
        case "industria":
          lastPart = "industria";
          break;

        default:
          break;
      }

      setLastPartOfUrl(lastPart);

      if (data[lastPart]) {
        setCurrentData(data[lastPart]);
      } else {
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
    <div
      className="h-[60vh] lg:h-[70vh] 2xl:h-[60vh] bg-cover bg-center relative flex items-center"
      style={{
        backgroundImage: `linear-gradient(to right, ${gradientColor} 10%, rgba(0,0,0,0) 50%), url(${currentData.src})`,
      }}
    >
      {/* Contenedor del título */}
      <div className="contenedor-custom relative">
        <div className="mt-10 text-white text-center w-full lg:text-left space-y-4">
          <h1 className="titles-hero-pages" data-aos="zoom-in">
            {currentData.title}
          </h1>
          <p
            className="text-white text-center w-full lg:text-left text-lg"
            data-aos="zoom-in"
          >
            {currentData.subtitle}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
