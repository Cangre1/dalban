import data from "../../../public/data/es.json";
import HeroPages from "../ui/templates/heroPages";
import Descriptionv2 from "../ui/templates/descriptionv2";

export default function FullService() {
  return (
    <div>
      <HeroPages data={data} />
      <Descriptionv2 data={data} />
    </div>
  );
}
