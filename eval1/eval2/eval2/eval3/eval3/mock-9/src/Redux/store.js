import {legacy_createStore,compose,combineReducers,applyMiddleware }from "redux"


import thunk from "redux-thunk"
import Reducer from "./quiz/Reducer";


const rootreducer=combineReducers({data:Reducer})
const composer=window.__REDUX_DEVTOOPS_EXTENSION_COMPOSE__||compose
export const store = legacy_createStore(rootreducer,composer(applyMiddleware(thunk)));