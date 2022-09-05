import React from 'react'
import Item from '../Item/Item'

const ItemList = ({products}) => {
  return (
    <div>
        <h1>Nuestros Productos</h1>

        {products.map ((product) => (
            <Item
            product={product}
            />
        ))}
    </div>
  )
}

export default ItemList