import React from 'react'
import { LOGIN, LOGIN_ERROR, REGISTER } from './loginactiontype'
const logininitate={
    login:{},
    admin:false,
    register:[],
    error:false
}
function LoginReducer(state=logininitate,{type,payload}) {
  
    switch(type){
        case LOGIN:{
            localStorage.setItem("logindata",JSON.stringify(payload))
            return {
                ...state,
                admin:payload.email==="admin@stockbroker.com"&&payload.password==="admin123"?true:false,
                login:payload
            }
        }
        case REGISTER:{
            return {
                ...state,
                error:false,
                register:[...state.register,payload]
            }
        }
        case LOGIN_ERROR:{
           return {...state,
            error:true,
        login:{}
    }
        }
        default:return state
    }
}

export default LoginReducer