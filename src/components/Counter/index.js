import CartContext from '../../context/CartContext'

import './index.css'

const Counter = props => (
  <CartContext.Consumer>
    {value => {
      const {incrementCartItemQuantity, decrementCartItemQuantity} = value
      const {cartItemDetails} = props
      const {id, quantity} = cartItemDetails

      console.log(id, quantity, 'quant')

      const onIncrement = () => incrementCartItemQuantity(id)
      const onDecrement = () => decrementCartItemQuantity(id)

      return (
        <div className="counter" testid="item-quantity">
          <button
            type="button"
            onClick={onDecrement}
            testid="decrement-quantity"
            className="cart-quantity-btn"
          >
            -
          </button>
          <div className="count-value" testid="item-quantity">
            {quantity}
          </div>

          <button
            type="button"
            onClick={onIncrement}
            testid="increment-quantity"
          >
            +
          </button>
        </div>
      )
    }}
  </CartContext.Consumer>
)

export default Counter
