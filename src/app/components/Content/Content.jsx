import React from 'react'
import './Content.css'
// import './../../../assets/constants.js'
// import pic from './../../../assets/pic-ava-100x100.jpg'

const Content = () => {
const onChangeHandler = () => {}

  return (
    <div className="main_content">

          <div className="c_header_section_title">
              <a className="c_button_large link_right" href="/">Найти друзей</a>
              <a className="c_button_large link_right" href="/">Пригласить друга</a>
              Мои друзья</div>

          <div className="c_settings_layout clearfix">
              <div className="c_lk_friends_dock setting_sections_block">

                  <div className="section_title">Фильтры поиска</div>

                  <div className="form_line">
                      <label>Район</label><br />
                      <select className="c_form_input">
                          <option>Выбрать район</option>
                      </select>
                  </div>

                  <div className="form_line">
                      <label>Возраст</label><br />
                      <select className="c_form_input width-third">
                          <option>от</option>
                      </select>
                      <span className="mdash">—</span>
                      <select className="c_form_input width-third">
                          <option>до</option>
                      </select>
                  </div>

                  <div className="form_line">
                      <label className="element">Пол</label>
                  </div>
                  <div className="form_line">
                      <label className="element"><input type="radio" name="gender[]" checked="checked" onChange = {() => {onChangeHandler()}} /> Не важно</label>
                  </div>
                  <div className="form_line">
                      <label className="element"><input type="radio" name="gender[]" /> Мужской</label>
                  </div>
                  <div className="form_line">
                      <label className="element"><input type="radio" name="gender[]" /> Женский</label>
                  </div>

                  <div className="dot-separator-3c3c3c"></div>
                  <div className="section_link active"><a href="/">Все друзья</a></div>
                  <div className="section_link"><a href="/">Телефонные номера</a></div>
                  <div className="section_link"><a href="/">Электронная почта</a></div>
              </div>

              <div className="layout_inner">
                  <div className="layout_inner_space">
                  <div className="c_lk_friends">

                      <h2 className="title">У Вас 300 друзей</h2>

                      <div className="c_type_select">
                          <a href="/" className="active">Все друзья</a>
                          <a href="/">Друзья онлайн</a>
                          <a href="/">Заявки в друзья (4)</a>
                      </div>

                      <div className="c_quick_search clearfix">
                      <form method="GET" action="#">
                          <div className="search_form">
                              <input type="text" placeholder="Начните набирать имя друга" className="search_query" />
                              <input type="reset" value="Очистить" title="Очистить" className="search_reset" />
                              <input type="submit" value="Найти" className="search_submit hidden" />
                          </div>
                      </form>
                      </div>

                      <p className="info hidden">У Вас пока еще нет друзей</p>


                      <div className="friend clearfix">
                          <div className="rightside">
                              <a className="write" href="/">Написать</a><br />
                              <a className="fave-del" href="/">Удалить</a>
                          </div>


                          <a href="/" className="name">Елизавета Владимировна Бондарчук</a><br />
                          <span className="status online">online</span>
                      </div>

                      <div className="friend clearfix">
                          <div className="rightside">
                              <a className="write" href="/">Написать</a><br />
                              <a className="fave-del" href="/">Удалить</a>
                          </div>


                          <a href="/" className="name">Елизавета Владимировна</a><br />
                          <span className="status offline">offline</span>
                      </div>

                  </div>
                  </div>
              </div>
          </div>

          <div className="c_pagination_view">
              Страницы:
              <a className="pagination prev" href="/">назад</a>
              <a className="pagination active" href="/">1</a>
              <a className="pagination" href="/">2</a>
              <a className="pagination" href="/">3</a>
              <a className="pagination" href="/">4</a>
              <a className="pagination" href="/">5</a>
              <a className="pagination next" href="/">вперед</a>
          </div>

    </div>
  )
}

export default Content
