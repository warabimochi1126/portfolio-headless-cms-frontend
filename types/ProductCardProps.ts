import { StaticImageData } from "next/image";

export interface ProductCardProps {
  imageData: string;
  altStr: string;
  title: string;
  overViewDescription: string;
  deployUrl?: string;
  overViewStrArray: string[];
  mainTechStrArray: string[];
  subTechStrArray?: string[];
  children: React.ReactNode;
}
