import data from "../../public/data/es.json";
import VideoHero from "./ui/templates/videoHero";
import Description from "./ui/templates/description";
import StatisticsBanner from "./ui/templates/statisticsBanner";
import Solutions from "./ui/templates/solutions";
import Insights from "./ui/templates/insights";
import Jobs from "./ui/templates/jobs";
export default function Home() {
  return (
    <div>
      <VideoHero />
      <Description data={data} />
      <StatisticsBanner data={data} />
      <Solutions data={data} />
      <Insights data={data} />
      <Jobs data={data} />
    </div>
  );
}
