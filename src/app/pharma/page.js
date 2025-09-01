"use client";
import React, { useState, useEffect } from "react";
import data from "../../../public/data/es.json";
import HeroPages from "../ui/templates/heroPagesServicios";
import Descriptionv2 from "../ui/templates/descriptionv2";
import ServicesBanner from "../ui/templates/servicesBanner";
import PremiumPharma from "../ui/templates/premiumPharmaV3";
import Infrastructure from "../ui/templates/infrastructure";
import PhraseBanner from "../ui/templates/phraseBanner";
import Map from "../ui/templates/map";
import InformationBanner from "../ui/templates/informationBanner";
import AOSInitializer from "../aos/aos";

export default function Pharma() {
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
          <div className="-mt-24">
            <PremiumPharma data={data.pharma.premium} />
          </div>
          <Infrastructure data={data} />
          <PhraseBanner data={data} />
          <Map data={data.mapHaedo} />
          <InformationBanner data={data} />
        </>
      )}
    </div>
  );
}
