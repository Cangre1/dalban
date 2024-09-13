import Image from "next/image";

const Solutions = ({ data }) => {
  const { solutions } = data;

  return (
    <div className="bg-white">
      <div className="contenedor-custom !py-12 lg:!py-28">
        {/* Titular centrado */}
        <h2
          className="text-center text-2xl lg:text-3xl text-gray-800 mb-12"
          dangerouslySetInnerHTML={{ __html: solutions.title }}
        ></h2>

        {/* Primera Grilla - 3 columnas */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {solutions.grid1.map((item, index) => (
            <div key={index} className="relative group">
              {/* Imagen */}
              <Image
                src={item.src}
                alt={item.title}
                layout="responsive"
                width={400}
                height={250}
                className="object-cover"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-[#0099A8] bg-opacity-70 opacity-50 rounded-2xl group-hover:opacity-100 transition-opacity duration-300"></div>

              {/* Título y Call to Action */}
              <div className="absolute inset-0 flex flex-col justify-center items-center text-white  transition-opacity duration-300">
                <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
                <a
                  href={item.href}
                  className=" text-white hover:underline text-lg "
                >
                  {item.btn}
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Segunda Grilla - 3 columnas */}
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {solutions.grid2.map((item, index) => (
            <div key={index} className="flex flex-col space-y-4">
              {/* Imagen y Título en una misma fila */}
              <div className="flex items-center">
                <Image
                  src={item.src}
                  alt={item.title}
                  width={50}
                  height={50}
                  className="mr-4"
                />
                <h3 className="text-xl text-black ">{item.title}</h3>
              </div>

              {/* Párrafo */}
              <p className="text-black">{item.paragraph}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Solutions;
