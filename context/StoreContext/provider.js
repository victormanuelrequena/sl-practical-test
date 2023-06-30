import { useReducer } from "react";
import { StoreContext } from "./context";
import StoreReducer, { INITIAL_STATE } from "./reducer";
import HttpService from "../../services/httpService";
import { TYPES } from "./types";

export default function StoreProvider({ children }) {
  const [state, dispatch] = useReducer(StoreReducer, INITIAL_STATE);
  const http = new HttpService();

  async function getProducts(params = "") {
    try {
      const response = await http.get(`products${params}`);
      dispatch({ type: TYPES.GET_PRODUCTS, payload: response.data });
    } catch (error) {
      console.log(error, "Error GET products");
    }
  }

  async function getProductsByCategory(category = "") {
    try {
      const response = await http.get(`products/category/${category}`);
      dispatch({ type: TYPES.GET_PRODUCTS_BY_CATEGORY, payload: response.data });
    } catch (error) {
      console.log(error, "Error GET products");
    }
  }

  async function getProduct(id) {
    try {
      const response = await http.get(`products/${id}`);
      dispatch({ type: TYPES.GET_PRODUCT, payload: response.data });
    } catch (error) {
      console.log(error, "Error GET product");
    }
  }

  async function getCategories() {
    try {
      const response = await http.get("products/categories");
      dispatch({ type: TYPES.GET_CATEGORIES, payload: response.data });
    } catch (error) {
      console.log(error, "Error GET categories");
    }
  }

  return (
    <StoreContext.Provider
      value={{
        products: state.products,
        product: state.product,
        categories: state.categories,
        getProducts,
        getProductsByCategory,
        getProduct,
        getCategories,
      }}
    >
      {children}
    </StoreContext.Provider>
  );
}
