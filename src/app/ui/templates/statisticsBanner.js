import Image from "next/image";

const StatisticsBanner = ({ data }) => {
  const { stats } = data;

  return (
    <div className="bg-gray-100">
      <div className="contenedor-custom !py-12 lg:!py-28 space-y-16 lg:space-y-28">
        {/* Párrafo centrado */}
        <h1 className="titles lg:text-center" data-aos="zoom-in">
          {stats.paragraph}
        </h1>

        {/* Grilla de estadísticas */}
        <div
          className="grid grid-cols-2 md:grid-cols-4 gap-8  text-center"
          data-aos="zoom-in"
        >
          {stats.stats.map((stat, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className="h-24">
                {/* Imagen */}
                <Image
                  src={stat.src}
                  alt={stat.alt}
                  width={stat.width}
                  height={stat.height}
                />
              </div>

              <div className="flex flex-col space-y-2">
                {/* Número */}
                <p className="stats-number">{stat.number}</p>

                {/* Texto */}
                <span
                  className="stats-text"
                  dangerouslySetInnerHTML={{ __html: stat.text }}
                ></span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StatisticsBanner;
