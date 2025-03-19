// import CartContext from '../../context/CartContext'

import './index.css'

const FoodItemCounter = props => {
  const {onClickedIncrement, onClickedDecrement, quantity} = props
  // console.log(id, quantity, 'quant')
  const onIncrement = () => onClickedIncrement()
  const onDecrement = () => onClickedDecrement()

  return (
    <div className="counter">
      <button type="button" onClick={onDecrement} testid="decrement-count">
        -
      </button>
      <div className="count-value" testid="active-count">
        {quantity}
      </div>
      <button type="button" onClick={onIncrement} testid="increment-count">
        +
      </button>
    </div>
  )
}

export default FoodItemCounter
