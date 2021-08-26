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
                window.localStorage.setItem('user_id', response.data.user_id);
                console.log(window.localStorage.getItem('user_id'));
                props.history.push('/');
            }else{
                alert("아이디 또는 비밀번호 확인후 다시 요청 바람")
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
