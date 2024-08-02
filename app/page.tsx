import { DetailImageIcon } from "@/components/elements/DetailImageIcon";
import DetailReactIcon from "@/components/elements/DetailReactIcon";
import { NewProductCard } from "@/components/elements/NewProductCard";
import { ProductCard } from "@/components/elements/ProductCard";
import { ProductsHeader } from "@/components/elements/ProductsHeader";
import { ProductsHeaderStr } from "@/components/layouts/ProductsHeaderStr";
import EnvHubImage from "@/public/envhub.png";
import QiitaIcon from "@/public/qiita-icon.png";
import Image from "next/image";
import { FaGithubSquare } from "react-icons/fa";

interface productData {
  id: number;
  imageSrcPath: string;
  deployUrl: string;
  productName: string;
  overview: string[];
  mainTechnology: string[];
  subTechnology: string[];
  productLinks: string[];
};

export default async function Home() {
  const response = await fetch(`${process.env.API_URL!}/products`, {
    cache: "no-store"
  })
  const productsData: productData[] = await response.json();

  // console.log(productsData);

  return (
    <>
      <ProductsHeader />

      <div className="mx-auto max-w-3xl mt-10 mb-20">
        <ProductsHeaderStr />
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8">
          { productsData.map((productData, index) => (       
            <ProductCard
              key={index}
              id={productData.id}
              r2uuid={productData.imageSrcPath ? new URL(productData.imageSrcPath).pathname.substring(1) : ""}
              imageData={productData.imageSrcPath ? productData.imageSrcPath : "/noimage.jpg"}
              altStr="サムネイル画像"
              title={productData.productName}
              overViewDescription={productData.overview[0]}
              deployUrl={productData.deployUrl ? productData.deployUrl : ""}
              overViewStrArray={productData.overview}
              mainTechStrArray={productData.mainTechnology}
              subTechStrArray={productData.subTechnology}
              productLinks={productData.productLinks}
            >
            </ProductCard>
          ))}
          <NewProductCard />
        </div>
      </div>
    </>
  );
}