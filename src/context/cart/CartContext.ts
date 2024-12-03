import { createContext } from "react";
import { Product, ProductInCart } from "../../interfaces";
import { CartState } from "./CartProvider";

interface CartContextProps {
  state: CartState;
  manageProductInCart: (product: ProductInCart) => void;
  removeFromCart: (product: Product) => void;
  total: number;
  quantity: number;
}

const CartContext = createContext({} as CartContextProps);

export default CartContext;
