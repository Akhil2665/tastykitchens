import Slider from 'react-slick'

import './index.css'

const Reactslick = props => {
  const {carousalImagesList} = props
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
  console.log(carousalImagesList, 'carousalImagesList')

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
