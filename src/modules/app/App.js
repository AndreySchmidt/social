import React from 'react'
import Page404 from './pages/Page404'
import HomePage from './pages/HomePage'

import UserPage from './../personalAccount/pages/UserPage/UserPage'
import DocPage from './../personalAccount/pages/DocPage/DocPage'
import MyCommentsPage from './../personalAccount/pages/MyCommentsPage/MyCommentsPage'
import MyEventPage from './../personalAccount/pages/MyEventPage/MyEventPage'
import MyListPage from './../personalAccount/pages/MyListPage/MyListPage'
import MyBlogListPage from './../personalAccount/pages/MyBlogListPage/MyBlogListPage'
import MyBlogItemPage from './../personalAccount/pages/MyBlogItemPage/MyBlogItemPage'
import FavoritePage from './../personalAccount/pages/FavoritePage/FavoritePage'
import MyConsultationListPage from './../personalAccount/pages/MyConsultationListPage/MyConsultationListPage'
import MessPage from './../personalAccount/pages/MessPage/MessPage'
import ResponsePage from './../personalAccount/pages/ResponsePage/ResponsePage'
import EditProfilePage from './../personalAccount/pages/EditProfilePage/EditProfilePage'
import DemandPage from './../personalAccount/pages/DemandPage/DemandPage'
import FriendPage from './../personalAccount/pages/FriendPage/FriendPage'
import CouponPage from './../personalAccount/pages/CouponPage/CouponPage'

import { Switch, Route } from 'react-router-dom'

const App = (props) => {
  return (
    <Switch>
      <Route exact path='/' component={HomePage} />

      <Route path='/user/:id(\d+)/coupon' component={CouponPage} />
      <Route path='/user/:id(\d+)/friend' component={FriendPage} />
      <Route path='/user/:id(\d+)/demand' component={DemandPage} />
      <Route path='/user/:id(\d+)/edit_profile' component={EditProfilePage} />
      <Route path='/user/:id(\d+)/response' component={ResponsePage} />
      <Route path='/user/:id(\d+)/mess' component={MessPage} />
      <Route path='/user/:id(\d+)/consultation' component={MyConsultationListPage} />
      <Route path='/user/:id(\d+)/favorite' component={FavoritePage} />
      <Route path='/user/:id(\d+)/blog_item' component={MyBlogItemPage} />
      <Route path='/user/:id(\d+)/blog' component={MyBlogListPage} />
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
