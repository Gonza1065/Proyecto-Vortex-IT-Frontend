import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

export function FormUpdateCategory() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [formData, setFormData] = useState({
    name: "",
  });

  useEffect(() => {
    fetch(`http://localhost:5000/api/category/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setFormData({
          name: data.name,
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
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      fetch(`http://localhost:5000/api/category/update-category/${id}`, {
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
      <form action="" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleInputChange}
        />
        <button type="submit">Update Category</button>
      </form>
    </>
  );
}
