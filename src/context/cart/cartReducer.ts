import { ProductInCart } from "../../interfaces";
import { CartState } from "./CartProvider";

type Action =
  | {
      type: "MANAGE_PRODUCT_IN_CART";
      payload: ProductInCart;
    }
  | {
      type: "REMOVE_FROM_CART";
      payload: string;
    };

export const cartReducer = (state: CartState, action: Action): CartState => {
  switch (action.type) {
    case "MANAGE_PRODUCT_IN_CART":
      if (action.payload.quantity === 0) {
        const { [action.payload.id]: toDelete, ...rest } = state;
        void toDelete;
        return rest;
      }
      return {
        ...state,
        [action.payload.id]: action.payload,
      };

    case "REMOVE_FROM_CART": {
      const { [action.payload]: toDelete, ...rest } = state;
      void toDelete;
      return rest;
    }

    default:
      return state;
  }
};
