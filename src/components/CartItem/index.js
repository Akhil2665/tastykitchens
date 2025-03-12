import {FaStar, FaRupeeSign} from 'react-icons/fa'

import Counter from '../Counter'

import './index.css'

const CartItem = () => {
  console.log('cart item loogedd')
  return (
    <>
      <li className="cart-list-item">
        <div className="item-name-container">
          <img src="" alt="" className="cart-item-image" />
          <p className="cart-item-heading">Item name</p>
        </div>
        <div className="counter-container">
          <Counter />
        </div>
        <div className="price-container">
          <p className="item-price">
            <FaRupeeSign />
            20000
          </p>
        </div>
      </li>
    </>
  )
}

export default CartItem
