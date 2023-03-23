import React from 'react'
import { GETDATA } from './actionType'
const initate={
  data:[],
}
function Reducer(state=initate,{payload,type}) {
  switch(type){
    case GETDATA :{
      return {
        data:payload
      }
    }
    default:return state
  }
  
}

export default Reducer