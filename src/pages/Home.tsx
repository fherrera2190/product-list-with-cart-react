import { CartSection, ListProducts } from "../components";
import products from "../data/data.json";

export const Home = () => {
  return (
    <main>
      <section className="products-section">
        <h1>Desserts</h1>
        <ListProducts products={products} />
      </section>
      <CartSection />
    </main>
  );
};
