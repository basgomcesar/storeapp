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
    <section className="py-8 px-4 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
        {/* Images */}
        <div className="col-span-2 flex items-center justify-center rounded-lg bg-muted p-4 shadow-sm">
          <ProductImages images={product.images} />
        </div>
        {/* Details */}
        <div className="col-span-2 p-6 bg-background rounded-lg shadow-sm">
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-2">
              <Badge variant="secondary" className="px-3 py-1 text-xs">
                {product.brand}
              </Badge>
              <Badge className="px-3 py-1 text-xs">{product.category}</Badge>
            </div>
            <h1 className="text-3xl font-bold text-primary">{product.name}</h1>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <span className="font-medium">{product.rating}★</span>
              <span>({product.numReviews} reviews)</span>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
              <ProductPrice
                value={Number(product.price)}
                className="w-28 rounded-full bg-green-100 text-green-700 px-5 py-2 dark:bg-green-900 dark:text-green-200 text-lg font-bold shadow"
              />
            </div>
            <div className="mt-8">
              <p className="font-semibold mb-2 text-base">Description</p>
              <p className="text-muted-foreground leading-relaxed">{product.description}</p>
            </div>
          </div>
        </div>
        {/* Action */}
        <div className="flex flex-col justify-between gap-6 h-full">
          <Card className="w-full shadow-lg border-none">
            <CardContent className="p-6">
              <div className="mb-4 flex justify-between items-center">
                <span className="font-semibold text-base">Price</span>
                <ProductPrice
                  value={Number(product.price)}
                  className="text-xl font-bold text-primary"
                />
              </div>
              <div className="mb-4 flex justify-between items-center">
                <span className="font-semibold text-base">Status</span>
                {product.stock > 0 ? (
                  <Badge variant="outline" className="text-green-700 border-green-400 bg-green-50">
                    In Stock
                  </Badge>
                ) : (
                  <Badge variant="destructive" className="text-red-700 border-red-400 bg-red-50">
                    Out of Stock
                  </Badge>
                )}
              </div>
              {product.stock > 0 && (
                <Button className="w-full mt-4" size="lg">
                  Add to Cart
                </Button>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ProductDetailsPage;