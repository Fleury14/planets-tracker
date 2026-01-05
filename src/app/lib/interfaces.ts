interface KI {
    hasItem: boolean;
    iconColor: string;
    iconGrey: string;
}

interface KIList {
    spore: KI;
    kraid: KI;
    ridley: KI;
    longBeam: KI;
    spazerBeam: KI;
    iceBeam: KI;
    waveBeam: KI;
    morphBall: KI;
    bombs: KI;
    springBall: KI;
    varia: KI;
    highJump: KI;
    spaceJump: KI;
    screwAttack: KI;
    aegis: KI;
    crystal: KI;
    chrono: KI;
    magnet: KI;
    phantom: KI;
    phazon: KI;
    sensor: KI;
    stun: KI;
    surge: KI;
    // capacitor: KI;

}

export type { KIList, KI }