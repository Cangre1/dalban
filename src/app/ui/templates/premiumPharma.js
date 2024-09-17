import React from "react";
import Image from "next/image";

const PremiumPharma = ({ data }) => {
  const { pharma } = data;
  return (
    <div className="contenedor-custom !py-12 lg:!py-28 space-y-16 ">
      <div className="flex items-center justify-center flex-col gap-y-10">
        <h1
          className="text-2xl lg:text-4xl text-black"
          dangerouslySetInnerHTML={{
            __html: pharma.premium.title,
          }}
        ></h1>
        <p
          className="text-base lg:text-lg text-black text-center w-2/3 mx-auto"
          dangerouslySetInnerHTML={{
            __html: pharma.premium.paragraph,
          }}
        ></p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-y-10 gap-x-10">
        {pharma.premium.src.map((item, index) => (
          <div key={index} className="space-y-8">
            <div className="relative w-full aspect-square">
              <Image
                src={item.src}
                alt={item.alt}
                width={300}
                height={300}
                className="w-full h-full object-cover"
              />
            </div>
            <div
              className="text-base lg:text-lg text-black font-bold"
              dangerouslySetInnerHTML={{
                __html: item.span,
              }}
            ></div>
          </div>
        ))}
      </div>
      <div className="flex justify-between items-center w-full">
        {pharma.premium.stats.map((stat, index) => (
          <div key={index} className="flex flex-col gap-y-2">
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
  );
};

export default PremiumPharma;