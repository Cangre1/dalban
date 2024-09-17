import data from "../../../public/data/es.json";
import HeroPages from "../ui/templates/heroPages";
import Descriptionv2 from "../ui/templates/descriptionv2";
import ServicesBanner from "../ui/templates/servicesBanner";
import PremiumPharma from "../ui/templates/premiumPharma";
import Infrastructure from "../ui/templates/infrastructure";
import Map from "../ui/templates/map";
import InformationBanner from "../ui/templates/informationBanner";

export default function Pharma() {
  return (
    <div>
      <HeroPages data={data} />
      <Descriptionv2 data={data} />
      <ServicesBanner data={data.services} />
      <PremiumPharma data={data} />
      <Infrastructure data={data} />
      <ServicesBanner data={data.characteristics} />
      <Map data={data} />
      <InformationBanner data={data} />
    </div>
  );
}
