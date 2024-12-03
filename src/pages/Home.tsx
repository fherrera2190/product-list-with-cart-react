import { useState } from "react";
import { BuyModal, CartSection, ListProducts } from "../components";
import products from "../data/data.json";

export const Home = () => {


  const [modal, setModal] = useState(false);
  
  const toggleModal = () => {
    setModal(!modal);
  }

  return (
    <>
      <main>
        <section className="products-section">
          <h1>Desserts</h1>
          <ListProducts products={products} />
        </section>
        <CartSection toggleModal={toggleModal}/>
      </main>

      <BuyModal modal={modal}/>
    

    </>
  );
};
