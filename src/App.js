import {Switch, Route, Redirect} from 'react-router-dom'

import './App.css'

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

const App = () => (
  <div className="app-container">
    <h1>App container</h1>
  </div>
)

export default App
