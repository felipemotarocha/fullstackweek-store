import { ImageProps } from "next/image";
import { twMerge } from "tailwind-merge";
import Image from "next/image";

const PromotionBanner = ({ ...props }: ImageProps) => {
  const _class = twMerge(props.className, "w-full h-full");
  return (
    <Image
      src={props.src}
      alt={props.alt}
      width={0}
      height={0}
      sizes="100vh"
      className={_class}
    />
  );
};

export default PromotionBanner;
