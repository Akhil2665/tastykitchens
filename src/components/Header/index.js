import {Redirect, withRouter, Link} from 'react-router-dom'
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
      <img src="" className="" alt="" />
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
