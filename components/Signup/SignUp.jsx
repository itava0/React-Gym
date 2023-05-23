'use client';
import React, { useState } from 'react';

const SignUp= () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('/auth/register', {
        Method: 'POST',
        Headers: {
          Accept: 'application.json',
          'Content-Type': 'application/json',
        },
        Body: { email, password },
        Cache: 'default',
      });
      console.log(response.data); // Registration successful
      // Reset form fields
      setEmail('');
      setPassword('');
      setErrorMessage('');
    } catch (error) {
      console.error('Registration error:', error);
      setErrorMessage('Registration failed. Please try again.');
    }
  };

  return (
    <div className="h-screen flex md:flex-col justify-center bg-stone-50 w-full py-16 px-4">
    <div className="flex items-center justify-center">
      <div className="bg-white drop-shadow-lg rounded lg:w-1/3  md:w-1/2 w-full p-10 mt-16">
        <p
          tabIndex={0}
          role="heading"
          aria-level="1"
          aria-label="Register to Manage your account"
          className="text-3xl font-extrabold leading-6 text-gray-800"
        >
          Register to Manage your account
        </p>
        <form onSubmit={handleSubmit} className='mt-6'>
          <div>
            <lable className="text-md font-medium leading-none text-gray-800">
              Email
            </lable>
            <input
              aria-label="enter email adress"
              role="input"
              type="email"
              autoComplete="username"
              onChange={(e) => setEmail(e.target.value)}
              required
              className="bg-gray-200 border rounded focus:outline-none text-md font-medium leading-none text-gray-800 py-3 w-full pl-3 mt-2"
            />
          </div>
          <div className="mt-6  w-full">
            <lable className="text-md font-medium leading-none text-gray-800">
              Password
            </lable>
            <div className="flex items-center justify-center">
              <input
                aria-label="enter Password"
                role="input"
                type="password"
                autoComplete="current-password"
                onChange={(e) => setPassword(e.target.value)}
                required
                className="bg-gray-200 border rounded focus:outline-none text-md font-medium leading-none text-gray-800 py-3 w-full pl-3 mt-2"
              />
            </div>
          </div>
          <div className="mt-8 flex justify-center">
            <button
              role="button"
              aria-label="Sign in"
              className="focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 text-md font-semibold leading-none text-white focus:outline-none bg-indigo-700 border rounded hover:bg-indigo-600 py-4 w-full"
            >
              Register
            </button>
            {errorMessage && <p className="text-red-500 mt-2">{errorMessage}</p>}
          </div>
        </form>
      </div>
    </div>
  </div>
  );
};

export default SignUp;