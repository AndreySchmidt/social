import React from 'react'
import {Link} from 'react-router-dom'

import PageLayout from './../../PageLayout/PageLayout'

import './../../../app/components/css/breadcrumbs_bar.css'
import './work_resume_add.css'

const AddEmployeePage = () => {
  return (
    <PageLayout>
        <div className="c_breadcrumbs_bar">
            <Link className="back" to="#">Назад</Link>
            <div className="breadcrumbs">
                <Link to="#">Работа</Link>
                <span className="separator">&gt;</span>
                <Link to="#">Добавить резюме</Link>
            </div>
        </div>

        <div className="c_work_resume_add">
            <form action="#" method="post">
                <h4 className="header">Добавить резюме</h4>
                <div className="fieldset">
                    <div className="element-container">
                        <label htmlFor="last_name">Фамилия:</label>
                        <input type="text" value="" name="last_name" className="type-text" />
                    </div>
                    <div className="element-container">
                        <label htmlFor="name">Имя:</label>
                        <input type="text" value="" name="name" className="type-text" />
                    </div>
                    <div className="element-container">
                        <label htmlFor="patronymic">Отчество:</label>
                        <input className="type-text" type="text" name="patronymic" value="" />
                    </div>
                    <div className="element-container">
                        <label htmlFor="birth_day">День Рождения:</label>
                        <select className="width-third" name="birth_day">
                            <option value="NO" selected="selected">День</option>
                        </select>
                        <select className="width-third" name="birth_month">
                            <option value="NO" selected="selected">Месяц</option>
                        </select>
                        <select className="width-third" name="birth_year">
                            <option value="NO" selected="selected">Год</option>
                        </select>
                    </div>
                    <div className="element-container">
                        <label htmlFor="file">Фотография:</label>
                        <input type="file" name="file" className="upload" />
                        <div className="result hidden"><img src="images/pic-ava-100x100.jpg" alt="" /></div>
                    </div>
                    <div className="element-container">
                        <label>Ваш район:</label>
                        <Link className="select-init" to="">Выбрать районы</Link><br />
                        <div className="select-result">
                            <span>Гатчина и Гатчинский район</span>,
                            <span>Волосово и Волосовский район</span>
                        </div>
                    </div>
                    <div className="element-container">
                        <label htmlFor="mobile_phone">Мобильный телефон:</label>
                        <input className="type-text width-half" type="text" name="mobile_phone" value="" />
                        <input className="type-text width-half" type="text" name="mobile_phone_comment" value="" placeholder="Комментарий" />
                    </div>
                    <div className="element-container">
                        <label htmlFor="phone">Домашний телефон:</label>
                        <input className="type-text width-half" type="text" value="" name="phone" />
                        <input className="type-text width-half" type="text" value="" name="phone_comment" placeholder="Комментарий" />
                    </div>
                    <div className="element-container">
                        <label htmlFor="email">E-mail:</label>
                        <input className="type-text" type="text" name="email" value="" />
                    </div>
                    <div className="element-container">
                        <label htmlFor="subject">Желаемая должность:</label>
                        <input className="type-text" type="text" name="subject" value="" />
                    </div>
                    <div className="element-container">
                        <label htmlFor="wages">Желаемый уровень заработной платы (руб.):</label>
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
                        <label>Профессиональные сферы:</label>
                        <Link className="select-init" to="">Выбрать сферы</Link><br />
                        <div className="select-result">
                            <span>Недвижимость / Риелторские услуги</span><br />
                            <span>Консалтинг / Тренинги</span>
                        </div>
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
                </div>

                <h4 className="header">Опыт работы</h4>
                <div className="fieldset">
                    <div className="element-container">
                        <label htmlFor="company_name">Название компании:</label>
                        <input className="type-text" type="text" name="company_name" value="" />
                    </div>
                    <div className="element-container">
                        <label>Области деятельности:</label>
                        <Link className="select-init" to="">Выбрать районы</Link><br />
                        <div className="select-result">
                            <span>Гатчина и Гатчинский район</span>,
                            <span>Волосово и Волосовский район</span>
                        </div>
                    </div>
                    <div className="element-container">
                        <label htmlFor="position">Занимаемая должность:</label>
                        <input className="type-text" type="text" name="position" value="" />
                    </div>
                    <div className="element-container">
                        <label htmlFor="responsibility">Обязанности:</label>
                        <textarea className="type-text" name="responsibility"></textarea>
                    </div>
                    <div className="add-fieldset">
                        <Link to="#">+ Добавить место работы</Link>
                    </div>
                </div>

                <h4 className="header">Основное образование</h4>
                <div className="fieldset">
                    <div className="element-container">
                        <label htmlFor="education">Основное:</label>
                        <select name="education">
                            <option value="NO" selected="">Выберите из списка</option>
                            <option value="HIGHER">высшее</option>
                            <option value="INCOMPLETE_HIGHER">неполное высшее</option>
                            <option value="SPECIALIZED_SECONDARY">среднее специальное</option>
                            <option value="SECONDARY">среднее</option>
                        </select>
                    </div>
                    <div className="element-container">
                        <label htmlFor="name_of_educational_institution">Название учебного заведения:</label>
                        <input className="type-text" type="text" name="name_of_educational_institution" value="" />
                    </div>
                    <div className="element-container">
                        <label htmlFor="name_of_educational_institution_qualification">Год обучения:</label>
                        <input className="type-text width-half" type="text" name="year_from" value="" placeholder="с" />
                        <input className="type-text width-half" type="text" name="year_to" value="" placeholder="по" />
                    </div>
                    <div className="element-container">
                        <label htmlFor="specialty">Специальность:</label>
                        <input className="type-text" type="text" name="specialty" value="" />
                    </div>
                    <div className="add-fieldset">
                        <Link to="#">+ Добавить место учебы</Link>
                    </div>
                </div>

                <h4 className="header">Повышение квалификации</h4>
                <div className="fieldset">
                    <div className="element-container">
                        <label htmlFor="qualification">Квалификация:</label>
                        <input className="type-text" type="text" name="qualification" value="" />
                    </div>
                    <div className="element-container">
                        <label htmlFor="name_of_educational_institution_qualification">Название учебного заведения:</label>
                        <input className="type-text" type="text" name="name_of_educational_institution_qualification" value="" />
                    </div>
                    <div className="element-container">
                        <label htmlFor="year_qualification">Год получения квалификации:</label>
                        <input className="type-text" type="text" name="year_qualification" value="" />
                    </div>
                    <div className="element-container">
                        <label htmlFor="description_qualification">Описание:</label>
                        <input className="type-text" type="text" name="description_qualification" value="" />
                    </div>
                    <div className="add-fieldset">
                        <Link to="#">+ Добавить место учебы</Link>
                    </div>
                </div>

                <h4 className="header">Дополнительная информация</h4>
                <div className="fieldset">
                    <div className="element-container">
                        <label htmlFor="skills">Профессиональные навыки:</label>
                        <textarea className="type-text" name="skills"></textarea>
                    </div>
                    <div className="element-container">
                        <label htmlFor="language">Инностраные языки:</label>
                        <input className="type-text width-half" type="text" name="language" value="" placeholder="Язык" />
                        <select className="width-half" name="...">
                            <option value="NO" selected="">Уровень владения</option>
                        </select><br />
                        <div className="lang-add">
                            <Link to="">+ Добавить язык</Link>
                        </div>
                    </div>
                    <div className="element-container">
                        <label htmlFor="family_status">Семейное положение:</label>
                        <input className="type-text" type="text" name="family_status" value="" />
                    </div>
                    <div className="element-container">
                        <label htmlFor="kids">Дети:</label>
                        <input className="type-text" type="text" name="kids" value="" />
                    </div>
                    <div className="element-container">
                        <label htmlFor="business_trip">Возможность командировок:</label>
                        <label className="normal"><input type="radio" checked="checked" name="business_trip[]" value="NO" /> Нет</label>
                        &nbsp;&nbsp;&nbsp;
                        <label className="normal"><input type="radio" name="business_trip[]" value="YES" /> Есть</label>
                    </div>
                    <div className="element-container">
                        <label htmlFor="skills">О себе:</label>
                        <textarea className="type-text" name="about"></textarea>
                    </div>
                    <div className="element-container">
                        <input className="c_add_ad_button" type="submit" name="brief_submit" value="Добавить резюме" />
                    </div>
                </div>
            </form>
        </div>
    </PageLayout>
  )
}

export default AddEmployeePage
