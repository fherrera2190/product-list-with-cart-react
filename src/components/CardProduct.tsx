import { Product } from "../interfaces";
import { CardBody, CardFooter, CardHeader } from "./";

import ProductContext from "../context/product/ProductContext";
import { useContext, useEffect } from "react";

import { useProduct } from "../hooks/useProduct";
import CartContext from "../context/cart/CartContext";

interface Props {
  product: Product;
}

export const CardProduct = ({ product }: Props) => {
  const { image, name, category, price } = product;
  const { state, manageProductInCart, removeFromCart } =
    useContext(CartContext);

  const { counter, increaseBy } = useProduct({
    manageProductInCart,
    removeFromCart,
    product,
    value: 0,
  });

  useEffect(() => {}, [state]);

  return (
    <ProductContext.Provider value={{ counter, increaseBy }}>
      <div className="card">
        <CardHeader image={image} />
        <CardBody name={name} category={category} />
        <CardFooter price={price} />
      </div>
    </ProductContext.Provider>
  );
};
