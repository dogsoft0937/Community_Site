import axios from 'axios'
import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'
import { withRouter } from 'react-router-dom';
import Button from '@material-ui/core/Button';


function NavBar(props) {
  const logoutHandler=()=>{
    axios.get('/api/users/logout')
    .then(response=>{
      if(response.data.success){
        props.history.push("/");
      }else{
        alert("Logout failed")
      }
    })
    window.localStorage.removeItem('user_id')
  }
  return (
    <nav className="navbar">
      <Link to="/" style={{paddingLeft: "10%" }}>
        Home
      </Link>
      {window.localStorage.getItem('user_id') ? <><Link to="/write" style={{paddingLeft:"10%"}}>
        Write
      </Link>
      <Link to="/post_list"  style={{paddingLeft:"10%"}}>
        post_list
      </Link>
      <a
        href="#"
        onClick={logoutHandler}
        style={{paddingLeft:"45%"}}
      >logout</a></> :
      
      
      <>
      <Link
        to="/login"
        className=""
        style={{paddingLeft:"65%"}}
      >
        Login
      </Link>
      <Link
        to="/register"
        className=""
        style={{paddingLeft:"5%"}}
      >
        Register
      </Link>
      </>

      }

    </nav>
  );
}
export default withRouter(NavBar);