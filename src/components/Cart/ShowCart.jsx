import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext, useEffect, useState } from "react";
import "../../componentsCSS/Cart/ShowCart.css";
import { CrudContext } from "../context/context";
import { QuantityProducts } from "./QuantityProducts/QuantityProducts";
import { ViewPriceTotal } from "./ViewPriceTotal/ViewPriceTotal";
export function ShowCart() {
  const [productsInCart, setProductsInCart] = useState([]);

  const { deleteProductToCart } = useContext(CrudContext);

  const handleDeleteClick = (itemId) => {
    deleteProductToCart(itemId);
  };

  useEffect(() => {
    fetch("http://localhost:5000/api/cart")
      .then((res) => res.json())
      .then((data) => setProductsInCart(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <h1>Cart</h1>
      {productsInCart.length > 0 &&
        productsInCart.map((product) =>
          product.items.map((item) => (
            <article key={item._id} className="article-product-in-cart">
              <div className="products-in-cart">
                <div className="product-in-cart-title">
                  <h1>{item.productId.title}</h1>
                </div>
                <div>
                  {item.productId.category.name ? (
                    <h1>{item.productId.category.name}</h1>
                  ) : (
                    <h1>No category</h1>
                  )}
                </div>
                <div>
                  <h1>${item.productId.price}</h1>
                </div>
                <div>
                  <h1>{item.quantity}</h1>
                </div>
                <div className="icon-delete-product-cart">
                  <FontAwesomeIcon
                    icon={faTrash}
                    onClick={() => handleDeleteClick(item.productId._id)}
                  />
                </div>
              </div>
            </article>
          ))
        )}
      <div className="quantity-price">
        <QuantityProducts />
        <ViewPriceTotal />
      </div>
    </>
  );
}
