import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../../../componentsCSS/Products/FormAddProduct.css";
export function FormAddProduct() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    category: "",
    price: "",
  });
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        "http://localhost:5000/api/products/add-product",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        }
      );
      if (response.ok) {
        navigate("/");
      }
    } catch (err) {
      console.log(err);
    }
  };
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  return (
    <>
      <form action="" onSubmit={handleSubmit} className="form-add-product">
        <input
          type="text"
          placeholder="Title"
          name="title"
          value={formData.title}
          onChange={handleInputChange}
        />
        <input
          type="text"
          placeholder="Description"
          name="description"
          value={formData.description}
          onChange={handleInputChange}
        />
        <input
          type="text"
          placeholder="Category"
          name="category"
          value={formData.category}
          onChange={handleInputChange}
        />
        <input
          type="number"
          placeholder="Price"
          name="price"
          value={formData.price}
          onChange={handleInputChange}
        />
        <div className="btn-add-product">
          <button type="submit">Add Product</button>
        </div>
      </form>
    </>
  );
}
