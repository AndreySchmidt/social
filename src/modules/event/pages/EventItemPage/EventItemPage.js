import React from 'react'
import {Link} from 'react-router-dom'

import PageLayoutItem from './../../PageLayoutItem/PageLayoutItem'

import './../../../app/components/css/list_extended_view.css'

import './event_page.css'
import './event_page_controls.css'

const EventItemPage = () => {
  return (
    <PageLayoutItem>
      <div className="main_content_column">
        <h2 className="title">RETRO-PARTY в ночном клубе Брюлов!</h2>
        <div className="event_info">
          <div className="field ">
            <div className="label">Описание</div>
            Ночной клуб Брюлов ждет любтелей хорошо отдохнуть. Уже в эту пятницу долгожданное Retro-Party и море новых коктелей от лучших барменов!
          </div>
          <div className="field ">
            <div className="label">Сайт</div>
            www.site.ru
          </div>
          <div className="field ">
            <div className="label">Начало</div>
            6 апреля 2014 в 19:00
          </div>
          <div className="field ">
            <div className="label">Окончание</div>
            7 апреля 2014 в 4:00
          </div>
          <div className="field ">
            <div className="label">Место проведения</div>
            название места
          </div>
          <div className="field ">
            <div className="label">Адрес</div>
            Гатчина, ул. Соборная, д.13
            <br /><Link to="#">показать на карте</Link>
          </div>
          <div className="field ">
            <div className="label">Организатор</div>
            <Link className="text" to="#">Алексей Игнатенко</Link>
          </div>
        </div>
        Компонент комментариев component name="c_wall"
      </div>
    </PageLayoutItem>
  )
}

export default EventItemPage
