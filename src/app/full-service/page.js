import data from "../../../public/data/es.json";
import HeroPages from "../ui/templates/heroPages";
import Descriptionv2 from "../ui/templates/descriptionv2";
import GridFullService from "../ui/templates/gridFullService";
import InformationBanner from "../ui/templates/informationBanner";

export default function FullService() {
  return (
    <div>
      <HeroPages data={data} />
      <Descriptionv2 data={data} />
      <GridFullService data={data} />
      <InformationBanner data={data} />
    </div>
  );
}
