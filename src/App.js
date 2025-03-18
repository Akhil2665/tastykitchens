import {Component} from 'react'
import {Switch, Route, Redirect} from 'react-router-dom'

import LoginForm from './components/LoginForm'
import Header from './components/Header'
import Home from './components/Home'
import NotFound from './components/NotFound'
import ProtectedRoute from './components/ProtectedRoute'
import AddFood from './components/AddFood'
import Cart from './components/Cart'
import PaymentSuccessful from './components/PaymentSuccessful'
import CartContext from './context/CartContext'

import './App.css'

const storedCartList = JSON.parse(localStorage.getItem('cartData'))
const initialCartArray = storedCartList || []

class App extends Component {
  state = {
    cartList: initialCartArray,
  }

  addCartItem = product => {
    const {cartList} = this.state
    console.log('item added to cart')

    const existingProduct = cartList.find(
      eachItem => eachItem.id === product.id,
    )
    if (existingProduct) {
      const updateQuantityCartList = cartList.map(eachItem =>
        eachItem.id === product.id
          ? {...eachItem, quantity: eachItem.quantity + product.quantity}
          : eachItem,
      )
      this.setState({cartList: updateQuantityCartList})
    } else {
      this.setState(prevState => ({cartList: [...prevState.cartList, product]}))
    }
  }

  addOrUpdateCartItem = product => {
    const {cartList} = this.state
    console.log('item added to cart')

    const existingProduct = cartList.find(
      eachItem => eachItem.id === product.id,
    )
    if (existingProduct) {
      const updateQuantityCartList = cartList.map(eachItem =>
        eachItem.id === product.id
          ? {...eachItem, quantity: product.quantity}
          : eachItem,
      )
      this.setState({cartList: updateQuantityCartList})
    } else {
      this.setState(prevState => ({cartList: [...prevState.cartList, product]}))
    }
  }

  removeCartItem = id => {
    const {cartList} = this.state
    const updatedList = cartList.filter(eachItem => eachItem.id !== id)
    this.setState({cartList: updatedList})
  }

  removeAllCartItems = () => {
    this.setState({cartList: []})
  }

  decrementCartItemQuantity = id => {
    console.log('decrement quant')
    const {cartList} = this.state

    const updatedList = cartList.map(eachItem =>
      eachItem.id === id && eachItem.quantity >= 1
        ? {...eachItem, quantity: eachItem.quantity - 1}
        : eachItem,
    )
    const filterdList = updatedList.filter(eachItem => eachItem.quantity !== 0)
    this.setState({cartList: filterdList})
  }

  incrementCartItemQuantity = id => {
    console.log('increment quant')
    const {cartList} = this.state

    const updatedList = cartList.map(eachItem =>
      eachItem.id === id
        ? {...eachItem, quantity: eachItem.quantity + 1}
        : eachItem,
    )

    this.setState({cartList: updatedList})
  }

  onDecrementQuantity = () => {
    const {quantity} = this.state
    if (quantity > 1) {
      this.setState(prevState => ({quantity: prevState.quantity - 1}))
    }
  }

  onIncrementQuantity = () => {
    this.setState(prevState => ({quantity: prevState.quantity + 1}))
  }

  render() {
    const {cartList} = this.state

    localStorage.setItem('cartData', JSON.stringify(cartList))
    console.log(cartList, 'not stored')
    return (
      <CartContext.Provider
        value={{
          cartList,
          addCartItem: this.addCartItem,
          removeCartItem: this.removeCartItem,
          removeAllCartItems: this.removeAllCartItems,
          incrementCartItemQuantity: this.incrementCartItemQuantity,
          decrementCartItemQuantity: this.decrementCartItemQuantity,
          addOrUpdateCartItem: this.addOrUpdateCartItem,
        }}
      >
        <Header />
        <Switch>
          <Route exact path="/login" component={LoginForm} />
          <ProtectedRoute exact path="/" component={Home} />
          <ProtectedRoute exact path="/cart" component={Cart} />
          <ProtectedRoute
            exact
            path="/payment-successful"
            component={PaymentSuccessful}
          />
          <ProtectedRoute
            exact
            path="/restaurant/:restaurantId"
            component={AddFood}
          />
          <Route exact path="/not-found" component={NotFound} />
          <Redirect to="/not-found" />
        </Switch>
      </CartContext.Provider>
    )
  }
}

export default App
