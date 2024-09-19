"use client";
import React, { useEffect, useState } from "react";

const Descriptionv2 = ({ data }) => {
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
    <div className="contenedor-custom !py-12 lg:!py-28">
      <div className="flex items-center justify-center flex-col">
        <p
          className="paragraphs text-center w-full lg:w-2/3 mx-auto"
          dangerouslySetInnerHTML={{ __html: currentData.paragraph }}
        ></p>
      </div>
    </div>
  );
};

export default Descriptionv2;
