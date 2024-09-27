import React from "react";

const Jobs = ({ data }) => {
  const { jobs } = data;
  return (
    <div className="contenedor-custom !py-12 lg:!py-28 ">
      <div className=" flex flex-col items-center gap-y-20">
        {/* Contenedor de dos columnas */}
        <div className="grid md:grid-cols-2 gap-10 w-full">
          {/* Imagen a la izquierda */}
          <div className="w-full">
            <img
              src={jobs.src}
              alt="Imagen descriptiva"
              className=" w-full lg:w-10/12  h-auto rounded-lg shadow-lg mr-auto"
            />
          </div>

          {/* Texto y CTA a la derecha */}
          <div className="flex flex-col w-full lg:w-3/4  gap-y-5 ml-auto justify-center">
            <h1
              className="titles"
              dangerouslySetInnerHTML={{ __html: jobs.title }}
            ></h1>
            <p
              className="paragraphs"
              dangerouslySetInnerHTML={{ __html: jobs.paragraph }}
            ></p>
            <a href={jobs.href} className="btn px-14 py-3 rounded-full">
              {jobs.btn}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Jobs;
