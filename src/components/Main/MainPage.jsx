import { CategoriesListContainer } from "../Category/ShowCategories/CategoriesListContainer";
import { ProductListContainer } from "../Products/ShowProducts/ProductsListContainer";

export function MainPage() {
  return (
    <>
      <ProductListContainer />
      <CategoriesListContainer />
    </>
  );
}
