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

export default function Home() {
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
          >
            {/* <DetailImageIcon
              url="https://qiita.com/warabimochi_26/items/0c86ea1e6dfb84fb1c4a"
              icon={QiitaIcon}
            />
            <DetailReactIcon
              url="https://github.com/warabimochi1126/EnvHub"
              Icon={FaGithubSquare}
            /> */}
          </ProductCard>
          <NewProductCard />
        </div>
      </div>
    </>
  );
}
