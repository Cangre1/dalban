"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

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
      <div className="relative" data-aos="zoom-in">
        <Swiper
          modules={[Navigation, Autoplay]}
          spaceBetween={0}
          slidesPerView={1}
          loop={true}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          className="premium-pharma-swiper [&_.swiper-wrapper]:!flex [&_.swiper-wrapper]:!items-stretch [&_.swiper-slide]:!h-auto"
        >
          {data.src.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="group relative bg-gray-200 rounded-lg shadow-xl p-5 h-full min-h-[600px] flex gap-x-10 ">
                {/* Imagen */}
                <div className="flex-shrink-0 mb-5 w-1/2">
                  <div className="relative w-full h-64 overflow-hidden rounded-lg">
                    <Image
                      src={item.src}
                      alt={item.alt}
                      width={1000}
                      height={1000}
                      className="object-cover w-full h-full"
                    />
                  </div>
                </div>

                {/* Contenido de la tarjeta */}
                <div className="text-gray-800 flex-1 flex flex-col w-1/2">
                  <h1
                    className="font-semibold text-lg mb-4"
                    dangerouslySetInnerHTML={{
                      __html: item.span,
                    }}
                  ></h1>
                  <p
                    className="text-base flex-1"
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
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Botones de navegación */}
        <div className="swiper-button-prev absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-white rounded-full w-12 h-12 shadow-lg flex items-center justify-center cursor-pointer hover:bg-gray-100 transition-colors">
          <svg
            className="w-6 h-6 text-gray-600"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </div>
        <div className="swiper-button-next absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-white rounded-full w-12 h-12 shadow-lg flex items-center justify-center cursor-pointer hover:bg-gray-100 transition-colors">
          <svg
            className="w-6 h-6 text-gray-600"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </div>
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
