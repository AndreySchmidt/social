import React from 'react'
import {Link} from 'react-router-dom'

import pic1 from './../../../../../app/AppPageLayout/images/pic-1.jpg'

import './EventInvites.css'

const EventInvites = () => {
  return (
    <div className="c_event_invites">

        <div className="c_type_select">
            <Link to="#">Все мероприятия</Link >
            <Link to="#">Только мои</Link >
            <Link className="active" to="#">Приглашения (3)</Link >
        </div>

        <div className="actions2all">
            Ответить на все приглашения:
            <Link className="" to="">Точно пойду</Link >
            <Link className="" to="">Возможно пойду</Link >
            <Link className="" to="">Не могу пойти</Link >
        </div>

        <h4 className="list_title">Вас приглашают на 3 мероприятия</h4>

        <div className="c_list_extended_view clearfix">

            <div className="list_item gray clearfix">
                <div className="image_container">
                    <Link to="#"><img className="image" src={pic1} alt="" /></Link >
                </div>

                <div className="content_inner">
                    <div className="from">Вас приглашает <Link to="#">Антон Бестужев</Link ></div>
                    <div className="title"><Link to="#">RETRP-PARTY в ночном клубе Брюлов!</Link ></div>
                    <div className="occur">7 декабря 2013 в 20:00</div>
                    <div className="type">Категория: <Link to="#">Дискотеки</Link ></div>
                    <div className="actions">
                        <Link className="c_button" to="">Точно пойду</Link >
                        <Link className="c_button" to="">Возможно пойду</Link >
                        <Link className="c_button" to="">Не могу пойти</Link >
                    </div>
                </div>
            </div>

            <div className="list_item clearfix">
                <div className="image_container">
                    <Link to="#"><img className="image" src={pic1} alt="" /></Link >
                </div>

                <div className="content_inner">
                    <div className="from">Вас приглашает <Link to="#">Антон Бестужев</Link ></div>
                    <div className="title"><Link to="#">RETRP-PARTY в ночном клубе Брюлов!</Link ></div>
                    <div className="occur">7 декабря 2013 в 20:00</div>
                    <div className="type">Категория: <Link to="#">Дискотеки</Link ></div>
                    <div className="actions">
                        <Link className="c_button" to="">Точно пойду</Link >
                        <Link className="c_button" to="">Возможно пойду</Link >
                        <Link className="c_button" to="">Не могу пойти</Link >
                    </div>
                </div>
            </div>

            <div className="list_item gray clearfix">
                <div className="image_container">
                    <Link to="#"><img className="image" src={pic1} alt="" /></Link >
                </div>

                <div className="content_inner">
                    <div className="from">Вас приглашает <Link to="#">Антон Бестужев</Link ></div>
                    <div className="title"><Link to="#">RETRP-PARTY в ночном клубе Брюлов!</Link ></div>
                    <div className="occur">7 декабря 2013 в 20:00</div>
                    <div className="type">Категория: <Link to="#">Дискотеки</Link ></div>
                    <div className="actions">
                        <Link className="c_button" to="">Точно пойду</Link >
                        <Link className="c_button" to="">Возможно пойду</Link >
                        <Link className="c_button" to="">Не могу пойти</Link >
                    </div>
                </div>
            </div>

        </div>


    </div>
  )
}

export default EventInvites
