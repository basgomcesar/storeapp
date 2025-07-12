"use client";
import { useState } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

const ProductImages = ({ images }: { images: string[] }) => {
  const [selectedImage, setSelectedImage] = useState(0);

  return (
    <div className="space-y-4">
      <Image
        src={images[selectedImage]}
        alt="Product Image"
        width={500}
        height={500}
        className=" min-h-[300px] object-cover object-center rounded-lg"
      />
      <div className="flex gap-2">
      {images.map((image, index) => (
        <div key={image} onClick={() => setSelectedImage(index)} className="cursor-pointer">
          <Image
            src={image}
            alt={`Product Image ${index + 1}`}
            width={100}
            height={100}
            className={cn(
              "cursor-pointer rounded-lg border-2",
              selectedImage === index ? "border-[var(--primary)]" : "border-gray-300",
            )}
          />
        </div>
      ))}
      </div>
    </div>
  );
};

export default ProductImages;
