import {useContext} from 'react'
import {FaRupeeSign} from 'react-icons/fa'
import {MdDeleteOutline} from 'react-icons/md'

import Counter from '../Counter'
import CartContext from '../../context/CartContext'

import './index.css'

// const getCartList = JSON.parse(localStorage.getItem('cart_list')) //

const CartItem = props => {
  // console.log('cart item loogedd')
  const {cartItemDetails} = props
  const {id, name, imageUrl, cost, quantity} = cartItemDetails
  const {removeCartItem} = useContext(CartContext)

  const onClickedDeleteBtn = () => {
    removeCartItem(id)
  }
  return (
    <>
      <li className="cart-list-item" testid="cartItem">
        <div className="item-name-container">
          <img src={imageUrl} alt={name} className="cart-item-image" />
          <div className="name-delete-container">
            <h1 className="cart-item-heading">{name}</h1>{' '}
            <button
              className="delete-button"
              type="button"
              onClick={onClickedDeleteBtn}
            >
              <MdDeleteOutline className="delete-icon" />
            </button>
          </div>
        </div>
        <div className="cart-price-quantity-container">
          <div className="counter-container">
            <Counter cartItemDetails={cartItemDetails} />
          </div>
          <div className="price-container">
            <p className="item-price">
              <FaRupeeSign />
              {quantity * cost}
            </p>
          </div>
        </div>
      </li>
    </>
  )
}

export default CartItem
