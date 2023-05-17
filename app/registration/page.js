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
    <div className="flex items-center justify-center h-screen">
      <div className="w-full max-w-md bg-white px-10 py-8">
        <h2
          tabIndex={0}
          role="heading"
          aria-label="Registration"
          className="focus:outline-none text-2xl font-bold text-gray-800"
        >
          Register to manage your account
        </h2>
        <form onSubmit={handleSubmit} className="mt-8 flex flex-col">
          <div className="mb-4">
            <label className="text-xl text-gray-800">Email:</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              tabIndex={0}
              aria-label="Enter email"
              className="w-64 bg-gray-100 text-lg font-medium leading-none text-gray-800 py-2 px-4 border rounded border-gray-200 mt-1"
              required
            />
          </div>
          <div className="mb-4">
            <label className="text-xl text-gray-800">Password:</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              tabIndex={0}
              aria-label="Enter password"
              className="w-64 bg-gray-100 text-lg font-medium leading-none text-gray-800 py-2 px-4 border rounded border-gray-200 mt-1"
              required
            />
          </div>
          <button
            type="submit"
            className="w-1/2 bg-indigo-600 text-sm font-semibold text-white py-2 px-4 rounded-md shadow-sm hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-offset-2"
          >
            Register
          </button>
          {errorMessage && <p className="text-red-500 mt-2">{errorMessage}</p>}
        </form>
      </div>
    </div>
  );
};

export default RegistrationForm;
