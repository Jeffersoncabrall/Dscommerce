import "./styles.css";
import computer from "../../../public/images/computer.png";
import ProductCategory from "../ProductCategory";

export default function ProductDetailsCard() {
  return (
    <div className="dsc-card dsc-mb20">
      <div className="dsc-product-details-top dsc-line-bottom">
        <img src={computer} alt="Computador" />
      </div>
      <div className="dsc-product-details-bottom">
        <h3>R$ 5000,00</h3>
        <h4>Computador Gamer XT</h4>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <div>
          <ProductCategory category={["Computadores", "Eletrônicos"]} />
        </div>
      </div>
    </div>
  );
}
