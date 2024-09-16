import React from "react";

const Map = ({ data }) => {
  const { map } = data;
  return (
    <div>
      <div className="contenedor-custom !py-12 lg:!py-28 space-y-16">
        {/* Título centrado */}
        <div className="text-center">
          <h1
            className="text-2xl lg:text-4xl  text-black"
            dangerouslySetInnerHTML={{ __html: map.title }}
          ></h1>
        </div>

        {/* Contenedor principal con grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Párrafo a la izquierda */}
          <div>
            <p
              className="text-base lg:text-lg text-black"
              dangerouslySetInnerHTML={{ __html: map.paragraph }}
            ></p>
          </div>

          {/* Lista a la derecha */}
          <div>
            <ul className="list-disc pl-5 text-base lg:text-lg text-[#0099A8]">
              {map.items.map((item, index) => (
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
          src={map.href}
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
};

export default Map;
