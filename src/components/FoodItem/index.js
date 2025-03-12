import {FaStar, FaRupeeSign} from 'react-icons/fa'

import CartContext from '../../context/CartContext'

import './index.css'

const FoodItem = props => {
  const {foodItemDetails} = props
  const {id, name, rating, imageUrl, cost, foodType} = foodItemDetails

  return (
    <CartContext.Consumer>
      <li className="food-list-item">
        <img src={imageUrl} className="food-image" alt={name} />
        <div className="food-item-details">
          <p className="food-name">{name}</p>
          <p className="cost">
            <FaRupeeSign /> {cost}.00
          </p>
          <p className="rating">
            <FaStar className="food-star-icon" />
            {rating}
          </p>
          <button className="add-btn" type="button">
            Add
          </button>
        </div>
      </li>
    </CartContext.Consumer>
  )
}

export default FoodItem
