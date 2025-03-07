import React, { useState } from 'react'
import Login from './Login';

const Register = () => {
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [age,setAge] = useState('');
    const [name,setName] = useState('');
    const emailhandleChange = (e) =>{
        setEmail(e.target.value)
    }
    const passwordhandleChange = (e) =>{
        setPassword(e.target.value)
    }
    const agehandleChange = (e) =>{
        setAge(e.target.value)
    }
    const namehandleChange = (e) =>{
        setName(e.target.value)
    }
    const handleSubmit = ()=> {
        const payload = {
          email,
          password,
          age,
          name
        }
        fetch('http://localhost:3929/register',{
          method:"POST",
          headers:{
            "Content-type" : "application/json"
          },
          body:JSON.stringify(payload)
        }).then((res)=>res.json()).then((res)=>console.log(res)).catch(err => console.log(err))
      }

  return (
    <div>
        <label>Name:<input type='text' value={name} onChange={namehandleChange}/></label>
        <label>Email:<input type='email' value={email} onChange={emailhandleChange}/></label>
        <label>Password:<input type='password' value={password} onChange={passwordhandleChange}/></label>
        <label>Age:<input type='number' value={age} onChange={agehandleChange}/></label>
        <button onClick={handleSubmit}>submit</button>

    </div>
  )
}

export default Register
