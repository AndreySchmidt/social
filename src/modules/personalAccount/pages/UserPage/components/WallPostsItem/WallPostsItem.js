import React from 'react'
import {Link} from 'react-router-dom'

import PostComment from './../PostComment/PostComment'

const WallPostsItem = () => {
  return (
    <div className="list_item clearfix">
      <Link className="remove" to=""></Link>
      <Link className="user_avatar" to=""><img src="images/wall-avatar-1.jpg" alt=""/></Link>

      <div className="name"><Link to="">Павел Кузнецов</Link></div>

      <div className="post_content">
        <p>Поздравляю с Великим праздником Победы! С 9 Мая!</p>
        <p><img src="images/wall-image-sample.jpg" alt=""/></p>
      </div>
      <div className="post_info">
        <span className="date">2.05.2012</span>
        <span className="separator">|</span>
        <Link to="">Комментировать</Link>
      </div>
      <PostComment />
    </div>
  )
}

export default WallPostsItem
