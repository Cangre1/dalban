import React from "react";

const Map = ({ data }) => {
  return (
    <div className="bg-gray-100">
      <div className="contenedor-custom !py-12 lg:!py-28 space-y-16">
        {/* Título centrado */}
        <div className="text-center">
          <h1
            className="titles"
            dangerouslySetInnerHTML={{ __html: data.title }}
          ></h1>
        </div>

        {/* Contenedor principal con grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Párrafo a la izquierda */}
          <div>
            <p
              className="paragraphs"
              dangerouslySetInnerHTML={{ __html: data.paragraph }}
            ></p>
          </div>

          {/* Lista a la derecha */}
          <div>
            <ul className="list-disc pl-5 paragraphs !text-[#0099A8]">
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
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
};

export default Map;
