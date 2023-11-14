import { useContext } from "react";
import "../../../componentsCSS/Products/ProductsList.css";
import { CrudContext } from "../../context/context";
import { Products } from "./Products";
export function ProductsList({ products }) {
  const { deleteProductById } = useContext(CrudContext);
  return (
    <>
      {products.map((product) => (
        <article key={product._id} className="article-product">
          <Products product={product} onDelete={deleteProductById} />
        </article>
      ))}
    </>
  );
}
