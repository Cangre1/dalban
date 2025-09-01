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
      if (lastPart === "logistica" || lastPart === "logistica.html") {
        lastPart = "logistics";
      }

      if (lastPart === "pharma" || lastPart === "pharma.html") {
        lastPart = "pharma";
      }

      if (lastPart === "full-service" || lastPart === "full-service.html") {
        lastPart = "full-service";
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

          {/* Botones de ubicación solo para LOGISTICA y PHARMA */}
          {currentData.ubicacion &&
            (lastPartOfUrl === "logistics" || lastPartOfUrl === "pharma") && (
              <div
                className="flex flex-col sm:flex-row gap-4 mt-8 justify-center lg:justify-start"
                data-aos="zoom-in"
              >
                {currentData.ubicacion.map((ubicacion, index) => (
                  <a
                    key={index}
                    className="btn !bg-white flex items-center group gap-x-1 text-black hover:!bg-transparent hover:!text-white !border !border-white text-xs lg:text-sm px-3 py-0.5 rounded-full shadow-lg transition duration-300 ease-in-out hover:scale-105"
                    href={ubicacion.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <svg
                      className="!stroke-black group-hover:!stroke-white transition duration-300 ease-in-out"
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                    {ubicacion.nombre}
                  </a>
                ))}
              </div>
            )}
        </div>
      </div>
    </div>
  );
};

export default Hero;
