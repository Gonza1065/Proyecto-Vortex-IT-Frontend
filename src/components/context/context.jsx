import { createContext, useState } from "react";

export const CrudContext = createContext();

export const Provider = ({ children }) => {
  const [productsList, setProductsList] = useState([]);
  const deleteProduct = async (productId) => {
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
        console.log(productsList);
        setProductsList((prevProductsList) =>
          prevProductsList.filter((product) => product._id !== productId)
        );
        console.log(productsList);
      } else {
        console.log(response);
      }
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <CrudContext.Provider value={{ deleteProduct }}>
      {children}
    </CrudContext.Provider>
  );
};
