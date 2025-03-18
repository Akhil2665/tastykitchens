import {useState, useEffect} from 'react'
import Cookies from 'js-cookie'
import Slider from 'react-slick'

import './index.css'

const Reactslick = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    swipeToSlide: true,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnHover: true,
    lazyLoad: true,
  }
  const [carousalImagesList, setCarousalImagesList] = useState([])

  const getCarousalImages = async () => {
    const jwtToken = Cookies.get('jwt_token')
    const apiUrl = 'https://apis.ccbp.in/restaurants-list/offers'
    const options = {
      method: 'GET',
      headers: {
        Authorization: `bearer ${jwtToken}`,
      },
    }
    const response = await fetch(apiUrl, options)
    const data = await response.json()

    if (response.ok) {
      const updatedData = data.offers.map(eachImageData => ({
        id: eachImageData.id,
        imageUrl: eachImageData.image_url,
      }))
      setCarousalImagesList(updatedData)
    } else {
      console.log('failed error')
    }
  }

  useEffect(() => {
    getCarousalImages()
  }, [])
  return (
    <>
      <Slider {...settings}>
        {carousalImagesList.map(eachData => (
          <div className="carousal-image-container" key={eachData.id}>
            <img
              src={eachData.imageUrl}
              alt="offer"
              className="carousal-image"
            />
          </div>
        ))}
      </Slider>
    </>
  )
}

export default Reactslick
