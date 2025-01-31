import { useEffect, useState } from "react";
import Image from "next/image";

const ServicesBanner = ({ data }) => {
  const [isPharma, setIsPharma] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const pathname = window.location.pathname;
      setIsPharma(pathname.endsWith("/pharma.html"));
    }
  }, []);

  return (
    <div className="bg-gray-100">
      <div className="contenedor-custom !py-12 lg:!py-28 space-y-8 lg:space-y-28">
        <div className="space-y-5" data-aos="zoom-in">
          {/* Párrafo centrado */}
          <h1
            className="titles text-center"
            dangerouslySetInnerHTML={{ __html: data.title }}
          ></h1>
          <p
            className="paragraphs text-center italic"
            dangerouslySetInnerHTML={{ __html: data.paragraph }}
          ></p>
        </div>

        {/* Grilla de servicios */}
        <div
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          data-aos="zoom-in"
        >
          {data.grid.map((item, index) => (
            <div key={index} className="flex space-y-4 justify-center">
              {/* Imagen y Título en una misma fila */}
              <div className="flex flex-col lg:flex-row items-center lg:items-start w-full justify-center gap-10 text-center lg:text-start">
                <Image
                  src={isPharma ? item.src2 : item.src}
                  alt={item.title}
                  width={70}
                  height={70}
                  className="lg:mr-4"
                />
                <div className="space-y-4 text-black">
                  <h3 className="titles-secondary">{item.title}</h3>
                  <ul className="paragraphs-secondary">
                    {item.caracteristics.map((characteristic, index) => (
                      <li key={index}>{characteristic}</li>
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
