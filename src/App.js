import {Component} from 'react'
import {Switch, Route, Redirect} from 'react-router-dom'

import LoginForm from './components/LoginForm'
import Home from './components/Home'
import NotFound from './components/NotFound'
import ProtectedRoute from './components/ProtectedRoute'
import AddFood from './components/AddFood'
import Cart from './components/Cart'

import './App.css'
import Checkout from './components/Checkout'
import PaymentSuccessful from './components/PaymentSuccessful'
import AppPrivacyPolicy from './components/AppPrivacyPolicy'

class App extends Component {
  state = {
    cartList: [],
  }

  removeAllCartItems = () => {
    this.setState({cartList: []})
    localStorage.removeItem('cartData')
  }

  render() {
    const {cartList} = this.state

    // localStorage.setItem('cartData', JSON.stringify(cartList))
    console.log(cartList, 'not stored in app')
    return (
      <>
        <Switch>
          <Route exact path="/login" component={LoginForm} />

          <ProtectedRoute exact path="/" component={Home} />
          <ProtectedRoute exact path="/cart" component={Cart} />

          <ProtectedRoute
            exact
            path="/restaurant/:restaurantId"
            component={AddFood}
          />
          <ProtectedRoute exact path="/checkout" component={Checkout} />
          <ProtectedRoute
            exact
            path="/paymentsuccessful/orderplaced"
            component={PaymentSuccessful}
          />
          <ProtectedRoute
            exact
            path="/paymentsuccessful/privacy-policy"
            component={AppPrivacyPolicy}
          />

          <Route exact path="/not-found" component={NotFound} />
          <Redirect to="/not-found" />
        </Switch>
      </>
    )
  }
}

export default App
