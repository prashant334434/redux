import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { buyCake } from '../redux/Cakes/CakeAction'

function CakeContainer() {
  const numOfCakes=useSelector(state=> state.cake.numOfCakes)
   const dispatch=useDispatch()
  return (
    <>
    <div>CakeContainer</div>
    <h2>NUM OF CAKE :- {numOfCakes}</h2>
    <button onClick={()=>dispatch(buyCake())}>BUY NOW </button>
    </>
  )
}

export default CakeContainer