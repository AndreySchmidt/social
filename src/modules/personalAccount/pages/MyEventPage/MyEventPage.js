import React from 'react'
import {Link} from 'react-router-dom'

import PageLayout from './../../PageLayout/PageLayout'
import EventInvites from './components/EventInvites/EventInvites'
import Pagination from './../../../app/components/Pagination/Pagination'

// import './MyEventPage.css'
import './../../components/css/lk_user_data.css'
import './../../../app/components/css/list_extended_view.css'

const MyEventPage = () => {
  return (
    <PageLayout>
      <div className="c_header_section_title">
        <Link className="c_button_large link_right" to="/user/15/edit_user_data/main">Найти новые мероприятия</Link >
        <Link className="c_button_large link_right" to="/user/15/edit_user_data/main">Добавить мероприятие</Link >
        Мероприятия
      </div>

      <div className="c_settings_layout clearfix">
        <div className="setting_sections_block">
          <div className="section_title">Фильтры поиска</div>

          <div className="form_line">
            <label>Район</label><br />
            <select className="c_form_input">
              <option>Выбрать район</option>
            </select>
          </div>

          <div className="form_line">
            <label>Категория</label>
            <select className="c_form_input">
              <option>Выбрать категорию</option>
            </select>
          </div>

          <div className="form_line">
            <label>Дата проведения</label>
            <input className="c_form_input" type="text" placeholder="" /><br />
          </div>

          <div className="form_line">
            <label className="element"><input type="checkbox" name="" /> С фото отчетом</label>
          </div>

          <div className="form_line">
            <label className="element"><input type="checkbox" name="" /> С видео отчетом</label>
          </div>

          <div className="dot-separator-3c3c3c"></div>
          <div className="section_link active"><Link to="#">Все</Link ></div>
          <div className="section_link"><Link to="#">Текущие</Link ></div>
          <div className="section_link"><Link to="#">Грядущие</Link ></div>
          <div className="section_link"><Link to="#">Завершенные</Link ></div>
        </div>

        <div className="layout_inner">
          <div className="layout_inner_space">
            <EventInvites />
          </div>
        </div>
      </div>
      <Pagination />
    </PageLayout>
  )
}

export default MyEventPage
