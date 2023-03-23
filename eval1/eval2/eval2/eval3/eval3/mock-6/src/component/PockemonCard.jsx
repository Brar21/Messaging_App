import React from 'react'
import { Link } from 'react-router-dom'
function PockemonCard(props) {
    console.log(props)
  return (
    <div style={{border:"1px solid",margin:"10px"}}>
      <Link to={`/pokemon/${props.name}`}>  <h4>{props.name}</h4></Link>
    </div>
  )
}

export default PockemonCard