import React from 'react'
import {Link} from 'react-router-dom'

import wallavatar1 from './../../../app/AppPageLayout/images/wall-avatar-1.jpg'

import PageLayout from './../../PageLayout/PageLayout'
import Pagination from './../../components/Pagination/Pagination'

import './lk_otziv_filter.css'
import './lk_otziv_list.css'
import './../../components/css/lk_user_data.css'

const ResponsePage = () => {
  return (
    <PageLayout>
    <div className="main_content">

        <div className="c_header_section_title">Мои отзывы</div>


        <div className="c_lk_otziv_list">

            <div className="c_lk_otziv_filter">
                <div className="c_type_select">
                    <Link to="#" className="active">Все</Link>
                    <Link to="#">Организации</Link>
                    <Link to="#">Товары / услуги</Link>
                </div>

                <div className="c_quick_search clearfix">
                <form action="#" method="GET">
                    <div className="search_form">
                        <input className="search_query" type="text" placeholder="Быстрый поиск" />
                        <input className="search_reset" type="reset" title="Очистить" value="Очистить" />
                        <input className="search_submit hidden" type="submit" value="Найти" />
                    </div>
                </form>
                </div>
            </div>



            <div className="comment-target">

                <h4 className="title"><Link to="">Ижора-Строй. Материалы и оборудование с доставкой по России</Link></h4>

                <div className="contacts_section">
                    <span className="phone">+7 (921) 344-56-77</span>
                    <Link className="mail" to="mailto:company@yandex.ru">company@yandex.ru</Link>
                    <Link className="site" to="">www.company-site.ru</Link>
                </div>
                <div className="bottom_link">
                    <Link to="">Скидки и акции (3)</Link>
                    <Link to="">Отзывы (4)</Link>
                    <Link to="">Товары (34)</Link>
                    <Link to="">Новости</Link>
                    <Link to="">Фото </Link>
                    <Link to="">Видео</Link>
                </div>
                <div className="comment-corner"></div>
            </div>
            <div className="comment clearfix">
                <img className="user-avatar" src={wallavatar1} alt="" />
                <Link className="name" to="#">Павел Кравцов</Link> <span className="date" title="Добавлено: 29.10.2013">29.10.2013</span>
                <span className="c_otziv_controls">
                    <Link to="" className="remove last" title="Удалить">Удалить</Link>
                </span>
                <div className="text">Раньше ученые полагали, что трехкомпонентное образование распознает диэтиловый эфир, однако между карбоксильной группой и аминогруппой может возникнуть солевой мостик. Полоса поглощения гомологична. Комплекс-аддукт взвешивает рацемический сахар, как и предсказывает основной постулат квантовой химии. Окисление химически полимеризует органический гомолог, тем самым открывая возможность. Раньше ученые полагали, что трехкомпонентное образование распознает диэтиловый эфир, однако между карбоксильной группой и аминогруппой может возникнуть солевой мостик.</div>
            </div>


            <div className="comment-target goods">
                <h4 className="title"><Link to="#">Наматрасник "Стебель бамбука" 160x200.</Link></h4>
                <div className="price">
                    Цена:
                    <strong>1 300 руб.</strong>
                </div>
                <div className="comment-corner"></div>
            </div>
            <div className="comment clearfix">
                <img className="user-avatar" src={wallavatar1} alt="" />
                <Link className="name" to="#">Павел Кравцов</Link> <span className="date">2.05.2013</span>
                <span className="c_otziv_controls">
                    <Link to="" className="remove last" title="Удалить">Удалить</Link>
                </span>
                <div className="text">комментарий</div>
            </div>


        </div>
        <Pagination />
    </div>
    </PageLayout>
  )
}

export default ResponsePage
