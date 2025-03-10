import {FaStar, FaRupeeSign} from 'react-icons/fa'

import Counter from '../Counter'

import './index.css'

const CartItem = () => {
  console.log('cart item loogedd')
  return (
    <>
      <li className="cart-list-item">
        <img src="" alt="" className="cart-item-image" />
        <p className="cart-item-heading">Item name</p>
        <Counter />
        <p className="price">
          <FaRupeeSign />
          20000
        </p>
      </li>
    </>
  )
}

export default CartItem
