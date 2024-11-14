import data from "../../../public/data/es.json";
import Descriptionv3 from "../ui/templates/descriptionv3";
import GridInsights from "../ui/templates/gridInsights";
import AOSInitializer from "../aos/aos";

export default function FullService() {
  return (
    <div>
      <AOSInitializer />
      <Descriptionv3 data={data} />
      <GridInsights data={data} />
    </div>
  );
}
