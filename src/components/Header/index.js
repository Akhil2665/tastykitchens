import {withRouter, Link} from 'react-router-dom'
import {IoMenuOutline} from 'react-icons/io5'
import Cookies from 'js-cookie'
import Popup from 'reactjs-popup'

import 'reactjs-popup/dist/index.css'

import MobileHeader from '../MobileHeader'

import './index.css'

const Header = props => {
  const onClikedLogout = () => {
    const {history} = props
    Cookies.remove('jwt_token')
    history.replace('/login')
  }
  const overlayStyles = {
    backgroundColor: '#ffff',
    width: '100%',
  }

  return (
    <>
      <div className="header">
        <div className="logo-container">
          <Link to="/" className="nav-link">
            <img
              src="https://res.cloudinary.com/dak8sudez/image/upload/v1741532996/Frame_274_r9hgm0.jpg"
              className="web-logo"
              alt="web logo"
            />
          </Link>
          <h1 className="logo-heading">Tasty Kitchens</h1>
        </div>

        <nav className="nav-container">
          <ul className="nav-list">
            <Link to="/" className="nav-link">
              <li className="nav-item" key="HOME">
                Home
              </li>
            </Link>
            <Link to="/cart" className="nav-link">
              <li className="nav-item" key="CART">
                Cart
              </li>
            </Link>
            <button
              type="button"
              onClick={onClikedLogout}
              className="logout-button"
            >
              Logout
            </button>
          </ul>
        </nav>
      </div>
      <div className="mobile-navbar">
        <div className="logo-container">
          <Link to="/" className="nav-link">
            <img
              src="https://res.cloudinary.com/dak8sudez/image/upload/v1741532996/Frame_274_r9hgm0.jpg"
              className="web-logo"
              alt="web logo"
            />
          </Link>
          <h1 className="logo-heading">Tasty Kitchens</h1>
        </div>

        <div className="popup-container">
          <Popup
            modal
            overlayStyle={overlayStyles}
            position="top center"
            trigger={
              <button type="button" className="trigger-button">
                <IoMenuOutline className="menu-icon" />
              </button>
            }
          >
            {close => (
              <>
                <div className="mobile-popup-header-container">
                  <nav className="nav-container">
                    <ul className="nav-list">
                      <Link to="/" className="nav-link">
                        <li className="nav-item" key="HOME">
                          Home
                        </li>
                      </Link>
                      <Link to="/cart" className="nav-link">
                        <li className="nav-item" key="CART">
                          Cart
                        </li>
                      </Link>
                      <button
                        type="button"
                        onClick={onClikedLogout}
                        className="logout-button"
                      >
                        Logout
                      </button>
                    </ul>
                  </nav>
                </div>
                <button
                  type="button"
                  className="trigger-button"
                  onClick={() => close()}
                >
                  Close
                </button>
              </>
            )}
          </Popup>
        </div>
      </div>
    </>
  )
}

export default withRouter(Header)
