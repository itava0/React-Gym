"use client";
import { useState } from 'react';

function Profile({setFirstName, setLastName, setBirthdate, setGender, setAddress, setPhoneNumber, setEmail}) {
  return (
    <div>
      <div className="w-full bg-white px-10">
        <h1
          tabIndex={0}
          role="heading"
          aria-label="profile information"
          className="focus:outline-none text-3xl font-bold text-gray-800"
        >
          Profile info
        </h1>
        <p
          role="contentinfo"
          className=" focus:outline-nonetext-sm font-light leading-tight text-gray-600 mt-4"
        >
          Fill in the form for profile. It will take a couple of minutes.
        </p>
        <div className="mt-8 md:flex items-center">
          <div className="flex flex-col">
            <label className="mb-3 text-lg leading-none text-gray-800">
              First Name
            </label>
            <input
              type="name"
              tabIndex={0}
              aria-label="Enter first name"
              className="w-64 bg-gray-100 text-md font-medium leading-none text-gray-800 p-3 border rounded border-gray-200 mb-3"
              onChange={(e) => setFirstName(e.target.value)}
            />
          </div>
          <div className="flex flex-col md:ml-12 md:mt-0 mt-8">
            <label className="mb-3 text-lg leading-none text-gray-800">
              Last Name
            </label>
            <input
              type="name"
              tabIndex={0}
              aria-label="Enter last name"
              className="w-64 mb-3 bg-gray-100 text-md font-medium leading-none text-gray-800 p-3 border rounded border-gray-200"
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>
        </div>
        <div className="mt-12 md:flex items-center">
          <div className="flex flex-col">
            <label className="mb-3 text-lg leading-none text-gray-800">
              Email Address
            </label>
            <input
              type="email"
              tabIndex={0}
              aria-label="Enter email Address"
              className="w-64 mb-3 bg-gray-100 text-md font-medium leading-none text-gray-800 p-3 border rounded border-gray-200"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="flex flex-col md:ml-12 md:mt-0 mt-8">
            <label className="mb-3 text-lg leading-none text-gray-800">
              Phone Number
            </label>
            <input
              type="number"
              tabIndex={0}
              aria-label="Enter phone number"
              className="w-64 mb-3 bg-gray-100 text-md font-medium leading-none text-gray-800 p-3 border rounded border-gray-200"
              onChange={(e) => setPhoneNumber(e.target.value)}
            />
          </div>
        </div>
        <div className="mt-12 md:flex items-center">
          <div className="flex flex-col">
            <label className="mb-3 text-lg leading-none text-gray-800">
              Home Address
            </label>
            <input
              type="text"
              tabIndex={0}
              aria-label="Enter Home Address"
              className="w-64 mb-3 bg-gray-100 text-md font-medium leading-none text-gray-800 p-3 border rounded border-gray-200"
              onChange={(e) => setAddress(e.target.value)}
            />
          </div>
          <div className="flex flex-col md:ml-12 md:mt-0 mt-8">
            <label className="mb-3 text-lg leading-none text-gray-800">
              City
            </label>
            <input
              type="text"
              tabIndex={0}
              aria-label="Enter City Address"
              className="w-64 mb-3 bg-gray-100 text-md font-medium leading-none text-gray-800 p-3 border rounded border-gray-200"
              onChange={(e) => setAddress(e.target.value)}
            />
          </div>
        </div>
        <div className="mt-12 md:flex items-center">
          <div className="flex flex-col">
            <label className="mb-3 text-lg leading-none text-gray-800">
              State
            </label>
            <input
              type="text"
              tabIndex={0}
              aria-label="Enter State Address"
              className="w-64 mb-3 bg-gray-100 text-md font-medium leading-none text-gray-800 p-3 border rounded border-gray-200"
              onChange={(e) => setAddress(e.target.value)}
            />
          </div>
          <div className="flex flex-col md:ml-12 md:mt-0 mt-8">
            <label className="mb-3 text-lg leading-none text-gray-800">
              Zip Code
            </label>
            <input
              type="number"
              tabIndex={0}
              aria-label="Enter Zip Code Address"
              className="w-64 mb-3 bg-gray-100 text-md font-medium leading-none text-gray-800 p-3 border rounded border-gray-200"
              onChange={(e) => setAddress(e.target.value)}
            />
          </div>
        </div>
        <div className="mt-12 md:flex items-center">
          <div className="flex flex-col">
            <label className="mb-3 text-lg leading-none text-gray-800">
              Date of birth
            </label>
            <input
              type
              tabIndex={0}
              aria-label="Enter date of birth"
              className="w-64 mb-3 bg-gray-100 text-md font-medium leading-none text-gray-800 p-3 border rounded border-gray-200"
              onChange={(e) => setBirthdate(e.target.value)}
            />
          </div>
          <div className="flex flex-col md:ml-12 md:mt-0 mt-8" onChange={(e) => setGender(e.target.value)}>
            <label className="mb-3 text-lg leading-none text-gray-800">
              Gender
            </label>
            <div className="flex items-center ml-6 mb-2">
              <div className="bg-white rounded-full w-4 h-4 flex flex-shrink-0 justify-center items-center relative">
                <input
                  defaultChecked
                  type="radio"
                  value="Male"
                  name="gender"
                  className="checkbox mb-3 appearance-none focus:outline-none border rounded-full border-gray-400 absolute cursor-pointer w-full h-full checked:border-none"
                />
                <div className="check-icon hidden border-4 border-indigo-700 rounded-full w-full h-full z-1" />
              </div>
              <p className="ml-2 text-sm leading-4 font-normal text-black">
                Male
              </p>
            </div>
            {/* Code block ends */}
            {/* Code block starts */}
            <div className="flex items-center ml-6 mb-3">
              <div className="bg-white dark:bg-gray-100 rounded-full w-4 h-4 flex flex-shrink-0 justify-center items-center relative">
                <input
                  type="radio"
                  value="Female"
                  name="gender"
                  className="checkbox  mb-3 appearance-none focus:outline-none border rounded-full border-gray-400 absolute cursor-pointer w-full h-full checked:border-none"
                />
                <div className="check-icon hidden border-4 border-indigo-700 rounded-full w-full h-full z-1" />
              </div>
              <p className="ml-2 text-sm leading-4 font-normal text-black">
                Female
              </p>
            </div>
            {/* Code block ends */}
            {/* Code block starts */}
            <div className="flex items-center ml-6 mb-3">
              <div className="bg-white dark:bg-gray-100 rounded-full w-4 h-4 flex flex-shrink-0 justify-center items-center relative">
                <input
                  type="radio"
                  value="Other"
                  name="gender"
                  className="checkbox  mb-3 appearance-none focus:outline-none border rounded-full border-gray-400 absolute cursor-pointer w-full h-full checked:border-none"
                />
                <div className="check-icon hidden border-4 border-indigo-700 rounded-full w-full h-full z-1" />
              </div>
              <p className="ml-2 text-sm leading-4 font-normal text-black">
                Other
              </p>
            </div>
          </div>
        </div>
        <div className="mt-12">
          <div className="py-4 flex items-center">
            <div className="bg-black dark:bg-gray-800 border rounded-sm border-gray-400 dark:border-gray-700 w-4 h-4 flex flex-shrink-0 justify-center items-center relative">
              <input
                type="checkbox"
                tabIndex={0}
                aria-label="I agree with the terms of service"
                defaultChecked
                className="checkbox opacity-0 absolute cursor-pointer w-full h-full"
              />
              <div className="check-icon hidden bg-blue-500 text-white rounded-sm">
                <svg
                  className="icon icon-tabler icon-tabler-check"
                  xmlns="http://www.w3.org/2000/svg"
                  width={16}
                  height={16}
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" />
                  <path d="M5 12l5 5l10 -10" />
                </svg>
              </div>
            </div>
            <p className="text-sm leading-none ml-2">
              I agree with the{' '}
              <span className="text-indigo-700">terms of service</span>
            </p>
          </div>
        </div>
      </div>
      <style
        dangerouslySetInnerHTML={{
          __html:
            '\n          .checkbox:checked + .check-icon {\n              display: flex;\n          }\n      ',
        }}
      />
    </div>
  );
}

export default Profile;
