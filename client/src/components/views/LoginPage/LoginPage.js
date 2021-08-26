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
        axios.post("/api/users/login",[inputs])
        .then(response=>{
            if(response.data.success){
                window.localStorage.setItem('userId', response.data.userId);
                props.history.push('/');
            }else{
                //로그인 실패
            }
        })
        onreset();
    }
    return (
        <div style={{height:"70%",display:"flex",justifyContent:"center",alignItems:"center",marginTop:"10%"}}>
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
