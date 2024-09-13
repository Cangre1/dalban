import data from "../../public/data/es.json";
import VideoHero from "./ui/templates/videoHero";
import Description from "./ui/templates/description";
import StatisticsBanner from "./ui/templates/statisticsBanner";
import Solutions from "./ui/templates/solutions";

export default function Home() {
  return (
    <div>
      <VideoHero />
      <Description data={data} />
      <StatisticsBanner data={data} />
      <Solutions data={data} />
    </div>
  );
}
