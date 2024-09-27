import React from "react";

const PremiumLogistics = ({ data }) => {
  const { logistics } = data;
  return (
    <div className="contenedor-custom !py-12 lg:!py-28 ">
      <div className=" flex flex-col items-center gap-y-20">
        <div className="space-y-5">
          {/* Título centrado */}
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
          {/* Texto y CTA a la izq */}
          <div className="flex flex-col w-full lg:w-3/4 gap-y-5 mr-auto justify-center">
            <p
              className="paragraphs"
              dangerouslySetInnerHTML={{ __html: logistics.premium.paragraph }}
            ></p>
          </div>
          {/* Imagen a la der */}
          <div className="">
            <img
              src={logistics.premium.src}
              alt="Imagen descriptiva"
              className=" w-full lg:w-11/12 h-auto rounded-lg shadow-lg ml-auto"
            />
          </div>
        </div>
        <div className="flex flex-col lg:flex-row justify-between items-center w-full">
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
