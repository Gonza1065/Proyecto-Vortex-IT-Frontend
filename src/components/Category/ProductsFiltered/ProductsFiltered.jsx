import { Link } from "react-router-dom";
export function ProductsFiltered({ product }) {
  return (
    <>
      <div className="product-title">
        <h1>{product.title}</h1>
      </div>
      <div>
        <h3>${product.price}</h3>
      </div>
      <div>
        {product.category ? (
          <h3>Category: {product.category.name}</h3>
        ) : (
          <h3>No category</h3>
        )}
      </div>
      <div className="btn-see-details">
        <Link to={`/see-product/${product._id}`}>
          <button>See details</button>
        </Link>
      </div>
    </>
  );
}
