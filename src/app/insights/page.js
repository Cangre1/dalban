import data from "../../../public/data/es.json";
import Descriptionv3 from "../ui/templates/descriptionv3";
import GridInsights from "../ui/templates/gridInsights";

export default function FullService() {
  return (
    <div>
      <Descriptionv3 data={data} />
      <GridInsights data={data} />
    </div>
  );
}
