import { Link } from "react-router-dom";
import "../../../componentsCSS/Products/AddProduct.css";
export function AddProduct() {
  return (
    <>
      <div className="btn-adding-product">
        <Link to="/add-product">Add Product</Link>
      </div>
    </>
  );
}
