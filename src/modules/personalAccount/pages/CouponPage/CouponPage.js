import React from 'react'
import {Link} from 'react-router-dom'

// import picava100x100 from './../../../app/AppPageLayout/images/pic-ava-100x100.jpg'

import './CouponPage.css'
import './../../components/css/c_print_this.css'
import './../../components/css/lk_user_data.css'

import PageLayout from './../../PageLayout/PageLayout'
import Pagination from './../../../app/components/Pagination/Pagination'
import QuickSearch from './../../components/QuickSearch/QuickSearch'

const FriendPage = () => {
  return (
    <PageLayout>
      <div className="c_header_section_title">
        <Link className="c_button_large link_right" to="/user/15/edit_user_data/main">Найти новые скидки и акции</Link> Купоны на скидку
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
            <div className="c_lk_discounts_list">

              <h2 className="title">У Вас 34 купона</h2>

              <div className="c_type_select">
                <Link to="#" className="active">Мои купоны</Link>
                <Link to="#">Уведомления о онвых скидках (5)</Link>
              </div>
              <QuickSearch placeholder="Быстрый поиск" />

              <div className="discount_item clearfix">
                <h4 className="title"><Link to="/user/15/coupon_item">Скидка 20% в кафе Svetlo!</Link></h4>
                <div className="right_block">
                  <Link className="c_print_this" to="#">Распечатать</Link>
                </div>
                <p className="desciption">Скидка на все меню, кроме табачных изделий, сока и водки. Не действует на другие спецпредложения, не суммируется с другими скидками.</p>
                <p className="end-date">Срок действия акции до 1.01.2020</p>

                <span className="breadcrumbs">
                  <Link to="#">Строительство и ремонт</Link>
                  <span className="separator">&gt;</span>
                  <Link to="#">Отделка помещений</Link>
                </span>
              </div>

              <div className="discount_item clearfix">
                <h4 className="title"><Link to="/user/15/coupon_item">Скидка 20% в кафе Svetlo!</Link></h4>
                <div className="right_block">
                  <Link className="c_print_this" to="#">Распечатать</Link>
                </div>
                <p className="desciption">Скидка на все меню, кроме табачных изделий, сока и водки. Не действует на другие спецпредложения, не суммируется с другими скидками.</p>
                <p className="end-date">Срок действия акции до 1.01.2020</p>

                <span className="breadcrumbs">
                  <Link to="#">Строительство и ремонт</Link>
                  <span className="separator">&gt;</span>
                  <Link to="#">Отделка помещений</Link>
                </span>
              </div>

              <div className="discount_item clearfix">
                <h4 className="title"><Link to="/user/15/coupon_item">Скидка 20% в кафе Svetlo!</Link></h4>
                <div className="right_block">
                  <Link className="c_print_this" to="#">Распечатать</Link>
                </div>
                <p className="desciption">Скидка на все меню, кроме табачных изделий, сока и водки. Не действует на другие спецпредложения, не суммируется с другими скидками.</p>
                <p className="end-date">Срок действия акции до 1.01.2020</p>

                <span className="breadcrumbs">
                  <Link to="#">Строительство и ремонт</Link>
                  <span className="separator">&gt;</span>
                  <Link to="#">Отделка помещений</Link>
                </span>
              </div>

            </div>
          </div>
        </div>
      </div>
      <Pagination />
    </PageLayout>
  )
}
export default FriendPage
