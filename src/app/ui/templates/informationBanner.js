import React from "react";
import bg from "../../../../public/assets/hero-banner.jpg";

const InformationBanner = ({ data }) => {
  const { informationBanner } = data;
  return (
    <div
      className="bg-cover bg-center relative"
      style={{ backgroundImage: `url(${bg.src})` }}
    >
      {/* Overlay oscuro */}
      <div className="absolute top-0 left-0 w-full h-full bg-[#0099A8] opacity-30 z-10"></div>

      {/* Contenido del banner con mayor z-index para estar por encima del overlay */}
      <div className="contenedor-custom !py-12 lg:!py-36 space-y-10 relative z-20">
        <h1
          className="text-2xl lg:text-4xl text-black text-center"
          dangerouslySetInnerHTML={{ __html: informationBanner.title }}
        ></h1>
        <div className="flex justify-center">
          <a
            href={informationBanner.href}
            className="btn px-14 py-3 rounded-full text-center"
          >
            {informationBanner.btn}
          </a>
        </div>
      </div>
    </div>
  );
};

export default InformationBanner;
