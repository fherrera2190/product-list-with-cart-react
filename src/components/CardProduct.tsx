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

  const { counter, increaseBy } = useProduct(0);

  const { addToCart, discountProduct } = useContext(CartContext);

  useEffect(() => {
    addToCart(product);
  }, [counter]);

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
