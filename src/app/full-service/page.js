"use client";

import React, { useState, useEffect } from "react";
import data from "../../../public/data/es.json";
import HeroPages from "../ui/templates/heroPages";
import Descriptionv2 from "../ui/templates/descriptionv2";
import GridFullService from "../ui/templates/gridFullService";
import InformationBanner from "../ui/templates/informationBanner";
import AOSInitializer from "../aos/aos";

export default function FullService() {
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
          <GridFullService data={data} />
          <InformationBanner data={data} />
        </>
      )}
    </div>
  );
}
