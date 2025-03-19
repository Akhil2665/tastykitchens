import {useContext, useState, useEffect} from 'react'

import {FaStar, FaRupeeSign} from 'react-icons/fa'

import FoodItemCounter from '../FoodItemCounter'
import CartContext from '../../context/CartContext'

import './index.css'

const FoodItem = props => {
  const {foodItemDetails} = props
  const {id, name, rating, imageUrl, cost, quantity} = foodItemDetails
  const [quantityVal, setQuantityVal] = useState(0)

  const {
    addCartItem,
    decrementCartItemQuantity,
    incrementCartItemQuantity,
    removeCartItem,
  } = useContext(CartContext)

  // const updateCartList = () => {
  //   const storedCartList = JSON.parse(localStorage.getItem('cartData'))
  //   const existingProduct = storedCartList.find(
  //     eachItem => eachItem.id === product.id,
  //   )
  //   if (existingProduct) {
  //   }

  //   addOrUpdateCartItem({...foodItemDetails, quantity: quantityVal})
  // }

  // useEffect(() => {
  //   if (quantityVal > 0) {
  //     updateCartList()
  //   }
  // }, [quantityVal])

  const onChangeQunatity = () => {
    setQuantityVal(1)
    addCartItem({...foodItemDetails, quantity: 1})
  }

  const onClickedDecrement = () => {
    setQuantityVal(state => state - 1)
    decrementCartItemQuantity(id)
  }

  const onClickedIncrement = () => {
    setQuantityVal(state => state + 1)
    incrementCartItemQuantity(id)
  }

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
