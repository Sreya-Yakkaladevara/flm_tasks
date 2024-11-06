import React from 'react'

const ShowFormData = ({firstName,
    lastName,
    email,
    password,
    phNumber,
    country,
    birthDate,
    avatar,
    marriageStatus, // default
    gender}) => {
  return (
    <div>
      <h2>First Name : {firstName}</h2>
      <h2>Last Name : {lastName}</h2>
      <h2>Email : {email}</h2>
      <h2>Password : {password}</h2>
      <h2>Phone: {phNumber}</h2>
      <h2>Country: {country}</h2>
      <h2>Birth Date: {birthDate}</h2>   
      <h2> Image URL: {avatar}</h2>          
      <h2>Gender: {gender}</h2>          
       
    </div>
  )
}

export default ShowFormData
