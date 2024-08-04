import React, { useRef, useState } from 'react'
import { checkValidData } from '../Utils/validate'
import Header  from './Header';
import { auth } from '../Utils/firebase';
import {useDispatch} from 'react-redux'
import { addUser } from '../Redux/Slices/userSlice';

import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { BACKGROUND, LOGIN_IMG, USER_AVATAR } from '../Utils/constants';
const Login = () => {
  
    const [isSignInForm, setIsSignInForm] = useState(true);
    const [errorMessage, setErrorMessage] = useState(null);
    const dispatch = useDispatch();
  
    const name = useRef(null);
    const email = useRef(null);
    const password = useRef(null);
    const handleButtonClick = () => {
      const message = checkValidData(email.current.value, password.current.value);
      setErrorMessage(message);
      if (message) return;
      if (!isSignInForm) {
        // Sign Up Logic
        createUserWithEmailAndPassword(
          auth,
          email.current.value,
          password.current.value
        )
          .then((userCredential) => {
            const user = userCredential.user;
            updateProfile(user, {
              displayName: name.current.value,
              photoURL: USER_AVATAR,
            })
              .then(() => {
                
                const { uid, email, displayName, photoURL } = auth.currentUser;
                dispatch(
                  addUser({
                    uid: uid,
                    email: email,
                    displayName: displayName,
                    photoURL: photoURL,
                  })
                );
              })
              .catch((error) => {
                setErrorMessage(error.message);
              });
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            setErrorMessage(errorCode + "-" + errorMessage);
          });
      } else {
        // Sign In Logic
        signInWithEmailAndPassword(
          auth,
          email.current.value,
          password.current.value
        )
          .then((userCredential) => {
            // Signed in
            const user = userCredential.user;
      
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            setErrorMessage(errorCode + "-" + errorMessage);
          });
      }
    };
    const toggleSignInForm = () => {
      setIsSignInForm(!isSignInForm);
    };
    return (
      <div>
        <Header />
        
        <div className='flex'>
          <div className='w-[100vw] md:w-1/2 bg-cover bg-no-repeat p-14 md:p-32 bg-[url("https://pbs.twimg.com/media/GUHia6vWAAENbmL?format=jpg&name=large")]'>
              <form
              onSubmit={(e) => e.preventDefault()}
              className="mt-20 md:mt-10 "
            >
              <h1 className="font-bold text-white text-4xl py-4">
                {isSignInForm ? "Sign In" : "Sign Up"}
              </h1>
              <p className='font-medium text-white text-3xl py-2'>{isSignInForm?"Welcome Back!":"Welcome to TrailBlaze!"}</p>
              {!isSignInForm && (
                <input
                  ref={name}
                  type="text"
                  placeholder="Full Name"
                  className="p-3 my-4 w-full bg-gray-700 text-white rounded-lg"
                />
              )}
              <input
                ref={email}
                type="text"
                placeholder="Email Address"
                className="p-3 my-4 w-full bg-gray-700 text-white rounded-lg"
              />
              <input
                ref={password}
                type="password"
                placeholder="Password"
                className="p-3 my-4 w-full bg-gray-700 text-white rounded-lg"
              />
              <p className="text-[#ff6d6d] font-bold text-lg py-2">{errorMessage}</p>
              <button
                className="p-4 my-6 bg-[#9b69ff] w-full rounded-lg text-white font-bold"
                onClick={handleButtonClick}
              >
                {isSignInForm ? "Sign In" : "Sign Up"}
              </button>
              <p className="py-4 cursor-pointer text-white" onClick={toggleSignInForm}>
                {isSignInForm
                  ? "New to TrailBlaze? Sign Up Now"
                  : "Already registered? Sign In Now."}
              </p>
              </form>
          </div>
          <div className='hidden md:w-1/2 md:block z-[60]'>
            <img className='h-[100vh] w-[100vw] md:h-auto lg:h-auto '
            src={LOGIN_IMG} alt="LOGIN_IMG"></img>
          </div>

        </div>
        
      </div>
    );
  };

  export default Login;