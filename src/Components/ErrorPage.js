import React from 'react';
import { useNavigate } from 'react-router-dom';

const ErrorPage = () => {
  const navigate = useNavigate();

  return (
    <div className='flex min-h-screen flex-col items-center justify-center bg-black px-4 text-center text-white'>
      <h1 className='text-4xl font-bold md:text-6xl'>Page not found</h1>
      <p className='mt-4 max-w-md text-lg text-gray-300'>The destination you tried to open is not available.</p>
      <button
        className='mt-8 rounded-md bg-red-700 px-6 py-3 font-semibold text-white hover:bg-red-600'
        onClick={() => navigate('/browse')}
      >
        Go to Browse
      </button>
    </div>
  );
};

export default ErrorPage;
