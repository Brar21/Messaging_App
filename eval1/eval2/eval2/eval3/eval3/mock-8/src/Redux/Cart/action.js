import { ADDTOCART, DEELTE, ORDER, UPDATE_CART } from "./actionType";

export const addtocart = (id) => (dispatch) => {
  fetch(
    `https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-products/${id}`
  )
    .then((res) => res.json())
    .then((res) =>
      dispatch({ type: ADDTOCART, payload: { ...res.data, quantity: 1 } })
    )
    .catch((err) => console.log(err));
};
export const updatequantity = (id, update) => (dispatch) => {
  fetch(
    `https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-products/${id}`
  )
    .then((res) => res.json())
    .then((res) =>
      dispatch({
        type: UPDATE_CART,
        payload: { ...res.data, quantity: update },
      })
    )
    .catch((err) => console.log(err));
};
export const removed = (id) => (dispatch) => {
  dispatch({ type: DEELTE, payload: id });
};
export const ordreproduct = (data) => (dispatch) => {
  dispatch({ type: ORDER, payload: data });
};
