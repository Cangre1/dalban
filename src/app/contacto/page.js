import data from "../../../public/data/es.json";
import HeroPages from "../ui/templates/heroPages";
import Form from "../ui/templates/form";

export default function Contact() {
  return (
    <div>
      <HeroPages data={data} />
      <Form />
    </div>
  );
}
