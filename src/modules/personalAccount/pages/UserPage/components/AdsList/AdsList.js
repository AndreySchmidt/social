import React from 'react'
import {Link} from 'react-router-dom'

const AdsList = () => {
  return (
    <div className="c_ads_list">
      <div className="header">Обратите внимание <i></i></div>

        <div className="ads_list">
          <div className="list_item">
            <div className="title"><Link to="">Заголовок рекламного объявления </Link></div>
            <div className="image"><Link to=""><img src="images/ads-image.jpg" alt=""/></Link></div>
            <div className="text">Краткий текст рекламного объявления</div>
          </div>
          <div className="list_item">
            <div className="title"><Link to="">Заголовок рекламного объявления </Link></div>
            <div className="image"><Link to=""><img src="images/ads-image.jpg" alt=""/></Link></div>
            <div className="text">Краткий текст рекламного объявления</div>
          </div>
          <div className="list_item">
            <div className="title"><Link to="">Заголовок рекламного объявления </Link></div>
            <div className="image"><Link to=""><img src="images/ads-image.jpg" alt=""/></Link></div>
            <div className="text">Краткий текст рекламного объявления</div>
          </div>
        </div>
        <div className="question_how_to"><Link to="">Как сюда попасть?</Link></div>
    </div>
  )
}


export default AdsList
