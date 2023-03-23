import {legacy_createStore,compose,combineReducers,applyMiddleware }from "redux"


import thunk from "redux-thunk"
import Dashboardreducer from "./dashboard/Dashboardreducer";
import LoginReducer from "./loginandregister/LoginReducer";


const rootreducer=combineReducers({
    login:LoginReducer,
    dashboard:Dashboardreducer
})
const composer=window.__REDUX_DEVTOOPS_EXTENSION_COMPOSE__||compose
export const store = legacy_createStore(rootreducer,composer(applyMiddleware(thunk)));