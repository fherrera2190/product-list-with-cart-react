import { createContext } from "react";
import { ProductInCart } from "../../interfaces";

const CartContext = createContext({} as ProductInCart);

export default CartContext;
