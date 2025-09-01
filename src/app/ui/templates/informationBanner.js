import React, { useEffect, useState } from "react";
import bgLogistica from "../../../../public/assets/hero-banner.jpg";
import bgPharma from "../../../../public/assets/hero-pharma.png";

// Función auxiliar para añadir .html a las URLs
const formatUrl = (url) => {
  if (url === "#" || url === "/") return url;
  return url.endsWith(".html") ? url : `${url}.html`;
};

const InformationBanner = ({ data }) => {
  const { informationBanner } = data;
  const [isPharmaPage, setIsPharmaPage] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const path = window.location.pathname;
      setIsPharmaPage(path.endsWith("pharma.html") || path.endsWith("pharma"));
    }
  }, []);

  // Estilos condicionales para el botón
  const buttonBgColor = isPharmaPage ? "#0099A8" : "#252969";

  return (
    <div
      className="bg-cover bg-center relative"
      style={{
        backgroundImage: `url(${
          isPharmaPage ? bgPharma.src : bgLogistica.src
        })`,
      }}
    >
      {/* Overlay oscuro con color condicionado */}
      <div
        className={`absolute top-0 left-0 w-full h-full z-10 opacity-30 ${
          isPharmaPage ? "bg-[#0099A8]" : "bg-[#252969]"
        }`}
      ></div>

      {/* Contenido del banner con mayor z-index */}
      <div
        className="contenedor-custom !py-12 lg:!py-36 space-y-10 relative z-20"
        data-aos="zoom-in"
      >
        <h1
          className="text-2xl lg:text-4xl text-white text-center"
          dangerouslySetInnerHTML={{ __html: informationBanner.title }}
        ></h1>
        <div className="flex justify-center">
          <a
            href={formatUrl(informationBanner.href)}
            className="btn px-14 py-3 rounded-full text-white text-center hover:!bg-transparent"
            style={{
              backgroundColor: buttonBgColor,
              borderWidth: "2px",
              borderStyle: "solid",
              borderColor: buttonBgColor,
              color: "white",
            }}
            onMouseEnter={(e) => {
              e.target.style.color = buttonBgColor;
            }}
            onMouseLeave={(e) => {
              e.target.style.color = "white";
            }}
          >
            {informationBanner.btn}
          </a>
        </div>
      </div>
    </div>
  );
};

export default InformationBanner;
