import React from 'react'
import {Link} from 'react-router-dom'

import './Menu.css'
import OfferCarousel from './../../../../../app/AppPageLayout/components/OfferCarousel/OfferCarousel'

const Menu = () => {
  return (
    <div className="sidebar">
      <Link to="/" className="c_add_ad_button">
        <img className="icon_add" src="img/icon-add.png" alt="" /> <span>Добавить объявление</span>
      </Link>
      <div className="c_menu_block">
        <div className="header">Категории <i></i></div>
          <ul>
            <li><Link to="/">Недвижимость</Link></li>
            <li><Link to="/">Авто</Link></li>
            <li><Link to="/">Детский мир</Link></li>
            <li><Link to="/">Здоровье</Link></li>
            <li><Link to="/">Интернет и мобильная связь</Link></li>
            <li>
              <Link to="/">Кондитерские изделия</Link>
              <div className="menu-dropdown">
                <div className="menu-dropdown-inner">
                  <ul className="left-menu">
                    <li><Link to="/">Недвижимость</Link></li>
                    <li><Link to="/">Авто</Link></li>
                    <li><Link to="/">Детский мир</Link></li>
                    <li><Link to="/">Здоровье</Link></li>
                    <li><Link to="/">Интернет и мобильная связь</Link></li>
                    <li><Link to="/">Кондитерские изделия</Link></li>
                    <li><Link to="/">Красота</Link></li>
                    <li><Link to="/">Мебель</Link></li>
                    <li><Link to="/">Мир техники</Link></li>
                    <li><Link to="/">Новый год!</Link></li>
                  </ul>
                  <ul className="right-menu">
                    <li><Link to="/">Недвижимость</Link></li>
                    <li><Link to="/">Авто</Link></li>
                    <li><Link to="/">Детский мир</Link></li>
                    <li><Link to="/">Здоровье</Link></li>
                    <li><Link to="/">Интернет и мобильная связь</Link></li>
                    <li><Link to="/">Кондитерские изделия</Link></li>
                    <li><Link to="/">Красота</Link></li>
                    <li><Link to="/">Мебель</Link></li>
                    <li><Link to="/">Мир техники</Link></li>
                    <li><Link to="/">Новый год!</Link></li>
                  </ul>
                </div>
              </div>
            </li>
          <li><Link to="/">Красота</Link></li>
          <li><Link to="/">Мебель</Link></li>
          <li><Link to="/">Мир техники</Link></li>
          <li><Link to="/">Новый год!</Link></li>
          <li><Link to="/">Одежда, обувь, аксессуары</Link></li>
          <li><Link to="/">Отдых</Link></li>
          <li><Link to="/">Праздник</Link></li>
          <li><Link to="/">Продукты питания</Link></li>
          <li><Link to="/">Разное</Link></li>
          <li><Link to="/">Ремонт и строительство</Link></li>
          <li><Link to="/">Рестораны, кафе</Link></li>
          <li><Link to="/">Туризм</Link></li>
        </ul>
        <div className="full_data hide_full">
          <Link to="/"><i></i>Развернуть весь список<i></i></Link>
        </div>
      </div>
      <OfferCarousel />
    </div>
  )
}

export default Menu
