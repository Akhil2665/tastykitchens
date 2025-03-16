import {useContext, useState, useEffect} from 'react'

import {FaStar, FaRupeeSign} from 'react-icons/fa'

import FoodItemCounter from '../FoodItemCounter'
import CartContext from '../../context/CartContext'

import './index.css'

const FoodItem = props => {
  const {foodItemDetails} = props
  const {id, name, rating, imageUrl, cost, quantity} = foodItemDetails
  const [quantityVal, setQuantityVal] = useState(0)
  const {addCartItem} = useContext(CartContext)

  const updateCartList = () => {
    console.log(quantityVal)
    if (quantityVal > 0) {
      addCartItem({...foodItemDetails, quantity: quantityVal})
    }
  }

  useEffect(() => {
    updateCartList()
  }, [quantityVal])

  const onChangeQunatity = () => {
    setQuantityVal(state => state + 1)
  }

  const onClickedDecrement = () => setQuantityVal(state => state - 1)

  const onClickedIncrement = () => setQuantityVal(state => state + 1)

  const renderAddButton = () =>
    quantityVal > 0 ? (
      <FoodItemCounter
        onClickedDecrement={onClickedDecrement}
        onClickedIncrement={onClickedIncrement}
        quantity={quantityVal}
      />
    ) : (
      <button className="add-btn" type="button" onClick={onChangeQunatity}>
        Add
      </button>
    )

  return (
    <li className="food-list-item" testid="foodItem">
      <img src={imageUrl} className="food-image" alt={name} />
      <div className="food-item-details">
        <h1 className="food-name">{name}</h1>
        <p className="cost">
          <FaRupeeSign /> {cost}.00
        </p>
        <p className="rating">
          <FaStar className="food-star-icon" />
          {rating}
        </p>
        {renderAddButton()}
      </div>
    </li>
  )
}

export default FoodItem
