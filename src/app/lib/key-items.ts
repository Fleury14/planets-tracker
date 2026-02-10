import { KIList } from './interfaces';
import { Zone  } from './enums';

const defaultKI: KIList = {
    spore: {
        hasItem: false,
        iconColor: "Boss_SporeSpawn_BW.png",
        iconGrey: "Boss_SporeSpawn.png",
        zone: null,
    },
    kraid: {
        hasItem: false,
        iconColor: "Boss_Kraid_BW.png",
        iconGrey: "Boss_Kraid.png",
        zone: null,
    },
    ridley: {
        hasItem: false,
        iconColor: "Boss_Ridley_BW.png",
        iconGrey: "Boss_Ridley.png",
        zone: null,
    },
    missles: {
        hasItem: false,
        iconColor: "missle-nobg.png",
        iconGrey: "missle-nobg.png",
        zone: null,
    },
    longBeam: {
        hasItem: false,
        iconColor: "Item_LongBeam_BW.png",
        iconGrey: "Item_LongBeam.png",
        zone: null,
    },
    spazerBeam: {
        hasItem: false,
        iconColor: "Item_SpazerBeam_BW.png",
        iconGrey: "Item_SpazerBeam.png",
        zone: null,
    },
    iceBeam: {
        hasItem: false,
        iconColor: "Item_IceBeam_BW.png",
        iconGrey: "Item_IceBeam.png",
        zone: null,
    },
    waveBeam: {
        hasItem: false,
        iconColor: "Item_WaveBeam_BW.png",
        iconGrey: "Item_WaveBeam.png",
        zone: null,
    },
    morphBall: {
        hasItem: false,
        iconColor: "Item_MorphBall_BW.png",
        iconGrey: "Item_MorphBall.png",
        zone: null,
    },
    bombs: {
        hasItem: false,
        iconColor: "Item_Bombs_BW.png",
        iconGrey: "Item_Bombs.png",
        zone: null,
    },
    springBall: {
        hasItem: false,
        iconColor: "Item_SpringBall_BW.png",
        iconGrey: "Item_SpringBall.png",
        zone: null,
    },
    varia: {
        hasItem: false,
        iconColor: "Item_VariaSuit_BW.png",
        iconGrey: "Item_VariaSuit.png",
        zone: null,
    },
    highJump: {
        hasItem: false,
        iconColor: "Item_HighJump_BW.png",
        iconGrey: "Item_HighJump.png",
        zone: null,
    },
    spaceJump: {
        hasItem: false,
        iconColor: "Item_SpaceJump_BW.png",
        iconGrey: "Item_SpaceJump.png",
        zone: null,
    },
    screwAttack: {
        hasItem: false,
        iconColor: "Item_ScrewAttack_BW.png",
        iconGrey: "Item_ScrewAttack.png",
        zone: null,
    },
    aegis: {
        hasItem: false,
        iconColor: "Item_AegisCore_BW.png",
        iconGrey: "Item_AegisCore.png",
        coreText: "AEGIS",
        coreColor: "text-green-300",
        zone: null,
    },
    crystal: {
        hasItem: false,
        iconColor: "Item_CrystalCore_BW.png",
        iconGrey: "Item_CrystalCore.png",
        coreText: "CRYSTAL",
        coreColor: "text-fuchsia-400",
        zone: null,
    },
    chrono: {
        hasItem: false,
        iconColor: "Item_ChronoCore_BW.png",
        iconGrey: "Item_ChronoCore.png",
        coreText: "CHRONO",
        coreColor: "text-sky-500",
        zone: null,
    },
    magnet: {
        hasItem: false,
        iconColor: "Item_MagnetCore_BW.png",
        iconGrey: "Item_MagnetCore.png",
        coreText: "MAGNET",
        coreColor: "text-yellow-200",
        zone: null,
    },
    phantom: {
        hasItem: false,
        iconColor: "Item_PhantomCore_BW.png",
        iconGrey: "Item_PhantomCore.png",
        coreText: "PHANTOM",
        coreColor: "text-blue-500",
        zone: null,
    },
    phazon: {
        hasItem: false,
        iconColor: "Item_PhazonCore_BW.png",
        iconGrey: "Item_PhazonCore.png",
        coreText: "PHAZON",
        coreColor: "text-teal-500",
        zone: null,
    },
    sensor: {
        hasItem: false,
        iconColor: "Item_SensorCore_BW.png",
        iconGrey: "Item_SensorCore.png",
        coreText: "SENSOR",
        coreColor: "text-orange-300",
        zone: null,
    },
    stun: {
        hasItem: false,
        iconColor: "Item_CoreCapacitor_BW.png",
        iconGrey: "Item_StunCore.png",
        coreText: "STUN",
        coreColor: "text-red-300",
        zone: null,
    },
}

const ZoneColors = {
    [Zone.Brinstar]: '#2DD923',
    [Zone.Crateria]: '#2323D9',
    [Zone.Norfair]: '#A82525',
    [Zone.Kraid]: '#777',
    [Zone.Ridley]: '#7A1C60',
    [Zone.WreckedShip]: '#D68120',
    [Zone.Tourian]: '#23C7CF'

}

export { defaultKI , ZoneColors};