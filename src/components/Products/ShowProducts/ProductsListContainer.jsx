import { useEffect, useState } from "react";
import "../../../componentsCSS/Products/ProductsListContainer.css";
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
      <div className="title-products">
        <h1>Products</h1>
      </div>
      <section className="products">
        <ProductsList products={getProducts} />
      </section>
    </>
  );
}
