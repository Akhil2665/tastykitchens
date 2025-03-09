import {Link} from 'react-router-dom'

import {FaStar} from 'react-icons/fa'

import './index.css'

const RestaurantListItem = props => {
  const {restaurantDetails} = props
  const {id, imageUrl, name, cuisine, userRating} = restaurantDetails
  const {rating, totalReviews} = userRating

  return (
    <>
      <Link to={`/restaurants/${id}`} className="link-item">
        <li className="restaurant-list-item">
          <img src={imageUrl} alt="name" className="restaurant-image" />
          <div className="restaurant-details-container">
            <p className="restaurant-name">{name}</p>
            <p>{cuisine}</p>
            <div className="rating-container">
              <FaStar className="rating-icon" />
              <p className="rating">
                {rating}{' '}
                <span className="rating-count">({totalReviews} ratings)</span>
              </p>
            </div>
          </div>
        </li>
      </Link>
    </>
  )
}

export default RestaurantListItem
