import React, { useState } from 'react'
import ShowFormData from './ShowFormData';
const data = {firstName: "",
    lastName: "",
    email: "",
    password: "",
    phNumber: "",
    country: "",
    birthDate: "",
    avatar: "",
    marriageStatus: false, // default
    gender: ""}
const Form = () => {
    const [details,setdetails] = useState(data);
    const [showdata,setshowdata] = useState(false)
    const handleChange = (event)=>{
        const {value,name}=event.target;
        console.log(value,name)
        setdetails({...details,[name]:value})
    }
     const handleSubmit = (event)=>{
        event.preventDefault();
        console.log(details)
     }
  return (
        <>
            <form action='submit' onSubmit={handleSubmit}>
        <div>
            <label>Firstname<input type='text' placeholder=' Firstname' name='firstName' onChange={handleChange} value={details.firstName}/></label><br/>
            <label>Lastname<input type='text' placeholder=' Lastname' name='lastName' onChange={handleChange}/></label>
        </div>
        <div>
            <label>Email<input type='email' placeholder=' Email' name='email' onChange={handleChange}/></label>
        </div>
        <div>
            <label>Password<input type='password' placeholder=' Password' name='password' onChange={handleChange}/></label>
        </div>
        <div>
            <label>Phone Number<input type='phone' placeholder='' name='phNumber' onChange={handleChange}/></label><br/>
            <label>Country
            <select name='country' value={details.country} onChange={handleChange}>
                
                <option value="USA">USA</option>
                <option value="UK">UK</option>
                <option value="India">India</option>
                <option value="Canada">Canada</option>
                <option value="France">France</option>
                <option value="Germany">Germany</option>
                <option value="Japan">Japan</option>
                <option value="Italy">Italy</option>
                <option value="Spain">Spain</option>
                <option value="Russia">Russia</option>
                <option value="Brazil">Brazil</option>
                <option value="China">China</option>
                <option value="Indonesia">Indonesia</option>
                <option value="Malaysia">Malaysia</option>
            </select>
            </label>

        </div>
        <div>
            <label>Birth Date<input type='date' name='birthDate' onChange={handleChange}/></label><br/>
            <label>Choose Avatar<input type='file' name='avatar' onChange={handleChange}/></label>
        </div>
        <div>
           <label>Select if married</label>
           <input type='checkbox' value={!details.marriageStatus} name='marriageStatus' onChange={handleChange}/>marriage status
        </div>
        <div>
            <label>Choose gender...</label>
            <label><input type='radio' name="gender" value="Male" onChange={handleChange}/>Male</label>
            <label><input type='radio' name="gender" value="Female" onChange={handleChange}/>Female</label>
            <label><input type='radio' name="gender" value="Other" onChange={handleChange}/>Other</label>
        </div>
        <div>
            <input type='submit'  onClick={()=>{setshowdata(!showdata)}}/>
        </div>

    </form>
    {
        showdata && <div>
        <ShowFormData {...details}/>
        </div>
    }
        
        
       
     </>
  )
}

export default Form

// first name - `text`
// last name - `text`
// email - `email`
// password - `password`
// phone number - `number`
// country - `select tag`
// birth date - `date`
// avatar - `file`
// marriedStatus - `checkbox`
// gender - `radio` - male, female and other
// submit button - `submit`
