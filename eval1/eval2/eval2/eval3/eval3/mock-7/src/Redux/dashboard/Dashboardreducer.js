import React from "react";
import { ADDATE, GETDATA, REMOVE, UPDATE } from "./actiontype";
const inistate = {
  data: [],
};
function Dashboardreducer(state = inistate, { type, payload }) {
  switch (type) {
    case GETDATA: {
      return {
        data: payload,
      };
    }
    case ADDATE: {
      return {
        data: [...state.data, payload],
      };
    }
    case REMOVE: {
      let x = state.data.filter((el) => el.id !== payload);
      return {
        data: x,
      };
    }
    case UPDATE: {
      let update = state.data.map((el) => {
        if (el.id === payload.id) {
          return {
            ...el,
            ...payload,
          };
        }
        return el;
      });
      return {
        data: update,
      };
    }
    default:
      return state;
  }
}

export default Dashboardreducer;