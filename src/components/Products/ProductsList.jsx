import { useContext } from "react";
import "../../componentsCSS/ProductsList.css";
import { CrudContext } from "../context/context";
import { Products } from "./Products";
export function ProductsList({ products }) {
  const { deleteProduct } = useContext(CrudContext);
  return (
    <>
      {products.map((product) => (
        <article key={product._id} className="article-product">
          <Products product={product} onDelete={deleteProduct} />
        </article>
      ))}
    </>
  );
}
