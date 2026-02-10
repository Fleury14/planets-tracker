import Tracker from "./ui/tracker";
import ZoneSelector from "./ui/zone-selector";
import { ZoneProvider } from "./lib/context/current-zone";

export default function Home() {
  return (
    <ZoneProvider>
      <div className="flex">
        <Tracker />
        <ZoneSelector />
      </div>
    </ZoneProvider>
  );
}
