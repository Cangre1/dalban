"use client";
import React, { useState, useEffect } from "react";
import data from "../../../public/data/es.json";
import HeroPages from "../ui/templates/heroPagesServicios";
import Descriptionv2 from "../ui/templates/descriptionv2";
import ServicesBanner from "../ui/templates/servicesBanner";
import PremiumPharma from "../ui/templates/premiumPharma";
import Infrastructure from "../ui/templates/infrastructure";
import Map from "../ui/templates/map";
import PhraseBanner from "../ui/templates/phraseBanner";
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
          <ServicesBanner data={data.services} />
          <PremiumPharma data={data.pharma.premium} />
          <Infrastructure data={data} />
          <ServicesBanner data={data.characteristics} />
          <PhraseBanner data={data} />
          <Map data={data.mapHaedo} />
          <InformationBanner data={data} />
        </>
      )}
    </div>
  );
}
