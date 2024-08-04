import React from 'react'
import { signOut } from "firebase/auth";
import { auth } from '../Utils/firebase';
import {useNavigate}   from 'react-router-dom';
import {useSelector, useDispatch} from 'react-redux';
import { useEffect } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { addUser,removeUser } from '../Redux/Slices/userSlice';
import { LOGO, SUPPORTED_LANGUAGES, USER_AVATAR } from '../Utils/constants';
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
  useEffect(()=>{
    const unsubscribe = onAuthStateChanged(auth, (user) => {//if the user signed in then add user and navigate to browse(callback function)
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const {uid, email, displayName ,photoURL} = user;
        dispatch(addUser({uid:uid, email:email, displayName: displayName, photoURL:photoURL}));
        Navigate('/browse')
        
      } else { 
        // User is signed out then remove user and log out
        dispatch(removeUser());
        Navigate("/")
        // ...
      }

      return ()=> unsubscribe(); //when component unmounts, we will also unsubscibe  the listener onAuthStateChange

    });
  },[]);
  
  const handleSignOut=()=>{
    signOut(auth).then(() => {
      
    } ).catch((error) => {
      Navigate("/error");
    });
  }
  return (
    <div className={`z-50  bg-gray-400 bg-opacity-30 backdrop-blur shadow-md ${user?'w-[95vw] fixed':'w-[90vw] absolute md:w-[46vw] '} m-5  rounded-xl`}>
      <div className=' px-8 py-2 w-screen flex flex-col md:flex-row lg:flex-row justify-between'>
        <img className=' w-44 h-14 m-3 mx-auto md:mx-0 lg:mx-0 '
         src={LOGO}
          alt='logo'>
        </img>
        {user && (<div className='flex justify-between me-12'>
          {gptSearch && (<div><select onChange={handleLangChange} className=''>
            {SUPPORTED_LANGUAGES.map(
              lang => <option  key={lang.identifier}
                              value = {lang.identifier}>
                                {lang.name}
                      </option>
              )
            }
          </select></div>)}
          <div><button onClick={handleGptSearchClick} className=''>{!gptSearch? "Search": "Home"}</button></div>
          <div className='flex flex-col items-center '>
            <img alt='usericon' className='w-8 h-8  md:w-10 lg:w-10 md:h-10 lg:h-10 ' src={user?.photoURL}></img>
            <button onClick={handleSignOut} className='font-semibold md:font-bold lg:font-bold text-sm text-white'>Sign Out</button>
          </div>
          
        </div>)}
        
    </div>

    </div>
    
  )
}

export default Header