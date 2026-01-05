import { KI } from '../lib/interfaces';
import Image from 'next/image';

export default function KeyItem({ ki, name }: { ki: KI, name: string}) {
    return (
        <a>
            <Image
                alt={`${ki.hasItem ? "color" : "grey"} icon for ${name}`}
                src={`/images/${ki.hasItem ? ki.iconGrey : ki.iconColor}`}
                height={30}
                width={30}
            />
        </a>
    );
}