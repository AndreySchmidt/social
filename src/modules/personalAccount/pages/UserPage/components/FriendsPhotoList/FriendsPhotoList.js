import React from 'react'
import {Link} from 'react-router-dom'

const FriendsPhotoList = () => {
  return (
    <div className="c_friends_photo_list clearfix">
      <Link to=""><img src="images/friend-1.jpg" alt=""/></Link>
      <Link to=""><img src="images/friend-2.jpg" alt=""/></Link>
      <Link to=""><img src="images/friend-3.jpg" alt=""/></Link>
      <Link to=""><img src="images/friend-1.jpg" alt=""/></Link>
      <Link to=""><img src="images/friend-2.jpg" alt=""/></Link>
      <Link to=""><img src="images/friend-3.jpg" alt=""/></Link>
      <Link to=""><img src="images/friend-1.jpg" alt=""/></Link>
      <Link to=""><img src="images/friend-2.jpg" alt=""/></Link>
      <Link to=""><img src="images/friend-3.jpg" alt=""/></Link>
    </div>
  )
}

export default FriendsPhotoList
