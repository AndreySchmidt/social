import React from 'react'
import {Link} from 'react-router-dom'

import PageLayoutItem from './../../PageLayoutItem/PageLayoutItem'

import './event_video_add.css'

const EventAddVideoPage = () => {
  return (
    <PageLayoutItem>
    <div className="c_event_video_add">
      <form method="post" action="#">
        <h4 className="header">Добавить видеофайл</h4>
        <div className="fieldset">
          <div className="element-container">
            <label htmlFor="name">Название:</label>
            <input type="text" className="type-text" name="name" value="" />
          </div>
          <div className="element-container">
            <label htmlFor="description">Описание:</label>
            <textarea className="type-text" name="description"></textarea>
          </div>
          <div className="element-container">
            <div className="note">Вы можете ввести код видео с популярных ресурсов:
              <Link to="#">YouTube</Link>,
              <Link to="#">Rutube</Link>,
              <Link to="#">Vkontakte</Link>,
              <Link to="#">Smotri</Link>.
            </div>
            <textarea className="type-text" name=""></textarea>
          </div>
          <div className="button-container">
            <input type="submit" value="Сохранить" name="gallery_submit" className="c_button" />
          </div>
        </div>
      </form>
    </div>
    </PageLayoutItem>
  )
}

export default EventAddVideoPage
