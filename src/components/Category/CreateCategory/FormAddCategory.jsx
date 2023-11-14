import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../../../componentsCSS/Categories/FormAddCategory.css";
export function FormAddCategory() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
  });
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        "http://localhost:5000/api/category/add-category",
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
      <section className="section-form-add-category">
        <form action="" onSubmit={handleSubmit} className="form-add-category">
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleInputChange}
          />
          <div className="btn-add-category">
            <button type="submit">Add Category</button>
          </div>
        </form>
      </section>
    </>
  );
}
