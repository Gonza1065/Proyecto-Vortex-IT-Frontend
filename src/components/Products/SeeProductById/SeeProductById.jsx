import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export function SeeProductById() {
  const { id } = useParams();
  const [product, setProduct] = useState({});
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
        <div className="see-product-name">
          {/* <h3>{product.category.name}</h3> */}
        </div>
      </article>
    </>
  );
}
