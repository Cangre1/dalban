import React, { useState } from "react";
import ArrowL from "../../../../public/assets/arrow-l.png";
import ArrowR from "../../../../public/assets/arrow-r.png";
import Image from "next/image";

const PremiumLogistics = ({ data }) => {
  const { logistics } = data;
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Array de imágenes, en este caso, con la misma imagen dos veces
  const images = [logistics.premium.src, logistics.premium.src2];

  const handleNext = () => {
    setCurrentImageIndex((currentImageIndex + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentImageIndex(
      (currentImageIndex - 1 + images.length) % images.length
    );
  };

  return (
    <div className="contenedor-custom !py-12 lg:!py-28">
      <div className="flex flex-col items-center gap-y-8 lg:gap-y-20">
        <div className="space-y-5" data-aos="zoom-in">
          <h1
            className="titles text-center"
            dangerouslySetInnerHTML={{ __html: logistics.premium.title }}
          ></h1>
          <p
            className="paragraphs text-center italic"
            dangerouslySetInnerHTML={{ __html: logistics.premium.subtitle }}
          ></p>
        </div>

        {/* Contenedor de dos columnas */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 justify-between">
          <div className="flex flex-col w-full lg:w-3/4 gap-y-5 mr-auto justify-center">
            <p
              className="paragraphs"
              data-aos="zoom-in"
              dangerouslySetInnerHTML={{ __html: logistics.premium.paragraph }}
            ></p>
          </div>

          {/* Galería de imágenes con flechas */}
          <div
            className="relative w-full lg:w-11/12 h-auto rounded-lg shadow-lg ml-auto"
            data-aos="zoom-in"
          >
            {/* Flecha izquierda */}
            <button
              onClick={handlePrev}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-[#252969] text-white h-11 w-11 rounded-full flex justify-center items-center hover:bg-opacity-60 transition-all ease-in-out duration-300"
            >
              <Image src={ArrowL} className="w-4" />
            </button>

            {/* Imagen */}
            <img
              src={images[currentImageIndex]}
              alt="Imagen descriptiva"
              className="w-full h-auto rounded-lg"
            />

            {/* Flecha derecha */}
            <button
              onClick={handleNext}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-[#252969] text-white h-11 w-11 rounded-full flex justify-center items-center hover:bg-opacity-60 transition-all ease-in-out duration-300"
            >
              <Image src={ArrowR} className="w-4" />
            </button>
          </div>
        </div>

        <div
          className="flex flex-col lg:flex-row justify-between items-center w-full gap-y-5 lg:gap-y-0"
          data-aos="zoom-in"
        >
          {logistics.premium.stats.map((stat, index) => (
            <div key={index} className="flex flex-col items-center gap-y-2">
              <span className="stats-number">{stat.number}</span>
              <span className="stats-text">{stat.text}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PremiumLogistics;
