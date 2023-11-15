import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "../../../componentsCSS/Products/SeeProductById.css";
export function SeeProductById() {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const navigate = useNavigate();
  const handleAddToCart = async () => {
    try {
      const response = await fetch(
        "http://localhost:5000/api/cart/add-product-cart",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            productId: id,
            quantity: 1,
          }),
        }
      );
      if (response.ok) {
        navigate("/cart");
      } else {
        console.log(response);
      }
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    fetch(`http://localhost:5000/api/products/${id}`)
      .then((res) => res.json())
      .then((data) => setProduct(data))
      .catch((err) => console.log(err));
  }, [id]);

  return (
    <>
      <article className="see-product">
        <div className="see-product-title">
          <h1>{product.title}</h1>
        </div>
        <div className="see-product-description">
          <h3>{product.description}</h3>
        </div>
        <div className="see-product-price">
          <h3>${product.price}</h3>
        </div>
        <div className="icon-add-to-cart" onClick={handleAddToCart}>
          <FontAwesomeIcon icon={faPlus} />
        </div>
      </article>
    </>
  );
}
