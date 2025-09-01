"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";

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
      <div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-y-10 gap-x-10"
        data-aos="zoom-in"
      >
        {data.src.map((item, index) => (
          <div
            key={index}
            className="group relative bg-gray-200 rounded-lg shadow-xl transition-all duration-500 hover:scale-105 hover:shadow-2xl"
            style={{ boxShadow: "0px 10px  20px rgba(0, 0, 0, 0.1)" }} // Sombra más fuerte envolvente
          >
            {/* Imagen */}
            <div className="p-2">
              {/* Padding en un contenedor externo para evitar que se escale */}
              <div className="relative w-full aspect-square overflow-hidden rounded-lg">
                <Image
                  src={item.src}
                  alt={item.alt}
                  width={300}
                  height={300}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110  "
                />
              </div>
            </div>

            {/* Contenido de la tarjeta */}
            <div className="p-3">
              <div
                className={`font-semibold text-gray-800 text-base mb-2 transition-colors duration-300 ${
                  isIndustriaPage
                    ? "group-hover:text-[#252969]"
                    : "group-hover:text-[#0099A8]"
                }`}
                dangerouslySetInnerHTML={{
                  __html: item.span,
                }}
              ></div>
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
