import {useState, useEffect} from 'react'
// import {Link} from 'react-router-dom'
import Cookies from 'js-cookie'

import Reactslick from '../Reactslick'
import RestaurantListItem from '../RestaurantListItem'
import Footer from '../Footer'

import './index.css'

const sortByOptions = [
  {
    id: 0,
    displayText: 'Highest',
    value: 'Highest',
  },
  {
    id: 2,
    displayText: 'Lowest',
    value: 'Lowest',
  },
]

const Home = () => {
  // const [restaurant, setRestaurant] = useState({})
  const [restaurantList, setRestaurantList] = useState([])
  const jwtTokwn = Cookies.get('jwt_token')
  // console.log(jwtTokwn)

  const getRestaurantList = async () => {
    const limit = 9
    const offset = 0
    const apiUrl = `https://apis.ccbp.in/restaurants-list?offset=${offset}&limit=${limit}`
    const options = {
      method: 'GET',
      headers: {
        Authorization: `bearer ${jwtTokwn}`,
      },
    }
    const response = await fetch(apiUrl, options)
    const data = await response.json()

    console.log(response, data)
    if (response.ok) {
      const updatedData = data.restaurants.map(eachData => ({
        id: eachData.id,
        imageUrl: eachData.image_url,
        name: eachData.name,
        cuisine: eachData.cuisine,
        userRating: {
          rating: eachData.user_rating.rating,
          totalReviews: eachData.user_rating.total_reviews,
        },
      }))
      console.log('ok')
      setRestaurantList(updatedData)
    } else {
      console.log('failed')
    }
  }

  useEffect(() => {
    getRestaurantList()
  }, [])

  return (
    <div className="app-container">
      <Reactslick />
      <div className="filter-bar">
        <h1 className="restaurants-heading">Popular Restaurants</h1>
        <div className="about-and-filter">
          <p className="restaurants-about">
            Select Your favourite restaurant special dish and make your day
            happy...
          </p>
          <select className="select-element">
            {sortByOptions.map(eachOption => (
              <option value={eachOption.value} key={eachOption.id}>
                Sort by {eachOption.displayText}
              </option>
            ))}
          </select>
        </div>
      </div>
      <ul className="restaurant-list-container">
        {restaurantList.map(eachObj => (
          <RestaurantListItem restaurantDetails={eachObj} key={eachObj.id} />
        ))}
      </ul>
      <Footer />
    </div>
  )
}

export default Home

//
