import React from 'react';
import './Post.css';

const Post = (props) => {
  return (<div>
    <div><img className="post_img" src = "/1.jpg" alt="img" /></div>
    {props.message}<br />
    <span>like</span>
    </div>)
}

export default Post;
