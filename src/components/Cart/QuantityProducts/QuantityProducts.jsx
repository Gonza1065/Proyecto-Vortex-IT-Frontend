import { useEffect, useState } from "react";
import "../../../componentsCSS/Cart/QuantityProducts.css";
export function QuantityProducts() {
  const [quantity, setQuantity] = useState("");

  useEffect(() => {
    fetch("http://localhost:5000/api/cart/quantity-products")
      .then((res) => res.json())
      .then((data) => setQuantity(data.message))
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <div className="quantity-products">
        <h1>Total Products: {quantity}</h1>
      </div>
    </>
  );
}
