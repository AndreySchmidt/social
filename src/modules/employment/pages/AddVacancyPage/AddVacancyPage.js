import React from 'react'
import {Link} from 'react-router-dom'

import PageLayout from './../../PageLayout/PageLayout'

import './../../../app/components/css/info_block.css'
import './../../../app/components/css/breadcrumbs_bar.css'
import './work_vacancy_add.css'

const AddVacancyPage = () => {
  return (
    <PageLayout>
        <div className="c_info_block">
            <Link to="" className="close_button"></Link>
            <div className="text_line">Уважаемый пользователь!</div>
            <div className="text_line">У Вас не создана страница организации. Вы можете создать ее бесплатно, что бы другие пользователи могли переходить на Вашу страницу при просмотре вакансии. А также, при добавлении в будущем новых вакансий, основная информация будет уже заполнена &mdash; это сэкономит Ваше время</div>
            <div className="text_line">
                <Link className="c_button_large" to="">Создать страницу организации</Link>
            </div>
        </div>

        <div className="c_breadcrumbs_bar">
            <Link className="back" to="#">Назад</Link>
            <div className="breadcrumbs">
                <Link to="#">Работа</Link>
                <span className="separator">&gt;</span>
                <Link to="#">Добавить вакансию</Link>
            </div>
        </div>

        <div className="c_work_vacancy_add">
            <form action="#" method="post">
                <h4 className="header">Добавить вакансию</h4>
                <div className="fieldset">
                    <div className="element-container">
                        <label htmlFor="subject">Название вакансии:</label>
                        <input type="text" value="" name="subject" className="type-text" />
                    </div>
                    <div className="element-container">
                        <label htmlFor="company_name">Организация:</label>
                        <input type="text" value="" name="company_name" className="type-text" />
                    </div>
                    <div className="element-container">
                        <label htmlFor="fio">Контактное лицо:</label>
                        <input className="type-text" type="text" name="fio" value="" />
                    </div>
                    <div className="element-container">
                        <label htmlFor="phone">Телефон:</label>
                        <input className="type-text width-half" type="text" value="" name="phone" />
                        <input className="type-text width-half" type="text" value="" name="phone_comment" placeholder="Комментарий" />
                    </div>

                    <div className="element-container">
                        <label htmlFor="email">E-mail:</label>
                        <input className="type-text width-half" type="text" value="" name="email" />
                        <input className="type-text width-half" type="text" value="" name="email_comment" placeholder="Комментарий" />
                    </div>
                    <div className="element-container">
                        <label htmlFor="file">Логотип:</label>
                        <input type="file" name="file" className="upload" />
                        <div className="result hidden"><img src="images/pic-ava-100x100.jpg" alt="" /></div>
                    </div>
                    <div className="element-container">
                        <label>Области деятельности:</label>
                        <Link className="select-init" to="">Выбрать сферы</Link><br />
                        <div className="select-result">
                            <span>Недвижимость / Риелторские услуги</span><br />
                            <span>Консалтинг / Тренинги</span>
                        </div>
                    </div>
                    <div className="element-container">
                        <label>Районы:</label>
                        <Link className="select-init" to="">Выбрать районы</Link><br />
                        <div className="select-result">
                            <span>Гатчина и Гатчинский район</span>,
                            <span>Волосово и Волосовский район</span>
                        </div>
                    </div>
                </div>

                <h4 className="header">Соискатель</h4>
                <div className="fieldset">
                    <div className="element-container">
                        <label htmlFor="wages">Заработная плата (руб.):</label>
                        <input className="type-text" type="text" name="wages" value="" /><br />
                        <label className="normal"><input type="checkbox" value="YES" name="is_wages_by_convention" /> по договоренности</label>
                    </div>
                    <div className="element-container">
                        <label htmlFor="operational_experience">Опыт работы:</label>
                        <select name="operational_experience">
                            <option value="NO" selected="selected">Выберите из списка</option>
                            <option value="WITHOUT_EXPERIENCE">Без опыта</option>
                            <option value="B_1_3">от 1 года до 3 лет</option>
                            <option value="B_3_6">от 3 до 6 лет</option>
                            <option value="MORE_6">Более 6 лет</option>
                        </select>
                    </div>
                    <div className="element-container">
                        <label htmlFor="education">Образование:</label>
                        <select name="education">
                            <option value="NO" selected="">Выберите из списка</option>
                            <option value="HIGHER">высшее</option>
                            <option value="INCOMPLETE_HIGHER">неполное высшее</option>
                            <option value="SPECIALIZED_SECONDARY">среднее специальное</option>
                            <option value="SECONDARY">среднее</option>
                        </select>
                    </div>
                    <div className="element-container">
                        <label htmlFor="operating_schedule">График работы:</label>
                        <select name="operating_schedule">
                            <option value="NO" selected="">Выберите из списка</option>
                            <option value="FULL_TIME">полный рабочий день</option>
                            <option value="REPLACEABLE">сменный</option>
                            <option value="FREE">свободный</option>
                            <option value="PARTLY">частичная занятость</option>
                            <option value="FREE_LANCE">удаленная работа</option>
                        </select>
                    </div>
                    <div className="element-container">
                        <label htmlFor="demand">Требования:</label>
                        <textarea className="type-text" name="demand"></textarea>
                    </div>
                    <div className="element-container">
                        <label htmlFor="charge">Обязанности:</label>
                        <textarea className="type-text" name="charge"></textarea>
                    </div>
                    <div className="element-container">
                        <label htmlFor="conditions">Условия:</label>
                        <textarea className="type-text" name="conditions"></textarea>
                    </div>
                    <div className="element-container">
                        <label htmlFor="description">Дополнительный комментарий:</label>
                        <textarea className="type-text" name="description"></textarea>
                    </div>
                    <div className="element-container">
                        <label htmlFor="place_of_employment">Место работы:</label>
                        <textarea className="type-text" name="place_of_employment"></textarea>
                    </div>
                    <div className="element-container">
                        <input className="c_add_ad_button" type="submit" name="vacancy_submit" value="Добавить вакансию" />
                    </div>
                </div>
            </form>
        </div>
  </PageLayout>
  )
}

export default AddVacancyPage
