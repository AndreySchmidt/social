import React from 'react'
import {Link} from 'react-router-dom'

import PageLayout from './../../PageLayout/PageLayout'
import Pagination from './../../../app/components/Pagination/Pagination'

import './../../../app/components/css/ad_list_page.css'

const OrganisationListPage = () => {
  return (
    <PageLayout>
    <div className="c_ad_search_section">

    <form>

    <div className="search_form_wrapper">
        <div className="search_first_line">
            <div className="search_input_with_button">
                <input className="c_form_input with_button" type="text" placeholder="Например, квартира "/>
                <input className="c_after_input_search_button" type="submit" value="НАЙТИ"/>
            </div>
        </div>

        <label className="c_form_checkbox with_sizing">
            <input type="checkbox"/>
            <span>Искать только организации со скидками и акциями</span>
        </label>
    </div>

    </form>
    </div>
    <Pagination />
    <div className="c_list_extended_org_view">
        <div className="list_item colored clearfix">
            <div className="image_container">
                <Link to="/">
                    <img className="image" src="images/ad-search-ext-list.jpg" alt="" />
                </Link>
            </div>

            <div className="content_inner">

                <div className="right_block">
                    <div className="c_add_to_list_button">
                        <Link to="/" className="button_element">
                            <img className="icon_add" src="img/icon-add.png" alt="" /> <span>В мой список</span>
                        </Link>
                        <div className="list-hover-wrapper">
                            <span className="list-hover"><Link to="/">Перейти в мой список</Link> <span className="arrow"></span></span>
                        </div>
                    </div>
                    <div className="icons_container">
                    </div>
                </div>

                <div className="title"><Link to="/">Ижора-Строй. Материалы и оборудование с доставкой по России</Link></div>

                <div className="contacts_section">
                    <div className="column_third">
                        <div className="contact_item phone">+7 (921) 344-56-77</div>
                    </div>
                    <div className="column_third">
                        <div className="contact_item mail"><Link to="mailto:company@yandex.ru">company@yandex.ru</Link></div>
                    </div>
                    <div className="column_third">
                        <div className="contact_item site"><Link to="/">www.company-site.ru</Link></div>
                    </div>
                </div>

                <div className="muted_text">Межкомнатные двери от производителя.</div>

                <div className="bottom_link">
                    <Link to="/">Скидки и акции (3)</Link>
                    <Link to="/">Отзывы (4)</Link>
                    <Link to="/">Товары (34)</Link>
                    <Link to="/">Новости</Link>
                    <Link to="/">Фото </Link>
                    <Link to="/">Видео</Link>
                </div>
            </div>
        </div>


        <div className="list_item clearfix">
            <div className="image_container">
                <Link to="/">
                    <img className="image" src="images/ad-search-ext-list.jpg" alt=""/>
                </Link>
            </div>
            <div className="content_inner">
                <div className="right_block">
                    <div className="c_add_to_list_button">
                        <Link to="/" className="button_element">
                            <img className="icon_add" src="img/icon-add.png" alt="" /> <span>В мой список</span>
                        </Link>
                        <div className="list-hover-wrapper">
                            <span className="list-hover"><Link to="/">Перейти в мой список</Link> <span className="arrow"></span></span>
                        </div>
                    </div>
                    <div className="icons_container">
                    </div>
                </div>
                <div className="title"><Link to="/">Ижора-Строй. Материалы и оборудование с доставкой по России</Link></div>
                <div className="contacts_section">
                    <div className="column_third">
                        <div className="contact_item phone">+7 (921) 344-56-77</div>
                    </div>
                    <div className="column_third">
                        <div className="contact_item mail"><Link to="mailto:company@yandex.ru">company@yandex.ru</Link></div>
                    </div>
                    <div className="column_third">
                        <div className="contact_item site"><Link to="/">www.company-site.ru</Link></div>
                    </div>
                </div>

                <div className="muted_text">Межкомнатные двери от производителя.</div>

                <div className="bottom_link">
                    <Link to="/">Скидки и акции (3)</Link>
                    <Link to="/">Отзывы (4)</Link>
                    <Link to="/">Товары (34)</Link>
                    <Link to="/">Новости</Link>
                    <Link to="/">Фото </Link>
                    <Link to="/">Видео</Link>
                </div>
            </div>
        </div>


        <div className="list_item gray clearfix">
            <div className="image_container">
                <Link to="/">
                    <img className="image" src="images/ad-search-ext-list.jpg" alt=""/>
                </Link>
            </div>
            <div className="content_inner">
                <div className="right_block">
                    <div className="c_add_to_list_button">
                        <Link to="/" className="button_element">
                            <img className="icon_add" src="img/icon-add.png" alt="" /> <span>В мой список</span>
                        </Link>
                        <div className="list-hover-wrapper">
                            <span className="list-hover"><Link to="/">Перейти в мой список</Link> <span className="arrow"></span></span>
                        </div>
                    </div>
                    <div className="icons_container">
                    </div>
                </div>

                <div className="title"><Link to="/">Ижора-Строй. Материалы и оборудование с доставкой по России</Link></div>
                <div className="contacts_section">
                    <div className="column_third">
                        <div className="contact_item phone">+7 (921) 344-56-77</div>
                    </div>
                    <div className="column_third">
                        <div className="contact_item mail"><Link to="mailto:company@yandex.ru">company@yandex.ru</Link></div>
                    </div>
                    <div className="column_third">
                        <div className="contact_item site"><Link to="/">www.company-site.ru</Link></div>
                    </div>
                </div>
                <div className="muted_text">Межкомнатные двери от производителя.</div>

                <div className="bottom_link">
                    <Link to="/">Скидки и акции (3)</Link>
                    <Link to="/">Отзывы (4)</Link>
                    <Link to="/">Товары (34)</Link>
                    <Link to="/">Новости</Link>
                    <Link to="/">Фото </Link>
                    <Link to="/">Видео</Link>
                </div>
            </div>
        </div>


        <div className="list_item clearfix">
            <div className="image_container">
                <Link to="/">
                    <img className="image" src="images/ad-search-ext-list.jpg" alt=""/>
                </Link>
            </div>

            <div className="content_inner">

                <div className="right_block">
                    <div className="c_add_to_list_button">
                        <Link to="/" className="button_element">
                            <img className="icon_add" src="img/icon-add.png" alt="" /> <span>В мой список</span>
                        </Link>

                        <div className="list-hover-wrapper">
                            <span className="list-hover"><Link to="/">Перейти в мой список</Link> <span className="arrow"></span></span>
                        </div>
                    </div>

                    <div className="icons_container">

                    </div>
                </div>

                <div className="title"><Link to="/">Ижора-Строй. Материалы и оборудование с доставкой по России</Link></div>

                <div className="contacts_section">
                    <div className="column_third">
                        <div className="contact_item phone">+7 (921) 344-56-77</div>
                    </div>
                    <div className="column_third">
                        <div className="contact_item mail"><Link to="mailto:company@yandex.ru">company@yandex.ru</Link></div>
                    </div>
                    <div className="column_third">
                        <div className="contact_item site"><Link to="/">www.company-site.ru</Link></div>
                    </div>
                </div>

                <div className="muted_text">Межкомнатные двери от производителя.</div>

                <div className="bottom_link">
                    <Link to="/">Скидки и акции (3)</Link>
                    <Link to="/">Отзывы (4)</Link>
                    <Link to="/">Товары (34)</Link>
                    <Link to="/">Новости</Link>
                    <Link to="/">Фото </Link>
                    <Link to="/">Видео</Link>
                </div>
            </div>
        </div>


        <div className="list_item gray clearfix">
            <div className="image_container">
                <Link to="/">
                    <img className="image" src="images/ad-search-ext-list.jpg" alt=""/>
                </Link>
            </div>

            <div className="content_inner">

                <div className="right_block">
                    <div className="c_add_to_list_button">
                        <Link to="/" className="button_element">
                            <img className="icon_add" src="img/icon-add.png" alt="" /> <span>В мой список</span>
                        </Link>

                        <div className="list-hover-wrapper">
                            <span className="list-hover"><Link to="/">Перейти в мой список</Link> <span className="arrow"></span></span>
                        </div>
                    </div>

                    <div className="icons_container">

                    </div>
                </div>

                <div className="title"><Link to="/">Ижора-Строй. Материалы и оборудование с доставкой по России</Link></div>

                <div className="contacts_section">
                    <div className="column_third">
                        <div className="contact_item phone">+7 (921) 344-56-77</div>
                    </div>
                    <div className="column_third">
                        <div className="contact_item mail"><Link to="mailto:company@yandex.ru">company@yandex.ru</Link></div>
                    </div>
                    <div className="column_third">
                        <div className="contact_item site"><Link to="/">www.company-site.ru</Link></div>
                    </div>
                </div>

                <div className="muted_text">Межкомнатные двери от производителя.</div>

                <div className="bottom_link">
                    <Link to="/">Скидки и акции (3)</Link>
                    <Link to="/">Отзывы (4)</Link>
                    <Link to="/">Товары (34)</Link>
                    <Link to="/">Новости</Link>
                    <Link to="/">Фото </Link>
                    <Link to="/">Видео</Link>
                </div>
            </div>
        </div>
    </div>
    <Pagination />
    </PageLayout>
  )
}

export default OrganisationListPage
