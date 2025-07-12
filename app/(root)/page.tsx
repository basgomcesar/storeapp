import { getLatestProducts } from "@/lib/actions/product.actions";
import ProductList from "@/components/product/product-list";

const Home = async () => {
  // Example usage of the sample data
  const lastestProducts = await getLatestProducts();
  return (
    <div>
      <ProductList data={lastestProducts
        .map((product) => ({
          ...product,
          rating: typeof product.rating === "string" ? Number(product.rating) : product.rating,
        }))
      } limit={3} title="Newest Arrivals"/>
    </div>
  );
};
export default Home;


