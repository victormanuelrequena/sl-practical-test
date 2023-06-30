import { TYPES } from "./types";

export const INITIAL_STATE = {
  cart: [],
};
export default function CartReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case TYPES.ADD_TO_CART:
      const itemIndex = state.cart.findIndex((item) => item.id === action.payload.id);
      if (itemIndex >= 0) {
        const newCart = [...state.cart];
        newCart[itemIndex] = { ...newCart[itemIndex], quantity: newCart[itemIndex].quantity + 1 };
        return { ...state, cart: newCart };
      }
      return {
        ...state,
        cart: [...state.cart, { ...action.payload, quantity: 1 }],
      };
    case TYPES.REMOVE_FROM_CART:
      const itemIndexRemove = state.cart.findIndex((item) => item.id === action.payload.id);
      let newCartRemove = [...state.cart];
      if (newCartRemove[itemIndexRemove].quantity > 1) {
        newCartRemove[itemIndexRemove] = {
          ...newCartRemove[itemIndexRemove],
          quantity: newCartRemove[itemIndexRemove].quantity - 1,
        };
        return { ...state, cart: newCartRemove };
      } else {
        newCartRemove.splice(itemIndexRemove, 1);
        return { ...state, cart: newCartRemove };
      }

    default:
      return state;
  }
}
