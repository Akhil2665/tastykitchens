import {
  FaPinterestSquare,
  FaInstagram,
  FaTwitter,
  FaFacebookSquare,
} from 'react-icons/fa'

import './index.css'

const socialIconsList = [
  {id: 0, iconName: FaPinterestSquare, testId: 'pintrest-social-icon'},
  {id: 1, iconName: FaInstagram, testId: 'instagram-social-icon'},
  {id: 2, iconName: FaTwitter, testId: 'twitter-social-icon'},
  {id: 3, iconName: FaFacebookSquare, testId: 'facebook-social-icon'},
]

export default function Footer() {
  return (
    <div className="footer-container">
      <div className="logo-container">
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
      <ul className="social-buttons-container">
        {socialIconsList.map(eachObj => (
          <li className="social-icon-list" key={eachObj.id}>
            <eachObj.iconName className="social-icon" testid={eachObj.testId} />{' '}
          </li>
        ))}
      </ul>
    </div>
  )
}
