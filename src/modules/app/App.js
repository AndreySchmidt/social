import React from 'react'
import Page404 from './pages/Page404'
import HomePage from './pages/HomePage'

import UserPage from './../personalAccount/pages/UserPage/UserPage'
import DocPage from './../personalAccount/pages/DocPage/DocPage'
import MyCommentsPage from './../personalAccount/pages/MyCommentsPage/MyCommentsPage'
import MyEventPage from './../personalAccount/pages/MyEventPage/MyEventPage'
import MyListPage from './../personalAccount/pages/MyListPage/MyListPage'

import { Switch, Route } from 'react-router-dom'

const App = (props) => {
  return (
    <Switch>
      <Route exact path='/' component={HomePage} />
      <Route path='/user/:id(\d+)/my_list' component={MyListPage} />
      <Route path='/user/:id(\d+)/event' component={MyEventPage} />
      <Route path='/user/:id(\d+)/comment' component={MyCommentsPage} />
      <Route path='/user/:id(\d+)/doc' component={DocPage} />
      <Route path='/user/:id(\d+)' component={UserPage} />
      <Route component={Page404} />
    </Switch>
  )
}

export default App

// if (__DEV__) {
//   console.log('It works!! Im dev env!!!!')
// }
