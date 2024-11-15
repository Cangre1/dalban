import React, { useEffect, useState } from "react";

const Map = ({ data }) => {
  const [isPharmaRoute, setIsPharmaRoute] = useState(false);

  useEffect(() => {
    // Verificar si la URL termina en '/pharma'
    if (window.location.pathname.endsWith("/pharma")) {
      setIsPharmaRoute(true);
    } else {
      setIsPharmaRoute(false);
    }
  }, []);

  return (
    <div className="bg-gray-100">
      <div className="contenedor-custom !py-12 lg:!py-28 space-y-5 lg:space-y-16">
        {/* Título centrado */}
        <div className="text-center">
          <h1
            data-aos="zoom-in"
            className="titles"
            dangerouslySetInnerHTML={{ __html: data.title }}
          ></h1>
        </div>

        {/* Contenedor principal con grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Párrafo a la izquierda */}
          <div>
            <p
              data-aos="zoom-in"
              className="paragraphs"
              dangerouslySetInnerHTML={{ __html: data.paragraph }}
            ></p>
          </div>

          {/* Lista a la derecha */}
          <div data-aos="zoom-in">
            <ul
              className={`list-disc pl-5 paragraphs ${
                isPharmaRoute ? "!text-[#0099A8]" : "!text-[#252969]"
              }`}
            >
              {data.items.map((item, index) => (
                <li key={index} className="mb-2">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      {/* Iframe de Google Maps */}
      <div>
        <iframe
          className="w-full h-[500px]"
          src={data.href}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
};

export default Map;
