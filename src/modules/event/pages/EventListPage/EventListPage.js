import React from 'react'
import {Link} from 'react-router-dom'

import PageLayout from './../../PageLayout/PageLayout'
import Pagination from './../../../app/components/Pagination/Pagination'
import Search from './../../../app/components/Search/Search'

import './../../../app/components/css/ad_list_page.css'
import './../../../app/components/css/list_extended_view.css'

const EventListPage = () => {
  return (
    <PageLayout>
      <Search />
        <div className="c_ad_search_section">
          <form action="#" method="GET">
            <div className="search_form_wrapper">
              <div className="search_first_line">
                <input className="c_form_input full_width" type="text" placeholder="Например, кинофестиваль" />
              </div>
              <div className="form_line district">
                <div className="caption">
                  <label>Район:</label>
                </div>
                <div className="elements">
                  <Link to="/">Выбрать районы</Link>
                  <div className="selected_districts">Гатчина и Гатчинский район, Волосово и Волосовский район</div>
                </div>
              </div>
              <div className="form_line district">
                <div className="caption">
                  <label>Категории:</label>
                </div>
                <div className="elements">
                  <Link to="/">Выбрать</Link>
                  <div className="">Выставки / конференции</div>
                </div>
              </div>
              <div className="form_line">
                <div className="caption">
                  <label>Дата проведения:</label>
                </div>
                <div className="elements">
                  <input className="c_form_input" type="text" placeholder="ДД.ММ.ГГ" name="" /> &mdash;
                  <input className="c_form_input" type="text" placeholder="ДД.ММ.ГГ" name="" />
                </div>
              </div>
              <div className="form_line">
                <div className="caption">
                  <label>Статус:</label>
                </div>
                <div className="elements">
                  <label className="c_form_checkbox with_sizing"><input type="checkbox" checked="" name="" /> <span>Не важно</span></label>
                  <label className="c_form_checkbox with_sizing"><input type="checkbox" name="" /> <span>Текущие</span></label>
                  <label className="c_form_checkbox with_sizing"><input type="checkbox" name="" /> <span>Грядущие</span></label>
                  <label className="c_form_checkbox"><input type="checkbox" name="" /> <span>Завершенные</span></label>
                </div>
              </div>
              <div className="form_line">
                <div className="caption">
                  <label>С отчетами:</label>
                </div>
                <div className="elements">
                  <label className="c_form_checkbox with_sizing"><input type="checkbox" name="" /> <span>С фото отчетом</span></label>
                  <label className="c_form_checkbox"><input type="checkbox" name="" /> <span>С видео отчетом</span></label>
                </div>
              </div>
              <div className="form_line">
                <div className="elements">
                  <div className="c_search_button">
                    <input type="submit" value="НАЙТИ" className="c_button" />
                  </div>
                </div>
              </div>
              <div className="full_data hide_full">
                <Link to="/"><i></i>Свернуть расширенные параметры<i></i></Link>
              </div>
            </div>
          </form>
        </div>
        <Pagination />
        <div className="c_list_extended_view">
          <div className="list_item clearfix">
            <div className="image_container">
              <Link to="#"><img className="image" src="images/pic-1.jpg" alt="" /></Link>
            </div>
            <div className="content_inner">
              <div className="right_block">
                <div className="c_add_to_list_button">
                  <Link className="button_element" to="/">
                    <img alt="" src="images/icon-add.png" className="icon_add" /> <span>В мой список</span>
                  </Link>
                  <div className="list-hover-wrapper">
                    <span className="list-hover"><Link to="/">Перейти в мой список</Link> <span className="arrow"></span></span>
                  </div>
                </div>
              </div>
              <div className="title"><Link to="/event_item">RETRP-PARTY в ночном клубе Брюлов!</Link></div>
              <div className="description">Ночной клуб Брюлов ждет любтелей хорошо отдохнуть. Уже в эту пятницу долгожданное Retro-Party и море новых коктелей от лучших барменов...</div>
              <div className="occur"><strong className="">7 декабря 2013 в 20:00</strong> Гатчина, ул. Соборная, д. 13</div>
              <div className="type">Категория: <Link to="#">Дискотеки</Link></div>
              <div className="">
                <Link className="inverted" to="#">Коментарии (1)</Link>
                <Link className="inverted" to="#">Фото отчет (30)</Link>
                <Link className="inverted" to="#">Видео отчет (5)</Link>
              </div>
            </div>
          </div>
          <div className="list_item gray clearfix">
            <div className="image_container">
              <Link to="#"><img className="image" src="images/pic-1.jpg" alt="" /></Link>
            </div>
            <div className="content_inner">
              <div className="right_block">
                <div className="c_add_to_list_button">
                  <Link className="button_element" to="/">
                    <img alt="" src="images/icon-add.png" className="icon_add" /> <span>В мой список</span>
                  </Link>
                  <div className="list-hover-wrapper">
                    <span className="list-hover"><Link to="/">Перейти в мой список</Link> <span className="arrow"></span></span>
                  </div>
                </div>
              </div>
              <div className="title"><Link to="/event_item">RETRP-PARTY в ночном клубе Брюлов!</Link></div>
              <div className="description">
                7 декабря (ПЯТНИЦА) - РЕТОРО ПАТИ!<br />
                Ночной клуб Брюлов ждет любтелей хорошо отдохнуть...</div>
              <div className="occur"><strong className="">7 декабря 2013 в 20:00</strong> Гатчина, ул. Соборная, д. 13</div>
              <div className="type">Категория: <Link to="#">Дискотеки</Link></div>
              <div className="">
                <Link className="inverted" to="#">Коментарии (1)</Link>
                <Link className="inverted" to="#">Фото отчет (30)</Link>
                <Link className="inverted" to="#">Видео отчет (5)</Link>
              </div>
            </div>
          </div>
          <div className="list_item colored clearfix">
            <div className="image_container">
              <Link to="#"><img className="image" src="images/pic-1.jpg" alt="" /></Link>
            </div>
            <div className="content_inner">
              <div className="right_block">
                <div className="c_add_to_list_button">
                  <Link className="button_element" to="/">
                    <img alt="" src="images/icon-add.png" className="icon_add" /> <span>В мой список</span>
                  </Link>
                  <div className="list-hover-wrapper">
                    <span className="list-hover"><Link to="/">Перейти в мой список</Link> <span className="arrow"></span></span>
                  </div>
                </div>
              </div>
              <div className="title"><Link to="/event_item">RETRP-PARTY в ночном клубе Брюлов!</Link></div>
              <div className="description">
                7 декабря (ПЯТНИЦА) - РЕТОРО ПАТИ!<br />
                Ночной клуб Брюлов ждет любтелей хорошо отдохнуть...</div>
              <div className="occur"><strong className="">7 декабря 2013 в 20:00</strong> Гатчина, ул. Соборная, д. 13</div>
              <div className="type">Категория: <Link to="#">Дискотеки</Link></div>
              <div className="">
                <Link className="inverted" to="#">Коментарии (1)</Link>
                <Link className="inverted" to="#">Фото отчет (30)</Link>
                <Link className="inverted" to="#">Видео отчет (5)</Link>
              </div>
            </div>
          </div>
        </div>
      <Pagination />
    </PageLayout>
  )
}

export default EventListPage
