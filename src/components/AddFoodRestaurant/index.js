import {FaStar, FaRupeeSign} from 'react-icons/fa'

import './index.css'

const AddFoodRestaurant = props => {
  const {restaurantDetails} = props
  console.log(restaurantDetails)
  const {
    imageUrl,
    costForTwo,
    cuisine,
    id,
    location,
    name,
    rating,
    reviewsCount,
  } = restaurantDetails

  return (
    <>
      <div className="restaurant-full-details-card">
        <img
          src={imageUrl}
          className="restaurant-full-image"
          alt="restaurant"
        />
        <div className="restaurant-full-details">
          <h1>{name}</h1>
          <p className="special-cuisine">{cuisine}</p>
          <p className="location">{location}</p>
          <div className="rating-and-price">
            <div className="restaurant-rating-details">
              <div className="restaurant-rating-container">
                <FaStar className="restaurant-rating-icon" />
                <p className="restro-rating">{rating}</p>
              </div>
              <p className="total-ratings">{reviewsCount}+ ratings</p>
            </div>
            <p className="starting-price">
              <FaRupeeSign />
              {costForTwo} <span className="cost-for-two">Cost for two</span>
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default AddFoodRestaurant
