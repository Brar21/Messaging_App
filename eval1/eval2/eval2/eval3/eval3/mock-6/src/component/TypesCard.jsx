import React from 'react'
import { Link } from 'react-router-dom'

function TypesCard(props) {
    console.log(props)
  return (
    <div style={{border:"1px solid",margin:"10px"}}>
      <Link to={`/types/${props.name}`}>  <h4>{props.name}</h4></Link>
    </div>
  )
}

export default TypesCard