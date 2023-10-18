import Image from "next/image";
import { Categories } from "./components";
import PromotionBanner from "./components/promotion-banner";
import Products from "./components/product-list";
import { prismaClient } from "@/lib/prisma";
import { computeProductTotalPrice } from "@/helpers/product-discount";
import SectionTitle from "./components/section-title";

const Home = async () => {
  const deals = await prismaClient.product.findMany({
    where: {
      discountPercentage: {
        gt: 0
      }
    }
  })

  const keyboards = await prismaClient.product.findMany({
    where: {
      category: {
        slug: 'keyboards'
      }
    }
  })

  const mouses = await prismaClient.product.findMany({
    where: {
      category: {
        slug: 'mouses'
      }
    }
  })

  return (
    <div className="flex flex-col py-8 gap-8">
      <PromotionBanner src="/main-banner-01.png" alt="Até 55% de desconto só esse mês" className="px-5" />
      <div className="px-5">
        <Categories />
      </div>

      <div>
        <SectionTitle>Ofertas</SectionTitle>
        <Products products={deals} />
      </div>

      <PromotionBanner src="/main-banner-02.png" alt="Até 55% de desconto só esse mês" className="px-5" />
      <div>
        <SectionTitle>Teclados</SectionTitle>
        <Products products={keyboards} />
      </div>

      <PromotionBanner src="/main-banner-03.png" alt="Até 55% de desconto em fones" className="px-5" />

      <div>
        <SectionTitle>Mouses</SectionTitle>
        <Products products={mouses} />
      </div>
    </div>
  );
}

export default Home;