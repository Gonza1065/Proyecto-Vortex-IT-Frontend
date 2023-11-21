import { faPen, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../../../componentsCSS/Cart/ShowCart.css";
export function ShowCart() {
  const [productsInCart, setProductsInCart] = useState([]);
  const [quantity, setQuantity] = useState(0);
  const [total, setTotal] = useState(0);
  useEffect(() => {
    fetch("http://localhost:5000/api/cart")
      .then((res) => res.json())
      .then((data) => setProductsInCart(data))
      .catch((err) => console.log(err));
  }, []);
  const handleProductCartDelete = async (itemId) => {
    try {
      await fetch(
        `http://localhost:5000/api/cart/delete-product-cart/${itemId}`,
        {
          method: "DELETE",
          headers: { "Content-Type": "application/json" },
        }
      );
      const updatedProductsInCart = productsInCart
        .map((product) => {
          return {
            ...product,
            items: product.items.filter((item) => item._id !== itemId),
          };
        })
        .filter((product) => product.items.length > 0);
      setProductsInCart(updatedProductsInCart);
    } catch (err) {
      console.log(err);
    }
    fetch("http://localhost:5000/api/cart")
      .then((res) => res.json())
      .then((data) => setProductsInCart(data))
      .catch((err) => console.log(err));
  };
  const handleCartDelete = async () => {
    try {
      await fetch("http://localhost:5000/api/cart/delete-cart", {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
      });
      setProductsInCart([]);
    } catch (err) {
      console.log(err);
    }
    fetch("http://localhost:5000/api/cart")
      .then((res) => res.json())
      .then((data) => setProductsInCart(data))
      .catch((err) => console.log(err));
  };
  const quantityProducts = async () => {
    try {
      await fetch("http://localhost:5000/api/cart/quantity-products")
        .then((res) => res.json())
        .then((data) => setQuantity(data.message))
        .catch((err) => console.log(err));
    } catch (err) {
      console.log(err);
    }
  };
  quantityProducts();
  const priceTotal = async () => {
    try {
      await fetch("http://localhost:5000/api/cart/price-total")
        .then((res) => res.json())
        .then((data) => setTotal(data.total))
        .catch((err) => console.log(err));
    } catch (err) {
      console.log(err);
    }
  };
  priceTotal();
  return (
    <>
      <div className="title-cart">
        <h1>Cart</h1>
      </div>
      {productsInCart.length > 0 ? (
        productsInCart.map((product) =>
          product.items.length > 0
            ? product.items.map((item) => (
                <article key={item._id} className="article-product-in-cart">
                  <div className="products-in-cart">
                    <div className="product-in-cart-title">
                      <h1>{item.productId.title}</h1>
                    </div>
                    <div>
                      {item.productId.category ? (
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
                        onClick={() =>
                          handleProductCartDelete(item.productId._id)
                        }
                      />
                    </div>
                    <div className="icon-update-product-cart">
                      <Link to={`/update-product-cart/${item.productId._id}`}>
                        <FontAwesomeIcon icon={faPen} />
                      </Link>
                    </div>
                  </div>
                </article>
              ))
            : null
        )
      ) : (
        <div className="message-add-products-at-cart">
          <p>¡Add products to the cart!</p>
        </div>
      )}
      <div className="quantity-price-delete">
        <div className="btn-delete-cart">
          <button onClick={handleCartDelete}>Delete Cart</button>
        </div>
        <div className="quantity-products">
          <h1>Total Products: {quantity}</h1>
        </div>
        <div>
          <h1>Price total: {total}</h1>
        </div>
      </div>
    </>
  );
}
