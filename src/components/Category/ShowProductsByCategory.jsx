import { useEffect, useState } from "react";
import "../../componentsCSS/Categories/ShowProductsByCategory.css";
import { ProductsListFiltered } from "./ProductsListFiltered";
export function ShowProductsByCategory() {
  const [getCategories, setGetCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [messageProducts, setMessageProducts] = useState(true);
  const fetchCategories = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/category");
      const data = await response.json();
      setGetCategories(data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  const handleCategoryChange = async (e) => {
    const categoryId = e.target.value;

    try {
      const response = await fetch(
        `http://localhost:5000/api/products/category/${categoryId}`
      );
      const data = await response.json();
      setFilteredProducts(data);
    } catch (err) {
      console.log(err);
    }
    if (categoryId === "") {
      setFilteredProducts([]);
      setMessageProducts(true);
    } else {
      setSelectedCategory(categoryId);
      setMessageProducts(false);
    }
  };

  return (
    <>
      <div className="select-categories">
        <select
          name=""
          id=""
          onChange={handleCategoryChange}
          value={selectedCategory}
        >
          <option value="">Select Category...</option>
          {getCategories.map((category) => (
            <option key={category._id} value={category._id}>
              {category.name}
            </option>
          ))}
        </select>
      </div>
      <div className="products-filtered">
        <h1>Filtered Products </h1>
      </div>
      {messageProducts ? (
        <div className="message-products">
          <h3>There aren´t filtered products</h3>
        </div>
      ) : (
        <section className="products">
          <ProductsListFiltered products={filteredProducts} />
        </section>
      )}
    </>
  );
}
