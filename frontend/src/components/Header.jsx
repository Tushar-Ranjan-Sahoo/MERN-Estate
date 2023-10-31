import React from 'react';
import { Link } from 'react-router-dom';
import { FaSearch } from 'react-icons/fa';
import { useSelector } from 'react-redux';

export const Header = () => {
  const {currentUser} = useSelector(state => state.user);
    
  return (
    <header className='bg-gradient-to-r from-slate-700 to-slate-900 shadow-md'>
      <div className='flex justify-between items-center max-w-6xl mx-auto p-3'>
        <Link to='/'>
        <h1 className='font-bold text-sm sm:text-xl flex flex-wrap'>
            <span className='font-sans text-2xl sm:text-3xl bg-gradient-to-r from-slate-200 to-slate-400 text-transparent bg-clip-text overflow-hidden'>
              Urban
            </span>
            <span className='font-sans text-2xl sm:text-3xl bg-gradient-to-r from-slate-500 to-blue-600 text-transparent bg-clip-text overflow-hidden'>
              Nest
            </span>
          </h1>
        </Link>
        <form className='bg-slate-300 p-3 rounded-2xl flex items-center'>
          <input
            type='text'
            placeholder='Search...'
            className='bg-transparent focus:outline-none w-24 sm:w-64'
          />
          <button>
            <FaSearch className='text-slate-600' />
          </button>
        </form>
        <ul className='flex gap-4'>
          <Link to='/'>
            <li className='hidden sm:inline text-gray-200 hover:text-blue-500 hover:underline transition duration-300'>
              Home
            </li>
          </Link>
          <Link to='/about'>
            <li className='hidden sm:inline text-gray-200 hover:text-blue-500 hover:underline transition duration-300'>
              About
            </li>
          </Link>
          <Link to='/profile'>
            <li className='hidden sm:inline  text-gray-200 hover:text-blue-500 hover:underline transition duration-300'>
              Profile
            </li>
          </Link>
          <Link to='/sign-in'>
            {currentUser ? (
              <img src={currentUser.avatar} alt='avatar' className='rounded-full h-7 w-7 object-cover' />
            ):<li className='text-sm sm:text-base  text-gray-200  hover:text-blue-500 hover:underline transition duration-300'>
            Sign in
          </li>}
            
          </Link>
        </ul>
      </div>
    </header>
  );
};
