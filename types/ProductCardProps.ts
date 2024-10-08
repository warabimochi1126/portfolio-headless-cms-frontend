import { StaticImageData } from "next/image";

export interface ProductCardProps {
  id: number;
  r2uuid: string;
  imageData: string;
  altStr: string;
  title: string;
  overViewDescription: string;
  deployUrl?: string;
  overViewStrArray: string[];
  mainTechStrArray: string[];
  subTechStrArray?: string[];
  productLinks?: string[];
}
