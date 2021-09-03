import axios from 'axios'
import React from 'react'
import { Link, withRouter  } from 'react-router-dom'
import './Navbar.css'


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
      {(window.localStorage.getItem('user_id')!==null) ? <><Link to="/write" style={{marginLeft:"10%"}}>
        글쓰기
      </Link>
      <Link to="/post_list"  style={{marginLeft:"10%"}}>
        글목록
      </Link>
      <a
        href="#"
        onClick={logoutHandler}
        style={{marginLeft:"45%"}}
      >로그아웃</a>
      </> :
      
      
      <>
      <Link
        to="/login"
        className=""
        style={{marginLeft:"65%"}}
      >
        로그인
      </Link>
      <Link
        to="/register"
        className=""
        style={{marginLeft:"5%"}}
      >
        회원가입
      </Link>
      </>

      }

    </nav>
  );
}
export default withRouter(NavBar);