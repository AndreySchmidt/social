import React from 'react'
import {Link} from 'react-router-dom'

const PossibleFriendsList = () => {
  return (
    <div className="c_possible_friend_list">
      <div className="list_item">
        <div className="image_container">
          <Link to=""><img src="images/avatar-possible-friend.jpg" alt=""/></Link>
        </div>
        <div className="title"><Link to="">Евгений Егоров</Link></div>
        <div className="add_to_container">
          <Link className="c_button" to="">Добавить в друзья </Link>
        </div>
      </div>
    </div>
  )
}

export default PossibleFriendsList
