import React, { useEffect, useState } from "react";

const PhraseBanner = ({ data }) => {
  const { phraseBanner } = data;
  const [textColor, setTextColor] = useState("#252969");

  useEffect(() => {
    if (typeof window !== "undefined") {
      const currentPath = window.location.pathname;
      const lastPart = currentPath.substring(currentPath.lastIndexOf("/") + 1);

      // Cambiar el color si la URL termina en "pharma"
      if (lastPart === "pharma") {
        setTextColor("#0099A8");
      }
    }
  }, []);

  return (
    <div>
      <div
        className="contenedor-custom !py-12 lg:!py-28 space-y-10 "
        data-aos="zoom-in"
      >
        <p
          className="text-2xl lg:text-4xl text-center"
          style={{ color: textColor }}
          dangerouslySetInnerHTML={{ __html: phraseBanner.paragraph }}
        ></p>
        <div className="flex flex-col lg:flex-row items-center lg:items-start justify-center gap-y-5 lg:gap-y-0 gap-x-10">
          <a
            href={phraseBanner.btnA.href}
            className="btn px-14 hover:!bg-transparent py-3 rounded-full text-center"
            style={{
              backgroundColor: textColor,
              borderColor: textColor,
              color: "#FFFFFF",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = textColor)}
            onMouseLeave={(e) => (e.currentTarget.style.color = "#FFFFFF")}
          >
            {phraseBanner.btnA.text}
          </a>
          <a
            href={phraseBanner.btnB.href}
            className="btn px-14 hover:!bg-transparent py-3 rounded-full text-center"
            style={{
              backgroundColor: textColor,
              borderColor: textColor,
              color: "#FFFFFF",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = textColor)}
            onMouseLeave={(e) => (e.currentTarget.style.color = "#FFFFFF")}
          >
            {phraseBanner.btnB.text}
          </a>
        </div>
      </div>
    </div>
  );
};

export default PhraseBanner;
