import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { buyIceCreame } from '../redux/IceCreame/IceCreameActions'

function IceCreameContainer() {
    const numOfIceCreame=useSelector(state=> state.iceCreame.numOfIceCreame)
    const dispatch=useDispatch()
  return (
    <div>
    <div>CakeContainer</div>
    <h2>NUM OF Ice creame :- {numOfIceCreame}</h2>
    <button onClick={()=>dispatch(buyIceCreame())}>BUY NOW </button>
    </div>
  )
}

export default IceCreameContainer