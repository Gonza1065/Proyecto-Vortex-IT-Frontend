import { useEffect, useState } from "react";
import "../../../componentsCSS/Categories/CategoriesListContainer.css";
import { CategoriesList } from "./CategoriesList";
export function CategoriesListContainer() {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/api/category")
      .then((res) => res.json())
      .then((data) => setCategories(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <div className="categories-title">
        <h1>Categories</h1>
      </div>
      <section className="section-categories">
        <CategoriesList categories={categories} />
      </section>
    </>
  );
}
