import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import "../../componentsCSS/NavBar/NavBar.css";
import { Cart } from "../Cart/Cart";
import { AddCategory } from "../Category/CreateCategory/AddCategory";
import { AddProduct } from "../Products/CreateProduct/AddProduct";
export function NavBar() {
  return (
    <>
      <div className="nav-bar">
        <div className="icon-house-nav-bar">
          <Link to="/">
            <FontAwesomeIcon icon={faHouse} />
          </Link>
        </div>
        <AddProduct />
        <AddCategory />
        <Cart />
      </div>
    </>
  );
}
