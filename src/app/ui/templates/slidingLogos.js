import React from "react";
import Image from "next/image";

const logosA = [
  { src: "/assets/partners/logo-asofarma.png", width: 123.29, height: 22.06 },
  { src: "/assets/partners/logo-bayer.png", width: 115.37, height: 64.47 },
  { src: "/assets/partners/logo-boehringer.png", width: 136.3, height: 22.06 },
  { src: "/assets/partners/logo-daxley.png", width: 173.62, height: 25.45 },
  { src: "/assets/partners/logo-elea.png", width: 101.8, height: 59.95 },
  { src: "/assets/partners/logo-nefra.png", width: 40.72, height: 40.72 },
  { src: "/assets/partners/logo-amega.png", width: 87, height: 87 },
  { src: "/assets/partners/logo-imvi.png", width: 114, height: 40 },
  { src: "/assets/partners/logo-oxa.png", width: 61, height: 39 },
  { src: "/assets/partners/logo-anders.png", width: 48, height: 48 },
  { src: "/assets/partners/logo-insalcor.png", width: 28, height: 38 },
  { src: "/assets/partners/logo-celnova.png", width: 28, height: 38 },
  { src: "/assets/partners/logo-rontag.png", width: 28, height: 38 },
  { src: "/assets/partners/logo-knight.png", width: 28, height: 38 },
  { src: "/assets/partners/logo-raffo.png", width: 28, height: 38 },
  { src: "/assets/partners/logo-richmond.png", width: 28, height: 38 },
  { src: "/assets/partners/logo-savant.png", width: 28, height: 38 },
  { src: "/assets/partners/logo-sinergium.png", width: 28, height: 38 },
  { src: "/assets/partners/logo-valuge.png", width: 28, height: 38 },
  { src: "/assets/partners/logo-colorcon.png", width: 28, height: 38 },
];

const logosB = [
  { src: "/assets/partners/logo-beckman.png", width: 66, height: 26 },
  { src: "/assets/partners/logo-easy.png", width: 109, height: 28 },
  { src: "/assets/partners/logo-pall.png", width: 86, height: 21 },
  { src: "/assets/partners/logo-masnet.png", width: 127, height: 14 },
  { src: "/assets/partners/logo-isard.jpeg", width: 87, height: 63 },
  { src: "/assets/partners/logo-newell.png", width: 139, height: 54 },
];

const duplicateLogosA = (logosA, times) => {
  const duplicatedLogosA = [];
  for (let i = 0; i < times; i++) {
    duplicatedLogosA.push(...logosA);
  }
  return duplicatedLogosA;
};

const duplicateLogosB = (logosB, times) => {
  const duplicatedLogosB = [];
  for (let i = 0; i < times; i++) {
    duplicatedLogosB.push(...logosB);
  }
  return duplicatedLogosB;
};

const SlidingLogos = () => {
  const logosDuplicatedA = duplicateLogosA(logosA, 3); // Duplicar los logos suficientes veces para cubrir el ancho
  const logosDuplicatedB = duplicateLogosB(logosB, 3); // Duplicar los logos suficientes veces para cubrir el ancho

  return (
    <div className="bg-darkGray py-4 pb-[176px] overflow-hidden space-y-10">
      <div className="space-y-5">
        <h1 className="text-2xl lg:text-4xl  text-black text-center">Pharma</h1>
        <div className="flex animate-scroll-custom  items-center">
          {logosDuplicatedA.map((logo, index) => (
            <div key={index} className="flex-shrink-0 items-center flex pl-8">
              <Image
                src={logo.src}
                alt={`Logo ${index + 1}`}
                width={100}
                height={100}
              />
            </div>
          ))}
        </div>
      </div>
      <div>
        <h1 className="text-2xl lg:text-4xl  text-black text-center">
          No Pharma
        </h1>
        <div className="flex animate-scroll-reverse-custom items-center mt-12">
          {logosDuplicatedB.map((logo, index) => (
            <div key={index} className="flex-shrink-0 items-center flex pl-8">
              <Image
                src={logo.src}
                alt={`Logo ${index + 1}`}
                width={100}
                height={100}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SlidingLogos;
