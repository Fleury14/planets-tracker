import { KI } from '../lib/interfaces';
import Image from 'next/image';

export default function KeyItem({ ki, name, toggle }: { ki: KI, name: string, toggle: (key: string) => void}) {
    if (name==="longBeam") console.log(name, ki)
    return (
        <a onClick={() => toggle(name)}>
            <Image
                alt={`${ki.hasItem ? "color" : "grey"} icon for ${name}`}
                src={`/images/${ki.iconGrey}`}
                height={50}
                width={50}
                className={ki.hasItem ? "" : "grayscale"}
            />
        </a>
    );
}