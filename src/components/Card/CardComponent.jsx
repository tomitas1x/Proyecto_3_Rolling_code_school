import React from 'react'
import '../Card/CardComponent.css'

const CardComponent = ({title,imagen}) => {
  return (
    <div className='card-style'>
       <img alt="tarjetas" src={imagen} width='180px' />
        <h4>{title}</h4>
    </div>
  )
}

export default CardComponent