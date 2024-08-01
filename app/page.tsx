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
  overview: string;
  mainTechnology: string;
  subTechnology: string;
  productLinks: string[];
};

export default async function Home() {
  const response = await fetch(`${process.env.API_URL!}/products`, {
    cache: "no-store"
  })
  const productsData: productData[] = await response.json();

  console.log(productsData);

  return (
    <>
      <ProductsHeader />

      <div className="mx-auto max-w-3xl mt-10 mb-20">
        <ProductsHeaderStr />
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8">
          <ProductCard
            imageData="/envhub.png"
            altStr="EnvHubのサムネイル画像"
            title="EnvHub"
            overViewDescription="個人開発"
            deployUrl="https://env-hub-hazel.vercel.app/"
            overViewStrArray={[
              ".envをGitHubリポジトリに結び付けて共有・保存できるWebアプリケーションです。",
              "個人開発です。",
            ]}
            mainTechStrArray={["Next.js(App Router)", "Supabase"]}
            subTechStrArray={["TypeScript", "TailwindCSS"]}
            productLinks={["https://github.com/warabimochi1126/EnvHub", "https://qiita.com/warabimochi_26/items/0c86ea1e6dfb84fb1c4a"]}
          >
          </ProductCard>

          { productsData.map((productData, index) => (       
            <ProductCard
              key={index}
              imageData={productData.imageSrcPath ? productData.imageSrcPath : "/noimage.jpg"}
              altStr="サムネイル画像"
              title={productData.productName}
              overViewDescription={productData.overview.split(",")[0]}
              deployUrl={productData.deployUrl ? productData.deployUrl : ""}
              overViewStrArray={productData.overview.split(",").slice(1)}
              mainTechStrArray={productData.mainTechnology.split(",")}
              subTechStrArray={productData.subTechnology.split(",")}
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
