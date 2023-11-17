import { CategoriesListContainer } from "../Category/ShowCategories/CategoriesListContainer";
import { ShowProductsByCategory } from "../Category/ShowProductsByCategory";
import { ProductListContainer } from "../Products/ShowProducts/ProductsListContainer";
export function MainPage() {
  return (
    <>
      <ShowProductsByCategory />
      <ProductListContainer />
      <CategoriesListContainer />
    </>
  );
}
