import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { Cart } from "./components/Cart/Cart";
import { ShowCart } from "./components/Cart/ShowCart";
import { AddCategory } from "./components/Category/CreateCategory/AddCategory";
import { FormAddCategory } from "./components/Category/CreateCategory/FormAddCategory";
import { SeeCategoryById } from "./components/Category/SeeCategoryById/SeeCategoryById";
import { SelectCategory } from "./components/Category/SelectCategory";
import { FormUpdateCategory } from "./components/Category/UpdateCategory/FormUpdateCategory";
import { MainPage } from "./components/Main/MainPage";
import { AddProduct } from "./components/Products/CreateProduct/AddProduct";
import { FormAddProduct } from "./components/Products/CreateProduct/FormAddProduct";
import { SeeProductById } from "./components/Products/SeeProductById/SeeProductById";
import { FormUpdateProduct } from "./components/Products/UpdateProduct/FormUpdateProduct";
import { Provider } from "./components/context/context";
function App() {
  return (
    <>
      <Provider>
        <BrowserRouter>
          <div className="nav-bar">
            <AddProduct />
            <AddCategory />
            <SelectCategory />
            <Cart />
          </div>
          <Routes>
            {/* Showing all PRODUCTS and CATEGORIES */}
            <Route path="/" element={<MainPage />} />
            {/* CRUD Products */}
            <Route path="/add-product" element={<FormAddProduct />} />
            <Route path="/update-product/:id" element={<FormUpdateProduct />} />
            <Route path="/see-product/:id" element={<SeeProductById />} />
            {/* CRUD Categories */}
            <Route path="/see-category/:id" element={<SeeCategoryById />} />
            <Route path="/add-category" element={<FormAddCategory />} />
            <Route
              path="/update-category/:id"
              element={<FormUpdateCategory />}
            />
            <Route path="/cart" element={<ShowCart />} />
          </Routes>
        </BrowserRouter>
      </Provider>
    </>
  );
}

export default App;
