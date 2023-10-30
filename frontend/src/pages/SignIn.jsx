import {Link,useNavigate} from 'react-router-dom';
import './SignUp.css';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { signInStart,signInSuceess,signInFailure } from '../redux/user/userSlice.js';
export const SignIn = () => {
  
  const [formdData, setFormData] = useState({});
  const {loading,error} = useSelector((state) => state.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handelChange = (e) => {
    setFormData({
      ...formdData,
      [e.target.id]: e.target.value
    });
  };
  
    
    
  
  const handelSubmit = async(e) => {
    e.preventDefault();
    try {
      dispatch(signInStart());
      const res = await fetch('/api/auth/signin',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formdData)
      }
    );
    const data = await res.json();
    if(data.success===false){
      dispatch(signInFailure(data.message));
      
      return;
    }
    dispatch(signInSuceess(data));
    navigate('/');
      
    } catch (error) {
      dispatch(signInFailure(error.message));
      // setError(error.message);
    }
    
  }
  return (
    <div className='p-3 max-w-lg mx-auto'>
      <h1 className='text-3xl text-center font-semibold my-7' >Sign In </h1>
      <form onSubmit={handelSubmit} className='flex flex-col gap-4'>
        {/* <input type="text" placeholder='username' className='border p-3 rounded-lg'id='userName' onChange={handelChange} /> */}
        <input type="email" placeholder='email' className='border p-3 rounded-lg'id='email'  onChange={handelChange}/>
        <input type="password" placeholder='password' className='border p-3 rounded-lg'id='password' onChange={handelChange} />
      
      <button disabled = {loading} className='glow-on-hover bg-slate-700 text-white p-3 rounded-lg uppercase hover:opacity-95 disabled:opacity-80'>{loading ? 'loading...': 'Sign In'}</button>
      </form>
      <div className='flex gap-2 mt-5'>
        <p className='text-center'>Do not have an account? </p>
      <Link to={'/sign-up'}><span className='text-blue-700'>Sign Up</span> </Link>
      </div>
      {error && <p className='text-red-500 text-center mt-5'>{`Invalid email or password: ${error}`}</p>}
   </div>
    
  )
};
