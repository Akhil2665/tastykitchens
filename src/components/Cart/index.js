// import {useHistory} from 'react'

import CartItem from '../CartItem'
import Footer from '../Footer'
import CartContext from '../../context/CartContext'

import './index.css'

const cartList = [
  {id: 1, name: 'name'},
  {id: 2, name: 'name 232'},
]

const Cart = props => {
  // const navigate = useHistory()
  const {history} = props
  console.log('cart loogedd')
  const onClickedPlaceOrder = () => {
    history.push('/payment-successful')
  }
  return (
    <>
      <div className="cart-container">
        <div className="row-names">
          <h1 className="row-name">Item</h1>
          <h1 className="row-name">Quantity</h1>
          <h1 className="row-name">Price</h1>
        </div>
        <ul className="cart-list">
          {cartList.map(eachObj => (
            <CartItem cartItemDetails={eachObj} key={eachObj.id} />
          ))}
        </ul>
        <div className="cart-value-container">
          <h1 className="cart-value-heading">Order Total: </h1>
          <div className="total-amount-order-now">
            <p className="price">2239040</p>
            <button
              className="order-now-btn"
              type="button"
              onClick={onClickedPlaceOrder}
            >
              Place Order
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Cart
