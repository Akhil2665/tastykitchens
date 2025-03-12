import {useHistory} from 'react-router-dom'

import './index.css'

const PaymentSuccessful = () => {
  console.log('PaymentSuccessful')
  const history = useHistory()
  const onClickedGoHomePage = () => {
    history.push('/')
  }
  return (
    <div className="payment-successful-container">
      <img
        src="https://res.cloudinary.com/dak8sudez/image/upload/v1741601734/Vector_zhuanw.png"
        className="payment-successful-image"
        alt="success"
      />
      <h1 className="payment-successful-heading">Payment Successful</h1>
      <p className="payment-successful-about">
        Thank you for ordering <br /> Your payment is successfully completed.{' '}
      </p>
      <button
        className="home-page-btn"
        type="button"
        onClick={onClickedGoHomePage}
      >
        Go To Home Page
      </button>
    </div>
  )
}

export default PaymentSuccessful
