import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { Cart } from "./components/Cart/Cart";
import { SelectCategory } from "./components/Category/SelectCategory";
import { AddProduct } from "./components/Products/CreateProduct/AddProduct";
import { FormAddProduct } from "./components/Products/CreateProduct/FormAddProduct";
import { ProductListContainer } from "./components/Products/ProductsListContainer";
import { FormUpdateProduct } from "./components/Products/UpdateProduct/FormUpdateProduct";
import { Provider } from "./components/context/context";
function App() {
  return (
    <>
      <Provider>
        <BrowserRouter>
          <div className="nav-bar">
            <AddProduct />
            <SelectCategory />
            <Cart />
          </div>
          <Routes>
            <Route path="/" element={<ProductListContainer />} />
            <Route path="/add-product" element={<FormAddProduct />} />
            <Route path="/update-product/:id" element={<FormUpdateProduct />} />
          </Routes>
        </BrowserRouter>
      </Provider>
    </>
  );
}

export default App;
