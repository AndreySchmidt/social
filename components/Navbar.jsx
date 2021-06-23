import React from 'react';
import './Navbar.css'
import {NavLink} from 'react-router-dom';

const Navbar = () => {
  return (<nav className="navbar">
            <div className="item"><NavLink to ="/profile" className="link">Profile</NavLink></div>
            <div className="item"><NavLink to ="/messages" className="link">Messages</NavLink></div>
            <div className="item"><NavLink to ="/news" className="link">News</NavLink></div>
            <div className="item"><NavLink to ="/music" className="link">Music</NavLink></div>
            <div className="item"><NavLink to ="/dialogs" className="link">Dialogs</NavLink></div>
          </nav>);
}

export default Navbar;
