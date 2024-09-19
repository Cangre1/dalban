import React from "react";

const GridInsights = ({ data }) => {
  const { insights } = data;

  // Función para renderizar cada card con padding fijo en móviles y dinámico en pantallas grandes
  const renderCard = (item, index) => (
    <a
      href="/"
      key={index}
      className="flex flex-col w-full mx-auto bg-white rounded-lg shadow-lg hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 ease-in-out"
    >
      {/* Imagen de fondo con padding fijo en móviles y dinámico en pantallas grandes */}
      <div
        className="bg-cover bg-center rounded-t-lg py-32 xl:py-44"
        style={{ backgroundImage: `url(${item.src})` }}
      ></div>
      {/* Contenido */}
      <div className="flex flex-col justify-between p-5 lg:p-10 gap-y-5">
        <h1
          className="titles"
          dangerouslySetInnerHTML={{ __html: item.title }}
        ></h1>
        <p
          className="paragraphs"
          dangerouslySetInnerHTML={{ __html: item.paragraph }}
        ></p>
        <button
          className="text-[#10CFC9] w-fit underline text-xl"
          dangerouslySetInnerHTML={{ __html: item.btn.title }}
        ></button>
      </div>
    </a>
  );

  return (
    <div className=" bg-gray-100 py-12 lg:py-24">
      <div className="contenedor-custom space-y-10">
        {/* Renderizando la primera card en pantalla completa */}
        {renderCard(insights.grid2[0], 0)}

        {/* Grid de 2 columnas en pantallas grandes y de una columna en móviles */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-10">
          {insights.grid2
            .slice(1, 3)
            .map((item, index) => renderCard(item, index + 1))}
        </div>

        {/* Grid de 3 columnas en pantallas grandes y de una columna en móviles */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-x-10 gap-y-10">
          {insights.grid2
            .slice(3, 6)
            .map((item, index) => renderCard(item, index + 3))}
        </div>
      </div>
    </div>
  );
};

export default GridInsights;
