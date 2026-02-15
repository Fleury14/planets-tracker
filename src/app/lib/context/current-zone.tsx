"use client";

import { useState, createContext, useContext, Dispatch, SetStateAction } from "react";
import { Zone } from "../enums";

type TZoneContext = {
    currentZone: Zone | null;
    setCurrentZone: Dispatch<SetStateAction<Zone | null>>;
}

const ZoneContext = createContext<TZoneContext | null>(null);

const ZoneProvider = ({ children }: Readonly<{ children: React.ReactNode }>) => {
    const [currentZone, setCurrentZone] = useState<Zone | null>(null);

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