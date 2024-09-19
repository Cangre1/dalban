import Image from "next/image";
import SlidingLogos from "./slidingLogos";

const Partners = ({ data }) => {
  const { partners } = data;

  return (
    <div className="bg-[#D9D9D980] py-12 lg:py-28 space-y-24">
      <div className="contenedor-custom">
        <div className="space-y-5 text-center">
          <h1
            className="titles"
            dangerouslySetInnerHTML={{ __html: partners.title }}
          ></h1>
          <p
            className="paragraphs"
            dangerouslySetInnerHTML={{ __html: partners.paragraph }}
          ></p>
        </div>
      </div>
      <SlidingLogos />
    </div>
  );
};

export default Partners;
