import React from "react";

// Función auxiliar para añadir .html a las URLs
const formatUrl = (url) => {
  if (url === "#" || url === "/") return url;
  return url.endsWith(".html") ? url : `${url}.html`;
};

const Jobs = ({ data }) => {
  const { jobs } = data;

  return (
    <div className="contenedor-custom !py-12 lg:!py-28">
      <div className=" flex flex-col items-center gap-y-20">
        {/* Contenedor de dos columnas */}
        <div className="grid md:grid-cols-2 gap-10 w-full">
          {/* Imagen a la izquierda */}
          <div className="w-full">
            <img
              src={jobs.src}
              alt="Imagen descriptiva"
              data-aos="zoom-in"
              className=" w-full lg:w-12/12 object-cover aspect-video  h-auto rounded-lg shadow-lg mr-auto"
            />
          </div>

          {/* Texto y CTA a la derecha */}
          <div
            className="flex flex-col w-full lg:w-3/4  gap-y-5 ml-auto justify-center"
            data-aos="zoom-in"
          >
            <h1
              className="titles"
              dangerouslySetInnerHTML={{ __html: jobs.title }}
            ></h1>
            <p
              className="paragraphs"
              dangerouslySetInnerHTML={{ __html: jobs.paragraph }}
            ></p>
            <a
              href={formatUrl(jobs.href)} // Aplicar la función formatUrl aquí
              className="btn px-14 py-3 rounded-full text-white"
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
