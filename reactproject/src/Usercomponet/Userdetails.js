import React from 'react'
import data from './db.json'
import '../Usercomponet/usercomponent.css'
const Userdetails = () => {
  return (
    <div>
        {
            data.map((item)=>{
               return <div className='UserCard'>
                <img src={item.avatar} className='avatar'/>
                <div><h1 className='name'>{item.first_name} {item.last_name}</h1>
                <p>{item.address}</p></div>
                <div><h1 className='name'>{item.karma} </h1>
                <p>karma</p></div>
                <div><h1 className='name'>{item.followers} </h1>
                <p>followers</p></div>
                <div><h1 className='name'>{item.posts} </h1>
                <p>posts</p></div>
                <button className='btn'>{item.is_following ? "follow":"unfollow"}</button>
                </div>
            })
        }
    
    </div>

  )
}

export default Userdetails
