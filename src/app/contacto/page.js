import data from "../../../public/data/es.json";
import HeroPages from "../ui/templates/heroPages";

export default function Contact() {
  return (
    <div>
      <HeroPages data={data} />
    </div>
  );
}
