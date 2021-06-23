import React from 'react';
import './Content.css';
import Myposts from './Myposts'
import Dialogs from './Dialogs/Dialogs';
import {Route} from 'react-router-dom';

const Profile = (props) => {

  return (<div>
            <h2>Main content</h2>
              <Route path = '/profile' component = {Myposts} />
              <Route path = '/dialogs'
              render = { () => {return <Dialogs data = {props.data} />} } />
          </div>
  )
}

export default Profile;
