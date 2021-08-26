import axios from 'axios'
import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'
import { withRouter } from 'react-router-dom';


function NavBar(props) {
  const logoutHandler=()=>{
    axios.get('/api/users/logout')
    .then(response=>{
      if(response.data.success){
        alert(response.data.msg)
        props.history.push("/");
      }else{
        alert(response.data.msg)
      }
    })
    window.localStorage.removeItem('user_id')
  }
  return (
    <nav className="navbar">
      <Link to="/" style={{marginLeft: "10%" }}>
        Home
      </Link>
      {window.localStorage.getItem('user_id') ? <><Link to="/write" style={{marginLeft:"10%"}}>
        Write
      </Link>
      <Link to="/post_list"  style={{marginLeft:"10%"}}>
        post_list
      </Link>
      <a
        href="#"
        onClick={logoutHandler}
        style={{marginLeft:"45%"}}
      >logout</a>
      </> :
      
      
      <>
      <Link
        to="/login"
        className=""
        style={{marginLeft:"65%"}}
      >
        Login
      </Link>
      <Link
        to="/register"
        className=""
        style={{marginLeft:"5%"}}
      >
        Register
      </Link>
      </>

      }

    </nav>
  );
}
export default withRouter(NavBar);