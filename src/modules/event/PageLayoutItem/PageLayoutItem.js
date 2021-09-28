import React from 'react'
import {Link} from 'react-router-dom'

import AppPageLayout from './../../app/AppPageLayout/AppPageLayout'

import Footer from './../../app/components/Footer/Footer'
import Search from './../../app/components/Search/Search'

import './../../app/components/css/ad_list_page.css'
import './../../app/components/css/breadcrumbs_bar.css'

import './event_main_dock.css'

const PageLayout = ({ children }) => (
  <AppPageLayout>
    <div className="main_content_wrapper">
      <div className="container clearfix">

        <div className="main_content">
          <Search />
          <div className="c_breadcrumbs_bar">
            <Link to="#" className="back">Назад</Link>
            <div className="breadcrumbs">
              <Link to="#">Мероприятия</Link>
              <span className="separator">&gt;</span>
              <Link to="#">Конференции</Link>
            </div>
          </div>
          <div className="c_event_page_controls">
            <Link className="edit" to="">Редактировать</Link>
          </div>
            <div className="c_event_page clearfix">
            <div className="c_event_main_dock">
              <div className="event_image_container">
                <img className="event_image" src="images/event-full.jpg" />
              </div>
              <div className="invite_actions">
                <Link className="c_button_large" to="#">Точно пойду</Link><br />
                <Link className="c_button_large" to="#">Возможно пойду</Link><br />
                <Link className="c_button_large" to="#">Не смогу пойти</Link>
              </div>
              <div className="block-links">
                <Link to="#">Пригласить друзей</Link>
              </div>
              <div className="block-links">
                <Link to="#"><img className="icon_add" src="img/icon-add.png" alt="" />В мой список</Link>
              </div>
              <div className="c_add_to_list_button">
                <Link to="/" className="button_element">
                  <img className="icon_add" src="img/icon-add.png" alt="" /> <span>В мой список</span>
                </Link>
                <div className="list-hover-wrapper">
                  <span className="list-hover"><Link to="/">Перейти в мой список</Link> <span className="arrow"></span></span>
                </div>
              </div>
              <div className="section_title">
                <Link className="right_link" to="#">300 человек</Link> Точно пойдут
              </div>
              <div className="people-list">
                <div className="photo_row"><Link to="#" title="имя"><img src="images/user-50x50.jpg" alt="" /></Link></div>
                <div className="photo_row"><Link to="#" title="имя"><img src="images/user-50x50.jpg" alt="" /></Link></div>
                <div className="photo_row"><Link to="#" title="имя"><img src="images/user-50x50.jpg" alt="" /></Link></div>
                <div className="photo_row"><Link to="#" title="имя"><img src="images/user-50x50.jpg" alt="" /></Link></div>
                <div className="photo_row"><Link to="#" title="имя"><img src="images/user-50x50.jpg" alt="" /></Link></div>
                <div className="photo_row"><Link to="#" title="имя"><img src="images/user-50x50.jpg" alt="" /></Link></div>
                <div className="photo_row"><Link to="#" title="имя"><img src="images/user-50x50.jpg" alt="" /></Link></div>
                <div className="photo_row"><Link to="#" title="имя"><img src="images/user-50x50.jpg" alt="" /></Link></div>
                <div className="photo_row"><Link to="#" title="имя"><img src="images/user-50x50.jpg" alt="" /></Link></div>
              </div>
              <div className="section_title">Фото отчет</div>
              <div className="preview-list">
                <div className="list_item">
                  <div className="image_container">
                    <Link to="#"><img src="images/344.jpg" alt="" /></Link>
                  </div>
                </div>
              </div>
              <div className="section_title">Видео отчет</div>
              <div className="preview-list">
                <div className="list_item">
                  <div className="image_container">
                    <Link to="#"><img src="images/event-video.jpg" alt="" /></Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="main_content_column">
              {children}
            </div>
          </div>
        </div>
      </div>
      <Footer />
      <div className="trasparent-stripe-left"></div>
      <div className="trasparent-stripe-right"></div>
    </div>
  </AppPageLayout>
)

export default PageLayout
