import React, {createContext, useState, useContext} from 'react'
const CartContext = createContext ('');

//Funcion para utilizar el use context sin tener que llamarlo cada vez.
export const useCartContext = () => useContext(CartContext);


const CartProvider = ({children}) => {
    //Creo el estado inicial del carrito
    const [cart, setCart] = useState([]);
    //Funcion para vaciar el carrito
    const clearCart = () => setCart([]);

    //Funcion para evitar duplicados
    const isInCart = (id) => {
        return cart.find(product => product.id === id) ? true : false;
    }

    //Remover producto del carrito
    const removeProduct = (id) => setCart(cart.filter(product => product.id !== id));

    //Agregar producto al carrito
    const addProduct = (item, cantidad) => {
        if (isInCart(item.id)) {
            setCart(cart.map (product =>{
                return product.id === item.id ? {...product, cantidad: product.cantidad + cantidad} : product
            }))
        } else {
            setCart([...cart, {...item, cantidad}])
        }
    }

    console.log("Carrito:", cart); 


    return (
        <CartContext.Provider value={{
            clearCart,
            isInCart,
            removeProduct,
            addProduct,
            cart
        }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider;