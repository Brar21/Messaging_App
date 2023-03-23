import React from "react";
import { GETDATA, SingleProduct } from "./actionType";
const initate = {
  data: [],
  totalPage: 0,
  product: {},
};
function ProductReducer(state = initate, { type, payload }) {
  switch (type) {
    case GETDATA: {
      return {
        ...state,
        data: payload.data,
        totalPage: payload.totalPages,
      };
    }
    case SingleProduct: {
      return {
        ...state,
        product: payload,
      };
    }
    default:
      return state;
  }
}

export default ProductReducer;
