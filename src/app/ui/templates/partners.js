import Image from "next/image";
import SlidingLogos from "./slidingLogos";

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
      </div>
      <SlidingLogos />
    </div>
  );
};

export default Partners;
