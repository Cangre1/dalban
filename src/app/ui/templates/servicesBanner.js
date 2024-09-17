import Image from "next/image";

const ServicesBanner = ({ data }) => {
  return (
    <div className="bg-[#D9D9D9]">
      <div className="contenedor-custom !py-12 lg:!py-28 space-y-16 lg:space-y-28">
        {/* Párrafo centrado */}
        <h1
          className="text-2xl lg:text-4xl  text-black text-center"
          dangerouslySetInnerHTML={{ __html: data.title }}
        ></h1>

        {/* Grilla de servicios */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {data.grid.map((item, index) => (
            <div key={index} className="flex  space-y-4 justify-center">
              {/* Imagen y Título en una misma fila */}
              <div className="flex flex-col lg:flex-row items-center lg:items-start w-full justify-center gap-10 text-center lg:text-start">
                <Image
                  src={item.src}
                  alt={item.title}
                  width={70}
                  height={70}
                  className="mr-4"
                />
                <div className="space-y-4 text-black">
                  <h3 className="text-3xl ">{item.title}</h3>
                  <ul className="text-lg">
                    {item.caracteristics.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicesBanner;
