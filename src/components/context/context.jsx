import { createContext, useState } from "react";

export const CrudContext = createContext();

export const Provider = ({ children }) => {
  const [productsList, setProductsList] = useState([]);
  const [categoriesList, setCategoriesList] = useState([]);
  const [productsInCart, setProductsInCart] = useState([]);
  const deleteProductById = async (productId) => {
    try {
      const response = await fetch(
        `http://localhost:5000/api/products/delete-product/${productId}`,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (response.ok) {
        setProductsList(
          productsList.filter((product) => product._id !== productId)
        );
      } else {
        console.log(response);
      }
    } catch (err) {
      console.log(err);
    }
  };
  const deleteCategoryById = async (categoryId) => {
    try {
      const response = await fetch(
        `http://localhost:5000/api/category/delete-category/${categoryId}`,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (response.ok) {
        setCategoriesList(
          categoriesList.filter((category) => category._id !== categoryId)
        );
      }
    } catch (err) {
      console.log(err);
    }
  };
  const deleteProductToCart = async (productId) => {
    try {
      const response = await fetch(
        `http://localhost:5000/api/cart/delete-product-cart/${productId}`,
        {
          method: "DELETE",
          headers: { "Content-Type": "application/json" },
        }
      );
      if (response.ok) {
        setProductsInCart(
          productsInCart.filter((product) => product._id !== productId)
        );
      }
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <CrudContext.Provider
      value={{ deleteProductById, deleteCategoryById, deleteProductToCart }}
    >
      {children}
    </CrudContext.Provider>
  );
};
