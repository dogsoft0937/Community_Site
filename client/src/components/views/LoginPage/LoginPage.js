import React,{useState} from 'react'
import axios from 'axios'

function LoginPage(props) {
    const [inputs,setInputs]=useState({
        id:'',
        password:'',
    })
    const {id,password}=inputs;
    const handleChange=(e)=>{
        const {name,value}=e.target;
        setInputs({
            ...inputs,
            [name]:value
        })
    }
    const onreset=()=>{
        setInputs({
            id:'',
            password:'',
        })
    }
    const loginHandler=(e)=>{
        e.preventDefault();
        axios.post("/api/users/login",inputs)
        .then(response=>{
            if(response.data.loginSuccess){
                alert(response.data.msg)
                window.localStorage.setItem('user_id', response.data.user_id);
                props.history.push('/');
            }else{
                alert(response.data.msg)
            }
        })
        onreset();
    }
    return (
        <div style={{height:"60%",display:"flex",justifyContent:"center",alignItems:"center",backgroundColor:'white'}}>
            <form onSubmit={loginHandler}>
                <input placeholder="아이디" name="id" value={id} onChange={handleChange} type="text" /><br/>
                <input placeholder="비밀번호" name="password" value={password} onChange={handleChange} type="password" /><br/>
                <button type="submit">로그인</button>
            </form>
            <div>
            </div>
        </div>
    )
}

export default LoginPage
