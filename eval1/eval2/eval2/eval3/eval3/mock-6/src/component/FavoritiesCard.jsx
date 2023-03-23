import React from 'react'

function FavoritiesCard(props) {
    const data=props;
   function remove(id){
let dat=data.filter((el)=>el.id!==id)
localStorage.setItem("fav",JSON.stringify(dat))
   } 
  return (
    <div>
        <h1>Name:{data.name}</h1>
        <img src={data}/>
        <h1>id:{data.id}</h1>
        <h1>Base Experience:{data.base_experience}</h1>
        <h1>hp:{data.hp}</h1>
        <h2>Attack Score:{data.attack_score}</h2>
        <h2>Defence Score:{data.defence_score}</h2>
        <h2>Special-Attack Score:{data.special_defence_score}</h2>
        <h2>Special-Defence Score:{data.special_defence_score}</h2>
        <h3>speed:{data.speed}</h3>
        <p>
            Ability:{data.abilities?.map((el)=>(el.ability.name), )}
        </p>
        <p>
            moves:{data.moves?.map((el)=>(el.move.name), )}
        </p>
<h1>Weight:{data.weight}</h1>
<h1>Height:{data.height}</h1>
<button onClick={()=>remove(data.id)}>remove favorites</button>
    </div>
  )
}

export default FavoritiesCard