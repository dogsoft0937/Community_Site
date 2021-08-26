import React,{useState} from 'react'
import axios from 'axios'
function RegisterPage(props) {
    const [inputs,setInputs]=useState({
        name:'',
        birth:'',
        phone_number:'',
        id:'',
        password:'',
        username:''
    })
    const {name,id,password,birth,phone_number,username}=inputs;
    const handleChange=(e)=>{
        const {name,value}=e.target;
        setInputs({
            ...inputs,
            [name]:value
        })
    }
    const onreset=()=>{
        setInputs({
            name:'',
            id:'',
            password:'',
            username:'',
            phone_number:'',
            birth:'',
        })
    }
    const handleSubmit=(e)=>{
        e.preventDefault();
        axios.post("/api/users/register",inputs)
        .then(response=>{
            if(response.data.success){
                props.history.push('/login');
            }else{
                props.history.push('/');
            }
        })
        onreset();
    }
    return (
        <div style={{height:"70%",display:"flex",justifyContent:"center",alignItems:"center",marginTop:"10%"}}>
            <form onSubmit={handleSubmit}>
                <input placeholder="이름" name="name" value={name} onChange={handleChange} type="text" /><br/>
                <input placeholder="생년월일" name="birth" value={birth} onChange={handleChange} type="date" /><br/>
                <input placeholder="휴대폰 번호" name="phone_number" value={phone_number} onChange={handleChange} type="tel" pattern="[0-9]{3}-[0-9]{4}-[0-9]{4}" /><br/>
                <input placeholder="유저이름" name="username" value={username} onChange={handleChange} type="text" /><br/>
                <input placeholder="아이디" name="id" value={id} onChange={handleChange} type="text" /><br/>
                <input placeholder="비밀번호" name="password" value={password} onChange={handleChange} type="password" /><br/>
                <button type="submit">회원가입</button>
            </form>
            <div>
            </div>
        </div>
    )
}

export default RegisterPage
