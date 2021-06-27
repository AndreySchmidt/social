import React from 'react'
import {Link} from 'react-router-dom'

const MenuBlock = () => {
  return (
    <>
      <div className="c_menu_block">
        <div className="header">Мой профиль <i></i></div>

        <ul>
          <li><Link className="active" to="">Моя страница</Link></li>
          <li><Link to="">Мои друзья</Link></li>
          <li><Link to=""><span className="c_menu-orange-block">2</span>Сообщения</Link></li>
          <li><Link to="">Фото галерея</Link></li>
          <li><Link to="">Видео галерея</Link></li>
          <li><Link to="">Избранное</Link></li>
          <li><Link to="">Купоны на скидку</Link></li>
          <li><Link to="">Мероприятия</Link></li>
          <li><Link to="">Документы</Link></li>
          <li><Link to="">Мой блог</Link></li>
          <li><Link to="">Настройки анкеты</Link></li>
          <li><Link to=""><span className="c_menu-orange-block">20 000 dm</span> Мой счет</Link></li>
        </ul>
      </div>

      <div className="c_menu_block">
        <div className="header">Сервисы <i></i></div>

        <ul>
          <li><Link to="">Мой список</Link></li>
          <li><Link to="">Корзина товаров / услуг</Link></li>
          <li><Link to="">Книга контактов</Link></li>
          <li><Link to="">Планировщик</Link></li>
          <li><Link to="">Калькулятор расходов</Link></li>
        </ul>
      </div>

      <div className="c_menu_block">
        <div className="header">Управление <i></i></div>

        <ul>
          <li><Link to="">Мои компании</Link></li>
          <li><Link to="">Мои объявления</Link></li>
          <li><Link to="">Заявки на товары / услуги</Link></li>
          <li><Link to="">Участие в консультациях</Link></li>
          <li><Link to="">Мои отзывы</Link></li>
          <li><Link to="">Мои комментарии</Link></li>
        </ul>
      </div>
    </>
  )
}

export default MenuBlock
