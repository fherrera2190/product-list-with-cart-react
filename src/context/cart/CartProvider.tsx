import { useReducer } from "react";
import { Product } from "../../interfaces";
import CartContext from "./CartContext";
import { cartReducer } from "./cartReducer";

export interface CartState {
  [key: string]: {
    product: Product;
    quantity: number;
  };
}

const INITIAL_STATE: CartState = {};

interface Props {
  children: React.ReactNode | React.ReactNode[];
}

export const CartProvider = ({ children }: Props) => {
  const [state, dispatch] = useReducer(cartReducer, INITIAL_STATE);

  const addToCart = (product: Product) => {
    dispatch({ type: "ADD_TO_CART", payload: product });
  };

  const removeFromCart = (product: Product) => {
    dispatch({ type: "REMOVE_FROM_CART", payload: product });
  };

  const discountProduct = (product: Product) => {
    dispatch({ type: "DiSCOUNT_PRODUCT_FROM_CART", payload: product });
  };

  return (
    <CartContext.Provider
      value={{ state, addToCart, removeFromCart, discountProduct }}
    >
      {children}
    </CartContext.Provider>
  );
};
