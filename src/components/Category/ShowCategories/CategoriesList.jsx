import { useContext } from "react";
import "../../../componentsCSS/Categories/CategoriesList.css";
import { CrudContext } from "../../context/context";
import { Category } from "./Category";
export function CategoriesList({ categories }) {
  const { deleteCategoryById } = useContext(CrudContext);
  return (
    <>
      {categories.map((category) => (
        <article key={category._id} className="article-categories">
          <Category
            category={category}
            key={category._id}
            onDelete={deleteCategoryById}
          />
        </article>
      ))}
    </>
  );
}
