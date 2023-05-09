'use client';
import { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';

const Cart = () => {
  const [name, setName] = useState('');
  const [birthdate, setBirthdate] = useState('');
  const [gender, setGender] = useState('');
  const [address, setAddress] = useState('');
  const [homeNumber, setHomeNumber] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can add code to submit the form data to your server or database
    console.log({
      name,
      birthdate,
      gender,
      address,
      homeNumber,
      phoneNumber,
      email,
    });
  };

  const searchParams = useSearchParams();

  const priceId = searchParams.get('id');
  useEffect(() => {
    // Check to see if this is a redirect back from Checkout
    const query = new URLSearchParams(window.location.search);
    if (query.get('success')) {
      console.log('Order placed! You will receive an email confirmation.');
    }

    if (query.get('canceled')) {
      console.log(
        'Order canceled -- continue to shop around and checkout when you’re ready.'
      );
    }
  }, []);

  return (
    <div className="flex flex-wrap justify-center">
      <div className="w-full md:w-3/4 p-4">
        <h1 className="text-3xl font-bold mb-4">Create Profile</h1>
        <form
          //https://react-gym.azurewebsites.net/create-checkout-session
          action="http://localhost:8000/create-checkout-session"
          method="POST"
          className="p-8"
        >
          <div className="mb-4">
            <label className="block font-bold mb-3">Name:</label>
            <input
              type="text"
              onChange={(e) => setName(e.target.value)}
              className="w-full mt-3 border-gray-300 rounded-md shadow-sm"
            />
          </div>
          <div className="mb-4">
            <label className="block font-bold mb-2">Birthdate:</label>
            <input
              type="date"
              onChange={(e) => setBirthdate(e.target.value)}
              className="w-full mt-2 border-gray-300 rounded-md shadow-sm"
            />
          </div>
          <div className="mb-4">
            <label className="block font-bold mb-2">Gender:</label>
            <input
              type="text"
              onChange={(e) => setGender(e.target.value)}
              className="w-full mt-2 border-gray-300 rounded-md shadow-sm"
            />
          </div>
          <div className="mb-4">
            <label className="block font-bold mb-2">Address:</label>
            <input
              type="text"
              onChange={(e) => setAddress(e.target.value)}
              className="w-full mt-2 border-gray-300 rounded-md shadow-sm"
            />
          </div>
          <div className="mb-4">
            <label className="block font-bold mb-2">Home Number:</label>
            <input
              type="tel"
              onChange={(e) => setHomeNumber(e.target.value)}
              className="w-full mt-2 border-gray-300 rounded-md shadow-sm"
            />
          </div>
          <div className="mb-4">
            <label className="block font-bold mb-2">Phone Number:</label>
            <input
              type="tel"
              onChange={(e) => setPhoneNumber(e.target.value)}
              className="w-full mt-2 border-gray-300 rounded-md shadow-sm"
            />
          </div>
          <div className="mb-4">
            <label className="block font-bold mb-2">Email Address:</label>
            <input
              type="email"
              onChange={(e) => setEmail(e.target.value)}
              className="w-full mt-2 border-gray-300 rounded-md shadow-sm"
            />
          </div>
        </form>
      </div>
      <div className=" w-full md:w-1/4 p-8">
        <h1 className="text-3xl font-bold mb-4">Summary</h1>
        <div className="mb-4">
          <p className="font-bold mb-2 text-xl">Gym:</p>
          <p className='text-lg'>University Place</p>
        </div>
        <div className="mb-4">
          <p className="font-bold mb-2 text-xl">Primary Member:</p>
          <p className='text-lg'>John Doe</p>
        </div>
        <div className="mb-4">
          <p className="font-bold mb-2 text-xl">Enrollment Fee:</p>
          <p className='text-lg'>$10.00</p>
        </div>
        <div className="mb-4">
          <p className="font-bold mb-2 text-xl">Pro-rated:</p>
          <p className='text-lg'>$7.92</p>
        </div>
        <div className="mb-4">
          <p className="font-bold mb-2 text-xl">Taxes:</p>
          <p className='text-lg'>$0.00</p>
        </div>
        <div className="mb-4">
          <p className="font-bold mb-2 text-xl">Annual Fee:</p>
          <p className='text-lg'>$49.00</p>
        </div>
        <div>
          <p className="mb-2 text-xl">
            Annual fee will be billed on June 20th. Taxes may apply.
          </p>
          <p className="font-bold mb-2 text-xl">Effective Date:</p>
          <p className='text-lg'>8 May 2023</p>
        </div>
      </div>
      <button
        type="submit"
        className="mt-10 block w-1/4 rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
      >
        Checkout
      </button>
    </div>
  );
};

export default Cart;
