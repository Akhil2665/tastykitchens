// import {useContext, useState, useEffect, Component} from 'react'

// import {FaStar, FaRupeeSign} from 'react-icons/fa'

// import CartContext from '../../context/CartContext'

// import FoodItemCounter from '../FoodItemCounter'

// import './index.css'

// const FoodItem = props => {
//   const [productItem, setProductItem] = useState({})
//   const [quantityVal, setQuantityVal] = useState(0)
//   const [isItemAdded, setIsItemAdded] = useState(false)
//   const {addCartItem} = useContext()
//   const {foodItemDetails} = props
//   const {id, name, rating, imageUrl, cost, quantity} = foodItemDetails
//   // state = {
//   //   productItem: {},
//   //   quantityVal: 0,
//   //   isItemAdded: false,
//   // }
//   // const addItem = useContext(addCartItem)
//   // onClickedAddItem = () => (
//   //   <CartContext.Consumer>
//   //     {value => {
//   //       const {addCartItem} = value
//   //       const {foodItemDetails} = this.props
//   //       const {quantity} = foodItemDetails
//   //       console.log('added to cart', quantity)
//   //       addCartItem(foodItemDetails)
//   //     }}
//   //   </CartContext.Consumer>
//   // )

//   // getItemAddedToCart = () => {
//   //   const {isItemAdded} = this.state
//   //   if (isItemAdded) {
//   //     addCartItem()
//   //   }
//   // }

//   const updateCartList = () => {
//     addCartItem({...foodItemDetails, quantity: quantityVal})
//   }

//   useEffect(() => {
//     updateCartList()
//   }, [quantityVal])

//   const onChangeQunatity = () => {
//     setQuantityVal(state => state + 1)

//     // this.setState(prevState => ({
//     //   quantityVal: prevState.quantityVal + 1,
//     //   isItemAdded: true,
//     // }))
//     // return (
//     //   <CartContext.Consumer>
//     //     {value => {
//     //       const {addCartItem} = value
//     //       const {foodItemDetails} = this.props
//     //       console.log("why it's added")
//     //       addCartItem(foodItemDetails)
//     //     }}
//     //   </CartContext.Consumer>
//     // )
//   }

//   const onClickedDecrement = () => setQuantityVal(state => state - 1)

//   const onClickedIncrement = () => setQuantityVal(state => state + 1)

//   const renderAddButton = id => {
//     return quantityVal > 0 ? (
//       <FoodItemCounter
//         onClickedDecrement={this.onClickedDecrement}
//         onClickedIncrement={this.onClickedIncrement}
//         quantity={quantityVal}
//       />
//     ) : (
//       <button className="add-btn" type="button" onClick={this.onChangeQunatity}>
//         Add
//       </button>
//     )
//   }

//   return (
//     <li className="food-list-item" testid="foodItem">
//       <img src={imageUrl} className="food-image" alt={name} />
//       <div className="food-item-details">
//         <h1 className="food-name">{name}</h1>
//         <p className="cost">
//           <FaRupeeSign /> {cost}.00
//         </p>
//         <p className="rating">
//           <FaStar className="food-star-icon" />
//           {rating}
//         </p>
//         {this.renderAddButton(id)}
//       </div>
//     </li>
//   )
// }

// export default FoodItem
