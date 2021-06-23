import React from 'react'
import {Link} from 'react-router-dom'

const MenuTop = () => {
  return(
    <div className="c_menu_top">
      <ul>
        <li><Link to="">Организации</Link></li>
        <li><Link to="">Недвижимость</Link></li>
        <li><Link to="">Работа</Link></li>
        <li><Link to="">Товары и услуги</Link></li>
        <li><Link to="">Доска объявлений</Link></li>
        <li><Link to="">Заявки на товары и услуги</Link></li>
      </ul>
    </div>
  )
}

export default MenuTop
