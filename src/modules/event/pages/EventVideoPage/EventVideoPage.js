import React from 'react'
import {Link} from 'react-router-dom'

import PageLayoutItem from './../../PageLayoutItem/PageLayoutItem'

import './event_video.css'

const EventVideoPage = () => {
  return (
    <PageLayoutItem>
      <div className="c_event_videootchet">
        <div className="gallery-controls">
            <Link className="add last" to="">Добавить видео</Link>
        </div>

        <h2 className="title">Видео отчет</h2>

        <div className="gallery">
            <div className="video_row">
                <div className="video_tmb_container">
                    <Link to="#"><img src="images/video-event.jpg" className="video_img" alt="" /></Link>
                </div>
                <h4 className="title"><Link to="#">Заголовок видео</Link></h4>
                <div className="descr">Краткое описание под видео об этом видео. Бла-бла-бла и все такое.</div>
                <div className="controls">
                    <Link className="edit" to="">Редактировать</Link>
                    <Link className="remove last" to="">Удалить</Link>
                </div>
            </div>

            <div className="video_row">
                <div className="video_tmb_container">
                    <Link to="#"><img src="images/video-event.jpg" className="video_img" alt="" /></Link>
                </div>
                <h4 className="title"><Link to="#">Заголовок видео</Link></h4>
                <div className="descr">Краткое описание под видео об этом видео. Смотрите новые выпуски прямо у нас! Ограничение по высоте 2 строки</div>
                <div className="controls">
                    <Link className="edit" to="">Редактировать</Link>
                    <Link className="remove last" to="">Удалить</Link>
                </div>
            </div>

            <div className="video_row">
                <div className="video_tmb_container">
                    <Link to="#"><img src="images/video-event.jpg" className="video_img" alt="" /></Link>
                </div>
                <h4 className="title"><Link to="#">Заголовок видео</Link></h4>
                <div className="descr">Краткое описание под видео об этом видео. Смотрите новые выпуски прямо у нас!</div>
                <div className="controls">
                    <Link className="edit" to="">Редактировать</Link>
                    <Link className="remove last" to="">Удалить</Link>
                </div>
            </div>
        </div>
      </div>
    </PageLayoutItem>
  )
}

export default EventVideoPage
