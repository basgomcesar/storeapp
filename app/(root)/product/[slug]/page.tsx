import ProductPrice from "@/components/product/product-price";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { getProductBySlug } from "@/lib/actions/product.actions";
import { notFound } from "next/navigation";
import ProductImages from "@/components/product/product-images";
const ProductDetailsPage = async (props: {
  params: Promise<{ slug: string }>;
}) => {
  const { slug } = await props.params;
  const product = await getProductBySlug(slug);
  if (!product) {
    notFound();
  }

  return (
    <section>
      <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
        <div className="col-span-2">
          <ProductImages images={product.images} />
        </div>
        {/* Details column */}
        <div className="col-span-2 p-5">
          <div className="flex flex-col gap-6">
            <p>
              {product.brand} {product.category}
            </p>
            <h1 className="h3-bold">{product.name}</h1>
            <p>
              {product.rating} of {product.numReviews} Reviews
            </p>
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
              <ProductPrice
                value={Number(product.price)}
                className="w-24 rounded-full bg-green-100 text-green-700 px-5 py-2 dark:bg-green-900 dark:text-green-200"
              />
            </div>
            <div className="mt-10">
              <p className="font-semibold">Description</p>
              <p className="text-muted-foreground">{product.description}</p>
            </div>
          </div>
        </div>
        {/* Action columns */}
        <div>
          <Card className="h-full">
            <CardContent className="p-4">
              <div className="mb-2 flex justify-between">
                <div>Price</div>
                <div>
                  <ProductPrice
                    value={Number(product.price)}
                    className="text-lg font-semibold"
                  />
                </div>
              </div>
              <div className="mb-2 flex justify-between">
                <div>Status</div>
                {product.stock > 0 ? (
                  <Badge variant="outline">In Stock</Badge>
                ) : (
                  <Badge variant="destructive">Out of Stock</Badge>
                )}
              </div>
              {product.stock > 0 && (
                <div className="flex-center">
                  <Button className="w-full" >
                    Add to Cart
                  </Button>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ProductDetailsPage;
