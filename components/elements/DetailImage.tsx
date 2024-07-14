import { motion } from "framer-motion";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";

interface DetailImageProps {
    url?: string;
    imageData: StaticImageData;
}

export function DetailImage({ url, imageData }: DetailImageProps) {
    return (
        <motion.div className="h-3/6 relative" whileHover={{ scale: 0.9, transition: { duration: 0.3 }}}>
            { url ?
            <Link href={url}>
                <Image src={imageData} alt="詳細画像" className="absolute top-0 left-0 h-full object-contain" />
            </Link>
            :
            <Image src={imageData} alt="詳細画像" className="absolute top-0 left-0 h-full object-contain cursor-not-allowed" /> 
            }
        </motion.div>
    )
}