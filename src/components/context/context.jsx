import { createContext, useState } from "react";

export const CrudContext = createContext();

export const Provider = ({ children }) => {
  const [productsInCart, setProductsInCart] = useState([]);

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
    <CrudContext.Provider value={{ deleteProductToCart }}>
      {children}
    </CrudContext.Provider>
  );
};
