import {withRouter, Link} from 'react-router-dom'
import Cookies from 'js-cookie'

import './index.css'

const Header = props => {
  const onClikedLogout = () => {
    Cookies.remove('jwt_token')
    const {history} = props
    history.replace('/login')
  }

  return (
    <div className="header">
      <Link to="/" className="nav-link">
        <div className="logo-container">
          <img
            src="https://res.cloudinary.com/dak8sudez/image/upload/v1741532996/Frame_274_r9hgm0.jpg"
            className="web-logo"
            alt="web logo"
          />
          <h1 className="logo-heading">Tasty Kitchens</h1>
        </div>
      </Link>
      <nav className="nav-container">
        <ul className="nav-list">
          <Link to="/" className="nav-link">
            <li>Home</li>
          </Link>
          <Link to="/cart" className="nav-link">
            <li>Cart</li>
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
  )
}

export default withRouter(Header)
