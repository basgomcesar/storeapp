import { getLatestProducts } from "@/lib/actions/product.actions";
import ProductList from "@/components/product/product-list";

const Home = async () => {
  // Example usage of the sample data
  const lastestProducts = await getLatestProducts();
  return (
    <div>
      <ProductList data={lastestProducts} limit={3} title="Newest Arrivals"/>
    </div>
  );
};
export default Home;


