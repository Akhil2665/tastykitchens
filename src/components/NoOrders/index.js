import {useHistory} from 'react-router-dom'

import './index.css'

const NoOrders = () => {
  const history = useHistory()
  const onClickedGoHomePage = () => {
    history.push('/')
  }
  return (
    <div className="no-orders-container">
      <img
        src="https://res.cloudinary.com/dak8sudez/image/upload/v1741603507/OBJECTS_idstm7.png"
        className="no-orders-image"
        alt="no orders"
      />
      <h1 className="no-orders-heading">No Orders Yet!</h1>
      <p className="no-orders-about">
        Your cart is empty. Add something from the menu.
      </p>
      <button
        className="home-page-btn"
        type="button"
        onClick={onClickedGoHomePage}
      >
        Order Now
      </button>
    </div>
  )
}

export default NoOrders
