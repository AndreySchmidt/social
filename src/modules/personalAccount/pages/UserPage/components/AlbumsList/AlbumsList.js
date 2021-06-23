import React from 'react'
import {Link} from 'react-router-dom'

const AlbumsList = () => {
  return (
    <div className="c_albums_list">
      <div className="list_item">
        <div className="image_container">
            <Link to=""><img src="images/album-1.jpg" alt=""/></Link>
        </div>
        <div className="title">
            <Link to="">Название альбома</Link>
        </div>
      </div>
      <div className="list_item">
        <div className="image_container">
            <Link to=""><img src="images/album-2.jpg" alt=""/></Link>
        </div>
        <div className="title">
            <Link to="">Длинное название данного фотоальбома</Link>
        </div>
      </div>
    </div>
  )
}

export default AlbumsList
