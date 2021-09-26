import React from 'react'
import {Link} from 'react-router-dom'

import PageLayout from './../../PageLayout/PageLayout'

import './../../../app/components/css/breadcrumbs_bar.css'
import './../../../app/components/css/print_this.css'
import './../../../app/components/css/share_this.css'
import './../../../app/components/css/ad_list_page.css'
import './../../components/css/discount_search.css'
import './discount_page.css'

const DiscountItemPage = () => {
  return (
    <PageLayout>
      <div className="c_discount_search collapsed">
        <form method="GET" action="#">
          <div className="search_form">
            <div className="search_field">
            <input className="search_query type-text" type="text" name="" value="" placeholder="Например, скидка на маникюр" /></div>
            <input type="submit" value="Найти" className="search_submit" />
          </div>
          <div className="search_options">
            <div className="element-container">
              <label>Район:</label>
              <Link to="" className="select-init">Выбрать районы</Link><br />
              <div className="select-result">
                <span>Гатчина и Гатчинский район</span>,
                <span>Волосово и Волосовский район</span>
              </div>
            </div>
            <div className="element-container">
              <label>Категории:</label>
              <Link to="" className="select-init">Выбрать</Link><br />
              <div className="select-result">
              <span>IT / Интернет / Телеком</span>,
              <span>Консалтинг / Тренинги</span>
              </div>
              </div>
              <div className="element-container checkbox-container">
                <label className="normal"><input type="checkbox" name="" value="" /> С возможностью получить купон</label>
              </div>
            <div className="element-container button-container">
              <input type="submit" className="search_submit" name="" value="Найти" />
            </div>
          </div>
        </form>
        <div className="form_view">
          <Link className="hide-full" to=""><i></i>Свернуть расширенные параметры<i></i></Link>
          <Link className="show-full" to=""><i></i>Развернуть расширенные параметры<i></i></Link>
        </div>
      </div>
      <div className="c_breadcrumbs_bar">
        <Link className="back" to="#">Назад</Link>
        <div className="breadcrumbs">
          <Link to="#">Скидки и акции</Link>
          <span className="separator">&gt;</span>
          <Link to="#">Строительство и ремонт</Link>
          <span className="separator">&gt;</span>
          <Link to="#">Отделка помещений</Link>
        </div>
      </div>
      <div className="c_discount_page clearfix">
        <h3 className="title">Скидка 20% в кафе Svetlo!</h3>
        <div className="right_block">
          <Link className="button_element" to="#">Получить купон бесплатно!</Link>
          <strong>Осталось купонов: 309</strong>
        </div>
        <p className="desciption">Скидка на все меню, кроме табачных изделий, сока и водки. Не действует на другие спецпредложения, не суммируется с другими скидками.</p>
        <p className="end-date">Срок действия акции до 1.01.2020</p>
        <Link className="c_print_this" to="#">Распечатать</Link>
        <p className="organizator_profile clearfix">
          <span className="label">Компания:</span>
          <Link to="#">BeautyHouse - Окна, двери, лоджии из металлопластика разных конструкций.</Link>
          <br />
          <span className="label">Категория:</span>
          <span className="breadcrumbs">
            <Link to="#">Строительство и ремонт</Link>
            <span className="separator">&gt;</span>
            <Link to="#">Отделка помещений</Link>
          </span>
        </p>
        <p className="c_share_this social_links">
          <span>Поделиться:&nbsp;&nbsp;</span>
          <Link to="#"><img src="images/social-sample-small.png" alt="" /></Link>
        </p>
      </div>
    </PageLayout>
  )
}

export default DiscountItemPage
