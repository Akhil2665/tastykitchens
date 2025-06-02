import React, {useState} from 'react'
import {useHistory} from 'react-router-dom'
import './index.css'
import Header from '../Header'
import Footer from '../Footer'

function Checkout() {
  const [email, setEmail] = useState('abc@gamil.com')
  const [cardName, setCardName] = useState('')
  const [cardNumber, setCardNumber] = useState('')
  const [expirationDate, setExpirationDate] = useState('')
  const [cvc, setCvc] = useState('')
  const [company, setCompany] = useState('neo')
  const [address, setAddress] = useState('123')
  const [apartment, setApartment] = useState('tnr')
  const [city, setCity] = useState('knr')
  const [stateProvince, setStateProvince] = useState('ts')
  const [postalCode, setPostalCode] = useState('505001')
  const [sameAsShipping, setSameAsShipping] = useState(true)
  const orderItems = JSON.parse(localStorage.getItem('cartData'))
  const history = useHistory()

  // const orderItems = [
  //   {
  //     id: 1,
  //     name: 'Micro Backpack',
  //     variant: 'Moss',
  //     size: '5L',
  //     price: 70.0,
  //     imageUrl: 'https://placehold.co/60x60/E0E0E0/333333?text=Bag', // Placeholder image
  //   },
  //   {
  //     id: 2,
  //     name: 'Small Stuff Satchel',
  //     variant: 'Sand',
  //     size: '16L',
  //     price: 180.0,
  //     imageUrl: 'https://placehold.co/60x60/E0E0E0/333333?text=Satchel', // Placeholder image
  //   },
  //   {
  //     id: 3,
  //     name: 'Carry Clutch',
  //     variant: 'White and Black',
  //     size: 'Small',
  //     price: 70.0,
  //     imageUrl: 'https://placehold.co/60x60/E0E0E0/333333?text=Clutch', // Placeholder image
  //   },
  // ]

  console.log(orderItems, 'orderitesm')

  const subtotal = orderItems.reduce((sum, item) => sum + item.cost, 0)
  const shipping = 15.0
  const taxes = 26.8
  const total = subtotal + shipping + taxes

  const handleSubmit = e => {
    e.preventDefault()

    console.log('Form submitted!', {
      email,
      cardName,
      cardNumber,
      expirationDate,
      cvc,
      company,
      address,
      apartment,
      city,
      stateProvince,
      postalCode,
      sameAsShipping,
    })
    history.push('/paymentsuccessful/orderplaced')
  }

  // const handleContinueBtn = () => {
  //   history.push('/')
  // }

  return (
    <>
      <Header />
      <div className="checkout-container">
        {/* Left Column: Form Fields */}
        <div className="checkout-form-section">
          <form onSubmit={handleSubmit}>
            {/* Contact Information */}
            <section className="form-group">
              <h2>Contact information</h2>
              <label htmlFor="email">Email address</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                required
                placeholder="Enter your email"
              />
            </section>

            {/* Payment Details */}
            {/* <section className="form-group">
              <h2>Payment details</h2>
              <label htmlFor="cardName">Name on card</label>
              <input
                type="text"
                id="cardName"
                value={cardName}
                onChange={e => setCardName(e.target.value)}
                required
                placeholder="Name as it appears on card"
              />
              <label htmlFor="cardNumber">Card number</label>
              <input
                type="text"
                id="cardNumber"
                value={cardNumber}
                onChange={e => setCardNumber(e.target.value)}
                required
                placeholder="XXXX XXXX XXXX XXXX"
                pattern="[0-9]{13,16}" // Basic pattern for card numbers
              />
              <div className="form-row">
                <div className="form-column">
                  <label htmlFor="expirationDate">
                    Expiration date (MM/YY)
                  </label>
                  <input
                    type="text"
                    id="expirationDate"
                    value={expirationDate}
                    onChange={e => setExpirationDate(e.target.value)}
                    required
                    placeholder="MM/YY"
                    pattern="(0[1-9]|1[0-2])\/?([0-9]{2})" // Basic pattern for MM/YY
                  />
                </div>
                <div className="form-column">
                  <label htmlFor="cvc">CVC</label>
                  <input
                    type="text"
                    id="cvc"
                    value={cvc}
                    onChange={e => setCvc(e.target.value)}
                    required
                    placeholder="XXX"
                    pattern="[0-9]{3,4}"
                  />
                </div>
              </div>
            </section> */}

            {/* Shipping Address */}
            <section className="form-group">
              <h2>Shipping address</h2>
              <label htmlFor="company">Company (optional)</label>
              <input
                type="text"
                id="company"
                value={company}
                onChange={e => setCompany(e.target.value)}
                placeholder="Company name"
              />
              <label htmlFor="address">Address</label>
              <input
                type="text"
                id="address"
                value={address}
                onChange={e => setAddress(e.target.value)}
                required
                placeholder="Street address"
              />
              <label htmlFor="apartment">
                Apartment, suite, etc. (optional)
              </label>
              <input
                type="text"
                id="apartment"
                value={apartment}
                onChange={e => setApartment(e.target.value)}
                placeholder="Apartment, suite, building"
              />
              <div className="form-row">
                <div className="form-column">
                  <label htmlFor="city">City</label>
                  <input
                    type="text"
                    id="city"
                    value={city}
                    onChange={e => setCity(e.target.value)}
                    required
                    placeholder="City"
                  />
                </div>
                <div className="form-column">
                  <label htmlFor="stateProvince">State/Province</label>
                  <input
                    type="text"
                    id="stateProvince"
                    value={stateProvince}
                    onChange={e => setStateProvince(e.target.value)}
                    required
                    placeholder="State or Province"
                  />
                </div>
                <div className="form-column">
                  <label htmlFor="postalCode">Postal code</label>
                  <input
                    type="text"
                    id="postalCode"
                    value={postalCode}
                    onChange={e => setPostalCode(e.target.value)}
                    required
                    placeholder="Postal code"
                  />
                </div>
              </div>
            </section>

            {/* Billing Information */}
            <section className="form-group">
              <h2>Billing information</h2>
              <div className="checkbox-group">
                <input
                  type="checkbox"
                  id="sameAsShipping"
                  checked={sameAsShipping}
                  onChange={e => setSameAsShipping(e.target.checked)}
                />
                <label htmlFor="sameAsShipping">
                  Same as shipping information
                </label>
              </div>
            </section>

            <p className="charge-info">
              You wont be charged until the next step.
            </p>
            <button type="submit" className="continue-button">
              Continue
            </button>
          </form>
        </div>

        {/* Right Column: Order Summary */}
        <div className="checkout-summary-section">
          <h2>Order summary</h2>
          <div className="order-items-list">
            {orderItems.map(item => (
              <div key={item.id} className="order-item">
                <img
                  src={item.imageUrl}
                  alt={item.name}
                  className="item-image"
                />
                <div className="item-details">
                  <p className="item-name">{item.name}</p>
                </div>
                <p className="item-price">${item.cost}</p>
              </div>
            ))}
          </div>

          <div className="order-summary-details">
            <div className="summary-row">
              <span>Subtotal</span>
              <span>${subtotal}</span>
            </div>
            <div className="summary-row">
              <span>Shipping</span>
              <span>${shipping.toFixed(2)}</span>
            </div>
            <div className="summary-row">
              <span>Taxes</span>
              <span>${taxes.toFixed(2)}</span>
            </div>
            <div className="summary-row total-row">
              <span>Total</span>
              <span>${total.toFixed(2)}</span>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Checkout // Export App as default for Canvas
