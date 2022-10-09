import Prices from "./Perfume-component/Prices";
import Button from "./Perfume-component/Button";
import TypoCategory from "./Perfume-component/TypoCategory";
import TypoTitle from "./Perfume-component/TypoTitle";
import TypoDescription from "./Perfume-component/TypoDescription";
import "./Perfume.css";
export default function Perfume() {
  return (
    <div className="perfume-container">
      <div className="bg-white rounded-md overflow-hidden flex flex-col  sm:flex-row">
        <picture className="">
          <source
            srcSet={"/images/imageProductDesktop.jpg"}
            media="(min-width: 640px)"
          />
          <img
            className="w-60"
            src={"/images/imageProductMobile.jpg"}
            alt="photo of a product"
          />
        </picture>

        <div className="content-container p-4 w-60 ">
          <TypoCategory text="P E R F U ME" />
          <TypoTitle text="Gabrielle Essence Eau de Parfum" />
          <TypoDescription
            text=" A floral, solar and voluptuous interpretation composed by Olivier
          Polge, Perfumer-Creator for the House of CHANEL."
          />
          <Prices newPrice={"$149.99"} oldPrice={"$169.99"} />
          <Button text={"Add to Cart"} icon={"cart-shopping"} />
        </div>
      </div>
    </div>
  );
}
