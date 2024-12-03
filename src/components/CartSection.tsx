import { useContext, useEffect, useState } from "react";
import CartContext from "../context/cart/CartContext";
import { EmptyProduct } from "./EmptyProduct";
import { ListCartProducts } from "./ListCartProducts";
import { ShowTotal } from "./ShowTotal";

interface Props {
  toggleModal: () => void;
}
export const CartSection = ({ toggleModal }: Props) => {
  const { state } = useContext(CartContext);
  const [total, setTotal] = useState(0);
  const [quantity, setQuantity] = useState(0);
  const keys = Object.keys(state);
  const productsInCart = Object.values(state);

  useEffect(() => {
    const calculateTotal = productsInCart.reduce(
      (acc, product) => acc + product.price * product.quantity,
      0
    );

    const calculateQuantity = productsInCart.reduce(
      (acc, product) => acc + product.quantity,
      0
    );

    setTotal(calculateTotal);
    setQuantity(calculateQuantity);
  }, [productsInCart]);

  return (
    <section className="cart-section">
      <h3>
        You Cart (<span className="total-quantity">{quantity}</span>)
      </h3>
      <article className="cart">
        {keys.length < 1 ? (
          <EmptyProduct />
        ) : (
          <>
            <ListCartProducts productsInCart={productsInCart} />
            <ShowTotal total={total} toggleModal={toggleModal} />
          </>
        )}
      </article>
    </section>
  );
};
