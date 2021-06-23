import React from 'react'
import {Link} from 'react-router-dom'

import PageLayout from './../../PageLayout/PageLayout'

import Footer from './../../PageLayout/components/Footer/Footer'
import Sidebar from './components/Sidebar/Sidebar'
import InfoBlock from './components/InfoBlock/InfoBlock'
import HeaderSection from './components/HeaderSection/HeaderSection'
import MainContentAside from './components/MainContentAside/MainContentAside'
import Status from './components/Status/Status'
import ProfileOptionsList from './components/ProfileOptionsList/ProfileOptionsList'
import SocialLinks from './components/SocialLinks/SocialLinks'
import ShortBlogList from './components/ShortBlogList/ShortBlogList'
import PlaceMap from './components/PlaceMap/PlaceMap'
import Wall from './components/Wall/Wall'

const UserPage = () => {
  return (
    <PageLayout>
      <div className="main_content_wrapper">
        <div className="container clearfix">
          <Sidebar />

          <div className="main_content">

          <InfoBlock />
          <HeaderSection />
          <MainContentAside />

          <div className="main_content_column">
            <Link className="change_interface" to="">изменить оформление</Link>
            <Status />

              <div className="interface_image">
                <img src="resources/img/content-bg.jpg" alt=""/>
              </div>

              <div className="c_main_content_wrapper">
                <div className="title"><span>Анкета</span> <Link to="">редактировать</Link></div>
                <ProfileOptionsList />
                <div className="show_full_data">
                  <Link to=""><i></i>Показать анкету полностью<i></i></Link>
                </div>
              </div>

              <div className="c_main_content_wrapper">
                <div className="title"><span>Я в соц. сетях</span> <Link to="">редактировать</Link></div>
                <SocialLinks />
              </div>

              <div className="c_main_content_wrapper">
                <div className="title"><span>Мой блог</span> <Link to="">редактировать</Link></div>
                <ShortBlogList />
              </div>

              <div className="c_main_content_wrapper">
                <div className="title"><span>Мое местоположение </span> <Link to="">редактировать</Link></div>
                <PlaceMap />
              </div>

              <div className="c_main_content_wrapper">
                <div className="title"><span>Моя стена</span> <Link to="">редактировать</Link></div>
                <Wall />

                <div className="show_full_data">
                  <Link to=""><i></i>Показать еще 15 записей<i></i></Link>
                </div>
              </div>

            </div>
          </div>
        </div>

        <Footer />

        <div className="trasparent-stripe-left"></div>
        <div className="trasparent-stripe-right"></div>

      </div>
    </PageLayout>
  )
}

export default UserPage
