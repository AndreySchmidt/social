import React from 'react'
import {Link} from 'react-router-dom'

import PageLayoutItem from './../../PageLayoutItem/PageLayoutItem'

import './event_photo.css'

const EventPhotoPage = () => {
  return (
    <PageLayoutItem>
      <div className="c_event_fotootchet">
        <div className="controls">
          <Link className="edit" to="">Редактировать</Link>
          <Link className="add last" to="">Добавить фото</Link>
        </div>
        <h2 className="title">Фото отчет</h2>
        <div className="gallery">
          <div className="photo_row"><Link to="#"><img src="images/vip-image-3.jpg" alt="" /></Link></div>
          <div className="photo_row"><Link to="#"><img src="images/pic-ava-100x100.jpg" alt="" /></Link></div>
          <div className="photo_row"><Link to="#"><img src="images/vip-image-3.jpg" alt="" /></Link></div>
          <div className="photo_row"><Link to="#"><img src="images/ava-254x.jpg" alt="" /></Link></div>
          <div className="photo_row"><Link to="#"><img src="images/video-last-comment.jpg" alt="" /></Link></div>
          <div className="photo_row"><Link to="#"><img src="images/user-bg-thmb-3.jpg" alt="" /></Link></div>
          <div className="photo_row"><Link to="#"><img src="images/vip-image-3.jpg" alt="" /></Link></div>
          <div className="photo_row"><Link to="#"><img src="images/vip-image-3.jpg" alt="" /></Link></div>
          <div className="photo_row"><Link to="#"><img src="images/vip-image-3.jpg" alt="" /></Link></div>
          <div className="photo_row"><Link to="#"><img src="images/vip-image-3.jpg" alt="" /></Link></div>
          <div className="photo_row"><Link to="#"><img src="images/vip-image-3.jpg" alt="" /></Link></div>
          <div className="photo_row"><Link to="#"><img src="images/vip-image-3.jpg" alt="" /></Link></div>
        </div>
      </div>
    </PageLayoutItem>
  )
}

export default EventPhotoPage
