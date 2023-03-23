import { GETDATA, SingleProduct } from "./actionType";

export const getdata =
  (page, limit, filter = "", sort = "desc") =>
  (dispatch) => {
    fetch(
      `https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-products?page=${page}&limit=${limit}&filter=${filter}&sort=price&order=${sort}`
    )
      .then((res) => res.json())
      .then((res) => dispatch({ type: GETDATA, payload: res }))
      .catch((err) => console.log(err));
  };

export const productdetail = (id) => (dispatch) => {
  fetch(
    `https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-products/${id}`
  )
    .then((res) => res.json())
    .then((res) => dispatch({ type: SingleProduct, payload: res.data }))
    .catch((err) => console.log(err));
};
