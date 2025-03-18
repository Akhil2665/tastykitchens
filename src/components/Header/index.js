import {withRouter, Link} from 'react-router-dom'
import Cookies from 'js-cookie'

import './index.css'

const Header = props => {
  const onClikedLogout = () => {
    const {history} = props
    Cookies.remove('jwt_token')
    history.replace('/login')
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
      <div className="mobile-navbar"></div>
    </>
  )
}

export default withRouter(Header)
