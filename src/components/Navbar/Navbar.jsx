import React from 'react'
import './Navbar.css'
import logo from '../../assets/assets/logo.png'
import search_icon from '../../assets/assets/search_icon.svg'
import bell_icon from '../../assets/assets/bell_icon.svg'
import profile from '../../assets/assets/profile_img.png'
import dropdown from '../../assets/assets/caret_icon.svg'
const Navbar = () => {
  return (
    <div className='navbar'>
      <div className="navbar-left">
        <img src={logo} alt="" />
        <ul>
          <li>Home</li>
          <li>TV Shows</li>
          <li>Movies</li>
          <li>New & Popular</li>
          <li>My List</li>
          <li>Browse by Languages</li>
        </ul>
      </div>
      <div className="navbar-right">
        <img src={search_icon} alt="" className='icons'/>
        <p>Children</p>
        <img src={bell_icon} alt="" className='icons'/>
        <div className="navbar-profile">
          <img src={profile} alt="" className='profile'/>
          <img src={dropdown} alt="" />
          <div className="dropdown">
            <p>Sign Out</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar