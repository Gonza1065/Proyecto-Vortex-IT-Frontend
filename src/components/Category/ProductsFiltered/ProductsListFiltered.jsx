import "../../../componentsCSS/Categories/ProductsListFiltered.css";
import { ProductsFiltered } from "./ProductsFiltered";
export function ProductsListFiltered({ products }) {
  return (
    <>
      {products.map((product) => (
        <article key={product._id} className="article-filtered-products">
          <ProductsFiltered product={product} />
        </article>
      ))}
      ;
    </>
  );
}
