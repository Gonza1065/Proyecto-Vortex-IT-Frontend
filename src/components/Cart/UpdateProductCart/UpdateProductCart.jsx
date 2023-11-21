import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "../../../componentsCSS/Cart/UpdateProductCart.css";
export function UpdateProductCart() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [formData, setFormData] = useState({
    quantity: "",
  });
  const [errorMessage, setErrorMessage] = useState(false);
  useEffect(() => {
    fetch("http://localhost:5000/api/cart/quantity-products")
      .then((res) => res.json())
      .then((data) =>
        setFormData({
          quantity: data.message,
        })
      )
      .catch((err) => console.log(err));
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.quantity || formData.quantity === 0) {
      setErrorMessage(true);
    }
    try {
      fetch(`http://localhost:5000/api/cart/update-product-cart/${id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.message) {
            setErrorMessage(data.message);
          } else {
            navigate("/cart");
          }
        })
        .catch((err) => console.log(err));
    } catch (err) {
      console.log(err);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrorMessage(false);
  };

  return (
    <>
      <form
        action=""
        onSubmit={handleSubmit}
        className="form-update-product-cart"
      >
        <input
          type="text"
          name="quantity"
          placeholder="Quantity"
          value={formData.quantity}
          onChange={handleInputChange}
        />
        <div className="btn-update-quantity">
          <button type="submit">Update Quantity</button>
        </div>
        {errorMessage && <p>{errorMessage}</p>}
      </form>
    </>
  );
}
