"use client";

import { useState, createContext, useContext, Dispatch, SetStateAction } from "react";
import { Zone } from "../enums";

type TZoneContext = {
    currentZone: Zone;
    setCurrentZone: Dispatch<SetStateAction<Zone>>;
}

const ZoneContext = createContext<TZoneContext | null>(null);

const ZoneProvider = ({ children }: Readonly<{ children: React.ReactNode }>) => {
    const [currentZone, setCurrentZone] = useState(Zone.Crateria);

    return (
        <ZoneContext.Provider value={{ currentZone, setCurrentZone }}>
            {children}
        </ZoneContext.Provider>
    )
}

function useZoneSelector() {
    const consumer = useContext(ZoneContext);

    if (!consumer) {
        throw new Error("useZoneSelector must be used within a Theme Provider");
    }

    return consumer;
}

export { ZoneProvider, useZoneSelector };