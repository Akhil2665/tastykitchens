import {useParams} from 'react-router-dom'

import {useState, useEffect} from 'react'
import Cookies from 'js-cookie'
import {FaStar, FaRupeeSign} from 'react-icons/fa'

import FoodItem from '../FoodItem'

import './index.css'

const AddFood = () => {
  const [foodItemsList, setFoodItemsList] = useState()
  const [restaurantData, setRestaurantData] = useState()

  const {id} = useParams()

  const getFoodItems = async () => {
    const jwtToken = Cookies.get('jwt_token')
    const apiUrl = `https://apis.ccbp.in/restaurants-list/${id}`
    const options = {
      method: 'GET',
      headers: {
        Authorization: `bearer ${jwtToken}`,
      },
    }
    const response = await fetch(apiUrl, options)
    const data = await response.json()
    const getUpdatedData = restaurantResponseData => ({
      costForTwo: restaurantResponseData.cost_for_two,
      cuisine: restaurantResponseData.cuisine,
      id: restaurantResponseData.id,
      imageUrl: restaurantResponseData.image_url,
      location: restaurantResponseData.location,
      name: restaurantResponseData.name,
      rating: restaurantResponseData.rating,
      reviewsCount: restaurantResponseData.reviews_count,
      foodItems: restaurantResponseData.food_items,
    })
    const updatedData = getUpdatedData(data)
    const updatedFoodItemsData = updatedData.foodItems.map(eachObj => ({
      cost: eachObj.cost,
      foodType: eachObj.food_type,
      imageUrl: eachObj.image_url,
      id: eachObj.id,
      name: eachObj.name,
      rating: eachObj.rating,
    }))
    console.log(response, data)
    setFoodItemsList(updatedFoodItemsData)
    setRestaurantData(updatedData)
  }

  useEffect(() => {
    getFoodItems()
  }, [])

  console.log('ok')
  return (
    <div className="add-food-container">
      <div className="restaurant-full-details-card">
        <img src="" className="" alt="" />
        <div className="restaurant-full-details">
          <h1>Name</h1>
          <p className="special-cuisine">Fastfood</p>
          <p className="location">Hyd</p>
          <div className="rating-and-price">
            <div className="restaurant-rating-details">
              <div className="restaurant-rating-container">
                <FaStar className="restaurant-rating-icon" />
                <p className="restro-rating">4.5</p>
              </div>
              <p className="total-ratings">200+ ratings</p>
            </div>
            <p className="starting-price">
              <FaRupeeSign />
              350 <span className="cost-for-two">Cost for two</span>
            </p>
          </div>
        </div>
      </div>
      <ul className="food-items-list">
        {foodItemsList?.map(eachItem => (
          <FoodItem foodItemDetails={eachItem} key={eachItem.id} />
        ))}
      </ul>
    </div>
  )
}

export default AddFood
