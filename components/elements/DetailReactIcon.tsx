import Link from "next/link";
import { IconType } from "react-icons";

interface DetailReactIcon {
    url: string;
    Icon: IconType;
    color?: string;
}

export default function DetailReactIcon({ url, Icon, color }: DetailReactIcon) {
  return (
    <Link href={url}>
        <Icon size={30} color={color} />                      
    </Link>
  )
}