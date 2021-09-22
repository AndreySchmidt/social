import React from 'react'
import {Link} from 'react-router-dom'

import iconpin from './../../../app/AppPageLayout/img/icon-pin.png'
import iconemp from './../../../app/AppPageLayout/img/icon-emp.png'
import iconadd from './../../../app/AppPageLayout/img/icon-add.png'

import './../../../app/components/css/ad_list_page.css'
import './../../../app/components/css/blog_search.css'
import './../../../app/components/css/list_extended_view.css'

import PageLayout from "./../../PageLayout/PageLayout"
import Pagination from './../../../app/components/Pagination/Pagination'

const EmployeeListPage = () => {
  return (
    <PageLayout>
      <div className="c_blog_search">
        <form action="#" method="GET">
          <div className="search_form">
            <input className="search_query" type="text" placeholder="Поиск по резюме" />
            <input className="search_submit" type="submit" value="Найти" />
          </div>
        </form>
        <div className="c_type_select">
          Тип обьявления:
          <Link to="/vacancy_list">Вакансии</Link>
          <Link to="/employee_list" className="active">Резюме</Link>
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
                  <Link to="/vacancy_list">Вакансии</Link>
                  <Link to="/employee_list" className="active">Резюме</Link>
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
                <label>Зарплата (руб.):</label>
              </div>
              <div className="elements">
                <input className="c_form_input small_width" type="text" name="" />
                <span className="dash_divider">&mdash;</span>
                <input className="c_form_input small_width" type="text" name="" />
                <label className="c_form_checkbox"><input type="checkbox" name="" />
                <span>Скрывать резюме с неуказанной зарплатой</span></label>
              </div>
            </div>
            <div className="form_line">
              <div className="caption">
                <label>Возраст:</label>
              </div>
              <div className="elements">
                <input className="c_form_input small_width" type="text" name="" />
                <span className="dash_divider">&mdash;</span>
                <input className="c_form_input small_width" type="text" name="" />
                <label className="c_form_checkbox"><input type="checkbox" name="" />
                <span>Не показывать резюме без возраста</span></label>
              </div>
              </div>
              <div className="form_line">
                <div className="caption">
                  <label>Пол:</label>
                </div>
                <div className="elements">
                  <label className="c_form_checkbox with_sizing"><input type="checkbox" name="" /> <span>Не имеет значения</span></label>
                  <label className="c_form_checkbox with_sizing"><input type="checkbox" name="" /> <span>Мужской</span></label>
                  <label className="c_form_checkbox"><input type="checkbox" name="" /> <span>Женский</span></label>
                </div>
              </div>
              <div className="form_line">
                <div className="caption">
                  <label>Образование:</label>
                </div>
                <div className="elements">
                  <label className="c_form_checkbox with_sizing"><input type="checkbox" name="" /> <span>высшее</span></label>
                  <label className="c_form_checkbox with_sizing"><input type="checkbox" name="" /> <span>неполное высшее</span></label>
                  <label className="c_form_checkbox with_sizing"><input type="checkbox" name="" /> <span>среднее специальное</span></label>
                  <label className="c_form_checkbox"><input type="checkbox" name="" /> <span>среднее</span></label>
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
                  <label>
                    <input type="checkbox" className="with_photo_checkbox" />
                    Искать только резюме с фото
                  </label>
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
            <div className="image_container">
              <Link to="/employee">
                <img className="image" src="images/pic-1.jpg" alt="" />
              </Link>
            </div>
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
              <div className="title">
                <Link to="/employee">Резюме/вакансии</Link>
              </div>
              <div className="price">45 000 - 60 000 руб.</div>
              <div><strong>Анна Скляр, 28 лет. Опыт работы 3-5 лет.</strong></div>
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
              <div className="title">
                <Link to="/employee">Резюме/вакансии</Link>
              </div>
              <div className="price">45 000 - 60 000 руб.</div>
              <div><strong>Анна Скляр, 28 лет. Опыт работы 3-5 лет.</strong></div>
              <div className="date">Добавлено: 21.02.2013</div>
            </div>
          </div>
          <div className="list_item gray clearfix">
            <div className="image_container">
              <Link to="/employee">
                <img className="image" src="images/pic-1.jpg" alt="" />
              </Link>
            </div>
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
            <div className="title">
              <Link to="/employee">Резюме/вакансии</Link>
            </div>
            <div className="price">45 000 - 60 000 руб.</div>
            <div><strong>Анна Скляр, 28 лет. Опыт работы 3-5 лет.</strong></div>
            <div className="date">Добавлено: 21.02.2013</div>
          </div>
        </div>
        <div className="list_item clearfix">
            <div className="image_container">
              <Link to="/employee">
                <img className="image" src="images/pic-1.jpg" alt="" />
              </Link>
            </div>
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
              <div className="title">
                <Link to="/employee">Директор по строительству / Начальник отдела снабжения</Link>
              </div>
              <div className="price">45 000 - 60 000 руб.</div>
              <div><strong>Анна Скляр, 28 лет. Опыт работы 3-5 лет.</strong></div>
              <div className="date">Добавлено: 21.02.2013</div>
            </div>
          </div>
      </div>
      <Pagination />
    </PageLayout>
  )
}

export default EmployeeListPage;
