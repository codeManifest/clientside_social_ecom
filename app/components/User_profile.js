import React from 'react'
import { FaUserAlt } from "react-icons/fa";


function User_profile({profile = 'Login'}) {
  return (
    <div className='text-xl flex gap-3 items-center ' >
      <FaUserAlt size={20} /> {profile}
    </div>
  )
}

export default User_profile