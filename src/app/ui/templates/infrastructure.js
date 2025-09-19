"use client";
import Image from "next/image";
import PlayBlue from "../../../../public/assets/play-blue.png";
import PlayTurq from "../../../../public/assets/play-turq.png"; // Asegúrate de tener la ruta correcta para PlayTurq
import React, { useEffect, useState } from "react";

const Infrastructure = ({ data }) => {
  const [lastPartOfUrl, setLastPartOfUrl] = useState("");
  const [currentData, setCurrentData] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const currentPath = window.location.pathname;
      let lastPart = currentPath.substring(currentPath.lastIndexOf("/") + 1);

      // Traducciones / equivalencias con OR directo
      if (lastPart === "logistica" || lastPart === "logistica.html") {
        lastPart = "logistics";
      } else if (lastPart === "pharma" || lastPart === "pharma.html") {
        lastPart = "pharma";
      } else if (
        lastPart === "full-service" ||
        lastPart === "full-service.html"
      ) {
        lastPart = "full-service";
      } else if (lastPart === "contacto" || lastPart === "contacto.html") {
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

  const openModal = () => {
    setIsModalOpen(true);
    // Bloquear scroll vertical
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setIsModalOpen(false);
    // Habilitar scroll vertical
    document.body.style.overflow = "auto";
  };

  const handleBackdropClick = (e) => {
    // Cerrar modal solo si se hace clic en el backdrop (fondo oscuro)
    if (e.target === e.currentTarget) {
      closeModal();
    }
  };

  if (!currentData) {
    return <p>Cargando...</p>;
  }

  const gradientColor = lastPartOfUrl === "pharma" ? "#0099A8" : "#252969";

  return (
    <div className="bg-gray-100">
      <div className="contenedor-custom !py-12 lg:!py-28 hidden">
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
            onClick={openModal}
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

      {/* Modal del Video */}
      {isModalOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-75 z-50 flex items-center justify-center"
          onClick={handleBackdropClick}
        >
          <div className="relative w-full max-w-6xl rounded-lg overflow-hidden">
            {/* Botón X para cerrar en la parte superior derecha del video */}
            <button
              onClick={closeModal}
              className="absolute top-7 right-7 z-10 bg-black bg-opacity-70 hover:bg-opacity-90 text-white rounded-full w-9 h-9 text-3xl flex items-center justify-center transition-all duration-200"
            >
              ×
            </button>

            {/* Contenido del Video */}
            <div className="p-4">
              {currentData.infrastructure.video ? (
                <video
                  className="w-full h-auto rounded"
                  controls
                  autoPlay
                  muted
                >
                  <source
                    src={currentData.infrastructure.video}
                    type="video/mp4"
                  />
                  Tu navegador no soporta el elemento de video.
                </video>
              ) : (
                <div className="text-center py-8 text-gray-500">
                  No hay video disponible para esta sección.
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Infrastructure;
