import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import './NavBar.css'

function NavBar() {
  const [click, setClick] = useState(false)
  const navClick = () => setClick(!click)
  const close = () => setClick(false)
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
          <Link to="/" className="nav-links" onClick={close}>
            reset
          </Link>
          </li>
        <li className="nav-item">
          <Link
            to="/menu2"
            className="nav-links"
            onClick={close}
          >
            menu2
          </Link>
        </li>
        <li className="nav-item">
          <Link
            to="/menu3"
            className="nav-links"
            onClick={close}
          >
            menu3
          </Link>
        </li>
      </nav>
      
    );
}

export default NavBar
