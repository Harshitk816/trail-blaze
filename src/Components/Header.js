import React from 'react'
import { signOut } from "firebase/auth";
import { auth } from '../Utils/firebase';
import {useNavigate}   from 'react-router-dom';
import {useSelector, useDispatch} from 'react-redux';
import { useEffect } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { addUser,removeUser } from '../Redux/Slices/userSlice';
import { LOGO, SUPPORTED_LANGUAGES } from '../Utils/constants';
import { toggleGptSearchView } from '../Redux/Slices/gptSlice';
import { changeLanguage } from '../Redux/Slices/configSlice';

const Header = () => {
  const Navigate = useNavigate();
  const user = useSelector(store=>store.user);
  const gptSearch = useSelector(store=>store.gpt.showGptSearch);
  const dispatch = useDispatch();
  const handleGptSearchClick=()=>{
    //toggle my gpt search
    dispatch(toggleGptSearchView());
  }

  const handleLangChange=(e)=>{
    dispatch(changeLanguage(e.target.value));
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        Navigate('/browse');
      } else {
        dispatch(removeUser());
        Navigate('/');
      }
    });

    return () => unsubscribe();
  }, [Navigate, dispatch]);
  
  const handleSignOut=()=>{
    signOut(auth).then(() => {
      
    } ).catch((error) => {
      Navigate("/error");
    });
  }
  return (
    <header
      className={`z-50 rounded-2xl border border-white/15 bg-black/55 shadow-2xl backdrop-blur-md ${
        user ? 'fixed left-4 right-4 top-4 md:left-6 md:right-6' : 'absolute left-4 right-4 top-4 md:left-6 md:right-6'
      }`}
    >
      <div className='mx-auto flex max-w-7xl flex-col gap-4 px-4 py-3 md:flex-row md:items-center md:justify-between md:px-6'>
        <img
          className='mx-auto h-12 w-auto md:mx-0 md:h-14'
          src={LOGO}
          alt='logo'
        />

        {user && (
          <div className='flex flex-col items-center gap-3 sm:flex-row sm:flex-wrap sm:justify-end'>
            {gptSearch && (
              <select
                onChange={handleLangChange}
                className='w-44 rounded-lg border border-white/20 bg-black/40 px-3 py-2 text-sm font-medium text-white outline-none transition hover:border-white/35 focus:border-[#9b69ff]'
              >
                {SUPPORTED_LANGUAGES.map((lang) => (
                  <option key={lang.identifier} value={lang.identifier}>
                    {lang.name}
                  </option>
                ))}
              </select>
            )}

            <button
              onClick={handleGptSearchClick}
              className='rounded-lg bg-[#9b69ff] px-4 py-2 text-sm font-semibold text-white transition hover:bg-[#9b69ff]'
            >
              {!gptSearch ? 'Search' : 'Home'}
            </button>

            <div className='flex items-center gap-3 rounded-xl border border-white/15 bg-white/10 px-3 py-2'>
              <img
                alt='usericon'
                className='h-9 w-9 rounded-full border border-white/20 object-cover md:h-10 md:w-10'
                src={user?.photoURL}
              />
              <div className='flex flex-col leading-tight'>
                <span className='max-w-40 truncate text-xs font-medium text-gray-200'>
                  {user?.displayName || 'Profile'}
                </span>
                <button
                  onClick={handleSignOut}
                  className='text-left text-xs font-semibold text-[#9b69ff] transition hover:text-[#bea2f5]'
                >
                  Sign Out
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
    
  )
}

export default Header