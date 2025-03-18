import React from 'react'

const CartContext = React.createContext({
  cartList: [],
  removeAllCartItems: () => {},
  removeCartItem: () => {},
  addCartItem: () => {},
  addOrUpdateCartItem: () => {},
  decrementCartItemQuantity: () => {},
  incrementCartItemQuantity: () => {},
})

export default CartContext
