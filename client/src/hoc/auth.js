/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState,useEffect } from 'react';
import axios from 'axios'
export default (function(Component, option) {
    const [Id, setId] = useState("")
    function Auth(props) {
        useEffect(() => {
            axios.get('/api/users/auth')
                .then(response => {
                    if (!response.data.isAuth) {
                        if (option) {
                            window.localStorage.removeItem('user_id')
                            alert("로그인 후 이용 가능합니다.")
                            props.history.push('/login')
                        }
                    }else{
                        setId(response.data._id);
                }
                })    
        }, [])

        return (
            <Component {...props} user={Id}/>
        )
    }
    return Auth
})

