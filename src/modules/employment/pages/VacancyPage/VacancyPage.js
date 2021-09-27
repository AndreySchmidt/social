import React from 'react'
import {Link} from 'react-router-dom'

import PageLayout from './../../PageLayout/PageLayout'

import './../../../app/components/css/search.css'
import './../../../app/components/css/breadcrumbs_bar.css'
import './../../../app/components/css/ad_info_layout.css'

const VacancyPage = () => {
  return (
    <PageLayout>
    <div className="c_blog_search">
      <form action="#" method="GET">
        <div className="search_form">
          <input className="search_query" type="text" placeholder="Например, менеджер по продажам" />
          <input className="search_submit" type="submit" value="Найти" />
        </div>
      </form>
      <div className="c_type_select">
        Тип обьявления:
        <Link to="/vacancy_list" className="active">Вакансии</Link>
        <Link to="/employee_list">Резюме</Link>
      </div>
    </div>
    <div className="c_breadcrumbs_bar">
      <Link className="back" to="#">Назад</Link>
      <div className="breadcrumbs">
        <Link to="/vacancy_list">Работа</Link>
        <span className="separator">&gt;</span>
        <Link to="/vacancy_list">Вакансии</Link>
      </div>
    </div>

    <div className="c_ad_header">
      <div className="edit_ad">
          <Link to="">Редактировать</Link>
      </div>

      <div className="title">Менеджер по продажам</div>
      <div className="other_info">Добавлено: 2013-11-08 01:33:13</div>
    </div>

    <div className="c_ad_info_layout clearfix">
      <div className="large_column">
        <div className="c_ad_primary_info">
          <div className="data_item">
            <span className="price">от 60 000 руб.</span>
          </div>
        </div>

        <div className="c_ad_primary_info">
          <div className="data_item">
            <span className="caption">Опыт работы:</span>
            <span className="district">более 5 лет</span>
          </div>
          <div className="data_item">
            <span className="caption">Образование:</span>
            <span className="district">высшее</span>
          </div>
          <div className="data_item">
            <span className="caption">График:</span>
            <span className="district">полный рабочий день</span>
          </div>
        </div>

        <div className="c_ad_info_blocks">
          <h4  className="caption">Тебования:</h4>
          <div className="data-block">
              - складская деятельность<br />
              - автоматизация склада<br />
              - управление миром
          </div>
          <h4  className="caption">Обязянности:</h4>
          <div className="data-block">
              - складская деятельность<br />
              - автоматизация склада<br />
              - управление миром
          </div>
          <h4  className="caption">Условия:</h4>
          <div className="data-block">
              - складская деятельность<br />
              - автоматизация склада<br />
              - управление миром
          </div>
          <h4  className="caption">Дополнительный коментарий:</h4>
          <div className="data-block">
              Желательно женщина от 30 до 45 лет
          </div>
          <h4  className="caption">Место работы:</h4>
          <div className="data-block">Санкт-Петербург, м Невский проспект, Большая конюшенная 12</div>
        </div>
      </div>

      <div className="small_column">
        <div className="profile_block">
          <div className="person">
            <img alt="" src="images/company-small-logo.jpg" /><br />
            <Link to="#">ООО "Япоша Рашн"</Link><br />
          </div>
          <div className="contacts">
            <h5>Контактное лицо:</h5>
            <span className="blue">Виселькова Светлана Аркадьевна</span><br />
            <strong className="blue">(903) 720 23 42 (с 10 до 18)</strong><br /><br />
          </div>
          <Link className="c_button_large" to="#">Откликнуться на вакансию</Link>
        </div>
        <div className="c_emphasized_ad_info">
          <div className="views">
            <span className="caption">Просмотры:</span>
            <span className="value">Сегодня 507, Всего 11234</span>
          </div>
          <div className="options_title">Увеличить число просмотров:</div>
          <ul className="options_list">
            <li className="vip"><Link to="">Сделать VIP</Link></li>
            <li className="pin"><Link to="">Закрепить объявление</Link></li>
            <li className="emp"><Link to="">Выделить цыетом</Link></li>
            <li className="lift"><Link to="">Поднять объявление в поиске</Link></li>
          </ul>
        </div>
        <Link to=""><img src="images/banner-2.png" alt="" /></Link>
      </div>
  </div>

    <div className="ad_options clearfix">
      <div className="social_links">
        <img src="img/social-sample-small.png" alt="" />
      </div>
      <Link className="add_to_list" to="">В мой список</Link>
      <Link className="report" to="">Пожаловаться</Link>
    </div>

    <div className="c_similar_ads">
      <div className="title">Похожие объявления:</div>
      <div className="ad_list clearfix">
        <div className="list_item">
          <div className="photo"><Link to=""><img src="images/similar-ad-photo.jpg" alt="" /></Link></div>
          <div className="description"><Link to="">ВАЗ 1.5 МТ, 2002, седан</Link></div>
          <div className="price">955 000 руб.</div>
        </div>
       <div className="list_item">
          <div className="photo"><Link to=""><img src="images/similar-ad-photo.jpg" alt="" /></Link></div>
          <div className="description"><Link to="">ВАЗ 1.5 МТ, 2002, седан</Link></div>
          <div className="price">955 000 руб.</div>
        </div>
       <div className="list_item">
          <div className="photo"><Link to=""><img src="images/similar-ad-photo.jpg" alt="" /></Link></div>
          <div className="description"><Link to="">ВАЗ 1.5 МТ, 2002, седан</Link></div>
          <div className="price">955 000 руб.</div>
        </div>
       <div className="list_item">
          <div className="photo"><Link to=""><img src="images/similar-ad-photo.jpg" alt="" /></Link></div>
          <div className="description"><Link to="">ВАЗ 1.5 МТ, 2002, седан</Link></div>
          <div className="price">955 000 руб.</div>
        </div>
       <div className="list_item">
          <div className="photo"><Link to=""><img src="images/similar-ad-photo.jpg" alt="" /></Link></div>
          <div className="description"><Link to="">ВАЗ 1.5 МТ, 2002, седан</Link></div>
          <div className="price">955 000 руб.</div>
        </div>
      </div>
    </div>
  </PageLayout>
  )
}

export default VacancyPage
