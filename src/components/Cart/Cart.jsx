import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../../componentsCSS/Cart/Cart.css";
export function Cart() {
  return (
    <>
      <div className="icon-cart">
        <FontAwesomeIcon icon={faCartShopping} />
      </div>
    </>
  );
}
