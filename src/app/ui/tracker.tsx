'use client'

import { Dispatch, SetStateAction, useState } from "react";
import { defaultKI } from "../lib/key-items";
import { KIList } from "../lib/interfaces";
import { useZoneSelector } from "../lib/context/current-zone";
import KeyItem from "./ki-component";

export default function Tracker() {
    const { currentZone } = useZoneSelector();

    const [ki, setKI] = useState<KIList>(defaultKI)

    const KIarr = [];
    for (const [key, val] of Object.entries(ki)) {
        KIarr.push(
            {key: key, val: val}
        )
    }

    function isBoss(KI:string) {
        console.log(KI === "kraid" || KI === "ridley" || KI === "spore")
        return (KI === "kraid" || KI === "ridley" || KI === "spore")
    }

    function toggleKI(target: string, setKI:Dispatch<SetStateAction<KIList>>) {
        setKI((prevState: KIList) => ({
            ...prevState,
            [target]: {
                ...prevState[target as keyof KIList],
                hasItem: !prevState[target as keyof KIList].hasItem,
                zone: isBoss(target) ? null : (prevState[target as keyof KIList].hasItem === false ? currentZone : null)
            }
        }));
    }
       
    
    

    return (
        <div className="tracker-container">
            <div className="flex flex-wrap">
                {KIarr.map(eachKI => {
                    return (
                        <div key={eachKI.key}>
                            <KeyItem
                                name={eachKI.key}
                                ki={eachKI.val}
                                toggle={() => toggleKI(eachKI.key, setKI)}
                                cores={false}
                            />
                        </div>
                    );
                })}
            </div>
            <div className="flex flex-wrap mt-5">
                {KIarr.map(eachKI => {
                    return (
                        <div key={eachKI.key}>
                            <KeyItem
                                name={eachKI.key}
                                ki={eachKI.val}
                                toggle={() => toggleKI(eachKI.key, setKI)}
                                cores={true}
                            />
                        </div>
                    );
                })}
            </div>
        </div>
    )
}