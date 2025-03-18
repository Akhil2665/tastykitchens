import {Component} from 'react'
// import {Link} from 'react-router-dom'
import Cookies from 'js-cookie'
import {FaAngleLeft, FaAngleRight} from 'react-icons/fa'

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

class Home extends Component {
  // const [restaurant, setRestaurant] = useState({})
  state = {
    restaurantList: [],
    sortByOption: 'Lowest',
    pageNumber: 1,
  }

  // console.log(jwtTokwn)

  componentDidMount() {
    this.getRestaurantList()
  }

  getRestaurantList = async () => {
    const {sortByOption, pageNumber} = this.state
    const jwtTokwn = Cookies.get('jwt_token')
    const limit = 9
    let offset
    if (pageNumber === 1) {
      offset = 0
    } else {
      offset = (pageNumber - 1) * limit
    }

    const apiUrl = `https://apis.ccbp.in/restaurants-list?offset=${offset}&limit=${limit}&sort_by_rating=${sortByOption}`
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
      // setRestaurantList(updatedData)
      this.setState({
        restaurantList: updatedData,
      })
    } else {
      console.log('failed')
    }
  }

  onChangeSortByValue = event => {
    this.setState(
      {
        sortByOption: event.target.value,
      },
      this.getRestaurantList,
    )
  }

  onDecrementPageValue = () => {
    const {pageNumber} = this.state
    if (pageNumber > 1) {
      this.setState(
        prevState => ({pageNumber: prevState.pageNumber - 1}),
        this.getRestaurantList,
      )
    }
  }

  onIncrementPageValue = () => {
    this.setState(
      prevState => ({pageNumber: prevState.pageNumber + 1}),
      this.getRestaurantList,
    )
  }

  render() {
    const {restaurantList, sortByOption, pageNumber} = this.state
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
            <div className="selector-container">
              <p className="sort-heading">Sort by </p>
              <select
                className="select-element"
                onChange={this.onChangeSortByValue}
                value={sortByOption}
              >
                {sortByOptions.map(eachOption => (
                  <option value={eachOption.value} key={eachOption.id}>
                    {eachOption.displayText}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
        <ul className="restaurant-list-container">
          {restaurantList.map(eachObj => (
            <RestaurantListItem restaurantDetails={eachObj} key={eachObj.id} />
          ))}
        </ul>
        <div className="page-selection-container">
          <button
            type="button"
            onClick={this.onDecrementPageValue}
            testid="pagination-left-button"
          >
            {' '}
            <FaAngleLeft />{' '}
          </button>
          <span className="page-number" testid="active-page-number">
            {pageNumber}
          </span>

          <button
            type="button"
            onClick={this.onIncrementPageValue}
            testid="pagination-right-button"
          >
            {' '}
            <FaAngleRight />
          </button>
        </div>
        <Footer />
      </div>
    )
  }
}

export default Home

//
