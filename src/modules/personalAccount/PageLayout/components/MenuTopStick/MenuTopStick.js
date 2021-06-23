import React from 'react'
import {Link} from 'react-router-dom'

const MenuTopStick = () => {
  return(
    <div className="c_menu_top_stick clearfix">
      <ul className="menu_left">
        <li className="parent">
          <Link to="">Справочник <i className="more-arrow"></i></Link>

          <ul>
              <li><Link to="">Бюро находок</Link></li>
              <li><Link to="">Отзывы</Link></li>
              <li><Link to="">Фото</Link></li>
              <li><Link to="">Видео</Link></li>
              <li><Link to="">Игры</Link></li>
              <li><Link to="">Знакомства</Link></li>
          </ul>
        </li>
        <li className="parent">
          <Link to="">Общение <i className="more-arrow"></i></Link>

          <ul>
              <li><Link to="">Бюро находок</Link></li>
              <li><Link to="">Отзывы</Link></li>
              <li><Link to="">Фото</Link></li>
              <li><Link to="">Видео</Link></li>
              <li><Link to="">Игры</Link></li>
              <li><Link to="">Знакомства</Link></li>
          </ul>
        </li>
        <li><Link to="">Скидки и акции</Link></li>
        <li><Link to="">Мероприятия</Link></li>
        <li><Link to="">Новости</Link></li>
        <li className="parent">
          <Link to="">Еще <i className="more-arrow"></i></Link>

          <ul>
              <li><Link to="">Бюро находок</Link></li>
              <li><Link to="">Отзывы</Link></li>
              <li><Link to="">Фото</Link></li>
              <li><Link to="">Видео</Link></li>
              <li><Link to="">Игры</Link></li>
              <li><Link to="">Знакомства</Link></li>
          </ul>
        </li>
      </ul>
      <ul className="menu_right">
          <li><Link to="">Личный кабинет</Link></li>
          <li className="separator">|</li>
          <li><Link to="">Выход</Link></li>
      </ul>
    </div>
  )
}
export default MenuTopStick
