import React from "react";

const GridFullService = ({ data }) => {
  const { "full-service": fullService } = data;
  return (
    <div className="flex flex-col items-center gap-y-20">
      {fullService.grid.map((item, index) => (
        <div
          key={index}
          className={`flex gap-10 justify-between w-full py-10 ${
            index === 1 ? "bg-white" : "bg-[#d9d9d9]"
          }`}
        >
          <div
            className={`contenedor-custom flex w-full ${
              index === 1 ? "flex-row-reverse" : ""
            }`}
          >
            <div className="flex flex-col w-3/4 gap-y-5 mr-auto justify-center">
              <h1
                className="text-2xl lg:text-4xl text-[#0099A8]"
                dangerouslySetInnerHTML={{ __html: item.title }}
              ></h1>
              <p
                className="text-base lg:text-lg text-black"
                dangerouslySetInnerHTML={{ __html: item.paragraph }}
              ></p>
            </div>
            <div className="w-3/4">
              <img
                src={item.src}
                alt="Imagen descriptiva"
                className={`w-2/3 h-auto rounded-lg shadow-lg ${
                  index === 1 ? "mr-auto" : "ml-auto"
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
