import React from "react";

const PremiumLogistics = ({ data }) => {
  const { logistics } = data;
  return (
    <div className="contenedor-custom !py-12 lg:!py-28 ">
      <div className=" flex flex-col items-center gap-y-20">
        {/* Título centrado */}
        <h1
          className="text-2xl lg:text-4xl  text-black"
          dangerouslySetInnerHTML={{ __html: logistics.premium.title }}
        ></h1>

        {/* Contenedor de dos columnas */}
        <div className="grid md:grid-cols-2 gap-10 justify-between">
          {/* Texto y CTA a la izq */}
          <div className="flex flex-col w-3/4 gap-y-5 mr-auto justify-center">
            <p
              className="text-base lg:text-lg text-black"
              dangerouslySetInnerHTML={{ __html: logistics.premium.paragraph }}
            ></p>
          </div>
          {/* Imagen a la der */}
          <div className="">
            <img
              src={logistics.premium.src}
              alt="Imagen descriptiva"
              className="w-3/4 h-auto rounded-lg shadow-lg ml-auto"
            />
          </div>
        </div>
        <div className="flex justify-between items-center w-full">
          {logistics.premium.stats.map((stat, index) => (
            <div key={index} className="flex flex-col items-center gap-y-2">
              <span className="text-4xl font-bold text-[#10CFC9]">
                {stat.number}
              </span>
              <span className="text-lg font-bold uppercase text-black">
                {stat.text}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PremiumLogistics;
