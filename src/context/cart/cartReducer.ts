import { CartState } from "./CartProvider";

type Action =
  | {
      type: "ADD_TO_CART";
      payload: any;
    }
  | {
      type: "REMOVE_FROM_CART";
      payload: any;
    }
  | {
      type: "DiSCOUNT_PRODUCT_FROM_CART";
      payload: any;
    };

export const cartReducer = (state: CartState, action: Action) => {

  switch (action.type) {
    case "ADD_TO_CART":
      return {...state, };

    case "REMOVE_FROM_CART":
      return state;

    case "DiSCOUNT_PRODUCT_FROM_CART":
      return state;

    default:
      return state;
  }
};
