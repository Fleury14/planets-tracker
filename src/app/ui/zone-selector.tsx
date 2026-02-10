"use client";

import { Zone } from "../lib/enums";
import { Press_Start_2P } from "next/font/google";
import { useZoneSelector } from "../lib/context/current-zone";

const pressStart = Press_Start_2P({
    subsets: ['latin'],
    weight: '400',
})

export default function ZoneSelector() {

    const { currentZone, setCurrentZone } = useZoneSelector();

    return (
        <div className={`tracker-container ${pressStart.className}`}>
            <p className="text-center">ZONE SELECTOR</p>
            <p className="text-xs text-center">Select Zone then right click KI to highlight</p>
            <div>
                <div className="flex">
                    <button type="button" className={`non-ws-button text-xs m-3 px-3 py-2 rounded-base bg-${Zone.Brinstar}`}>Brinstar</button>
                    <button type="button" className={`non-ws-button text-xs m-3 px-3 py-2 rounded-base bg-${Zone.Crateria}`}>Crateria</button>
                </div>    
                <div className="flex">
                    <button type="button" className={`non-ws-button text-xs m-3 px-3 py-2 rounded-base bg-${Zone.Norfair}`}>Norfair</button>
                    <button type="button" className={`non-ws-button text-xs m-3 px-3 py-2 rounded-base bg-${Zone.Kraid}`}>Kraid</button>
                </div>
                <div className="flex">
                    <button type="button" className={`non-ws-button text-xs m-3 px-3 py-2 rounded-base bg-${Zone.Ridley}`}>Ridley</button>
                    <button type="button" className={`non-ws-button text-xs m-3 px-3 py-2 rounded-base bg-${Zone.Tourian}`}>Tourian</button>
                </div>
                <button type="button" className={`text-xs m-3 px-3 py-2 rounded-base bg-${Zone.WreckedShip}`}>Wrecked Ship</button>
                <p className="text-center">Selected Zone:</p>
                <p className="text-center">{ currentZone }</p>
            </div>
            
                
                
                
            
        </div>
    );
}