import React from 'react'
import {Link} from 'react-router-dom'

const MenuTop = () => {
  return(
    <div className="c_menu_top">
      <ul>
        <li><Link to="/organisations">Организации</Link></li>
        <li><Link to="/realestates">Недвижимость</Link></li>
        <li><Link to="/goods">Товары и услуги</Link></li>
        <li><Link to="/discount">Скидки и акции</Link></li>
      </ul>
    </div>
  )
}

export default MenuTop
