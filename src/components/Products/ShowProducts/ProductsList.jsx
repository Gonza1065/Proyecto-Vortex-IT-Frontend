import "../../../componentsCSS/Products/ProductsList.css";
import { Products } from "./Products";
export function ProductsList({ products, onDeleteClick }) {
  return (
    <>
      {products.map((product) => (
        <article key={product._id} className="article-product">
          <Products product={product} onDeleteClick={onDeleteClick} />
        </article>
      ))}
    </>
  );
}
