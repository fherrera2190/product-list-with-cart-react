import { useEffect, useReducer, useState } from "react";
import { Product, ProductInCart } from "../../interfaces";
import CartContext from "./CartContext";
import { cartReducer } from "./cartReducer";

export interface CartState {
  [key: string]: ProductInCart;
}

const INITIAL_STATE: CartState = {};

const init = () => {
  const cart = localStorage.getItem("cart");
  return cart ? JSON.parse(cart) : INITIAL_STATE;
};

interface Props {
  children: React.ReactNode | React.ReactNode[];
}

export const CartProvider = ({ children }: Props) => {
  const [state, dispatch] = useReducer(cartReducer, INITIAL_STATE, init);
  const [total, setTotal] = useState(0);
  const [quantity, setQuantity] = useState(0);

  const productsInCart = Object.values(state);
  const manageProductInCart = (productInCart: ProductInCart) => {
    dispatch({ type: "MANAGE_PRODUCT_IN_CART", payload: productInCart });
  };

  const removeFromCart = (product: Product) => {
    dispatch({ type: "REMOVE_FROM_CART", payload: product.id });
  };

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
  }, [state]);

  return (
    <CartContext.Provider
      value={{ state, manageProductInCart, removeFromCart, total, quantity }}
    >
      {children}
    </CartContext.Provider>
  );
};
