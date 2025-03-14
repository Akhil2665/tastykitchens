import {FaRupeeSign} from 'react-icons/fa'

import Counter from '../Counter'

import './index.css'

// const getCartList = JSON.parse(localStorage.getItem('cart_list')) //

const CartItem = props => {
  console.log('cart item loogedd')
  const {cartItemDetails} = props
  const {id, name, rating, imageUrl, cost, quantity} = cartItemDetails

  return (
    <>
      <li className="cart-list-item" testid="cartItem">
        <div className="item-name-container">
          <img src={imageUrl} alt={name} className="cart-item-image" />
          <h1 className="cart-item-heading">{name}</h1>
        </div>
        <div className="counter-container">
          <Counter cartItemDetails={cartItemDetails} />
        </div>
        <div className="price-container">
          <p className="item-price">
            <FaRupeeSign />
            {quantity * cost}
          </p>
        </div>
      </li>
    </>
  )
}

export default CartItem
