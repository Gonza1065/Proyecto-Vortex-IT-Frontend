import { faPen, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import "../../../componentsCSS/Categories/Category.css";
export function Category({ category, onDeleteClick }) {
  return (
    <>
      <div className="category-name">
        <h1>{category.name}</h1>
      </div>
      <div className="icons">
        <div className="icon-update-category">
          <Link to={`/update-category/${category._id}`}>
            <FontAwesomeIcon icon={faPen} />
          </Link>
        </div>
        <div
          className="icon-delete-category"
          onClick={() => onDeleteClick(category._id)}
        >
          <FontAwesomeIcon icon={faTrash} />
        </div>
        <div className="btn-see-details">
          <Link to={`/see-category/${category._id}`}>
            <button>See details</button>
          </Link>
        </div>
      </div>
    </>
  );
}
