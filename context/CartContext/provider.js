import { useReducer } from "react";
import { CartContext } from "./context";
import CartReducer, { INITIAL_STATE } from "./reducer";
import { TYPES } from "./types";

export default function CartProvider({ children }) {
  const [state, dispatch] = useReducer(CartReducer, INITIAL_STATE);

  function addToCart(product) {
    dispatch({ type: TYPES.ADD_TO_CART, payload: product });
  }

  function removeFromCart(product) {
    dispatch({ type: TYPES.REMOVE_FROM_CART, payload: product });
  }

  return (
    <CartContext.Provider
      value={{
        cart: state.cart,
        addToCart,
        removeFromCart
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
