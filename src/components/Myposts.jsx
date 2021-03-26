import React from 'react';
import './Content.css';
import Post from './Post/Post';
import {addPostToState} from './../redux/state'

const Myposts = () => {

let addPost = (el) => {
  let arr = [];
  if(el.target.value)
  {
    let newPostItem = {
      text: el.target.value
    };
    arr = addPostToState(newPostItem);
  }
  console.log(arr);
  console.log(el.target);
}

  return (<div>
            <h3>My post</h3>
            <div>New post</div>
            <div>
              <textarea id = "add-post"></textarea>
              <br />
              <button onClick = {addPost}>add new post</button>
            </div>
            <div>
              <Post message = "Lorem ipsum dolor" />
              <Post message = "Fa kdf;d; dfdslf'dsl" />
              <Post message = "LDHI  dlfdsfd ipsum dolor" />
              <Post message = "j;xdkf dof'fxlflbvbvk ipsum dolor" />
            </div>
          </div>
  )
}

export default Myposts;
