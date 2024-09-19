import React from "react";

const PhraseBanner = ({ data }) => {
  const { phraseBanner } = data;
  return (
    <div>
      <div className="contenedor-custom !py-12 lg:!py-28 space-y-10 ">
        <p
          className="text-2xl lg:text-4xl text-[#019DAA] text-center"
          dangerouslySetInnerHTML={{ __html: phraseBanner.paragraph }}
        ></p>
        <div className="flex flex-col lg:flex-row items-center lg:items-start justify-center gap-y-5 lg:gap-y-0 gap-x-10">
          <a
            href={phraseBanner.btnA.href}
            className="btn px-14 py-3 rounded-full text-center"
          >
            {phraseBanner.btnA.text}
          </a>
          <a
            href={phraseBanner.btnB.href}
            className="btn px-14 py-3 rounded-full text-center"
          >
            {phraseBanner.btnB.text}
          </a>
        </div>
      </div>
    </div>
  );
};

export default PhraseBanner;
