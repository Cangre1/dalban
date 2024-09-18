import data from "../../../public/data/es.json";
import HeroPages from "../ui/templates/heroPages";
import Vision from "../ui/templates/vision";
import PremiumPharma from "../ui/templates/premiumPharma";
import Partners from "../ui/templates/partners";

export default function Industria() {
  return (
    <div>
      <HeroPages data={data} />
      <Vision data={data} />
      <PremiumPharma data={data.industria.solutions} />
      <Partners data={data} />
    </div>
  );
}
