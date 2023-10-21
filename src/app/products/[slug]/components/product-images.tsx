"use client";
import { useState } from "react";
import Image from "next/image";

interface ProductImagesProps {
  name: string;
  imageUrls: string[];
}

const ProductImages = ({ imageUrls, name }: ProductImagesProps) => {
  const [currentImage, setCurrentImage] = useState(imageUrls[0]);

  const handleImageClick = (imageUrl: string) => {
    setCurrentImage(imageUrl);
  };
  return (
    <div className="flex max-w-[736px] flex-col lg:flex-1 lg:flex-row-reverse lg:rounded-xl lg:bg-accent">
      <div className="flex h-[380px] w-full items-center justify-center bg-accent lg:rounded-xl">
        <Image
          src={currentImage}
          alt={name}
          height={0}
          width={0}
          sizes="100vw"
          className="h-auto max-h-[70%] w-auto max-w-[80%] object-contain"
        />
      </div>
      <div className="mt-8 grid grid-cols-4 gap-4 px-5 lg:mt-0 lg:flex lg:flex-col lg:py-5">
        {imageUrls.map((imageUrl) => (
          <button
            key={imageUrl}
            className={`flex h-[80px] w-[77px] items-center justify-center rounded-lg lg:bg-background
                ${
                  imageUrl === currentImage &&
                  "border-2 border-solid border-primary"
                }
            `}
            onClick={() => handleImageClick(imageUrl)}
          >
            <Image
              src={imageUrl}
              alt={name}
              height={0}
              width={0}
              sizes="100vw"
              className="h-auto max-h-[70%] w-auto max-w-[80%]"
            />
          </button>
        ))}
      </div>
    </div>
  );
};
export default ProductImages;
