import React from "react";

const GridFullService = ({ data }) => {
  const { "full-service": fullService } = data;
  return (
    <div className="flex flex-col items-center gap-y-10 lg:gap-y-20">
      {fullService.grid.map((item, index) => (
        <div
          key={index}
          className={`flex gap-10 justify-between w-full py-5 lg:py-10 ${
            index === 1 || index === 3 ? "bg-white" : "bg-[#d9d9d9]"
          }`}
        >
          <div
            data-aos="zoom-in-down"
            className={`contenedor-custom flex flex-col lg:flex-row w-full gap-y-5 ${
              index === 1 || index === 3 ? "lg:flex-row-reverse" : "lg:flex-row"
            }`}
          >
            <div className="flex flex-col w-full lg:w-3/4 gap-y-5 mr-auto justify-center">
              <h1
                className="text-2xl lg:text-4xl text-[#252969] uppercase underline"
                dangerouslySetInnerHTML={{ __html: item.title }}
              ></h1>
              <p
                className="text-base lg:text-lg xl:text-xl text-black"
                dangerouslySetInnerHTML={{ __html: item.paragraph }}
              ></p>
            </div>
            <div className="w-full lg:w-3/4">
              <img
                src={item.src}
                alt="Imagen descriptiva"
                className={`w-full lg:w-11/12  rounded-lg  shadow-lg aspect-video object-cover  ${
                  index === 1 || index === 3 ? "mr-auto" : "ml-auto"
                }`}
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default GridFullService;
