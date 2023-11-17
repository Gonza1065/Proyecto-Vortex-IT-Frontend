import { useEffect, useState } from "react";
import "../../../componentsCSS/Products/ProductsListContainer.css";
import { ProductsList } from "./ProductsList";
export function ProductListContainer() {
  const [getProducts, setGetProducts] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/api/products")
      .then((res) => res.json())
      .then((data) => setGetProducts(data))
      .catch((err) => console.log(err));
  }, []);
  const handleDeleteClick = async (productId) => {
    try {
      await fetch(
        `http://localhost:5000/api/products/delete-product/${productId}`,
        {
          method: "DELETE",
          headers: { "Content-Type": "application/json" },
        }
      );
      const updatedProducts = getProducts.filter((p) => p._id !== productId);
      setGetProducts(updatedProducts);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <>
      <div className="title-products">
        <h1>Products</h1>
      </div>
      <section className="products">
        <ProductsList
          products={getProducts}
          onDeleteClick={handleDeleteClick}
        />
      </section>
    </>
  );
}
