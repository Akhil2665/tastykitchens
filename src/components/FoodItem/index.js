import {useContext, useState, useEffect} from 'react'

import {FaStar, FaRupeeSign} from 'react-icons/fa'

import FoodItemCounter from '../FoodItemCounter'
import CartContext from '../../context/CartContext'

import './index.css'

const FoodItem = props => {
  const {foodItemDetails} = props
  const {id, name, rating, imageUrl, cost, quantity} = foodItemDetails
  const [quantityVal, setQuantityVal] = useState(0)
  const {addOrUpdateCartItem} = useContext(CartContext)

  const updateCartList = () => {
    // console.log(quantityVal)
    if (quantityVal > 0) {
      addOrUpdateCartItem({...foodItemDetails, quantity: quantityVal})
    }
  }

  useEffect(() => {
    updateCartList()
  }, [quantityVal])

  const onChangeQunatity = () => {
    setQuantityVal(state => state + 1)
  }

  const onClickedDecrement = () => {
    setQuantityVal(state => state - 1)
  }

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

  console.log(quantityVal, 'quantityVal in before return')

  return (
    <li className="food-list-item" testid="foodItem">
      {console.log(quantityVal, 'quantityVal in return')}
      <img src={imageUrl} className="food-image" alt={name} />
      <div className="food-item-details">
        <h1 className="food-name">{name}</h1>
        <p className="cost">
          <FaRupeeSign /> {cost}
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
