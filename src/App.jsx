import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { ShowCart } from "./components/Cart/ShowCart/ShowCart";
import { UpdateProductCart } from "./components/Cart/UpdateProductCart/UpdateProductCart";
import { FormAddCategory } from "./components/Category/CreateCategory/FormAddCategory";
import { SeeCategoryById } from "./components/Category/SeeCategoryById/SeeCategoryById";
import { FormUpdateCategory } from "./components/Category/UpdateCategory/FormUpdateCategory";
import { MainPage } from "./components/Main/MainPage";
import { NavBar } from "./components/NavBar/NavBar";
import { FormAddProduct } from "./components/Products/CreateProduct/FormAddProduct";
import { SeeProductById } from "./components/Products/SeeProductById/SeeProductById";
import { FormUpdateProduct } from "./components/Products/UpdateProduct/FormUpdateProduct";
function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/add-product" element={<FormAddProduct />} />
          <Route path="/update-product/:id" element={<FormUpdateProduct />} />
          <Route path="/see-product/:id" element={<SeeProductById />} />
          <Route path="/see-category/:id" element={<SeeCategoryById />} />
          <Route path="/add-category" element={<FormAddCategory />} />
          <Route path="/update-category/:id" element={<FormUpdateCategory />} />
          <Route path="/cart" element={<ShowCart />} />
          <Route
            path="/update-product-cart/:id"
            element={<UpdateProductCart />}
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
