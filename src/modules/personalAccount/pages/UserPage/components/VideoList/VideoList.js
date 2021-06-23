import React from 'react'
import {Link} from 'react-router-dom'

const VideoList = () => {
  return (
    <div className="c_video_list">

      <div className="list_item">
        <div className="image_container">
          <img src="images/video-1.jpg" alt=""/>
          <Link className="image_link" to=""></Link>
        </div>
        <div className="title"><Link to="">Название видео</Link></div>
      </div>
      
      <div className="list_item">
        <div className="image_container">
          <img src="images/video-1.jpg" alt=""/>
          <Link className="image_link" to=""></Link>
        </div>
        <div className="title"><Link to="">Название видео</Link></div>
      </div>

    </div>
  )
}

export default VideoList
