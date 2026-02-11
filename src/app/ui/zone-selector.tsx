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
            <p className="text-xs text-center">Select Zone to highlight Core/KI</p>
            <div>
                <div className="flex justify-center">
                    <button
                        type="button"
                        className="non-ws-button text-xs m-3 px-3 py-2 border-1"
                        onClick={() => setCurrentZone(null)}
                    >
                        Nothing
                    </button>
                </div>
                <div className="flex">
                    <button 
                        type="button"
                        className={`non-ws-button text-xs m-3 px-3 py-2 rounded-base bg-${Zone.Brinstar}`}
                        onClick={() => setCurrentZone(Zone.Brinstar)}
                    >
                        Brinstar
                    </button>
                    <button 
                        type="button"
                        className={`non-ws-button text-xs m-3 px-3 py-2 rounded-base bg-${Zone.Crateria}`}
                        onClick={() => setCurrentZone(Zone.Crateria)}
                    >
                        Crateria
                    </button>
                </div>    
                <div className="flex">
                    <button 
                        type="button"
                        className={`non-ws-button text-xs m-3 px-3 py-2 rounded-base bg-${Zone.Norfair}`}
                        onClick={() => setCurrentZone(Zone.Norfair)}
                    >
                        Norfair
                    </button>
                    <button 
                        type="button"
                        className={`non-ws-button text-xs m-3 px-3 py-2 rounded-base bg-${Zone.Kraid}`}
                        onClick={() => setCurrentZone(Zone.Kraid)}
                    >
                        Kraid
                    </button>
                </div>
                <div className="flex">
                    <button 
                        type="button"
                        className={`non-ws-button text-xs m-3 px-3 py-2 rounded-base bg-${Zone.Ridley}`}
                        onClick={() => setCurrentZone(Zone.Ridley)}
                    >
                        Ridley
                    </button>
                    <button 
                        type="button"
                        className={`non-ws-button text-xs m-3 px-3 py-2 rounded-base bg-${Zone.Tourian}`}
                        onClick={() => setCurrentZone(Zone.Tourian)}
                    >
                        Tourian
                    </button>
                </div>
                <button 
                    type="button"
                    className={`text-xs m-3 px-3 py-2 rounded-base bg-${Zone.WreckedShip}`}
                    onClick={() => setCurrentZone(Zone.WreckedShip)}
                >
                    Wrecked Ship
                </button>
                <p className="text-center">Selected Zone:</p>
                <p className="text-center">{ currentZone === null ? "NOTHING" : currentZone }</p>
            </div>
            
                
                
                
            
        </div>
    );
}