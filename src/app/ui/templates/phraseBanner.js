import React from "react";

const PhraseBanner = ({ data }) => {
  const { phraseBanner } = data;
  return (
    <div className="bg-[#D9D9D9]">
      <div className="contenedor-custom !py-12 lg:!py-28 space-y-10 ">
        <p
          className="text-2xl lg:text-4xl text-[#019DAA] text-center"
          dangerouslySetInnerHTML={{ __html: phraseBanner.paragraph }}
        ></p>
        <div className="flex flex-col lg:flex-row items-center lg:items-start justify-center gap-y-5 lg:gap-y-0 gap-x-10">
          <a
            href={phraseBanner.btnA.href}
            className="bg-[#10CFC9] border-2 border-[#019DAA] text-white px-14 py-3 rounded-full text-center  transition duration-300 w-fit uppercase hover:bg-transparent hover:text-[#019DAA]"
          >
            {phraseBanner.btnA.text}
          </a>
          <a
            href={phraseBanner.btnB.href}
            className="bg-transparent border-2 border-[#019DAA] text-[#019DAA] px-14 py-3 rounded-full text-center  transition duration-300 w-fit uppercase hover:bg-[#10CFC9] hover:text-white"
          >
            {phraseBanner.btnB.text}
          </a>
        </div>
      </div>
    </div>
  );
};

export default PhraseBanner;
