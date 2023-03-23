import React from "react";
import { ADDTOCART, DEELTE, ORDER, UPDATE_CART } from "./actionType";
const initate = {
  cart: [],
  order: [],
};
function Cartreducer(state = initate, { type, payload }) {
  switch (type) {
    case ADDTOCART: {
      return {
        cart: [...state.cart, payload],
      };
    }
    case UPDATE_CART: {
      let update = state.cart.map((el) => {
        if (el.id === payload.id) {
          return {
            ...el,
            ...payload,
          };
        }
        return el;
      });
      return {
        cart: update,
      };
    }
    case DEELTE: {
      let x = state.cart.filter((el) => el.id !== payload);
      return {
        cart: x,
      };
    }
    case ORDER: {
      return {
        ...state,
        cart: [],
        order: payload,
      };
    }
    default:
      return state;
  }
}

export default Cartreducer;
