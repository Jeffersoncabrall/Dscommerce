import "./styles.css";
import ButtonInverse from "../../components/ButtonInverse";
import ButtonPrimary from "../../components/ButtonPrimary";
import HeaderClient from "../../components/HeaderClient";
import ProductDetailsCard from "../../components/ProductDetailsCard";
import { ProductDTO } from "../../models/product";

const product: ProductDTO = {
  id: 2,
  name: "Notebook HP Millenium",
  description: "Notebook HP Millenium com 16GB de RAM, 512GB SSD e i7",
  imgUrl:
    "https://www.coolmatica.pt/store/284568-large_default/portatil-hp-laptop-14-ep0005np-14fhd-intel-n200-4gb-128gb-ssd-intel-uhd-graphics-win-11-home.jpg",
  price: 15000,
  categories: [
    {
      id: 1,
      name: "Computadores",
    },
    {
      id: 2,
      name: "Eletrônicos",
    },
  ],
};

export default function ProductDetails() {
  return (
    <>
      <HeaderClient />
      <main>
        <section id="product-details-section" className="dsc-container">
          <ProductDetailsCard product={product} />
          <div className="dsc-btn-page-container">
            <ButtonPrimary />
            <ButtonInverse />
          </div>
        </section>
      </main>
    </>
  );
}
