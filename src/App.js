import {Switch, Route, Redirect} from 'react-router-dom'

import LoginForm from './components/LoginForm'
import Header from './components/Header'
import Home from './components/Home'
import NotFound from './components/NotFound'
import ProtectedRoute from './components/ProtectedRoute'
import AddFood from './components/AddFood'

import './App.css'

const App = () => (
  <>
    <Header />
    <Switch>
      <Route exact path="/login" component={LoginForm} />
      <ProtectedRoute exact path="/" component={Home} />
      <ProtectedRoute
        exact
        path="/restaurants/:restaurantId"
        component={AddFood}
      />
      <Route exact path="/not-found" component={NotFound} />
      <Redirect to="/not-found" />
    </Switch>
  </>
)

export default App
