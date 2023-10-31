import React from 'react'
import { useSelector } from 'react-redux'

export const Profile = () => {
  const {currentUser} = useSelector(state => state.user);
  
  return (
    <div className='p-3 max-w-lg mx-auto'>
      <h1 className='text-3xl font-semibold  text-center my-7'>Profile</h1>
    <form className=' flex flex-col gap-4'>
      <img src={currentUser.rest.avatar} alt="profile" className='rounded-full h-24 w-24 object-cover cursor-pointer self-center mt-2'/>
      <input type="text" placeholder='username' className='border p-3 rounded-lg'id='userName'  />
        <input type="email" placeholder='email' className='border p-3 rounded-lg'id='email'  />
        <input type="password" placeholder='password' className='border p-3 rounded-lg'id='password'  />
        <button type='submit' className='bg-slate-700 text-white p-3 rounded-lg uppercase hover:opacity-95'>Update Profile</button>

    </form>
    <div className=" flex justify-between mt-5">
      <span className='text-red-600 cursor-pointer'> Delete Account </span>
      <span className='text-green-600 cursor-pointer'> Sign Out  </span>
    </div>
    </div>
  )
}
