import CartItem from '../CartItem'
import Footer from '../Footer'
import './index.css'

const cartList = [
  {id: 1, name: 'name'},
  {id: 2, name: 'name 232'},
]

const Cart = () => {
  console.log('cart loogedd')
  return (
    <>
      <div className="cart-container">
        <div className="row-names">
          <h1>Item</h1>
          <h1>Quantity</h1>
          <h1>Price</h1>
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
            <button className="order-now-btn" type="button">
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
