import React from 'react'
import ItemCount from '../ItemCount/ItemCount'
import { useCartContext } from '../CartContext/CartContext'



const ItemDetail = ({product}) => {
  const {addProduct} = useCartContext();
  const onAdd = (cantidad) => {
    alert("Se agregaron " + cantidad + " productos al carrito")
    addProduct(product, cantidad);
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
        <button>Comprar</button>
    </div>
  )
}

export default ItemDetail

