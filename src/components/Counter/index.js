import {Component} from 'react'

import './index.css'

class Counter extends Component {
  state = {
    countValue: 0,
  }

  onDecrement = () => {
    this.setState(prevState => ({countValue: prevState.countValue - 1}))
  }

  onIncrement = () => {
    this.setState(prevState => ({countValue: prevState.countValue + 1}))
  }

  render() {
    const {countValue} = this.state
    return (
      <div className="counter">
        <button type="button" onClick={this.onDecrement}>
          -
        </button>
        <div className="count-value">{countValue}</div>
        <button type="button" onClick={this.onIncrement}>
          +
        </button>
      </div>
    )
  }
}

export default Counter
