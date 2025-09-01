import React, { useEffect, useState } from "react";

const PhraseBanner = ({ data }) => {
  const { phraseBanner } = data;
  const [textColor, setTextColor] = useState("#252969");

  useEffect(() => {
    if (typeof window !== "undefined") {
      const currentPath = window.location.pathname;
      const lastPart = currentPath.substring(currentPath.lastIndexOf("/") + 1);

      // Cambiar el color si la URL termina en "pharma" o "pharma.html"
      if (lastPart === "pharma" || lastPart === "pharma.html") {
        setTextColor("#0099A8");
      }
    }
  }, []);

  return (
    <div>
      <div
        className="contenedor-custom !py-12 lg:!py-28 space-y-10"
        data-aos="zoom-in"
      >
        <p
          className="text-2xl lg:text-4xl text-center"
          style={{ color: textColor }}
          dangerouslySetInnerHTML={{ __html: phraseBanner.paragraph }}
        ></p>
      </div>
    </div>
  );
};

export default PhraseBanner;
