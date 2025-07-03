import sampleData from "@/db/sample-data";
import ProductList from "@/components/product/product-list";

const Home = () => {
  // Example usage of the sample data
  return (
    <div>
      <ProductList data={sampleData.products} limit={3} title="Newest Arrivals"/>
    </div>
  );
};
export default Home;


