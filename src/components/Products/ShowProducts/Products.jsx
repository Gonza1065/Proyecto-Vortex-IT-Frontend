import { faPen, faPlus, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import "../../../componentsCSS/Products/Products.css";
export function Products({ product, onDelete }) {
  const handleDeleteClick = () => {
    onDelete(product._id);
  };
  return (
    <>
      <div className="product-title">
        <h1>{product.title}</h1>
      </div>
      <div>
        <h3>${product.price}</h3>
      </div>
      <div>
        <h3>Category: {product.category.name}</h3>
      </div>
      <div className="icons">
        <div className="icon-add-to-cart">
          <FontAwesomeIcon icon={faPlus} />
        </div>
        <div className="icon-update-product">
          <Link to={`/update-product/${product._id}`}>
            <FontAwesomeIcon icon={faPen} />
          </Link>
        </div>
        <div className="icon-delete-product" onClick={handleDeleteClick}>
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
