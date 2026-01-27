'use client'

import { Dispatch, SetStateAction, useState } from "react";
import { defaultKI } from "../lib/key-items";
import { KIList } from "../lib/interfaces";
import KeyItem from "./ki-component";

export default function Tracker() {

    const [ki, setKI] = useState<KIList>(defaultKI)

    const KIarr = [];
    for (const [key, val] of Object.entries(ki)) {
        KIarr.push(
            {key: key, val: val}
        )
    }

    function toggleKI(target: string, setKI:Dispatch<SetStateAction<KIList>>) {
        setKI((prevState: KIList) => ({
            ...prevState,
            [target]: {
                ...prevState[target as keyof KIList],
                hasItem: !prevState[target as keyof KIList].hasItem    
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