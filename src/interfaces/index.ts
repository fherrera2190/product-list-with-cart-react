export interface Product {
  id: string;
  image: ProductImage;
  name: string;
  category: string;
  price: number;
}

export interface ProductImage {
  thumbnail: string;
  mobile: string;
  tablet: string;
  desktop: string;
}

export interface ProductInCart {
  [key: string]: { quantity: number; product: Product };
}
