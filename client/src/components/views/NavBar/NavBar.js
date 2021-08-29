import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './NavBar.css'

function NavBar() {
  const [click, setClick] = useState(false)
  const navClick = () => setClick(!click)
  const iconClick = () => setClick(false)
  return (
    <nav className="navbar">
      <Link to="/" className="nav-item" style={{flex:"1",paddingLeft:"50px"}}>
        Home
      </Link>
      <Link to="/write" className="nav-item" onClick={navClick} style={{flex:"4"}}>
        Write
      </Link>
      <Link to="/post_list" className="nav-item" onClick={navClick} style={{flex:"4",textAlign:"left"}}>
        post_list
      </Link>
      <Link
        to="/login"
        className="nav-links nav-item"
        onClick={iconClick}
        style={{flex:"1"}}
      >
        Login
      </Link>
      <Link
        to="/register"
        className="nav-links nav-item"
        onClick={iconClick}
        style={{flex:"1"}}
      >
        Register
      </Link>
    </nav>
  );
}
export default NavBar;