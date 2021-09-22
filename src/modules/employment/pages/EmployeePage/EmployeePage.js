import React from 'react'
import {Link} from 'react-router-dom'

import PageLayout from './../../PageLayout/PageLayout'

const EmployeePage = () => {
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
          <Link to="#">Вакансии</Link>
          <Link to="#" className="active">Резюме</Link>
        </div>
      </div>
      <div className="c_breadcrumbs_bar">
        <Link className="back" to="#">Назад</Link>
        <div className="breadcrumbs">
          <Link to="#">Работа</Link>
          <span className="separator">&gt;</span>
          <Link to="#">Вакансии</Link>
        </div>
      </div>
      <div className="c_ad_header">
        <div className="edit_ad">
          <Link to="">Редактировать</Link>
        </div>
        <div className="title">Начальник складского комплекса / Начальник склада</div>
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
            <h4  className="caption">Желаемые должности и сферы деятельности:</h4>
            <div className="data-block">
              - складская деятельность<br />
              - автоматизация склада<br />
              - управление миром
            </div>
            <h4  className="caption">Опыт работы:</h4>
            <div className="data-block experience">
              <div className="blue">ООО Гранд-сервис</div>
              <div><strong>Область деятельности:</strong> Торговля, оптовая торговля</div>
              <div><strong>Должность:</strong> Заведующий складом</div>
              <div className="resp">
                <strong>Обязанности:</strong>
                <p> Заведующий складом (кондитерские изделия, чай, кофе). Склад 3000м, номенклатура 3тыс. позиций. В подчинении 30 человек. Ежедневная загрузка 30-35 машин.</p>
              </div>
            </div>
            <div className="data-block experience">
              <div className="blue">ООО Гранд-сервис</div>
              <div><strong>Область деятельности:</strong> Торговля, оптовая торговля</div>
              <div><strong>Должность:</strong> Заведующий складом</div>
              <div className="resp">
                <strong>Обязанности:</strong>
                <p> Заведующий складом (кондитерские изделия, чай, кофе). Склад 3000м, номенклатура 3тыс. позиций. В подчинении 30 человек. Ежедневная загрузка 30-35 машин.</p>
              </div>
            </div>
            <h4  className="caption">Высшее образование:</h4>
            <div className="data-block">
              <div className="blue">МАЮН, 2007-2011, высшее</div>
              <div>Специальность: гражданское право</div>
            </div>
            <div className="data-block">
              <div className="blue">Московский государственный технологический университет, 2007-2011, высшее</div>
              <div>Специальность: Экономика и управление на предприятии</div>
            </div>
            <h4  className="caption">Повышение квалификации:</h4>
            <div className="data-block">
              <div>Квалификация: качественная квалификация</div>
              <div>Учебное заведение: Институт повышения квалификации</div>
              <div>Год получения: 2007</div>
            </div>
            <div className="data-block">
              <div>Квалификация: качественная квалификация</div>
              <div>Учебное заведение: Институт повышения квалификации</div>
              <div>Год получения: 2005</div>
            </div>
            <h4  className="caption">Профессиональные навыки:</h4>
            <div className="data-block">
              Some info about mySelf
            </div>
            <h4  className="caption">Дополнительная информация:</h4>
            <div className="data-block">
              <div>Английский: выучу</div>
              <div>Семейное положение: верховный главнокомадующий</div>
              <div>Дети: уже достали</div>
              <div>Возможность командировок: минимум 1 раз в месяц и желательно заграничные</div>
            </div>
            <h4  className="caption">Иностранные языки:</h4>
            <div className="data-block">Английский: начальный</div>
          </div>
        </div>

      <div className="small_column">
        <div className="profile_block">
          <div className="person">
            <img alt="" src="images/ava-254x.jpg" />
            <Link to="#">Константин Сергеевич</Link><br />
            33 года, Гатчина
          </div>
          <div className="contacts">
            <h5>Контакты:</h5>
            <strong className="blue">(903) 720 23 42 (с 10 до 18)</strong><br />
            <Link to="#">konstantin@administrator.net.ru</Link>
          </div>
          <Link className="c_button_large" to="#">Связаться с соискателем</Link>
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
        <Link to=""><img src="4_files/banner-2.png" alt="" /></Link>
      </div>
    </div>

    <div className="ad_options clearfix">
      <div className="social_links">
        <img src="4_files/social-sample-small.png" alt="" />
      </div>
      <Link className="add_to_list" to="">В мой список</Link>
      <Link className="report" to="">Пожаловаться</Link>
    </div>

    <div className="c_similar_ads">
      <div className="title">Похожие объявления:</div>
      <div className="ad_list clearfix">
        <div className="list_item">
          <div className="photo"><Link to=""><img src="4_files/similar-ad-photo.jpg" alt="" /></Link></div>
          <div className="description"><Link to="">ВАЗ 1.5 МТ, 2002, седан</Link></div>
          <div className="price">955 000 руб.</div>
        </div>
       <div className="list_item">
          <div className="photo"><Link to=""><img src="4_files/similar-ad-photo.jpg" alt="" /></Link></div>
          <div className="description"><Link to="">ВАЗ 1.5 МТ, 2002, седан</Link></div>
          <div className="price">955 000 руб.</div>
        </div>
       <div className="list_item">
          <div className="photo"><Link to=""><img src="4_files/similar-ad-photo.jpg" alt="" /></Link></div>
          <div className="description"><Link to="">ВАЗ 1.5 МТ, 2002, седан</Link></div>
          <div className="price">955 000 руб.</div>
        </div>
       <div className="list_item">
          <div className="photo"><Link to=""><img src="4_files/similar-ad-photo.jpg" alt="" /></Link></div>
          <div className="description"><Link to="">ВАЗ 1.5 МТ, 2002, седан</Link></div>
          <div className="price">955 000 руб.</div>
        </div>
       <div className="list_item">
          <div className="photo"><Link to=""><img src="4_files/similar-ad-photo.jpg" alt="" /></Link></div>
          <div className="description"><Link to="">ВАЗ 1.5 МТ, 2002, седан</Link></div>
          <div className="price">955 000 руб.</div>
        </div>
      </div>
    </div>
    </PageLayout>
  )
}

export default EmployeePage
