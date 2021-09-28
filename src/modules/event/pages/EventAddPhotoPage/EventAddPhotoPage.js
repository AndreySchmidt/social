import React from 'react'
import {Link} from 'react-router-dom'

import PageLayoutItem from './../../PageLayoutItem/PageLayoutItem'

import './event_foto_add.css'

const EventAddPhotoPage = () => {
  return (
    <PageLayoutItem>
      <div className="c_event_foto_add">
        <form method="post" action="#">
          <h4 className="header">Добавить фотографии</h4>
          <div className="fieldset">
            <div className="element-container">
              <label>Загрузить изображения:</label>
              <Link className="c_button" to="">Выбрать файлы</Link>
            </div>
          </div>
          <h4 className="header">Фотографии</h4>
          <div className="photo_row clearfix">
            <span className="photo_img_cont"><img className="photo_img" src="images/vip-image-3.jpg" alt="" /></span>
            <Link className="remove" to="#">Удалить фотографию</Link>
            <div className="field-container">
              <label>Описание фотографии:</label>
              <textarea name="text" className="type-text"></textarea>
            </div>
          </div>
          <div className="photo_row clearfix">
            <span className="photo_img_cont"><img className="photo_img" src="images/vip-image-3.jpg" alt="" /></span>
            <Link className="remove" to="#">Удалить фотографию</Link>
            <div className="field-container">
              <label>Описание фотографии:</label>
              <textarea name="text" className="type-text"></textarea>
            </div>
          </div>
          <div className="photo_row last clearfix">
            <span className="photo_img_cont"><img className="photo_img" src="images/vip-image-3.jpg" alt="" /></span>
            <Link className="remove" to="#">Удалить фотографию</Link>
            <div className="field-container">
              <label>Описание фотографии:</label>
              <textarea name="text" className="type-text"></textarea>
            </div>
          </div>
          <div className="button-container">
            <input type="submit" value="Сохранить" name="gallery_submit" className="c_button" />
          </div>
        </form>
      </div>
    </PageLayoutItem>
  )
}

export default EventAddPhotoPage
