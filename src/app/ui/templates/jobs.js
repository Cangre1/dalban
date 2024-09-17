import React from "react";

const Jobs = ({ data }) => {
  const { jobs } = data;
  return (
    <div className="contenedor-custom !py-12 lg:!py-28 ">
      <div className=" flex flex-col items-center gap-y-20">
        {/* Título centrado */}
        <h1
          className="text-2xl lg:text-4xl  text-black"
          dangerouslySetInnerHTML={{ __html: jobs.title }}
        ></h1>

        {/* Contenedor de dos columnas */}
        <div className="grid md:grid-cols-2 gap-10">
          {/* Imagen a la izquierda */}
          <div className="">
            <img
              src={jobs.src}
              alt="Imagen descriptiva"
              className=" w-full lg:w-2/3 h-auto rounded-lg shadow-lg mx-auto"
            />
          </div>

          {/* Texto y CTA a la derecha */}
          <div className="flex flex-col w-full lg:w-2/3 gap-y-5 mx-auto justify-center">
            <p
              className="text-base lg:text-lg text-black"
              dangerouslySetInnerHTML={{ __html: jobs.paragraph }}
            ></p>
            <a
              href={jobs.href}
              className="bg-[#10CFC9] text-white px-14 py-3 rounded-full text-center  transition duration-300 w-fit uppercase hover:bg-transparent hover:text-[#10CFC9] border border-[#10CFC9]"
            >
              {jobs.btn}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Jobs;
