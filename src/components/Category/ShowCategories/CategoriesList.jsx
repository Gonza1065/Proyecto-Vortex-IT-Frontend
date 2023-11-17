import "../../../componentsCSS/Categories/CategoriesList.css";
import { Category } from "./Category";
export function CategoriesList({ categories, onDeleteClick }) {
  return (
    <>
      {categories.map((category) => (
        <article key={category._id} className="article-categories">
          <Category
            category={category}
            key={category._id}
            onDeleteClick={onDeleteClick}
          />
        </article>
      ))}
    </>
  );
}
