// import {useState, useEffect, Component} from 'react'
// import {useParams} from 'react-router-dom'

// import Cookies from 'js-cookie'

// import FoodItem from '../FoodItem'
// import AddFoodRestaurant from '../AddFoodRestaurant'
// import Footer from '../Footer'
// import CartContext from '../../context/CartContext'

// import './index.css'

// const AddFood = () => {
//   const [foodItemsList, setFoodItemsList] = useState()
//   const [restaurantData, setRestaurantData] = useState()

//   const {restaurantId} = useParams()

//   const getFoodItems = async () => {
//     const jwtToken = Cookies.get('jwt_token')
//     const apiUrl = `https://apis.ccbp.in/restaurants-list/${restaurantId}`
//     const options = {
//       method: 'GET',
//       headers: {
//         Authorization: `bearer ${jwtToken}`,
//       },
//     }
//     const response = await fetch(apiUrl, options)
//     const data = await response.json()
//     const getUpdatedData = restaurantResponseData => ({
//       costForTwo: restaurantResponseData.cost_for_two,
//       cuisine: restaurantResponseData.cuisine,
//       id: restaurantResponseData.id,
//       imageUrl: restaurantResponseData.image_url,
//       location: restaurantResponseData.location,
//       name: restaurantResponseData.name,
//       rating: restaurantResponseData.rating,
//       reviewsCount: restaurantResponseData.reviews_count,
//       foodItems: restaurantResponseData.food_items,
//     })

//     const updatedData = getUpdatedData(data)
//     // console.log(updatedData, 'updatedData')
//     const updatedFoodItemsData = updatedData.foodItems.map(eachObj => ({
//       cost: eachObj.cost,
//       foodType: eachObj.food_type,
//       imageUrl: eachObj.image_url,
//       id: eachObj.id,
//       name: eachObj.name,
//       rating: eachObj.rating,
//       quantity: 0,
//     }))
//     // console.log(response, data)
//     setFoodItemsList(updatedFoodItemsData)
//     setRestaurantData(updatedData)
//   }

//   useEffect(() => {
//     getFoodItems()
//   }, [])

//   // console.log(restaurantData, 'new data')

//   return (
//     <CartContext.Consumer>
//       {value => {
//         const {cartList} = value

//         const isItemPresentedInCart = id => {
//           const filterObjects = cartList.filter(eachItem => eachItem.id === id)
//           return filterObjects
//         }

//         console.log(isItemPresentedInCart, 'founded')
//         debugger
//         const filteredFoodList = foodItemsList?.map(eachObj => {
//           const isItemPresent = isItemPresentedInCart(eachObj.id)

//           return isItemPresent ? {...isItemPresentedInCart[0]} : {...eachObj}
//         })
//         console.log(filteredFoodList, 'filteredFoodList')
//         return (
//           <div className="add-food-container">
//             {restaurantData !== undefined && (
//               <AddFoodRestaurant restaurantDetails={restaurantData} />
//             )}
//             <ul className="food-items-list">
//               {foodItemsList?.map(eachItem => (
//                 <FoodItem foodItemDetails={eachItem} key={eachItem.id} />
//               ))}
//             </ul>
//             <Footer />
//           </div>
//         )
//       }}
//     </CartContext.Consumer>
//   )
// }

// export default AddFood
