import React from 'react'


const CartContext = React.createContext({
    cartList: [],
    removeAllCartItems: () => {},
    removeCartItem: () => {},
    addItemToCart: () => {},
    onDecrementQuantity: () => {},
    onIncrementQuantity: () => {},
    
})

export default CartContext