import { useEffect, useState } from "react";

export function ViewPriceTotal() {
  const [priceTotal, setPriceTotal] = useState(0);
  useEffect(() => {
    fetch("http://localhost:5000/api/cart/price-total")
      .then((res) => res.json())
      .then((data) => setPriceTotal(data.total))
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <h1>Price total: {priceTotal}</h1>
    </>
  );
}
