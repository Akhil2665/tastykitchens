import {useContext} from 'react'

import CartItem from '../CartItem'
import Footer from '../Footer'
import NoOrders from '../NoOrders'

import CartContext from '../../context/CartContext'
import './index.css'

// const cartList = [
//   {id: 1, name: 'name'},
//   {id: 2, name: 'name 232'},
// ]

const Cart = props => {
  // const navigate = useHistory()
  // const cartList = localStorage.getItem('cart_list')
  const {history} = props
  console.log('cart loogedd')
  const onClickedPlaceOrder = () => {
    history.push('/payment-successful')
  }
  // const newcartList = JSON.parse(localStorage.getItem('cart_list'))
  // console.log(newcartList, 'new')
  return (
    <CartContext.Consumer>
      {value => {
        const {cartList} = value
        console.log(cartList, 'cartList')
        let totalCartAmount = 0
        if (cartList.length > 0) {
          const cartValueList = cartList.map(
            eachItem => eachItem.cost * eachItem.quantity,
          )
          totalCartAmount = cartValueList.reduce((acc, curr) => acc + curr, 0)
        }

        return (
          <>
            {cartList.length > 0 ? (
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
                  <h1 className="cart-value-heading">Order Total:</h1>
                  <div className="total-amount-order-now">
                    <p className="price" testid="total-price">
                      {totalCartAmount}
                    </p>
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
            ) : (
              <NoOrders />
            )}
            <Footer />
          </>
        )
      }}
    </CartContext.Consumer>
  )
}

export default Cart
