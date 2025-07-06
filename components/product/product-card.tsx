import Link from "next/link";
import Image from "next/image";
import { Card, CardContent, CardHeader } from "../ui/card";
import ProductPrice from "./product-price";
import { Product } from "@/types";

const ProductCard = ({ product }: { product: Product }) => {
  return (
    <Card className="w-full max-w-sm">
      <CardHeader className="p-0 items-center">
        <Link href={`/product/${product.slug}`}>
          <Image
            src={product.images[0] || "/images/placeholder.png"}
            alt={product.name}
            width={300}
            height={300}
            className="w-full h-64 object-cover"
            priority={true}
          />
        </Link>
      </CardHeader>
      <CardContent className="p-3 grid gap-3">
        <div className="text-xs">{product.brand}</div>
        <Link href={`/product/${product.slug}`}>
          <h2 className="text-sm font-medium hover:underline">
            {product.name}
          </h2>
        </Link>
        <div className="flex-between gap-4">
          <p>{product.rating}</p>
          {product.stock > 0 ? (
            <ProductPrice
              value={Number(product.price)}
              className="text-xl font-bold"
            /> 
          ) : (
            <p className="text-red-500">Out of Stock</p>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
