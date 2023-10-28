import SectionTitle from "@/components/ui/section-title";
import { Skeleton } from "@/components/ui/skeleton";
import Categories from "./components/categories";
import PromoBanner from "./components/promo-banner";


export default function HomeLoading() {
  return (
    <div className="flex flex-col gap-8 py-8">
      <div className="flex lg:hidden">
        <PromoBanner
          src="/banner-home-01.png"
          alt="Até 55% de desconto em mouses!"
        />
      </div>

      <div className="hidden lg:flex">
        <PromoBanner
          src="/banner-home-lg-01.png"
          alt="Até 55% de desconto em mouses!"
        />
      </div>

      <div className="lg:container lg:mx-auto flex flex-col gap-8">
        <div className="px-5 lg:px-0">
          <Categories />
        </div>

        <div className="">
          <SectionTitle>Ofertas</SectionTitle>

          <div className="flex gap-5">
            {[...Array(7)].map((x, i) => (
              <Skeleton
                className="flex aspect-square w-[156px] items-center justify-center rounded-lg bg-accent"
                key={i}
              />
            ))}
          </div>
        </div>

        <div className="lg:flex lg:px-0 lg:gap-10 lg:justify-center">
          <div className="flex">
            <PromoBanner
              src="/banner-home-02.png"
              alt="Até 55% de desconto em mouses!"
            />
          </div>

          <div className="hidden lg:flex">
            <PromoBanner
              src="/banner-home-03.png"
              alt="Até 55% de desconto em mouses!"
            />
          </div>
        </div>

        <div className="">
          <SectionTitle>Teclados</SectionTitle>

          <div className="flex gap-5">
            {[...Array(7)].map((x, i) => (
              <Skeleton
                className="flex aspect-square w-[156px] items-center justify-center rounded-lg bg-accent"
                key={i}
              />
            ))}
          </div>
        </div>

        <div className="flex lg:hidden">
          <PromoBanner
            src="/banner-home-03.png"
            alt="Até 55% de desconto em mouses!"
          />
        </div>

        <div className="hidden lg:flex ">
          <PromoBanner
            src="/banner-frete-gratis.png"
            alt="Até 55% de desconto em mouses!"
          />
        </div>

        <div className="">
          <SectionTitle>Mouses</SectionTitle>

          <div className="flex gap-5">
            {[...Array(7)].map((x, i) => (
              <Skeleton
                className="flex aspect-square w-[156px] items-center justify-center rounded-lg bg-accent"
                key={i}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}