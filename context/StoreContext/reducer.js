import { TYPES } from "./types";

export const INITIAL_STATE = {
  categories: [],
  products: [],
  product: {},
  loading: false,
};

export default function reducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case TYPES.GET_PRODUCTS:
      return { ...state, products: action.payload };
    case TYPES.GET_PRODUCTS_BY_CATEGORY:
      return { ...state, products: action.payload };
    case TYPES.GET_CATEGORIES:
      return { ...state, categories: action.payload };
    case TYPES.GET_PRODUCT:
      return { ...state, product: action.payload };

    default:
      return state;
  }
}
