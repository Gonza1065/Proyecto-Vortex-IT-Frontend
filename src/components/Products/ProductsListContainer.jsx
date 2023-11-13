import { useEffect, useState } from "react";
import "../../componentsCSS/ProductsListContainer.css";
import { ProductsList } from "./ProductsList";
export function ProductListContainer() {
  const [getProducts, setGetProducts] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/api/products", {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => res.json())
      .then((data) => setGetProducts(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <section className="products">
        <ProductsList products={getProducts} />
      </section>
    </>
  );
}
