import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "../../../componentsCSS/Categories/SeeCategoryById.css";
export function SeeCategoryById() {
  const { id } = useParams();
  const [category, setCategory] = useState({});
  useEffect(() => {
    fetch(`http://localhost:5000/api/category/${id}`)
      .then((res) => res.json())
      .then((data) => setCategory(data))
      .catch((err) => console.log(err));
  }, [id]);

  return (
    <>
      <div className="see-category-name">
        <h1>{category.name}</h1>
      </div>
    </>
  );
}
