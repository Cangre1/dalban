"use client";
import React, { useState, useEffect } from "react";
import data from "../../../public/data/es.json";
import HeroPages from "../ui/templates/heroPages";
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
          <InformationBanner data={data} />
        </>
      )}
    </div>
  );
}
