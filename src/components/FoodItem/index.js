import {useContext, Component} from 'react'

import {FaStar, FaRupeeSign} from 'react-icons/fa'

import CartContext from '../../context/CartContext'

import FoodItemCounter from '../FoodItemCounter'

import './index.css'

class FoodItem extends Component {
  state = {
    productItem: {},
    quantityVal: 0,
    isItemAdded: false,
  }
  // const addItem = useContext(addCartItem)
  // onClickedAddItem = () => (
  //   <CartContext.Consumer>
  //     {value => {
  //       const {addCartItem} = value
  //       const {foodItemDetails} = this.props
  //       const {quantity} = foodItemDetails
  //       console.log('added to cart', quantity)
  //       addCartItem(foodItemDetails)
  //     }}
  //   </CartContext.Consumer>
  // )

  // getItemAddedToCart = () => {
  //   const {isItemAdded} = this.state
  //   if (isItemAdded) {
  //     addCartItem()
  //   }
  // }

  onChangeQunatity = () => {
    this.setState(prevState => ({
      quantityVal: prevState.quantityVal + 1,
      isItemAdded: true,
    }))
    return (
      <CartContext.Consumer>
        {value => {
          const {addCartItem} = value
          const {foodItemDetails} = this.props
          console.log("why it's added")
          addCartItem(foodItemDetails)
        }}
      </CartContext.Consumer>
    )
  }

  onClickedDecrement = () =>
    this.setState(prevState => ({quantityVal: prevState.quantityVal - 1}))

  onClickedIncrement = () =>
    this.setState(prevState => ({quantityVal: prevState.quantityVal + 1}))

  renderAddButton = id => {
    const {quantityVal} = this.state
    debugger
    return quantityVal > 0 ? (
      <FoodItemCounter
        onClickedDecrement={this.onClickedDecrement}
        onClickedIncrement={this.onClickedIncrement}
        quantity={quantityVal}
      />
    ) : (
      <button className="add-btn" type="button" onClick={this.onChangeQunatity}>
        Add
      </button>
    )
  }

  render() {
    return (
      <CartContext.Consumer>
        {value => {
          const {addCartItem} = value
          const {foodItemDetails} = this.props
          const {id, name, rating, imageUrl, cost, quantity} = foodItemDetails
          const {quantityVal} = this.state
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
                {this.renderAddButton(id)}
              </div>
            </li>
          )
        }}
      </CartContext.Consumer>
    )
  }
}

export default FoodItem
