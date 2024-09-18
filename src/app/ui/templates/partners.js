import Image from "next/image";

const Partners = ({ data }) => {
  const { partners } = data;

  return (
    <div className="bg-[#D9D9D980]">
      <div className="contenedor-custom !py-12 lg:!py-28 space-y-12 lg:space-y-28">
        <div className="space-y-5 text-center">
          <h1
            className="text-2xl lg:text-4xl  text-black"
            dangerouslySetInnerHTML={{ __html: partners.title }}
          ></h1>
          <p
            className="text-base lg:text-lg text-black"
            dangerouslySetInnerHTML={{ __html: partners.paragraph }}
          ></p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          {partners.src.map((partner, index) => (
            <div key={index} className="flex items-center justify-center">
              <Image
                src={partner.src}
                alt={partner.alt}
                width={150} // Ajusta según el tamaño necesario
                height={150} // Ajusta según el tamaño necesario
                objectFit="contain"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Partners;
