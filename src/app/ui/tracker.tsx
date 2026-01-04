'use client'

import { useState } from "react";
import { defaultKI } from "../lib/key-items";
import { KIList } from "../lib/interfaces";

export default function Tracker() {

    const [ki, setKI] = useState<KIList>(defaultKI)

    return (
        <div>
            <p>Tracker</p>
        </div>
    )
}