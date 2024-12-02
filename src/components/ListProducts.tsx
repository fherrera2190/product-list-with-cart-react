import { Product } from "../interfaces";
import { CardProduct } from "./CardProduct";

interface Props {
  products: Product[];
}

export const ListProducts = ({ products }: Props) => {


    

  return (
    <article className="products">
      {products?.map((product: Product) => (
        <CardProduct key={product.id} product={product} />
      ))}
    </article>
  );
};
