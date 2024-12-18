"use client";
import React, { useState, useEffect } from "react";
import data from "../../../public/data/es.json";
import HeroPages from "../ui/templates/heroPagesServicios";
import Descriptionv2 from "../ui/templates/descriptionv2";
import ServicesBanner from "../ui/templates/servicesBanner";
import PremiumLogistics from "../ui/templates/premiumLogistics";
import Infrastructure from "../ui/templates/infrastructure";
import PhraseBanner from "../ui/templates/phraseBanner";
import Map from "../ui/templates/map";
import InformationBanner from "../ui/templates/informationBanner";
import AOSInitializer from "../aos/aos";

export default function Logistics() {
  const [isHeroLoaded, setIsHeroLoaded] = useState(false);

  useEffect(() => {
    // Marca que HeroPages se ha cargado
    setIsHeroLoaded(true);
  }, []);

  return (
    <div className="!min-h-screen">
      <AOSInitializer />
      <HeroPages data={data} />
      {isHeroLoaded && (
        <>
          <Descriptionv2 data={data} />
          <ServicesBanner data={data.services} />
          <PremiumLogistics data={data} />
          <Infrastructure data={data} />
          <ServicesBanner data={data.characteristics} />
          <PhraseBanner data={data} />
          <Map data={data.map} />
          <div className="bg-[#252969] flex flex-col lg:flex-row  gap-1 ">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13159.968308910808!2d-58.7134403!3d-34.452349!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bca23ff6a4e93f%3A0x974e2bb0999d951e!2sCentro%20De%20Distribuci%C3%B3n%20Dalban!5e0!3m2!1ses!2sar!4v1727457799444!5m2!1ses!2sar"
              className="w-full h-[250px] lg:h-[500px]"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d6579.8201125761525!2d-58.702373!3d-34.454431!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bca2493d06fbc7%3A0x5e470f4eff7cb2e8!2sDalban%20Pharma!5e0!3m2!1ses!2sar!4v1732204497706!5m2!1ses!2sar"
              className="w-full h-[250px] lg:h-[500px]"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

          <InformationBanner data={data} />
        </>
      )}
    </div>
  );
}
