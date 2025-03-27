import {Link} from 'react-router-dom'

// import Header from '../Header'

import './index.css'

const PaymentSuccessful = () => {
  console.log('PaymentSuccessful')
  // const history = useHistory()
  return (
    <>
      <div className="payment-successful-container">
        <img
          src="https://res.cloudinary.com/dak8sudez/image/upload/v1741601734/Vector_zhuanw.png"
          className="payment-successful-image"
          alt="success"
        />
        <h1 className="payment-successful-heading">Payment Successful</h1>
        <p className="payment-successful-about">
          Thank you for ordering Your payment is successfully completed.
        </p>
        <Link to="/" className="link-item">
          <button className="home-page-btn" type="button">
            Go To Home Page
          </button>
        </Link>
      </div>
    </>
  )
}

export default PaymentSuccessful
