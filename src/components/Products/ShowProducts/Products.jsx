import { faPen, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import "../../../componentsCSS/Products/Products.css";
export function Products({ product, onDeleteClick }) {
  return (
    <>
      <div className="product-title">
        <h1>{product.title}</h1>
      </div>
      <div>
        <h3>${product.price}</h3>
      </div>
      <div>
        {product.category ? (
          <h3>Category: {product.category.name}</h3>
        ) : (
          <h3>No category</h3>
        )}
      </div>
      <div className="icons">
        <div className="icon-update-product">
          <Link to={`/update-product/${product._id}`}>
            <FontAwesomeIcon icon={faPen} />
          </Link>
        </div>
        <div
          className="icon-delete-product"
          onClick={() => onDeleteClick(product._id)}
        >
          <FontAwesomeIcon icon={faTrash} />
        </div>
        <div className="btn-see-details">
          <Link to={`/see-product/${product._id}`}>
            <button>See details</button>
          </Link>
        </div>
      </div>
    </>
  );
}
