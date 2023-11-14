import { Link } from "react-router-dom";
import "../../../componentsCSS/Categories/AddCategory.css";
export function AddCategory() {
  return (
    <>
      <div className="btn-add-category">
        <Link to="/add-category">Add Category</Link>
      </div>
    </>
  );
}
