"use client";
import React, { useEffect, useState } from "react";

const Descriptionv2 = ({ data }) => {
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

  return (
    <div className="contenedor-custom !py-12 lg:!py-28">
      <div
        className="flex items-center justify-center flex-col"
        data-aos="zoom-in"
      >
        <p
          className="paragraphs text-center w-full lg:w-2/3 mx-auto"
          dangerouslySetInnerHTML={{ __html: currentData.paragraph }}
        ></p>
      </div>
    </div>
  );
};

export default Descriptionv2;
