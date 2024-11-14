"use client";
import React, { useState, useEffect } from "react";
import data from "../../../public/data/es.json";
import HeroPages from "../ui/templates/heroPages";
import Vision from "../ui/templates/vision";
import PremiumPharma from "../ui/templates/premiumPharma";
import Partners from "../ui/templates/partners";
import AOSInitializer from "../aos/aos";

export default function Industria() {
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
          <Vision data={data} />
          <PremiumPharma data={data.industria.solutions} />
          <Partners data={data} />
        </>
      )}
    </div>
  );
}
