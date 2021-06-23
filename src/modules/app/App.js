import React from 'react'
import Page404 from './pages/Page404'
import HomePage from './pages/HomePage'
import UserPage from './../personalAccount/pages/UserPage/UserPage'
import { Switch, Route } from 'react-router-dom'

const App = (props) => {
  return (
    <Switch>
      <Route exact path='/' component={HomePage} />
      <Route path='/user/:id(\d+)' component={UserPage} />
      <Route component={Page404} />
    </Switch>
  )
}

export default App

// if (__DEV__) {
//   console.log('It works!! Im dev env!!!!')
// }
