import React from "react";

const InformationBanner = ({ data }) => {
  const { informationBanner } = data;
  return (
    <div className="contenedor-custom !py-12 lg:!py-28 space-y-10 ">
      <h1
        className="text-2xl lg:text-4xl text-black text-center"
        dangerouslySetInnerHTML={{ __html: informationBanner.title }}
      ></h1>
      <div className="flex justify-center">
        <a
          href={informationBanner.href}
          className="bg-[#10CFC9] text-white px-14 py-3 rounded-full text-center  transition duration-300 w-fit uppercase hover:bg-[#69c2bf]"
        >
          {informationBanner.btn}
        </a>
      </div>
    </div>
  );
};

export default InformationBanner;
