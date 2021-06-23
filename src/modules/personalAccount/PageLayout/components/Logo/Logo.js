import React from 'react'
import {Link} from 'react-router-dom'

const Logo = () => {
  return(
    <div className="c_logo">
        <Link to=""><img src="resources/img/logo.jpg" alt=""/></Link>
    </div>
  )
}

export default Logo
