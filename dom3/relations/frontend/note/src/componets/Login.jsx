import React, { useState } from 'react'

const Login = () => {
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');

    const emailhandleChange = (e) =>{
        setEmail(e.target.value)
    }
    const passwordhandleChange = (e) =>{
        setPassword(e.target.value)
    }
    const handleSubmit = ()=> {
      const payload = {
        email,
        password
      }
      fetch('http://localhost:3929/login',{
        method:"POST",
        headers:{
          "Content-type" : "application/json"
        },
        body:JSON.stringify(payload)
      }).then((res)=>res.json()).then((res)=>{console.log(res);
      localStorage.setItem("token",res.token)}
    ).catch(err => console.log(err))
    }
  return (
    <div>
        <label>Email:<input type='email' value={email} onChange={emailhandleChange}/></label>
        <label>Password:<input type='password' value={password} onChange={passwordhandleChange}/></label>
        <button onClick={handleSubmit}>Login</button>
    </div>
  )
}

export default Login
