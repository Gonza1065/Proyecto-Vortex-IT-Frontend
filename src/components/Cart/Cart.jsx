import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../../componentsCSS/Cart/Cart.css";
export function Cart() {
  const [quantity, setQuantity] = useState(0);
  useEffect(() => {
    fetch("http://localhost:5000/api/cart/quantity-products")
      .then((res) => res.json())
      .then((data) => setQuantity(data.message))
      .catch((err) => console.log(err));
  }, []);
  return (
    <>
      <div className="icon-cart">
        <div className="see-quantity">
          <h2>{quantity}</h2>
        </div>
        <Link to="/cart">
          <FontAwesomeIcon icon={faCartShopping} />
        </Link>
      </div>
    </>
  );
}
