import Image, { StaticImageData } from "next/image";
import Link from "next/link";

interface DetailImageIconProps {
    url: string;
    icon: StaticImageData;
}

export function DetailImageIcon({ url, icon }: DetailImageIconProps) {
    return (
        <Link href={url}>
            <Image src={icon} alt="アイコン" height={30}/>
        </Link>
    )
}