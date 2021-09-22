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
import CouponItemPage from './../personalAccount/pages/CouponItemPage/CouponItemPage'
import PhotoPage from './../personalAccount/pages/PhotoPage/PhotoPage'
import EditPhotoPage from './../personalAccount/pages/EditPhotoPage/EditPhotoPage'
import CalcListPage from './../personalAccount/pages/CalcListPage/CalcListPage'
import CalcItemPage from './../personalAccount/pages/CalcItemPage/CalcItemPage'
import PlanPage from './../personalAccount/pages/PlanPage/PlanPage'
import CartPage from './../personalAccount/pages/CartPage/CartPage'
import VideoPage from './../personalAccount/pages/VideoPage/VideoPage'
import CompanyPage from './../personalAccount/pages/CompanyPage/CompanyPage'
import AnnouncementPage from './../personalAccount/pages/AnnouncementPage/AnnouncementPage'

import TestComp from './../personalAccount/pages/TestComp/TestComp'

import VacancyListPage from './../employment/pages/VacancyListPage/VacancyListPage'
import EmployeeListPage from './../employment/pages/EmployeeListPage/EmployeeListPage'
import EmployeePage from './../employment/pages/EmployeePage/EmployeePage'
import VacancyPage from './../employment/pages/VacancyPage/VacancyPage'
import AddEmployeePage from './../employment/pages/AddEmployeePage/AddEmployeePage'
import AddVacancyPage from './../employment/pages/AddVacancyPage/AddVacancyPage'

import OrganisationListPage from './../organisation/pages/OrganisationListPage/OrganisationListPage'

import { Switch, Route } from 'react-router-dom'

const App = (props) => {
  return (
    <Switch>
      <Route exact path='/' component={HomePage} />

      <Route path='/test' component={TestComp} />

      <Route path='/organisations' component={OrganisationListPage} />

      <Route path='/vacancy_add' component={AddVacancyPage} />
      <Route path='/employee_add' component={AddEmployeePage} />
      <Route path='/vacancy' component={VacancyPage} />
      <Route path='/employee' component={EmployeePage} />
      <Route path='/employee_list' component={EmployeeListPage} />
      <Route path='/vacancy_list' component={VacancyListPage} />
      <Route path='/user/:id(\d+)/announcement' component={AnnouncementPage} />
      <Route path='/user/:id(\d+)/company' component={CompanyPage} />
      <Route path='/user/:id(\d+)/video' component={VideoPage} />
      <Route path='/user/:id(\d+)/cart' component={CartPage} />
      <Route path='/user/:id(\d+)/plan' component={PlanPage} />
      <Route path='/user/:id(\d+)/calculator_item' component={CalcItemPage} />
      <Route path='/user/:id(\d+)/calculator' component={CalcListPage} />
      <Route path='/user/:id(\d+)/photo_edit' component={EditPhotoPage} />
      <Route path='/user/:id(\d+)/photo' component={PhotoPage} />
      <Route path='/user/:id(\d+)/coupon_item' component={CouponItemPage} />
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
