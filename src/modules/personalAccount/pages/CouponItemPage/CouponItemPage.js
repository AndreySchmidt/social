import React from 'react'
import {Link} from 'react-router-dom'

import socialsamplesmall from './../../../app/AppPageLayout/images/social-sample-small.png'

import './CouponItemPage.css'
import './../../components/css/c_lk_inner_breadcrumbs.css'
import './../../../app/components/css/print_this.css'
import './../../../app/components/css/share_this.css'
import './../../components/css/lk_user_data.css'

import PageLayout from './../../PageLayout/PageLayout'

const FriendPage = () => {
  return (
    <PageLayout>
      <div className="c_header_section_title">
        <Link className="c_button_large link_right" to="">Найти новые скидки и акции</Link> Купоны на скидку
      </div>

        <div className="c_settings_layout clearfix">

          <div className="setting_sections_block">
            <div className="section_title">Фильтры поиска</div>

            <div className="section_link active"><Link to="#">Все</Link></div>
            <div className="section_link"><Link to="#">Текущие</Link></div>
            <div className="section_link"><Link to="#">Просроченные</Link></div>
          </div>

            <div className="layout_inner">
              <div className="layout_inner_space">
              <div className="c_lk_discount_page">

              <h2 className="title">У Вас 34 купона</h2>

              <div className="c_type_select">
                <Link to="#" className="active">Мои купоны</Link>
                <Link to="#">Уведомления о новых скидках (5)</Link>
              </div>

              <div className="c_lk_inner_breadcrumbs">
                <Link to="#" className="back">Вернуться к списку купонов</Link>
              </div>

              <div className="discount">
                <h3 className="title">Скидка 20% в кафе Svetlo!</h3>
                <p className="desciption">Скидка на все меню, кроме табачных изделий, сока и водки. Не действует на другие спецпредложения, не суммируется с другими скидками.</p>
                <p className="end-date">Срок действия акции до 1.01.2020</p>
                <Link className="c_print_this" to="#">Распечатать</Link>

                <p className="organizator_profile clearfix">
                  <span className="label">Компания:</span>
                  <Link to="#">BeautyHouse - Окна, двери, лоджии из металлопластика разных конструкций.</Link><br />
                  <span className="label">Категория:</span>
                  <span className="breadcrumbs">
                    <Link to="#">Строительство и ремонт</Link>
                    <span className="separator">&gt;</span>
                    <Link to="#">Отделка помещений</Link>
                  </span>
                </p>

                <p className="c_share_this social_links">
                  <span>Поделиться:&nbsp;&nbsp;</span>
                  <Link to="#"><img src={socialsamplesmall} alt="" /></Link>
                </p>
              </div>

            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  )
}
export default FriendPage
