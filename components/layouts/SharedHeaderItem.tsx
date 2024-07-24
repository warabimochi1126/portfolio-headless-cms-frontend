import Link from "next/link";
import { IconType } from "react-icons";

interface ShareHeaderItemProps {
    url: string;
    Icon: IconType;
    name: string;
} 

export function SharedHeaderItem({ url, Icon, name }: ShareHeaderItemProps) {
    return (
        <Link href={url} className="flex cursor-not-allowed">
            <Icon size={24} /><span className="font-bold ml-1 ">{ name }</span>
        </Link>
    )
}