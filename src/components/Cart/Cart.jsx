import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { Link } from "react-router-dom";
import "../../componentsCSS/Cart/Cart.css";
export function Cart() {
  const [quantity, setQuantity] = useState(0);
  const quantityProducts = async () => {
    fetch("http://localhost:5000/api/cart/quantity-products")
      .then((res) => res.json())
      .then((data) => setQuantity(data.message))
      .catch((err) => console.log(err));
  };
  quantityProducts();

  return (
    <>
      <div className="icon-cart">
        <div className="see-quantity">
          <h5>{quantity}</h5>
        </div>
        <Link to="/cart">
          <FontAwesomeIcon icon={faCartShopping} />
        </Link>
      </div>
    </>
  );
}
