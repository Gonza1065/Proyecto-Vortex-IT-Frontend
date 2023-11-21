import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "../../../componentsCSS/Products/FormUpdateProduct.css";
export function FormUpdateProduct() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    name: "",
    price: "",
  });
  const [errorMessage, setErrorMessage] = useState("");
  useEffect(() => {
    fetch(`http://localhost:5000/api/products/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setFormData({
          title: data.title,
          description: data.description,
          name: data.category.name,
          price: data.price,
        });
      })
      .catch((err) => console.log(err));
  }, [id]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    setErrorMessage("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      !formData.title ||
      !formData.description ||
      !formData.name ||
      !formData.price
    ) {
      setErrorMessage("All fields are required");
      return;
    }
    try {
      fetch(`http://localhost:5000/api/products/update-product/${id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      })
        .then((res) => res.json())
        .then((data) => navigate("/"))
        .catch((err) => console.log(err));
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <form action="" onSubmit={handleSubmit} className="form-update-product">
        <input
          type="text"
          name="title"
          placeholder="Title"
          value={formData.title}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="description"
          placeholder="Description"
          value={formData.description}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="name"
          placeholder="Category"
          value={formData.name}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="price"
          placeholder="Price"
          value={formData.price}
          onChange={handleInputChange}
        />
        <div className="btn-update-product">
          <button type="submit">Update Product</button>
        </div>
        {errorMessage && <p>{errorMessage}</p>}
      </form>
    </>
  );
}
