"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";

// Componente para el slider automático de imágenes
const ImageSlider = ({ images, alt }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    if (images.length > 1) {
      const interval = setInterval(() => {
        setCurrentImageIndex((prevIndex) =>
          prevIndex === images.length - 1 ? 0 : prevIndex + 1
        );
      }, 6000); // Cambia cada 3 segundos

      return () => clearInterval(interval);
    }
  }, [images.length]);

  return (
    <div className="relative w-full h-full">
      {images.map((imageSrc, imgIndex) => (
        <div
          key={imgIndex}
          className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
            imgIndex === currentImageIndex ? "opacity-100" : "opacity-0"
          }`}
        >
          <Image
            src={imageSrc}
            alt={`${alt} ${imgIndex + 1}`}
            width={1000}
            height={1000}
            className="w-full h-full object-cover rounded-lg"
          />
        </div>
      ))}

      {/* Indicadores de puntos */}
      {images.length > 1 && (
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-10">
          {images.map((_, dotIndex) => (
            <div
              key={dotIndex}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                dotIndex === currentImageIndex ? "bg-[#0099A8]" : "bg-white/50"
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
};

const PremiumPharma = ({ data }) => {
  const [isIndustriaPage, setIsIndustriaPage] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const path = window.location.pathname;
      // Verifica si el pathname termina en "/industria" o "/industria.html"
      setIsIndustriaPage(
        path.endsWith("/industria") || path.endsWith("/industria.html")
      );
    }
  }, []);

  return (
    <div className="contenedor-custom !py-12 lg:!py-28 space-y-16">
      <div
        className="flex items-center justify-center flex-col gap-y-10 "
        data-aos="zoom-in"
      >
        <h1
          className="titles"
          dangerouslySetInnerHTML={{
            __html: data.title,
          }}
        ></h1>
        <p
          className="paragraphs text-center lg:w-2/3 mx-auto"
          dangerouslySetInnerHTML={{
            __html: data.paragraph,
          }}
        ></p>
      </div>
      <div className="grid grid-cols-1 gap-y-10" data-aos="zoom-in">
        {data.src.map((item, index) => (
          <div
            key={index}
            className={`group relative bg-gray-200 rounded-lg flex p-5 gap-y-5 lg:gap-y-0 gap-x-10 shadow-lg hover:shadow-xl transition-all duration-300 min-h-[400px] ${
              index === 1 || index === 3
                ? "flex-col lg:flex-row-reverse"
                : "flex-col lg:flex-row"
            }`}
          >
            {/* Imagen */}
            <div className="w-full lg:w-1/2 h-64 lg:h-full">
              {/* Padding en un contenedor externo para evitar que se escale */}
              <div className="relative w-full overflow-hidden rounded-lg h-full">
                {item.src.length === 1 ? (
                  <Image
                    src={item.src[0]}
                    alt={item.alt}
                    width={1000}
                    height={1000}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <ImageSlider images={item.src} alt={item.alt} />
                )}
              </div>
            </div>

            {/* Contenido de la tarjeta */}
            <div className="w-full lg:w-1/2 space-y-4">
              <h1
                className="font-semibold text-gray-800 text-base lg:text-lg"
                dangerouslySetInnerHTML={{
                  __html: item.span,
                }}
              ></h1>
              <p
                className="text-gray-800 text-sm lg:text-base"
                dangerouslySetInnerHTML={{
                  __html: item.content,
                }}
              ></p>
            </div>

            {/* Borde inferior sutil */}
            <div
              className={`absolute bottom-0 left-0 w-full h-0.5 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ${
                isIndustriaPage ? "bg-[#252969]" : "bg-[#0099A8]"
              }`}
            />
          </div>
        ))}
      </div>
      {/* Bloque oculto si es /industria */}
      {!isIndustriaPage && (
        <div className="flex flex-col lg:flex-row justify-between items-center w-full gap-y-5 lg:gap-y-0">
          {data.stats.map((stat, index) => (
            <div
              key={index}
              className="flex flex-col gap-y-2 items-center lg:items-center"
            >
              <span className="stats-number">{stat.number}</span>
              <span className="stats-text">{stat.text}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default PremiumPharma;
