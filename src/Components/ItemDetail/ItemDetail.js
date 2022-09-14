import { ProductionQuantityLimits } from '@mui/icons-material'
import React from 'react'
import ItemCount from '../ItemCount/ItemCount'


const ItemDetail = ({product}) => {
  const onAdd = (cantidad) => {
    alert("Se agregaron " + cantidad + " productos al carrito")
  }
  return (
    //descripcion, foto y precio
    <div>
        <img src={product.imagen}></img>
        <h2>{product.nombre}</h2>
        <p>{product.descripcion}</p>
        <ItemCount
        stock={10}
        initial={1}
        onAdd= {onAdd}
        />
    </div>
  )
}

export default ItemDetail