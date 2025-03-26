import {
  FaPinterestSquare,
  FaInstagram,
  FaTwitter,
  FaFacebookSquare,
} from 'react-icons/fa'

import './index.css'

export default function Footer() {
  return (
    <div className="footer-container">
      <div className="footer-logo-container">
        <img
          src="https://res.cloudinary.com/dak8sudez/image/upload/v1741585992/Frame_275_g27005.png"
          className="footer-logo"
          alt="website-footer-logo"
        />
        <h1 className="logo-name">Tasty Kitchens</h1>
      </div>
      <p className="footer-about">
        The only thing we are serious about is food. <br /> Contact us on
      </p>
      <div className="social-buttons-container">
        <FaInstagram
          testid="instagram-social-icon"
          size={20}
          className="social-icon"
        />
        <FaPinterestSquare
          testid="pintrest-social-icon"
          size={20}
          className="social-icon"
        />
        <FaTwitter
          testid="twitter-social-icon"
          size={20}
          className="social-icon"
        />
        <FaFacebookSquare
          testid="facebook-social-icon"
          size={20}
          className="social-icon"
        />
      </div>
    </div>
  )
}
