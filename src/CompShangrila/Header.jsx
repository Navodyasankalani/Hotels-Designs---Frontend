import React from 'react'
import {Link} from 'react-router-dom'
//import Logo from './HeaderAndSliderImages/logo.png'
import Logo from '../img/logo.png'

function Header() {
  return (
    // <div>Header</div>

    <div className='headerbar'>
    <div className="container">
      <div className="logo">
        <Link to='/'>
          <img src={Logo} alt="" />
        </Link>
      </div>
        <div className="links">
          <Link className="link" to="/?cat=signin">
            <h6>Sign In</h6>
          </Link>
          <Link className="link" to="/?cat=joinnow">
            <h6>Join Now</h6>
          </Link>
          <Link className="link" to="/?cat=find">
            <h6>Find Reservation</h6>
          </Link>
          <Link className="link" to="/?cat=english">
            <h6>English</h6>
          </Link>
          <Link className="link" to="/?cat=lkr">
            <h6>LKR</h6>
          </Link>
          <Link className="link" to="/?cat=ppp">
            <h6>PPP</h6>
          </Link>
          {/* <span></span>
          <span >Logout</span> : <Link className="link" to="/login">Login</Link>
          <span className='write'>
            <Link className='link' to="/write">Write</Link>
          </span> */}
        </div>
    </div>
  </div>

  )
}

export default Header