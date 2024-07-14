import Image, { StaticImageData } from "next/image";

interface ImageComponentProps {
    imageData: StaticImageData;
    altStr: string;
}

export function ImageComponent({imageData, altStr}: ImageComponentProps) {
    return (
        <div className="border-b relative">
            <Image src={imageData} alt={altStr} className="object-cover rounded-t-2xl"/>
        </div>
    )
}