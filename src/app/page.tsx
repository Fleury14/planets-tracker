import Tracker from "./ui/tracker";
import ZoneSelector from "./ui/zone-selector";

export default function Home() {
  return (
    <div className="flex">
      <Tracker />
      <ZoneSelector />
    </div>
  );
}
