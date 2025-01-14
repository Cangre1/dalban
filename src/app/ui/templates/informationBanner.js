import React from "react";
import bgLogistica from "../../../../public/assets/hero-banner.jpg";
import bgPharma from "../../../../public/assets/hero-pharma.png";

const InformationBanner = ({ data }) => {
  const { informationBanner } = data;

  // Verificar si la URL termina con "pharma"
  const isPharmaPage = window.location.pathname.endsWith("pharma.html");

  // Estilos condicionales para el botón con !important
  const buttonBgColor = isPharmaPage
    ? { backgroundColor: "#0099A8", important: true }
    : { backgroundColor: "#252969", important: true };

  // Estilos condicionales para el borde con !important
  const buttonBorderColor = isPharmaPage
    ? { borderColor: "#0099A8", important: true }
    : { borderColor: "#252969", important: true };

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

      {/* Contenido del banner con mayor z-index para estar por encima del overlay */}
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
            href={informationBanner.href}
            className="btn px-14 py-3 rounded-full text-white text-center hover:!bg-transparent"
            style={{
              backgroundColor: buttonBgColor.backgroundColor,
              borderWidth: "2px",
              borderStyle: "solid",
              borderColor: buttonBorderColor.borderColor,
              color: "white", // Color inicial
            }}
            onMouseEnter={(e) => {
              e.target.style.color = buttonBgColor.backgroundColor; // Color de texto en hover
            }}
            onMouseLeave={(e) => {
              e.target.style.color = "white"; // Restaurar color de texto
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
