import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

export function FormUpdateProduct() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    category: "",
    price: "",
  });
  useEffect(() => {
    fetch(`http://localhost:5000/api/products/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setFormData({
          title: data.title,
          description: data.description,
          category: data.category.name,
          price: data.price,
        });
      })
      .catch((err) => console.log(err));
  }, [id]);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch(`http://localhost:5000/api/products/update-product/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((err) => console.log(err));
  };

  return (
    <>
      <form action="" onSubmit={handleSubmit}>
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
          name="category"
          placeholder="Category"
          value={formData.category}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="price"
          placeholder="Price"
          value={formData.price}
          onChange={handleInputChange}
        />
        <button type="submit">Update Product</button>
      </form>
    </>
  );
}
