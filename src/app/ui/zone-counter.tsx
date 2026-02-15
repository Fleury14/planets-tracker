import { KIList } from "../lib/interfaces";
import { Zone } from "../lib/enums";
import { Press_Start_2P } from "next/font/google";

const pressStart = Press_Start_2P({
    subsets: ['latin'],
    weight: '400',
})

export default function ZoneCounter({ kiList }: { kiList: KIList}) {
    
    // NOTE: there's probably a better way to do this than to hard-code a list of zones
    
    const zoneList = [];
    const keyList = [];
    const countList = [];

    for (const [key, val] of Object.entries(Zone)) {
        keyList.push(key);
        zoneList.push(val);
        countList.push([val, 0])
    }
    
    function checkCount(zone:string) {
        let count = 0;
        for (const [key, val] of Object.entries(kiList)) {
            if (key) {}
            if (val.zone === zone && !val.coreColor) count++;
        }
        return count;
    }

    return (
        <div className="flex flex-wrap">
            {zoneList.map(zone => {
                return (
                    <p key={'counter-' + zone} className={` m-3 text-${zone} ${pressStart.className}`}>{zone.charAt(0)}: {checkCount(zone)}</p>
                );
            })}
            
        </div>
    );
}