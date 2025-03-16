import {Link} from 'react-router-dom'
import {FaStar} from 'react-icons/fa'

import './index.css'

const RestaurantListItem = props => {
  const {restaurantDetails} = props
  const {id, imageUrl, name, cuisine, userRating} = restaurantDetails
  const {rating, totalReviews} = userRating

  return (
    <>
      <Link to={`/restaurant/${id}`} className="link-item">
        <li className="restaurant-list-item" testid="restaurant-item">
          <img src={imageUrl} alt="name" className="restaurant-image" />
          <div className="restaurant-details-container">
            <h1 className="restaurant-name">{name}</h1>
            <p className="cuisine">{cuisine}</p>
            <div className="rating-container">
              <FaStar className="rating-icon" />
              <h1 className="rating">{rating} </h1>
              <p className="rating-count">({totalReviews} ratings)</p>
            </div>
          </div>
        </li>
      </Link>
    </>
  )
}

export default RestaurantListItem
