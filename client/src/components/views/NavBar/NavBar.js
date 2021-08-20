import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import './NavBar.css'

function NavBar() {
  const [click, setClick] = useState(false)
  const navClick = () => setClick(!click)
  const iconClick = () => setClick(false)
    return (
      <nav className="navbar">       
        <Link to="/" className="navbar-logo">
          Home
        </Link>

        <Link className="nav-item" onClick={navClick}>
          <i className={click ? ' ' : ' '} />
          abc
        </Link>
       
        <li className="nav-item">
          <Link to="/" className="nav-links" onClick={iconClick}>
            reset(초기화면)
          </Link>
        </li>

        <li className="nav-item">
          <Link
            to="/menu2"
            className="nav-links"
            onClick={iconClick}
          >
            menu2
          </Link>
        </li>

        <li className="nav-item">
          <Link
            to="/menu3"
            className="nav-links"
            onClick={iconClick}
          >
            menu3
          </Link>
        </li>
      </nav>
    );
}

export default NavBar
