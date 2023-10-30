import {Link,useNavigate} from 'react-router-dom';
import './SignUp.css';
import { useState } from 'react';
import OAuth from '../components/OAuth';

export const SignUp = () => {
  
  const [formdData, setFormData] = useState({});
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const handelChange = (e) => {
    setFormData({
      ...formdData,
      [e.target.id]: e.target.value
    });
  };
  
    
    
  
  const handelSubmit = async(e) => {
    e.preventDefault();
    try {
      setLoading(true);
    const res = await fetch('/api/auth/signup',
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
      setLoading(false);
      setError(data.message);
      
      return;
    }
    setLoading(false);
    console.log(data);
    console.log("form submitted");
    setError(null);
    navigate('/sign-in');
      
    } catch (error) {
      setLoading(false);
      setError(error.message); 
    }
    
  }
  return (
    <div className='p-3 max-w-lg mx-auto'>
      <h1 className='text-3xl text-center font-semibold my-7' >Sign up </h1>
      <form onSubmit={handelSubmit} className='flex flex-col gap-4'>
        <input type="text" placeholder='username' className='border p-3 rounded-lg'id='userName' onChange={handelChange} />
        <input type="email" placeholder='email' className='border p-3 rounded-lg'id='email'  onChange={handelChange}/>
        <input type="password" placeholder='password' className='border p-3 rounded-lg'id='password' onChange={handelChange} />
      
      <button disabled = {loading} className='glow-on-hover bg-slate-700 text-white p-3 rounded-lg uppercase hover:opacity-95 disabled:opacity-80'>{loading ? 'loading...': 'Sign up'}</button>
      <OAuth />
      </form>
      <div className='flex gap-2 mt-5'>
        <p className='text-center'>Already have an account? </p>
      <Link to={'/sign-in'}><span className='text-blue-700'>Sign in</span> </Link>
      </div>
      {error && <p className='text-red-500 text-center mt-5'>{error}</p>}
    </div>
  )
};
