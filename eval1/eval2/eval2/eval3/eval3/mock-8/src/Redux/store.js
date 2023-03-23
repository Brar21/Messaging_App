import {legacy_createStore,compose,combineReducers,applyMiddleware }from "redux"


import thunk from "redux-thunk"
import Cartreducer from "./Cart/Cartreducer";
import ProductReducer from "./Product/ProductReducer";
const rootreducer=combineReducers({product:ProductReducer,cart:Cartreducer})
const composer=window.__REDUX_DEVTOOPS_EXTENSION_COMPOSE__||compose
export const store = legacy_createStore(rootreducer,composer(applyMiddleware(thunk)));