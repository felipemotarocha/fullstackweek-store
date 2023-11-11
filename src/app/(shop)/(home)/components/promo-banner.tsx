import { cn } from "@/lib/utils";
import Image, { ImageProps } from "next/image";

const PromoBanner = ({ alt, className, ...props }: ImageProps) => {
  return (
    <Image
      height={0}
      width={0}
      className={cn("h-auto w-full", className)}
      sizes="100vw"
      alt={alt}
      {...props}
    />
  );
};

export default PromoBanner;
