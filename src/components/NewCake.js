import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { buyCake } from '../redux/Cakes/CakeAction'

function NewCake() {
    const [number,setNumber]=useState(1);
  const numOfCakes=useSelector(state=> state.cake.numOfCakes)
   const dispatch=useDispatch()
  return (
    <>
    <div>CakeContainer</div>
    <h2>NUM OF CAKE :- {numOfCakes}</h2>
    <input type='text' value={number} onChange={e=>setNumber(e.target.value)}/>
    <button onClick={(number)=>dispatch(buyCake(number))}>BUY {number}NOW </button>
    </>
  )
}

export default NewCake