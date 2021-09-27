import React from 'react'
import {Link} from 'react-router-dom'

import PageLayout from './../../PageLayout/PageLayout'
import Pagination from './../../../app/components/Pagination/Pagination'

import Search from './../../../app/components/Search/Search'
import './../../../app/components/css/ad_list_page.css'
import './catalog_list.css'
import './catalog_sorting.css'

const GoodsListPage = () => {
  return (
    <PageLayout>
    <Search />

      <div className="c_catalog_sorting">
          Сортировать по:
          <Link className="asc active" to="#" title="по возрастанию цены">Цене</Link>
          <Link className="desc" to="#" title="по убыванию цены">Цене</Link>
          <Link to="#">Рейтингу</Link>
          <Link to="#">Новые</Link>
      </div>
      <Pagination />

        <div className="c_catalog_list">
            <div className="list_item clearfix">
                <div className="company_block">
                    <Link className="name" to="#">Ижора-Строй. Матриалы и оборудование с доставкой по России</Link>
                    <div className="phone">+7 (921) 344-66-77</div>
                    <div className="links">
                      <Link to="#">Отзывы(45 409)</Link>
                      <Link to="#">Товары(14 132)</Link>
                    </div>
                    <Link to="#">Товар на странице организации</Link>
                </div>
                <div className="image_container">
                    <Link to="#"><img className="image" src="images/pic-1.jpg" alt="" /></Link>
                </div>
                <h4 className="title"><Link to="#" title="">Наматрасник "Стебель бамбука" 160x200. RETRO-PARTY в ночном клубе Брюлов!</Link></h4>
                <div className="inner_content">
                    <div className="text_line">
                        <span className="label">Цена:</span>
                        <strong className="price">1 300 руб.</strong>
                        <span className="avalible">В наличии</span>
                    </div>
                    <div className="text_line">
                        <span className="label">Рейтинг:</span>
                        <strong className="rate">+ 50</strong>
                        <Link className="reviews" to="#">Отзывы (407)</Link>
                    </div>
                    <div className="controls">
                        <Link className="c_button_large" to="/">Заказать</Link>
                        <div className="c_add_to_list_button">
                            <Link className="button_element" to="/">
                                <img alt="" src="img/icon-add.png" className="icon_add" /> <span>В мой список</span>
                            </Link>
                            <div className="list-hover-wrapper">
                                <span className="list-hover"><Link to="/">Перейти в мой список</Link> <span className="arrow"></span></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="list_item clearfix">
                <div className="company_block">
                    <Link className="name" to="#">Ижора-Строй. Матриалы и оборудование с доставкой по России</Link>
                    <div className="phone">+7 (921) 344-66-77</div>
                    <div className="links">
                        <Link to="#">Отзывы(45 409)</Link>
                        <Link to="#">Товары(14 132)</Link>
                    </div>
                    <Link to="#">Товар на странице организации</Link>
                </div>
                <div className="image_container">
                    <Link to="#"><img className="image" src="images/pic-1.jpg" alt="" /></Link>
                </div>
                <h4 className="title"><Link to="#">Наматрасник "Стебель бамбука 160x200.</Link></h4>
                <div className="inner_content">
                    <div className="text_line">
                        <span className="avalible">На заказ</span>
                    </div>
                    <div className="text_line">
                        <span className="label">Рейтинг:</span>
                        <strong className="rate">+ 50</strong>
                        <Link className="reviews" to="#">Отзывы (407)</Link>
                    </div>
                    <div className="controls">
                        <Link className="c_button_large" to="/">Отправить сообщение</Link>
                        <div className="c_add_to_list_button">
                            <Link className="button_element" to="/">
                                <img alt="" src="img/icon-add.png" className="icon_add" /> <span>В мой список</span>
                            </Link>
                            <div className="list-hover-wrapper">
                                <span className="list-hover"><Link to="/">Перейти в мой список</Link> <span className="arrow"></span></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="list_item clearfix">
                <div className="company_block">
                    <Link className="name" to="#">Ижора-Строй. Матриалы и оборудование с доставкой по России</Link>
                    <div className="phone">+7 (921) 344-66-77</div>
                    <div className="links">
                        <Link to="#">Отзывы(45 409)</Link>
                        <Link to="#">Товары(14 132)</Link>
                    </div>
                    <Link to="#">Товар на странице организации</Link>
                </div>
                <div className="image_container">
                    <Link to="#"><img className="image" src="images/pic-1.jpg" alt="" /></Link>
                </div>
                <h4 className="title"><Link to="#">Наматрасник "Стебель бамбука 160x200.</Link></h4>
                <div className="inner_content">
                    <div className="text_line">
                        <span className="label">Цена:</span>
                        <strong className="price">1 300 руб.</strong>
                        <span className="avalible">В наличии</span>
                    </div>
                    <div className="text_line">
                        <span className="label">Рейтинг:</span>
                        <strong className="rate">+ 50</strong>
                        <Link className="reviews" to="#">Отзывы (407)</Link>
                    </div>
                    <div className="controls">
                        <Link className="c_button_large" to="/">Заказать</Link>
                        <div className="c_add_to_list_button">
                            <Link className="button_element" to="/">
                                <img alt="" src="img/icon-add.png" className="icon_add" /> <span>В мой список</span>
                            </Link>
                            <div className="list-hover-wrapper">
                                <span className="list-hover"><Link to="/">Перейти в мой список</Link> <span className="arrow"></span></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="list_item clearfix">
                <div className="company_block">
                    <Link className="name" to="#">Ижора-Строй. Матриалы и оборудование с доставкой по России</Link>
                    <div className="phone">+7 (921) 344-66-77</div>
                    <div className="links">
                        <Link to="#">Отзывы(45 409)</Link>
                        <Link to="#">Товары(14 132)</Link>
                    </div>
                    <Link to="#">Товар на странице организации</Link>
                </div>
                <div className="image_container">
                    <Link to="#"><img className="image" src="images/pic-1.jpg" alt="" /></Link>
                </div>
                <h4 className="title"><Link to="#">Наматрасник "Стебель бамбука 160x200.</Link></h4>
                <div className="inner_content">
                    <div className="text_line">
                        <span className="label">Цена:</span>
                        <strong className="price">1 300 руб.</strong>
                        <span className="avalible">В наличии</span>
                    </div>
                    <div className="text_line">
                        <span className="label">Рейтинг:</span>
                        <strong className="rate">+ 50</strong>
                        <Link className="reviews" to="#">Отзывы (407)</Link>
                    </div>
                    <div className="controls">
                        <Link className="c_button_large" to="/">Заказать</Link>
                        <div className="c_add_to_list_button">
                            <Link className="button_element" to="/">
                                <img alt="" src="img/icon-add.png" className="icon_add" /> <span>В мой список</span>
                            </Link>
                            <div className="list-hover-wrapper">
                                <span className="list-hover">
                                <Link to="/">Перейти в мой список</Link> <span className="arrow"></span></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    <Pagination />
    </PageLayout>
  )
}

export default GoodsListPage
