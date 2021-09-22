import React from "react"
import {Link} from "react-router-dom"

import iconpin from './../../../app/AppPageLayout/img/icon-pin.png'
import iconemp from './../../../app/AppPageLayout/img/icon-emp.png'
import iconadd from './../../../app/AppPageLayout/img/icon-add.png'

import './../../../app/components/css/ad_list_page.css'
import './../../../app/components/css/blog_search.css'
import './../../../app/components/css/list_extended_view.css'

import PageLayout from "./../../PageLayout/PageLayout"
import Pagination from './../../../app/components/Pagination/Pagination'

const vacancyListPage = () => {
  return(
    <PageLayout>
      <div className="c_blog_search">
        <form action="#" method="GET">
          <div className="search_form">
            <input className="search_query" type="text" placeholder="Поиск по вакансиям" />
            <input className="search_submit" type="submit" value="Найти" />
          </div>
        </form>
        <div className="c_type_select">
          Тип обьявления:
          <Link to="/vacancy_list" className="active">Вакансии</Link>
          <Link to="/employee_list">Резюме</Link>
        </div>
      </div>

      <div className="c_ad_search_section">
        <form action="#" method="GET">
          <div className="search_form_wrapper">
            <div className="search_first_line">
              <input className="c_form_input full_width" type="text" placeholder="Например, менеджер по продажам" />
            </div>

            <div className="form_line">
              <div className="caption">
                <label>Тип объявления:</label>
              </div>
              <div className="elements">
                <div className="c_type_select">
                  <Link to="/vacancy_list" className="active">Вакансии</Link>
                  <Link to="/employee_list">Резюме</Link>
                </div>
              </div>
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
                <label>Сферы деательности:</label>
              </div>
              <div className="elements">
                <Link to="/">Выбрать</Link>
                <div className="selected_districts">IT / Интернет / Телеком</div>
              </div>
            </div>

            <div className="form_line">
              <div className="caption">
                <label>Зарплата от(руб.):</label>
              </div>
              <div className="elements">
                <input className="c_form_input small_width" type="text" name="" />
                <label className="c_form_checkbox"><input type="checkbox" name="" /> <span>Скрывать вакансии с договорной зарплатой</span></label>
              </div>
            </div>

            <div className="form_line">
              <div className="caption">
                <label>Опыт работы:</label>
              </div>
              <div className="elements">
                <label className="c_form_checkbox with_sizing"><input type="checkbox" name="" /> <span>без опыта</span></label>
                <label className="c_form_checkbox with_sizing"><input type="checkbox" name="" /> <span>от 1 года до 3 лет</span></label>
                <label className="c_form_checkbox with_sizing"><input type="checkbox" name="" /> <span>от 3 до 6 лет</span></label>
                <label className="c_form_checkbox"><input type="checkbox" name="" /> <span>от 6 лет</span></label>
              </div>
            </div>

            <div className="form_line">
              <div className="caption">
                <label>График работы:</label>
              </div>
              <div className="elements">
                <label className="c_form_checkbox with_sizing"><input type="checkbox" name="" /> <span>полный рабочий день</span></label>
                <label className="c_form_checkbox with_sizing"><input type="checkbox" name="" /> <span>сменный</span></label>
                <label className="c_form_checkbox with_sizing"><input type="checkbox" name="" /> <span>свободный</span></label>
                <label className="c_form_checkbox with_sizing"><input type="checkbox" name="" /> <span>частичная занятость</span></label>
                <label className="c_form_checkbox"><input type="checkbox" name="" /> <span>удаленная работа</span></label>
              </div>
            </div>

            <div className="form_line">
              <div className="caption">
                <label>За период:</label>
              </div>
              <div className="elements">
                <select className="c_form_input period_select">
                  <option>Без ограничений</option>
                  <option>Без ограничений</option>
                  <option>Без ограничений</option>
                  <option>Без ограничений</option>
                </select>
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
        <div className="list_item colored clearfix">
          <div className="content_inner">
            <div className="right_block">
              <div className="c_add_to_list_button">
                <Link className="button_element" to="/">
                  <img alt="" src={iconadd} className="icon_add" /> <span>В мой список</span>
                </Link>
                <div className="list-hover-wrapper">
                  <span className="list-hover"><Link to="/">Перейти в мой список</Link> <span className="arrow"></span></span>
                </div>
              </div>
              <div className="icons_container">
                <img alt="" src={iconemp} className="icon" />
                <img alt="" src={iconpin} className="icon" />
              </div>
            </div>
            <div className="title"><Link to="/vacancy">Менеджер по работе с клиентами</Link></div>
            <div className="price">30 000 - 35 000 руб.</div>
            <div className="agency">Банк Русский Стандарт, ЗАО</div>
            <div className="date">Добавлено: 21.02.2013</div>
          </div>
        </div>

      <div className="list_item clearfix">
        <div className="content_inner">
          <div className="right_block">
            <div className="c_add_to_list_button">
              <Link className="button_element" to="/">
                <img alt="" src={iconadd} className="icon_add" /> <span>В мой список</span>
              </Link>
              <div className="list-hover-wrapper">
                <span className="list-hover"><Link to="/">Перейти в мой список</Link> <span className="arrow"></span></span>
              </div>
            </div>
            <div className="icons_container">
              <img alt="" src={iconemp} className="icon" />
              <img alt="" src={iconpin} className="icon" />
            </div>
          </div>
          <div className="title"><Link to="/vacancy">Менеджер по работе с клиентами</Link></div>
          <div className="price">30 000 - 35 000 руб.</div>
          <div className="agency">Банк Русский Стандарт, ЗАО</div>
          <div className="date">Добавлено: 21.02.2013</div>
        </div>
      </div>

        <div className="list_item gray clearfix">
          <div className="content_inner">
            <div className="right_block">
              <div className="c_add_to_list_button">
                <Link className="button_element" to="/">
                  <img alt="" src={iconadd} className="icon_add" /> <span>В мой список</span>
                </Link>
                <div className="list-hover-wrapper">
                  <span className="list-hover"><Link to="/">Перейти в мой список</Link> <span className="arrow"></span></span>
                </div>
              </div>
              <div className="icons_container">
                <img alt="" src={iconemp} className="icon" />
                <img alt="" src={iconpin} className="icon" />
              </div>
            </div>
            <div className="title"><Link to="/vacancy">Менеджер по работе с клиентами</Link></div>
            <div className="price">30 000 - 35 000 руб.</div>
            <div className="agency">Банк Русский Стандарт, ЗАО</div>
            <div className="date">Добавлено: 21.02.2013</div>
          </div>
        </div>

        <div className="list_item clearfix">
          <div className="content_inner">
            <div className="right_block">
              <div className="c_add_to_list_button">
                <Link className="button_element" to="/">
                  <img alt="" src={iconadd} className="icon_add" /> <span>В мой список</span>
                </Link>
                <div className="list-hover-wrapper">
                  <span className="list-hover"><Link to="/">Перейти в мой список</Link> <span className="arrow"></span></span>
                </div>
              </div>
              <div className="icons_container">
                <img alt="" src={iconemp} className="icon" />
                <img alt="" src={iconpin} className="icon" />
              </div>
            </div>
            <div className="title"><Link to="/vacancy">Менеджер по работе с клиентами</Link></div>
            <div className="price">30 000 - 35 000 руб.</div>
            <div className="agency">Банк Русский Стандарт, ЗАО</div>
            <div className="date">Добавлено: 21.02.2013</div>
          </div>
        </div>
      </div>
      <Pagination />
    </PageLayout>
  )
}

export default vacancyListPage
