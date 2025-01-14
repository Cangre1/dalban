"use client";
import Image from "next/image";
import PlayBlue from "../../../../public/assets/play-blue.png";
import PlayTurq from "../../../../public/assets/play-turq.png"; // Asegúrate de tener la ruta correcta para PlayTurq
import React, { useEffect, useState } from "react";

const Infrastructure = ({ data }) => {
  const [lastPartOfUrl, setLastPartOfUrl] = useState("");
  const [currentData, setCurrentData] = useState(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const currentPath = window.location.pathname;
      let lastPart = currentPath.substring(currentPath.lastIndexOf("/") + 1);

      if (lastPart === "logistica") {
        lastPart = "logistics";
      } else if (lastPart === "pharma.html") {
        lastPart = "pharma";
      } else if (lastPart === "full-service.html") {
        lastPart = "full-service";
      } else if (lastPart === "contacto") {
        lastPart = "contact";
      } else if (lastPart === "contacto") {
        lastPart = "contact";
      }

      setLastPartOfUrl(lastPart);

      if (data[lastPart]) {
        setCurrentData(data[lastPart]);
      } else {
        setCurrentData(null);
      }
    }
  }, [data]);

  if (!currentData) {
    return <p>Cargando...</p>;
  }

  const gradientColor = lastPartOfUrl === "pharma" ? "#0099A8" : "#252969";

  return (
    <div className="bg-gray-100">
      <div className="contenedor-custom !py-12 lg:!py-28">
        <div className="flex items-center justify-center flex-col gap-y-10">
          <h1
            className="titles"
            data-aos="zoom-in"
            dangerouslySetInnerHTML={{
              __html: currentData.infrastructure.title,
            }}
          ></h1>
          <p
            data-aos="zoom-in"
            className="paragraphs text-center w-full lg:w-2/3 mx-auto"
            dangerouslySetInnerHTML={{
              __html: currentData.infrastructure.paragraph,
            }}
          ></p>

          {lastPartOfUrl === "pharma" && (
            <div
              className="grid grid-cols-1 lg:grid-cols-2 gap-10"
              data-aos="zoom-in"
            >
              <div className="list-disc text-[#0099A8] ">
                {currentData.infrastructure.list
                  .slice(0, 8)
                  .map((item, index) => (
                    <li key={index}>
                      <span className="font-bold text-[#0099A8]">
                        {item.span}
                      </span>
                    </li>
                  ))}
              </div>
              <div className="list-disc text-[#0099A8] ">
                {currentData.infrastructure.list.slice(8).map((item, index) => (
                  <li key={index}>
                    <span className="font-bold text-[#0099A8]">
                      {item.span}
                    </span>
                  </li>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
      <div className="relative w-full py-40 lg:py-80">
        <Image
          src={currentData.infrastructure.src}
          alt="Infrastructure Background"
          layout="fill"
          objectFit="cover"
          quality={100}
          className="z-0"
        />

        <div
          className="absolute top-0 left-0 w-full h-full opacity-50 z-10"
          style={{ backgroundColor: gradientColor }}
        ></div>

        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20">
          <button
            data-aos="zoom-in"
            className="bg-white w-20 h-20 rounded-full shadow-lg hover:bg-gray-300 transition duration-300 ease-in-out flex justify-center items-center"
          >
            <Image
              className="ml-2"
              src={lastPartOfUrl === "pharma" ? PlayTurq : PlayBlue}
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
