import React from 'react'
import {Link} from 'react-router-dom'

import PageLayout from './../../PageLayout/PageLayout'

import './../../../app/components/css/ad_list_page.css'
import './../../../app/components/css/list_extended_view.css'
import './event_create.css'

const EventAddPage = () => {
  return (
    <PageLayout>
      <div className="c_event_create">
        <form action="#" method="post">
          <h4 className="header">Добавить мероприятие</h4>
          <div className="fieldset">
            <div className="element-container">
              <label for="name">Заголовок:</label>
              <input type="text" value="" name="name" className="type-text" />
            </div>
            <div className="element-container category">
              <label>Категория</label>
              <select name="category">
                <option value="NO" selected="selected">Выберите категорию</option>
              </select>
            </div>
            <div className="element-container">
              <label>Район:</label>
              <Link className="select-init" to="">Выбрать районы</Link><br />
              <div className="select-result">
                <span>Гатчина и Гатчинский район</span>,
                <span>Волосово и Волосовский район</span>
              </div>
            </div>
            <div className="element-container">
              <label>Дата/Время начала мероприятия:</label>
              <input className="type-text width-third" type="text" placeholder="Дата" value="" name="" />
              <select className="width-third" name="birth_month">
                <option value="NO" selected="selected">Часы</option>
              </select>
              <select className="width-third" name="birth_year">
                <option value="NO" selected="selected">Минуты</option>
              </select>
            </div>
            <div className="element-container">
              <label>Дата/Время завершения мероприятия:</label>
              <input className="type-text width-third" type="text" placeholder="Дата" value="" name="" />
              <select className="width-third" name="birth_month">
                <option value="NO" selected="selected">Часы</option>
              </select>
              <select className="width-third" name="birth_year">
                <option value="NO" selected="selected">Минуты</option>
              </select>
            </div>
            <div className="element-container">
              <label>Описание:</label>
              <textarea className="type-text" name=""></textarea>
            </div>
            <div className="element-container">
              <label>Организатор:</label>
              <label className="normal"><input type="checkbox" checked="checked" value="" name="" /> Организатор я</label><br />
              <input className="type-text" type="text"
                      placeholder="Или введите организатора вручную" name="" value="" />
            </div>
            <div className="element-container">
              <label for="website">Сайт:</label>
              <input type="text" value="" name="website" className="type-text" />
            </div>
            <div className="element-container">
              <label for="file">Основное фото:</label>
              <Link className="c_button" to="">Выбрать файл</Link>
              <div className="result-preview"><img src="images/event-pic.jpg" alt="" /></div>
            </div>
            <div className="element-container">
              <label>Место проведения:</label>
              <input className="type-text" type="text"
                      placeholder="Введите название места" name="" value="" />
            </div>
            <div className="element-container">
              <label for="name">Адрес:</label>
              <input type="text" value="" name="adress" className="type-text" />
            </div>
            <div className="element-container">
              <label>Указать на карте:</label>
              <Link className="show-coords c_button" to="">Найти на карте</Link>
              <br />
              <p className="map-note">Перетащите маркер на карте для уточнения координат</p>
              <div className="map">
                <img src="images/organiz-map.jpg" />
              </div>
            </div>
            <div className="button-container">
              <input className="c_button" type="submit" name="" value="Добавить мероприятие" />
            </div>
          </div>
        </form>
      </div>
    </PageLayout>
  )
}

export default EventAddPage
