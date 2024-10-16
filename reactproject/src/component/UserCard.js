import React, { useState } from 'react'
import '../component/UserCard.css'
import Courses from './Courses'
const UserCard = () => {
    let [btn , setbtn] = useState(true);
  return (
    <>
    <div className='CardContainer'>
       <div className='Avatar'>
          <img src=''/>
       </div>
       <div className='Userdetails'>
            <div className='username'>
                <h2>sreya</h2>
                <p>4021</p>
            </div>
            <div className='details'>
                <div className='Postdetails'><h2>Posts</h2>
                    <p>4021</p>
                </div>
                <div className='Followerdetails'>
                    <h2>Followers</h2>
                    <p>4021</p>
                </div>
            </div>
        </div>
            <div className='btn'>
                <button onClick={()=>{setbtn(!btn)}}>{btn ? "follow" : "following"}</button>
            </div>
    </div>
    <Courses/>
    </>
  )
}

export default UserCard
