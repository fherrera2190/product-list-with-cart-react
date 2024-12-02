import { EmptyProduct } from "./EmptyProduct";

export const CartSection = () => {
  return (
    <section className="cart-section">
      <h3>
        You Cart (<span className="total-quantity">0</span>)
      </h3>
      <article className="cart">
        <EmptyProduct />
      </article>
    </section>
  );
};
