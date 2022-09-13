import { ProductionQuantityLimits } from '@mui/icons-material'
import React from 'react'

const ItemDetail = ({product}) => {
  return (
    //descripcion, foto y precio
    <div>
        <img src={product.imagen}></img>
        <h2>{product.nombre}</h2>
        <p>{product.descripcion}</p>
    </div>
  )
}

export default ItemDetail