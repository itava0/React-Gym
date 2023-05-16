'use client';
import React, { useState } from 'react';

const RegistrationForm = () => {
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
    <div className="w-full bg-white px-10 mt-[200px]">
      <h2
        tabIndex={0}
        role="heading"
        aria-label="Registration"
        className="focus:outline-none text-3xl font-bold text-gray-800"
      >
        Registration
      </h2>
      <form
        onSubmit={handleSubmit}
        className="mt-8 flex items-center flex-wrap"
      >
        <div className="flex">
          <label className="mb-3 text-lg leading-none text-gray-800">
            Email:
          </label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            tabIndex={0}
            aria-label="Enter email"
            className="w-64 bg-gray-100 text-md font-medium leading-none text-gray-800 p-3 border rounded border-gray-200 mb-3"
            required
          />
        </div>
        <div className="flex">
          <label className="mb-3 text-lg leading-none text-gray-800">
            Password:
          </label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            tabIndex={0}
            aria-label="Enter password"
            className="w-64 bg-gray-100 text-md font-medium leading-none text-gray-800 p-3 border rounded border-gray-200 mb-3"
            required
          />
        </div>
        <div>
          <button
            type="submit"
            className="mt-10 block w-1/4 rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Register
          </button>
        </div>
        {errorMessage && <p>{errorMessage}</p>}
      </form>
    </div>
  );
};

export default RegistrationForm;
