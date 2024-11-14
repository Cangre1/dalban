import React from "react";

const Insights = ({ data }) => {
  const { insights } = data;
  return (
    <div className="bg-gray-100">
      <div className="contenedor-custom !py-12 lg:!py-28 space-y-16">
        <div
          className="flex flex-col items-center justify-center text-center gap-y-5"
          data-aos="zoom-in"
        >
          {/* Título centrado */}
          <h1
            className="titles"
            dangerouslySetInnerHTML={{ __html: insights.title }}
          ></h1>

          {/* Párrafo centrado */}
          <p
            className="paragraphs"
            dangerouslySetInnerHTML={{ __html: insights.paragraph }}
          ></p>
        </div>

        {/* Grilla principal */}
        <div>
          <div
            className="grid grid-cols-1 sm:grid-cols-2 grid-rows-2 gap-3"
            data-aos="zoom-in"
          >
            {/* Primer elemento de la grilla con gradiente */}
            <div
              className="row-span-2 bg-cover bg-center py-24 sm:py-32 relative group shadow-lg hover:shadow-2xl transition-all ease-in-out duration-300 transform hover:-translate-y-1"
              style={{
                backgroundImage: `linear-gradient(to top, #252969 10%, rgba(0,0,0,0) 50%), url(${insights.grid[0].src})`,
              }}
            >
              <div className="absolute bottom-0 left-0 w-full text-white p-5 sm:p-10 space-y-2 sm:space-y-4">
                <span
                  className="block text-base sm:text-lg"
                  dangerouslySetInnerHTML={{
                    __html: insights.grid[0].category,
                  }}
                ></span>
                <h1
                  className="text-xl sm:text-2xl font-bold"
                  dangerouslySetInnerHTML={{
                    __html: insights.grid[0].title,
                  }}
                ></h1>
                <p
                  className="text-sm sm:text-base"
                  dangerouslySetInnerHTML={{
                    __html: insights.grid[0].paragraph,
                  }}
                ></p>
              </div>
            </div>

            {/* Segundo elemento de la grilla */}
            <div
              className="bg-cover bg-center py-24 sm:py-32 relative  shadow-lg hover:shadow-2xl transition-all ease-in-out duration-300 transform hover:-translate-y-1"
              style={{
                backgroundImage: `linear-gradient(to top, #252969 10%, rgba(0,0,0,0) 50%), url(${insights.grid[1].src})`,
              }}
            >
              <div className="absolute bottom-0 left-0 w-full text-white p-5 sm:p-10 space-y-2 sm:space-y-4">
                <span
                  className="block text-base sm:text-lg"
                  dangerouslySetInnerHTML={{
                    __html: insights.grid[1].category,
                  }}
                ></span>
                <h1
                  className="text-xl sm:text-2xl font-bold"
                  dangerouslySetInnerHTML={{
                    __html: insights.grid[1].title,
                  }}
                ></h1>{" "}
                <p
                  className="text-sm sm:text-base"
                  dangerouslySetInnerHTML={{
                    __html: insights.grid[1].paragraph,
                  }}
                ></p>
              </div>
            </div>

            {/* Tercer elemento de la grilla */}
            <div
              className="bg-cover bg-center py-24 sm:py-32 relative  shadow-lg hover:shadow-2xl transition-all ease-in-out duration-300 transform hover:-translate-y-1"
              style={{
                backgroundImage: `linear-gradient(to top, #252969 10%, rgba(0,0,0,0) 50%), url(${insights.grid[1].src})`,
              }}
            >
              <div className="absolute bottom-0 left-0 w-full text-white p-5 sm:p-10 space-y-2 sm:space-y-4">
                <span
                  className="block text-base sm:text-lg"
                  dangerouslySetInnerHTML={{
                    __html: insights.grid[2].category,
                  }}
                ></span>
                <h1
                  className="text-xl sm:text-2xl font-bold"
                  dangerouslySetInnerHTML={{
                    __html: insights.grid[2].title,
                  }}
                ></h1>{" "}
                <p
                  className="text-sm sm:text-base"
                  dangerouslySetInnerHTML={{
                    __html: insights.grid[2].paragraph,
                  }}
                ></p>
              </div>
            </div>

            {/* Grilla anidada para los dos últimos elementos */}
            <div className="col-start-1 sm:col-start-2 hidden">
              <div className="grid grid-cols-2 gap-3">
                {/* Tercer elemento de la grilla */}
                <div
                  className="bg-cover bg-center py-24 sm:py-32 relative  shadow-lg hover:shadow-2xl transition-all ease-in-out duration-300 transform hover:-translate-y-1"
                  style={{
                    backgroundImage: `linear-gradient(to top, #0099A8 10%, rgba(0,0,0,0) 50%), url(${insights.grid[2].src})`,
                  }}
                >
                  <div className="absolute bottom-0 left-0 w-full text-white p-5 sm:p-10 space-y-2 sm:space-y-4">
                    <span className="block text-base sm:text-lg">
                      {insights.grid[2].category}
                    </span>
                    <h1 className="text-xl sm:text-2xl font-bold">
                      {insights.grid[2].title}
                    </h1>
                  </div>
                </div>

                {/* Cuarto elemento de la grilla */}
                <div
                  className="bg-cover bg-center py-24 sm:py-32 relative  shadow-lg hover:shadow-2xl transition-all ease-in-out duration-300 transform hover:-translate-y-1"
                  style={{
                    backgroundImage: `linear-gradient(to top, #0099A8 10%, rgba(0,0,0,0) 50%), url(${insights.grid[3].src})`,
                  }}
                >
                  <div className="absolute bottom-0 left-0 w-full text-white p-5 sm:p-10 space-y-2 sm:space-y-4">
                    <span
                      className="block text-base sm:text-lg"
                      dangerouslySetInnerHTML={{
                        __html: insights.grid[3].category,
                      }}
                    ></span>
                    <h1
                      className="text-xl sm:text-2xl font-bold"
                      dangerouslySetInnerHTML={{
                        __html: insights.grid[3].title,
                      }}
                    ></h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Insights;
