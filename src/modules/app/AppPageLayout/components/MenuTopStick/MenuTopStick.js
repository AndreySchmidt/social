import React from 'react'
import {Link} from 'react-router-dom'

const MenuTopStick = () => {
  return(
    <div className="c_menu_top_stick clearfix">
      <ul className="menu_left">
        <li><Link to="/advertisements">Доска объявлений</Link></li>
        <li><Link to="/events">Мероприятия</Link></li>
        <li><Link to="/news">Новости</Link></li>
        <li><Link to="/review">Отзывы</Link></li>
        <li><Link to="/vacancy_list">Работа</Link></li>
        <li className="parent">
          <Link to="">Общение <i className="more-arrow"></i></Link>
          <ul>
            <li><Link to="/people">Люди</Link></li>
            <li><Link to="/blogs">Блоги</Link></li>
            <li><Link to="/consultations">Консультации</Link></li>
          </ul>
        </li>
      </ul>
      <ul className="menu_right">
        <li><Link to="/me">Личный кабинет</Link></li>
        <li className="separator">|</li>
        <li><Link to="/exit">Выход</Link></li>
      </ul>
    </div>
  )
}
export default MenuTopStick
