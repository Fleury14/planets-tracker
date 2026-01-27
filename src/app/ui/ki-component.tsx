import { KI } from '../lib/interfaces';
import { VT323 } from 'next/font/google'
import Image from 'next/image';

const vt = VT323({
    weight: '400',
    subsets: ['latin'],
})

export default function KeyItem({ ki, name, toggle, cores }: { ki: KI, name: string, toggle: (key: string) => void, cores: boolean}) {
    if (cores && !ki.coreText) return null;
    if (!cores && !!ki.coreText) return null;
    return (
        <div className="tracker-ki">
            <a onClick={() => toggle(name)}>
                <Image
                    alt={`${ki.hasItem ? "color" : "grey"} icon for ${name}`}
                    src={`/images/${ki.iconGrey}`}
                    height={50}
                    width={50}
                    className={ki.hasItem ? "" : "grayscale"}
                />
                {ki.coreColor && ki.coreText && <p className={`${vt.className} ${ki.coreColor} text-md text-center ${ki.hasItem ? "" : "grayscale"}`}>{ki.coreText}</p>}
            </a>
        </div>
    );
}