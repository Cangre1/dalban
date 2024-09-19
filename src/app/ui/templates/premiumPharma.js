import React from "react";
import Image from "next/image";

const PremiumPharma = ({ data }) => {
  return (
    <div className="contenedor-custom !py-12 lg:!py-28 space-y-16 ">
      <div className="flex items-center justify-center flex-col gap-y-10">
        <h1
          className="titles"
          dangerouslySetInnerHTML={{
            __html: data.title,
          }}
        ></h1>
        <p
          className="paragraphs text-center w-2/3 mx-auto"
          dangerouslySetInnerHTML={{
            __html: data.paragraph,
          }}
        ></p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-y-10 gap-x-10">
        {data.src.map((item, index) => (
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
              className="paragraphs font-bold"
              dangerouslySetInnerHTML={{
                __html: item.span,
              }}
            ></div>
          </div>
        ))}
      </div>
      <div className="flex flex-col lg:flex-row justify-between items-center w-full">
        {data.stats.map((stat, index) => (
          <div
            key={index}
            className="flex flex-col gap-y-2 items-center lg:items-start"
          >
            <span className="stats-number">{stat.number}</span>
            <span className="stats-text">{stat.text}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PremiumPharma;
