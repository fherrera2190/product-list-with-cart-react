import { useReducer } from "react";
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

  const manageProductInCart = (productInCart: ProductInCart) => {
    dispatch({ type: "MANAGE_PRODUCT_IN_CART", payload: productInCart });
  };

  const removeFromCart = (product: Product) => {
    dispatch({ type: "REMOVE_FROM_CART", payload: product.id });
  };

  return (
    <CartContext.Provider
      value={{ state, manageProductInCart, removeFromCart }}
    >
      {children}
    </CartContext.Provider>
  );
};
