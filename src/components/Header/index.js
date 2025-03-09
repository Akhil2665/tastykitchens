import {Redirect, withRouter}  from 'react-router-dom'

const Header = () => {

    const onClikedLogout = () => {
        console.log("Logged out")
    }

    return (
        <div className="header">
            <img src="" className="" alt="" />
            <nav className="nav-container">
                <ul>
                    <Link to='/'>
                        <li>Home</li>
                    </Link>
                    <Link to='/cart'>
                        <li>Cart</li>
                    </Link>
                    <button type="button" onClick={onClikedLogout} className="logout-button">Logout</button>
                </ul>
            </nav>
        </div>

}

export default Header